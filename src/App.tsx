import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { RouterProvider } from "react-router-dom";
import router from "./routes/router";
import { createTheme, ThemeProvider } from "@mui/material";
import LoadingSpinner from "./shared/components/LoadingSpinner";

const theme = createTheme({
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
