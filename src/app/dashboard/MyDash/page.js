'use client'
import Circal from "@/app/Componets/charts/users/Circal";
import Lic from "@/app/Componets/charts/users/Lic";
import { Commcon } from "@/app/usecontext/Commancontext";
import { Box, Button, Grid, Typography } from "@mui/material";
import { useContext } from "react";

export default function page() {
  const { dark } = useContext(Commcon);
  const defaulBox = {
    backgroundColor:dark ? "#042426": "#80808061",
    boxShadow: "0px 0px 5px -2px black",
    height: "170px",
    borderRadius: "12px",
    p: 2,
    height: { xs: "auto", md: "290px" },
  };
  const tital = {
    fontweight: 700,
    color: "yellowgreen",
    textShadow: "0px 0px 1px black",
    textAlign: "center",
    textTransform: "capitalize",
  };
  return (
    <>
      <Box sx={{ mt: 1 }}>
        <Grid container spacing={"12px"}>
          <Grid item xs={12} sm={4}>
            <Box sx={{ ...defaulBox }}>
              <Typography variant="h5" sx={{ ...tital }}>
                policy EndTime
              </Typography>
              <Box sx={{ width: "100%", height: "100%" }}>
                <Circal />
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={8}>
            <Box sx={{ ...defaulBox }}>
              <Typography variant="h5" sx={{ ...tital }}>
                All our Lic Policy
              </Typography>
              <Box>
                <Lic />
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={3}>
            <Box sx={{ ...defaulBox }}>
              <Box>
                <Typography
                  variant="h5"
                  sx={{ ...tital, fontSize: "21px", marginBottom: "25px" }}
                >
                  My Policy End date :- 05/02/1012
                </Typography>
                <img
                  src="/img/png/startdate.jpeg"
                  style={{
                    width: "100%",
                    height: "100px",
                    objectFit: "contain",
                  }}
                />
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={3}>
            <Box sx={{ ...defaulBox }}>
              <Box>
                <Typography
                  variant="h3"
                  sx={{ ...tital, fontSize: "21px", marginBottom: "25px" }}
                >
                  My Policy End date :- 05/02/1012
                </Typography>
                <img
                  src="/img/png/download.jpeg"
                  style={{
                    width: "100%",
                    height: "100px",
                    objectFit: "contain",
                  }}
                />
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box sx={{ ...defaulBox }}>
              <Box>
                <Typography variant="h5" sx={{ ...tital, fontSize: "21px" }}>
                  Add New policy
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    m: "9px 0",
                  }}
                >
                  <Button
                    disableRipple
                    variant="contained"
                    sx={{
                      mt: 1,
                      textTransform: "capitalize",
                      backgroundColor: "#d2b619",
                      ":hover": {
                        backgroundColor: "#d2b619",
                      },
                    }}
                  >
                    Check New Policy`s
                  </Button>
                </Box>
                <img
                  src="/img/png/new.jpg"
                  style={{
                    width: "100%",
                    height: "100px",
                    objectFit: "contain",
                  }}
                />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
