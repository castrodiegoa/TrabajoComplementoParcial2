import {
  AppBar,
  Box,
  Button,
  Container,
  Grid,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

export const NavBar: React.FC<{}> = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar>
          <Container maxWidth="xl">
            <Grid
              container
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <Grid item>
                <Stack direction="row" spacing={2}>
                  <Button component={Link} to="/home" variant="outlined">
                    Home
                  </Button>
                  <Typography>
                    Trabajo: Programación Web - Diego Castro
                  </Typography>
                </Stack>
              </Grid>
              <Grid item>
                <Stack direction="row" spacing={2}>
                  <Button component={Link} to="/paises" variant="contained">
                    Países
                  </Button>
                  <Button component={Link} to="/regiones" variant="contained">
                    Regiones
                  </Button>
                  <Button component={Link} to="/ciudades" variant="contained">
                    Ciudades
                  </Button>
                  <Button
                    component={Link}
                    to="/aeropuertos"
                    variant="contained"
                  >
                    Aeropuertos
                  </Button>
                  <Button component={Link} to="/login" variant="outlined">
                    Cerrar Sesión
                  </Button>
                </Stack>
              </Grid>
            </Grid>
          </Container>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
