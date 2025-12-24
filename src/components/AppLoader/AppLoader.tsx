import { useState, useEffect, type ReactNode } from "react";
import "./AppLoader.css";
import { Container, Box, CssBaseline, CircularProgress } from "@mui/material";
type AppLoaderProps = {
    children: ReactNode;
    logo?: string;
};
const AppLoader = ({ children, logo }: AppLoaderProps): JSX.Element => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);
    if (loading) {
        return (
            <>
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
                            gap: "4vh",
                            justifyContent: "center",
                            alignItems: "center",
                            height: "100vh",
                            textAlign: "center",
                        }}
                    >
                        <img className="appLoaderLogo" src={logo} />

                        <CircularProgress />
                    </Box>
                </Container>
            </>
        );
    }

    return <>{children}</>;
};

export default AppLoader;
