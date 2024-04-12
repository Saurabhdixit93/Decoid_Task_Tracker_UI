import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Authenticated/Home/Home";
import Login from "./pages/Non-authenticated/Login/Login";
import Layout from "./Layout";
import Signup from "./pages/Non-authenticated/Signup/Signup";

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Layout>
  );
}
