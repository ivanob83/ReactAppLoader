import AppLoader from "./components/AppLoader/AppLoader";
import "./App.css";
import logo from "@/assets/logo.svg";
import { Container, Box, CssBaseline } from "@mui/material";
const App = () => {
    return (
        <AppLoader logo={logo}>
            <CssBaseline />
            <Container
                sx={{
                    maxWidth: "90%",
                }}
            >
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        height: "100vh",
                        textAlign: "center",
                    }}
                >
                    Loaded
                </Box>
            </Container>
        </AppLoader>
    );
};

export default App;
