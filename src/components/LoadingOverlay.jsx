// LoadingOverlay.js
import React from "react";
import { Dialog, Typography } from "@mui/material";

const LoadingOverlay = ({ open, message }) => {
  return (
    <Dialog
      open={open}
      sx={{ zIndex: 1600 }}
      PaperProps={{
        sx: {
          backgroundColor: "black",
          boxShadow: "none",
        },
      }}
      BackdropProps={{ sx: { backgroundColor: "rgba(0,0,0,0.7)" } }}
    >

      <div className="flex flex-col items-center justify-center p-10">
        <Typography
          variant="h6"
          sx={{ fontSize: "1rem", color: "white", mb: 4, fontWeight: "bold", textShadow: "0px 0px 6px rgba(0,0,0,0.6)" }}
        >
          {message}
        </Typography>

        <div className="logo-container flex items-center justify-center">
          <div className="semi-circle-white"></div>
          <div className="letter-p text-white">P</div>
        </div>
      </div>
    </Dialog>
  );
};

export default LoadingOverlay;
