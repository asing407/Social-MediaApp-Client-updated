import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import Form from "./Form";

const LoginPage = () => {
  const theme = useTheme();
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");
  return (
    <Box>
      <Box
        width="100%"
        backgroundColor={theme.palette.background.alt}
        p="1rem 6%"
        textAlign="center"
      >
        <Typography fontWeight="bold" fontSize="32px" color="#AB436B">
          Scrapbook
        </Typography>
      </Box>

      <Box
        width={isNonMobileScreens ? "50%" : "93%"}
        p="2rem"
        m="2rem auto"
        borderRadius="1.5rem"
        backgroundColor={theme.palette.background.alt}
      >
        <Typography
          fontWeight="Bold"
          variant="h5"
          color="#A12354"
          fontFamily="Georgia"
          sx={{ mb: "1.5rem" }}
        >
          Welcome to Scrapbook, Where Memories Come to Life, One Snapshot at a Time!
        </Typography>
        <Form />
      </Box>
    </Box>
  );
};

export default LoginPage;
