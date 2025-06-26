import React, { useState } from "react";
import { Dialog, DialogTitle, DialogContent, TextField, Button, DialogActions, IconButton, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const ContactForm = ({ open, onClose }) => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});

  // Validation function
  const validate = () => {
    let tempErrors = {};
    if (!formData.name) tempErrors.name = "Name is required";
    if (!formData.email) tempErrors.email = "Email is required";
    if (!formData.message) tempErrors.message = "Message is required";
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validate()) {
      alert("Form submitted successfully!");
    }
  };

  return (
    <Dialog open={open} onClose={onClose} sx={{ zIndex: 1500 }}>
      <DialogTitle sx={{ textAlign: "center", fontSize: "24px", fontWeight: "bold" }}>
        Contact Me
        <IconButton aria-label="close" onClick={onClose} sx={{ position: "absolute", right: 8, top: 8 }}>
          <CloseIcon />
        </IconButton>
      </DialogTitle>

      {/* Intro Message */}
      <Typography sx={{ px: 3, pb: 2, textAlign: "center", fontSize: "16px", fontWeight: "500", color: "gray" }}>
        Feel free to reach out for any inquiries, collaborations, or opportunities.
        <br />
        I am open to discussing how my skills and experience can contribute to your projects.
      </Typography>

      <DialogContent dividers>
        {/* Name Field - Full Width */}
        <TextField
          label="Name"
          fullWidth
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          error={!!errors.name}
          helperText={errors.name}
        />

        {/* Email Field - Full Width */}
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

        {/* Message Field - Full Width */}
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
    </Dialog>
  );
};

export default ContactForm;