import React, { useState } from "react";
import {
  Box,
  Button,
  Container,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { Navigate } from "react-router-dom";
import { useNotification } from "../../context/notification.context";

type LoginType = {
  username: string;
  password: string;
};

const staticUser = {
  username: "diegoacastro",
  password: "die18",
};

export const LoginPage: React.FC<{}> = () => {
  const [loginData, setLoginData] = useState<LoginType>({
    username: "",
    password: "",
  });

  const [redirect, setRedirect] = useState<boolean>(false);
  const { getError, getSuccess } = useNotification();

  const dataLogin = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();

    if (
      loginData.username === staticUser.username &&
      loginData.password === staticUser.password
    ) {
      setRedirect(true);
      getSuccess("Usuario válido");
    } else {
      getError("Credenciales incorrectas. Por favor, inténtalo de nuevo.");
    }
  };

  return (
    <Container maxWidth="sm">
      <Grid
        container
        direction="column"
        alignItems="center"
        justifyContent="center"
        sx={{ minHeight: "100vh" }}
      >
        <Grid item>
          <Paper sx={{ padding: "1.2em", borderRadius: "0.5em" }}>
            <Typography sx={{ mt: 1, mb: 1 }} variant="h4">
              Iniciar sesion
            </Typography>
            <Box component="form" onSubmit={handleSubmit}>
              <TextField
                name="username"
                margin="normal"
                type="text"
                fullWidth
                label="Username"
                sx={{ mt: 2, mb: 1.5 }}
                required
                onChange={dataLogin}
              />
              <TextField
                name="password"
                margin="normal"
                type="password"
                fullWidth
                label="Password"
                sx={{ mt: 1.5, mb: 1.5 }}
                required
                onChange={dataLogin}
              />

              <Button
                fullWidth
                type="submit"
                variant="contained"
                sx={{ mt: 1.5, mb: 3 }}
              >
                Iniciar sesion
              </Button>
            </Box>
          </Paper>
        </Grid>
      </Grid>
      {redirect && <Navigate to="/home" />}{" "}
      {/* Redirección si redirect es true */}
    </Container>
  );
};
