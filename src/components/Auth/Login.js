"use client";

import { useFormik } from "formik";
import * as yup from "yup";
import { TextField, Button, Typography, Box, InputAdornment, IconButton, Container, Paper, Alert } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useState } from "react";
import Image from "next/image";
import logo from "@/../public/assets/images/logo.svg";
import Link from "next/link";
import { useAtom } from "jotai";
import { tokenAtom } from "@/atoms/authAtom";
import { useRouter } from 'next/navigation';

import { auth } from "@/lib/firebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";

// Validation Schema
const validationSchema = yup.object({
  email: yup.string().email("Invalid email format!").required("Please enter your email."),
  password: yup.string().min(6, "Password must be at least 6 characters").required("Please enter your password!"),
});

export default function Signup() {
  const router=useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [token, setToken] = useAtom(tokenAtom);
  
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const handleRelocate=()=>{
    router.push('/');
  }
  // Formik Hook
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      setError(null);
      setSuccess(null);

      try {
        const userCredential = await signInWithEmailAndPassword(auth, values.email, values.password);
        const user = userCredential.user;
        const token = await user.getIdToken();
        console.log("Firebase Token:", token);  // ✅ Check if token is being received


        setToken(token);
        setSuccess("Login successful! Redirecting...");
        setTimeout(() => {
          router.push('/movie-list');
        }, 1500);
      } catch (error) {
        setError("Invalid email or password. Please try again.");
      }
    },
  });

  return (
    <Box
    sx={{
      width: "100vw",
      height: "100vh",
      display: "flex",
      alignItems: "center",
      border: "15px solid",
  borderImage: "linear-gradient(to top left,rgba(112, 109, 109, 0.42), white) 1",
      justifyContent: "center",
      bgcolor: "#F5F3EB",
      position: "relative", // ✅ Added for positioning the button
    }}
  >
  {/* Back Button at Top-Left */}
  <Button
    variant="contained"
    sx={{
      position: "absolute", // ✅ Allows positioning
      top: 20, // ✅ Distance from the top
      left: 20, // ✅ Distance from the left
      bgcolor: "black",
      color: "white",
      borderRadius: 2,
      py: 1.2,
      px: 2.6,
      fontSize: 14,
      fontWeight: "bold",
      minWidth: "auto",
    }}
    onClick={handleRelocate}
  >
    Back
  </Button>

  {/* Centered Content */}
  <Paper
    elevation={0}
    sx={{
      p: 4,
      textAlign: "center",
      borderRadius: 3,
      width: "100%",
      maxWidth: 400,
      bgcolor: "transparent",
    }}
  ><Box display="flex" justifyContent="center" mb={2}>
          <Image src={logo} alt="Logo" width={150} height={50} />
        </Box>

        <Typography sx={{ color: "black" }} variant="h5" fontWeight="bold" mb={3}>
          Log in to Your Account
        </Typography>

        {error && <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>}
        {success && <Alert severity="success" sx={{ mb: 2 }}>{success}</Alert>}

        <form onSubmit={formik.handleSubmit}>
          {/* Email Input */}
          <TextField
            fullWidth
            name="email"
            label="Email"
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
          <Button type="submit" variant="contained" sx={{ bgcolor: "black", color: "white", borderRadius: 2, py: 2.2, px: 4.2, fontSize: 14, fontWeight: "bold", minWidth: "auto" }}>
            Login
          </Button>
        </form>

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
