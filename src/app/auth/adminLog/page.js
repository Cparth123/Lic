"use client";
import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useRouter } from "next/navigation";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="/">
        DigitlPolicy
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const defaultTheme = createTheme();

export default function Page() {
  const navigator = useRouter();
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
    navigator.push("/dashboard");
  };

  const definput = {
    backgroundColor: { xs: "#80808061", sm: "transparent" },
    border: "px solid black",
  };
  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: "url(/img/png/login.avif)",
            backgroundRepeat: "no-repeat",
            backgroundColor: "blue",
            backgroundSize: "contein",
            backgroundPosition: "center",
            objectFit: "fill",
          }}
        />
        <Grid
          item
          xs={12}
          sm={8}
          md={5}
          sx={{
            backgroundImage: { xs: "url(/img/png/login.avif)", sm: "unset" },
            backgroundRepeat: { xs: "no-repeat", sm: "unset" },
            backgroundSize: "cover",
            backgroundColor: "yellowgreen",
            backgroundPosition: "center",
            boxShadow: "-4px 0px 84px 33px #e4dddd",
          }}
          component={Paper}
          elevation={6}
          square
        >
          <Box
            sx={{
              px: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography
              sx={{ color: { xs: "green", sm: "blue" } }}
              component="h1"
              variant="h5"
            >
              Sign in
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                sx={{ ...definput }}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                sx={{ ...definput }}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="enter  key"
                label="policy number"
                type="number"
                id="policyNumber"
                autoComplete="policy number"
                sx={{ ...definput }}
              />

              <FormControlLabel
                sx={{ color: { xs: "#d2b619", sm: "blue" } }}
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{
                  mt: 1,
                  textTransform: "capitalize",
                  backgroundColor: "#ff0500",
                  ":hover": {
                    backgroundColor: "#ff0500",
                  },
                }}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link
                    href="#"
                    sx={{ color: { xs: "#d2b619", sm: "blue" } }}
                    variant="body2"
                  >
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link
                    href="#"
                    sx={{ color: { xs: "#d2b619", sm: "blue" } }}
                    variant="body2"
                  >
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
