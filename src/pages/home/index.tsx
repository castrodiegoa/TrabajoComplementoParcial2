import { Container, Grid, Paper, Typography } from "@mui/material";
import React from "react";

export const HomePage: React.FC<{}> = () => {
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
              Descripción del trabajo
            </Typography>
            <div>
              <p>
                Es trabajo consta de un login con credenciales estáticas y 4
                rutas relacionadas con el proyecto de aula. En mi caso mi
                proyecto es una aplicaión de Gestión de Vuelos, en el cual hay
                varias entidades dentro de las cuales se destacan: País, Región,
                Ciudad y Aeropuerto. Que son las entidades que usé en este
                trabajo. Cada botón de la barra redirige a una tabla de ejemplo
                con datos estáticos de como se vería cada entidad en el proyecto
                real.
              </p>
            </div>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};
