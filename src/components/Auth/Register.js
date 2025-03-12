"use client";
import { tokenAtom } from "@/atoms/authAtom";  // Import token state
import Link from "next/link";
import { TextField, Button, Typography, Box, InputAdornment, IconButton, Paper } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useState } from "react";
import Image from "next/image";
import logo from "@/../public/assets/images/logo.svg";
import { useFormik } from "formik";
import * as yup from "yup"; // ✅ Import yup

// Validation Schema
const validationSchema = yup.object({
  email: yup.string().email("The Email you entered is not a valid format!").required("Please enter Email Address!"),
  password: yup.string().min(6, "Password must be at least 6 characters").required("Please enter your password!"),
  Confirmpassword: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords must match") // ✅ Ensure it matches password
    .required("Confirm your password!"),
});

export default function Signup() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // Formik Hook
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      Confirmpassword: "",
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
          bgcolor: "transparent", // ✅ Removes the white background
        }}
      >
        {/* Logo */}
        <Box display="flex" justifyContent="center" mb={2}>
          <Image src={logo} alt="Logo" width={150} height={50} />
        </Box>

        <Typography variant="h5" sx={{ color: "black" }} fontWeight="bold" mb={3}>
          Create an Account
        </Typography>

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
          type={showPassword ? "text" : "Password"}
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

        {/* Confirm Password Input */}
        <TextField
          fullWidth
          name="Confirmpassword"
          label="Confirm Password"
          type={showConfirmPassword ? "text" : "password"}
          variant="outlined"
          sx={{ mb: 3, bgcolor: "transparent", borderRadius: 1 }}
          value={formik.values.Confirmpassword}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.Confirmpassword && Boolean(formik.errors.Confirmpassword)}
          helperText={formik.touched.Confirmpassword && formik.errors.Confirmpassword}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
                  {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />

        {/* Submit Button */}
        <Button
  variant="contained"
  sx={{
    bgcolor: "black",
    color: "white",
    borderRadius: 2,  // Slightly smaller radius
    py:1.2,          // Reduced padding (height)
    px: 2.6,            // Added horizontal padding for balance
    fontSize: 14,     // Smaller font size
    fontWeight: "bold",
    minWidth: "auto"  // Prevents full width expansion
  }}
  onClick={formik.handleSubmit}
>
  Get Started
</Button>


        {/* Login Link */}
        <Link href="/login" passHref>
          <Typography variant="body2" mt={2} color="textSecondary">
            Already have an account?{" "}
            <Typography component="span" sx={{ fontWeight: "bold", cursor: "pointer", color: "black" }}>
              Login
            </Typography>
          </Typography>
        </Link>
      </Paper>
    </Box>
  );
}
