import { Box, useTheme, Dialog } from "@mui/material";

interface MobilePreviewProps {
  src: string;
  open: boolean;
  onClose: () => void;
}

export default function MobilePreview({
  src,
  open,
  onClose,
}: MobilePreviewProps) {
  const theme = useTheme();

  return (
    <Dialog
      open={open}
      onClose={onClose}
      className="mobile-preview-modal"
      maxWidth="xs"
      fullWidth
      PaperProps={{
        sx: {
          width: 400,
          height: 820,
          borderRadius: 3,
          overflow: "hidden",
          backgroundColor: "transparent",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        },
      }}
    >
      <Box
        sx={{
          width: "100%",
          maxWidth: 375,
          height: "100%",
          borderRadius: 4,
          border: `2px solid ${theme.palette.primary.main}`,
          position: "relative",
          overflow: "hidden",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          boxSizing: "border-box",
          backgroundColor: "transparent",
        }}
      >
        <Box
          sx={{
            width: "100%",
            height: "100%",
            borderRadius: 2,
            border: "16px solid #000",
            boxSizing: "border-box",
            overflow: "hidden",
            position: "relative",
          }}
        >
          <Box
            sx={{
              width: 60,
              height: 6,
              backgroundColor: "#000",
              borderRadius: 3,
              position: "absolute",
              top: 23,
              left: "50%",
              transform: "translateX(-50%)",
              zIndex: 10,
            }}
          />

          <iframe
            src={src}
            width="100%"
            height="100%"
            style={{
              border: "none",
              display: "block",
              borderRadius: "4px",
              backgroundColor: "#fff",
            }}
            title="Mobile Preview"
          />
        </Box>
      </Box>
    </Dialog>
  );
}
