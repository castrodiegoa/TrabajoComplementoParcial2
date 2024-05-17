import React from "react";
import { Container, Grid, Paper, Typography } from "@mui/material";

const regionsData = [
  {
    id: 1,
    name: "Cesar",
    countryId: 1,
    countryName: "Colombia",
    registrationDate: "2022-05-10",
  },
  {
    id: 2,
    name: "Cundinamarca",
    countryId: 1,
    countryName: "Colombia",
    registrationDate: "2022-05-11",
  },
  {
    id: 3,
    name: "Atlántico",
    countryId: 1,
    countryName: "Colombia",
    registrationDate: "2022-05-12",
  },
  {
    id: 4,
    name: "Guajira",
    countryId: 1,
    countryName: "Colombia",
    registrationDate: "2022-05-13",
  },
  {
    id: 5,
    name: "Nariño",
    countryId: 1,
    countryName: "Colombia",
    registrationDate: "2022-05-14",
  },
];

export const RegionesPage: React.FC<{}> = () => {
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
              Lista de regiones
            </Typography>
            <div>
              <table>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Nombre</th>
                    <th>País</th>
                    <th>Fecha de registro</th>
                  </tr>
                </thead>
                <tbody>
                  {regionsData.map((region) => (
                    <tr key={region.id}>
                      <td>{region.id}</td>
                      <td>{region.name}</td>
                      <td>{region.countryName}</td>
                      <td>{region.registrationDate}</td>
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
