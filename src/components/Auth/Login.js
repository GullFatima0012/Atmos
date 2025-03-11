"use client";

import { useFormik } from "formik";
import * as yup from "yup";
import { TextField, Button, Typography, Box, InputAdornment, IconButton, Container, Paper } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useState } from "react";
import Image from "next/image";
import logo from "@/../public/assets/images/logo.svg";
import Link from "next/link";

// Validation Schema
const validationSchema = yup.object({
  email: yup.string().email("The Email you entered is not a valid format!").required("Please enter Email Address!"),
  password: yup.string().min(6, "Password must be at least 6 characters").required("Please enter your password!"),
});

export default function Signup() {
  const [showPassword, setShowPassword] = useState(false);

  // Formik Hook
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log("Form Values:", values);
      // Add your login API call here
    },
  });

  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        bgcolor: "#F5F3EB",
      }}
    >
      <Paper
        elevation={0}
        sx={{
          p: 4,
          textAlign: "center",
          borderRadius: 3,
          width: "100%",
          maxWidth: 400,
          bgcolor: "transparent", // Removes the white background
        }}
      >
        {/* Logo */}
        <Box display="flex" justifyContent="center" mb={2}>
          <Image src={logo} alt="Logo" width={150} height={50} />
        </Box>

        <Typography sx={{ color: "black" }} variant="h5" fontWeight="bold" mb={3}>
          Log in Your Account
        </Typography>

        {/* Form */}
        <form onSubmit={formik.handleSubmit}>
          {/* Email Input */}
          <TextField
            fullWidth
            name="email"
            label="Username or Email"
            variant="outlined"
            sx={{ mb: 2, bgcolor: "transparent", borderRadius: 1 }}
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />

          {/* Password Input */}
          <TextField
            fullWidth
            name="password"
            label="Password"
            type={showPassword ? "text" : "password"}
            variant="outlined"
            sx={{ mb: 2, bgcolor: "transparent", borderRadius: 1 }}
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={() => setShowPassword(!showPassword)}>
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />

          {/* Submit Button */}
          <Button
            type="submit"
            variant="contained"
            fullWidth
            sx={{ bgcolor: "black", color: "white", borderRadius: 3, py: 1.5, fontSize: 16, fontWeight: "bold" }}
          >
            Login
          </Button>
        </form>

        {/* Sign Up Link */}
        <Typography variant="body2" mt={2} color="textSecondary">
          Don't have an account?{" "}
          <Link href="/register" passHref style={{ textDecoration: "none" }}>
            <Typography component="span" sx={{ fontWeight: "bold", cursor: "pointer", color: "black" }}>
              Sign Up
            </Typography>
          </Link>
        </Typography>
      </Paper>
    </Box>
  );
}
