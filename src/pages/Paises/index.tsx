import React from "react";
import { Container, Grid, Paper, Typography } from "@mui/material";

const countriesData = [
  { id: 1, name: "Colombia", registrationDate: "2022-05-10" },
  { id: 2, name: "Venezuela", registrationDate: "2022-05-11" },
  { id: 3, name: "Uruguay", registrationDate: "2022-05-12" },
  { id: 4, name: "Chile", registrationDate: "2022-05-13" },
  { id: 5, name: "Argentina", registrationDate: "2022-05-14" },
];

export const PaisesPage: React.FC<{}> = () => {
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
              Lista de países
            </Typography>
            <div>
              <table>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Nombre</th>
                    <th>Fecha de registro</th>
                  </tr>
                </thead>
                <tbody>
                  {countriesData.map((country) => (
                    <tr key={country.id}>
                      <td>{country.id}</td>
                      <td>{country.name}</td>
                      <td>{country.registrationDate}</td>
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
