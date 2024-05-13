import React, { useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/home";
import { LoginPage } from "./pages/login";
import { PaisesPage } from "./pages/Paises";
import { RouterLayout } from "./common/RouterLayout";


export const AppRouter: React.FC<{}> = () => {

    return (
      <Routes>

        <Route index element={<Navigate to="/login" />} />

        <Route path="/login" element={<LoginPage />} />

        <Route path="/" element={<RouterLayout />}>
          <Route path="/home" element={<HomePage />} />
          <Route path="/paises" element={<PaisesPage />} />
        </Route>

        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    );
  }
