import React from "react";
import { Container, Grid, Paper, Typography } from "@mui/material";

const airportData = [
  {
    id: 1,
    name: "Alfonso López",
    cityName: "Valledupar",
    registrationDate: "2022-05-10",
  },
  {
    id: 2,
    name: "El Dorado",
    cityName: "Bogotá",
    registrationDate: "2022-05-11",
  },
  {
    id: 3,
    name: "Ernesto Cortissoz",
    cityName: "Barranquilla",
    registrationDate: "2022-05-12",
  },
  {
    id: 4,
    name: "Almirante Padilla",
    cityName: "Riohacha",
    registrationDate: "2022-05-13",
  },
  {
    id: 5,
    name: "Antonio Nariño",
    cityName: "Pasto",
    registrationDate: "2022-05-14",
  },
];

export const AeropuertosPage: React.FC<{}> = () => {
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
              Lista de aeropuertos
            </Typography>
            <div>
              <table>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Nombre</th>
                    <th>Ciudad</th>
                    <th>Fecha de registro</th>
                  </tr>
                </thead>
                <tbody>
                  {airportData.map((airport) => (
                    <tr key={airport.id}>
                      <td>{airport.id}</td>
                      <td>{airport.name}</td>
                      <td>{airport.cityName}</td>
                      <td>{airport.registrationDate}</td>
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
