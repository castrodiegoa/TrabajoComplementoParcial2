import { AppBar, Box, Button, Container, Grid, Stack, Toolbar, Typography } from "@mui/material";
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
                                <Typography>Trabajo: Programación Web - Diego Castro</Typography>
                            </Grid>
                            <Grid item>
                                <Stack direction="row" spacing={2}>
                                    <Button component={Link} to="/paises" variant="contained">Países</Button>
                                    <Button variant="contained">Regiones</Button>
                                    <Button variant="contained">Ciudades</Button>
                                    <Button variant="contained">Aeropuertos</Button>
                                    <Button variant="outlined">Cerrar Sesión</Button>
                                </Stack>
                            </Grid>
                        </Grid>
                    </Container>
                </Toolbar>
            </AppBar>
        </Box>
    );
};