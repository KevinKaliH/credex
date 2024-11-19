import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./routes/router";
import { createTheme, ThemeProvider } from "@mui/material";
import LoadingSpinner from "./shared/components/LoadingSpinner";

const theme = createTheme({
  palette: {
    primary: {
      main: "#0033a0",
      light: "#3366cc",
      dark: "#00227b",
      contrastText: "#ffffff",
    },
    success: {
      main: "#81d320",
      light: "#a6e24f",
      dark: "#4c9f1a",
      contrastText: "#ffffff",
    },
  },
  typography: {
    fontSize: 14,
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
      <LoadingSpinner />
    </ThemeProvider>
  );
}

export default App;
