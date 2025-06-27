import React, { useState } from "react";
import { Dialog, DialogTitle, DialogContent, TextField, Button, DialogActions, IconButton, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";


const ContactForm = ({ open, onClose }) => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState("Sending message...");

  const validate = () => {
    let tempErrors = {};
    if (!formData.name) tempErrors.name = "Name is required";
    if (!formData.email) tempErrors.email = "Email is required";
    if (!formData.message) tempErrors.message = "Message is required";
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = async () => {
    if (validate()) {
      document.activeElement?.blur();
    setTimeout(() => {
      setLoading(true);
      setStatusMessage("Sending message...");
    }, 10);

      try {
        const response = await fetch("http://localhost:8000/api/contact/submit/", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          setStatusMessage("Message has been sent! Thank you!");
          setFormData({ name: "", email: "", message: "" });

          setTimeout(() => {
            setLoading(false);
            onClose();
          }, 2000);
        } else {
          const data = await response.json();
          setErrors(data);
          setLoading(false);
        }
      } catch (error) {
        alert("Failed to send message. Please try again later.");
        setLoading(false);
      }
    }
  };

  return (
    <>
      <Dialog open={open} onClose={onClose} sx={{ zIndex: 1500 }}>
        {loading ? (
          <DialogContent
            sx={{
              backgroundColor: "black",
              py: 10,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography
              variant="h6"
              sx={{
                fontSize: "1rem",
                color: "white",
                mb: 4,
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              {statusMessage}
            </Typography>

            {/* Logo Centered */}
            <div className="logo-container flex items-center justify-center">
              <div className="semi-circle-white"></div>
              <div className="letter-p text-white">P</div>
            </div>
          </DialogContent>
        ) : (
          <>
            <DialogTitle sx={{ textAlign: "center", fontSize: "24px", fontWeight: "bold" }}>
              Contact Me
              <IconButton
                aria-label="close"
                onClick={onClose}
                sx={{ position: "absolute", right: 8, top: 8 }}
              >
                <CloseIcon />
              </IconButton>
            </DialogTitle>

            <Typography
              sx={{
                px: 3,
                pb: 2,
                textAlign: "center",
                fontSize: "16px",
                fontWeight: "500",
                color: "gray",
              }}
            >
              Feel free to reach out for any inquiries, collaborations, or opportunities.
            </Typography>

            <DialogContent dividers>
              <TextField
                label="Name"
                fullWidth
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                error={!!errors.name}
                helperText={errors.name}
              />

              <TextField
                label="Email"
                type="email"
                fullWidth
                sx={{ mt: 2 }}
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                error={!!errors.email}
                helperText={errors.email}
              />

              <TextField
                label="Message"
                multiline
                rows={4}
                fullWidth
                sx={{ mt: 2 }}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                error={!!errors.message}
                helperText={errors.message}
              />
            </DialogContent>

            <DialogActions>
              <Button onClick={onClose} color="error">
                Cancel
              </Button>
              <Button onClick={handleSubmit} color="primary" variant="contained custom-button">
                Submit
              </Button>
            </DialogActions>
          </>
        )}
      </Dialog>

    </>
  );
};

export default ContactForm;