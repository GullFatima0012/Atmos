"use client";
import { tokenAtom } from "@/atoms/authAtom";  
import Link from "next/link";
import { TextField, Button, Typography, Box, InputAdornment, IconButton, Paper, Alert } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useState } from "react";
import Image from "next/image";
import logo from "@/../public/assets/images/logo.svg";
import { useFormik } from "formik";
import * as yup from "yup"; 
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/lib/firebaseConfig";
import { useRouter } from 'next/navigation';

// Validation Schema
const validationSchema = yup.object({
  email: yup.string().email("The Email you entered is not a valid format!").required("Please enter Email Address!"),
  password: yup.string().min(6, "Password must be at least 6 characters").required("Please enter your password!"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords must match")
    .required("Confirm your password!"),
});

export default function Signup() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [alertMessage, setAlertMessage] = useState(null);
  const [alertType, setAlertType] = useState("success");
const router=useRouter();
const handleRelocate=()=>{
  router.push('/');
}
  // Formik Hook
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      console.log("Form Values:", values);
      try {
        const userCredential = await createUserWithEmailAndPassword(auth, values.email, values.password);
        console.log("User Signed Up:", userCredential.user);
        router.push('/login');
        // Show success message
        setAlertMessage("User signed up successfully!");
        setAlertType("success");
      } catch (error) {
        // Show error message
        setAlertMessage(error.message);
        setAlertType("error");
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
    position: "relative",
  }}
>
  <Box
    sx={{
      width: "100%",
      height: "100%",
      bgcolor: "#F5F3EB",
      borderRadius: "8px", // Added 5px border radius
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }}
  >

  {/* Back Button at Top-Left */}
  <Button
    variant="contained"
    fontFamily= '"SF Pro Display", sans-serif' 
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
  >
  
        <Box display="flex" justifyContent="center" mb={2}>
          <Image src={logo} alt="Logo" width={150} height={50} />
        </Box>

        <Typography variant="h5" sx={{ color: "black" }} fontFamily= '"SF Pro Display", sans-serif' fontWeight="bold" mb={3}>
          Create an Account
        </Typography>

        {/* Alert Message */}
        {alertMessage && (
          <Alert fontFamily= '"SF Pro Display", sans-serif'  severity={alertType} sx={{ my: 2 }}>
            {alertMessage}
          </Alert>
        )}

        {/* Email Input */}
        <TextField
          fullWidth
          fontFamily= '"SF Pro Display", sans-serif' 
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
        fontFamily= '"SF Pro Display", sans-serif' 
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

        {/* Confirm Password Input */}
        <TextField
        fontFamily= '"SF Pro Display", sans-serif' 
          fullWidth
          name="confirmPassword"
          label="Confirm Password"
          type={showConfirmPassword ? "text" : "password"}
          variant="outlined"
          sx={{ mb: 3, bgcolor: "transparent", borderRadius: 1 }}
          value={formik.values.confirmPassword}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.confirmPassword && Boolean(formik.errors.confirmPassword)}
          helperText={formik.touched.confirmPassword && formik.errors.confirmPassword}
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
          fontFamily= '"SF Pro Display", sans-serif' 
          sx={{
            bgcolor: "black",
         
            color: "white",
            borderRadius: 2,
            py: 1.2,
            px: 2.6,
            fontSize: 14,
            fontWeight: "bold",
            minWidth: "auto",
          }}
          onClick={() => formik.handleSubmit()} // ✅ Fixed
        >
          Get Started
        </Button>

        {/* Login Link */}
        <Link href="/login" passHref>
          <Typography variant="body2" mt={2} color="textSecondary" fontFamily= '"SF Pro Display", sans-serif' >
            Already have an account?{" "}
            <Typography  fontFamily= '"SF Pro Display", sans-serif' component="span" sx={{ fontWeight: "bold", cursor: "pointer", color: "black" }}>
              Login
            </Typography>
          </Typography>
        </Link>
      </Paper>
    </Box>
      </Box>
  );
}