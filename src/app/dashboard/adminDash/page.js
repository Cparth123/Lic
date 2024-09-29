"use client";
import My_clients from "@/app/Componets/Tables/My_clients";
import Tableclient from "@/app/Componets/Tables/Tableclient";
import Visited from "@/app/Componets/Tables/Visited";
import Circal from "@/app/Componets/charts/users/Circal";
import Lic from "@/app/Componets/charts/users/Lic";
import { Commcon } from "@/app/usecontext/Commancontext";
import { Box, Button, Grid, Typography } from "@mui/material";
import { useContext, useState } from "react";

export default function Page() {
  const [tab, setTab] = useState("pandding");
  const { dark } = useContext(Commcon);
  const defaulBox = {
    backgroundColor: dark ? "#042426" : "#80808061",
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
          <Grid item xs={12} md={4}>
            <Box sx={{ ...defaulBox }}>
              <Typography variant="h5" sx={{ ...tital }}>
                complited Policy
              </Typography>
              <Box sx={{ width: "100%", height: "100%" }}>
                <Circal />
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={8}>
            <Box sx={{ ...defaulBox }}>
              <Typography variant="h5" sx={{ ...tital }}>
                yearly Policy
              </Typography>
              <Box>
                <Lic />
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Box sx={{ ...defaulBox, height: "auto", p: 1 }}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Box sx={{ display: "flex", gap: 3 }}>
                  <Button
                    onClick={() => setTab("pandding")}
                    disableRipple
                    variant="contained"
                    sx={{
                      mt: 1,
                      textTransform: "capitalize",
                      backgroundColor: tab == "pandding" ? "blue" : "#d2b619",
                      ":hover": {
                        backgroundColor: tab == "pandding" ? "blue" : "#d2b619",
                      },
                    }}
                  >
                    pandding
                  </Button>
                  <Button
                    onClick={() => {
                      setTab("my client");
                    }}
                    disableRipple
                    variant="contained"
                    sx={{
                      mt: 1,
                      textTransform: "capitalize",
                      backgroundColor: tab == "my client" ? "blue" : "#d2b619",
                      ":hover": {
                        backgroundColor:
                          tab == "my client" ? "blue" : "#d2b619",
                      },
                    }}
                  >
                    My cleints
                  </Button>
                  <Button
                    onClick={() => setTab("visiter")}
                    disableRipple
                    variant="contained"
                    sx={{
                      mt: 1,
                      textTransform: "capitalize",
                      backgroundColor: tab == "visiter" ? "blue" : "#d2b619",
                      ":hover": {
                        backgroundColor: tab == "visiter" ? "blue" : "#d2b619",
                      },
                    }}
                  >
                    Visit client
                  </Button>
                </Box>
                <Typography
                  variant="h4"
                  sx={{
                    color: "black",
                    textShadow: "0px 0px 2px black",
                    backgroundColor: "#d2b619",
                    px: 1,
                    borderRadius: "9px",
                    display: { xs: "none", sm: "block" },
                  }}
                >
                  {tab}
                </Typography>
              </Box>

              {tab === "pandding" ? (
                <Tableclient />
              ) : tab === "my client" ? (
                <My_clients />
              ) : (
                <Visited />
              )}
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
