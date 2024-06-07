"use client";

import { Box, Button, Grid, Typography } from "@mui/material";
import gallaryapi from "../../api/gallary/gallaryapi.json";
import { useRouter } from "next/navigation";
import { useContext } from "react";
import { Commcon } from "@/app/usecontext/Commancontext";
const gallary = () => {
  const nav = useRouter();
  const { dark } = useContext(Commcon);
  return (
    <>
      <Typography
        sx={{
          textAlign: "center",
          fontSize: "30px",
          fontWeight: 600,
          textTransform: "capitalize",
          mb: 1,
        }}
      >
        gallary
      </Typography>

      <Box>
        <Grid container spacing={2}>
          {gallaryapi.map((itm) => {
            return (
              <Grid key={itm?.id} item xs={12} lg={3}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    p: "5px",
                    borderRadius: "6px",
                    boxShadow: "0px 0px 5px -2px black",
                    backgroundColor: dark ? "#272640" : "#80808061",
                  }}
                >
                  <img
                    style={{
                      objectFit: "cover",
                      width: "100%",
                      height: "100%",
                      borderRadius: "12px",
                    }}
                    src={itm.img}
                    alt={itm.alr}
                  />
                  <Button
                    onClick={() => nav.push(`/dashboard/policy/${itm.id}`)}
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
                    Details
                  </Button>
                </Box>
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </>
  );
};
export default gallary;
