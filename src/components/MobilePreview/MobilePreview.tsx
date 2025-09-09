import {
  Box,
  useTheme,
  Dialog,
  useMediaQuery,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

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
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Dialog
      open={open}
      onClose={onClose}
      className="mobile-preview-modal"
      fullScreen={isMobile}
      maxWidth={isMobile ? false : "xs"}
      fullWidth
      PaperProps={{
        sx: isMobile
          ? {
              width: "100%",
              height: "100%",
              borderRadius: 0,
              backgroundColor: "#000",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              position: "relative",
            }
          : {
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
          maxWidth: isMobile ? "100%" : 375,
          height: "100%",
          borderRadius: isMobile ? 0 : 4,
          border: isMobile ? "none" : `2px solid ${theme.palette.primary.main}`,
          position: "relative",
          overflow: "hidden",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          boxSizing: "border-box",
          backgroundColor: "transparent",
        }}
      >
        {isMobile && (
          <IconButton
            onClick={onClose}
            sx={{
              position: "absolute",
              top: 16,
              right: 16,
              color: theme.palette.primary.contrastText,
              backgroundColor: `${theme.palette.primary.main}99`,
              "&:hover": {
                backgroundColor: theme.palette.primary.main,
              },
              zIndex: 20,
            }}
            aria-label="Close preview"
          >
            <CloseIcon />
          </IconButton>
        )}
        <Box
          sx={{
            width: "100%",
            height: "100%",
            borderRadius: isMobile ? 0 : 2,
            border: isMobile ? "none" : "16px solid #000",
            boxSizing: "border-box",
            overflow: "hidden",
            position: "relative",
          }}
        >
          {!isMobile && (
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
          )}

          <iframe
            src={src}
            width="100%"
            height="100%"
            style={{
              border: "none",
              display: "block",
              borderRadius: isMobile ? "0px" : "4px",
              backgroundColor: "#fff",
            }}
            title="Mobile Preview"
          />
        </Box>
      </Box>
    </Dialog>
  );
}
