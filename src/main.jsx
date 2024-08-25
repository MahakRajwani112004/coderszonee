import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Sign from "./pages/Sign";
import NotFound from "./sections/NotFound";
import Product from "./pages/Product";
import Courses from "./pages/Courses";
import Profile from "./components/Profile";
import RegisterForm from "./sections/Register";
import LoginForm from "./sections/Login";
import { Protected } from "./components/Protected";
import { AuthProvider } from './sections/AuthContext';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="register" element={<RegisterForm />} />
      <Route path="login" element={<LoginForm />} />
      <Route path="product" element={<Product />} />
      <Route path="courses" element={<Courses />} />
      <Route path="profile" element={
        <Protected>
          <Profile />
        </Protected>
      } />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
