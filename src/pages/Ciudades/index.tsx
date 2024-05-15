import React from "react";
import { Container, Grid, Paper, Typography } from "@mui/material";

const citiesData = [
  { id: 1, name: "Valledupar", regionName: "Cesar", registrationDate: "2022-05-10" },
  { id: 2, name: "Bogotá", regionName: "Cundinamarca", registrationDate: "2022-05-11" },
  { id: 3, name: "Barranquilla", regionName: "Atlántico", registrationDate: "2022-05-12" },
  { id: 4, name: "Riohacha", regionName: "Guajira", registrationDate: "2022-05-13" },
  { id: 5, name: "Pasto", regionName: "Nariño", registrationDate: "2022-05-14" }
];

export const CiudadesPage: React.FC<{}> = () => {
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
              Lista de ciudades
            </Typography>
            <div>
              <table>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Nombre</th>
                    <th>Región</th>
                    <th>Fecha de registro</th>
                  </tr>
                </thead>
                <tbody>
                  {citiesData.map(city => (
                    <tr key={city.id}>
                      <td>{city.id}</td>
                      <td>{city.name}</td>
                      <td>{city.regionName}</td>
                      <td>{city.registrationDate}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};