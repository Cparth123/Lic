"use client";
import { useParams, useRouter } from "next/navigation";
import gallaryapi from "../../../api/gallary/gallaryapi.json";
import { Box, Button, Grid, Typography } from "@mui/material";
import Toast from "@/app/Componets/Toast/Toast";
import { useContext } from "react";
import { Commcon } from "@/app/usecontext/Commancontext";

export default function page() {
  const param = useParams().slug;
  const item = gallaryapi.filter((it) => it.id == param)[0];
  const { addToPolicy, setAddToPolicy } = useContext(Commcon);
  const nav = useRouter();
  return (
    <>
      <Box
        sx={{
          width: "100%",
          py: 5,
          px: 2,
          mt: 1,
          borderRadius: "6px",
          boxShadow: "0px 0px 5px -2px black",
          backgroundColor: "#80808061",
          overflow:'hidden'
        }}
      >
        <Typography
          variant="h5"
          sx={{
            textAlign: "center",
            borderBottom: "1px solid grey",
            mb: 2,
            py: 1,
            position: "relative",
          }}
        >
          Policy Title
          <Box
            onClick={() => nav.push("/dashboard/policy")}
            sx={{
              position: "absolute",
              right: 0,
              top: -22,
              width: "max-content",
              backgroundColor: "blue",
              borderRadius: "5px",
              padding: "2px",
              color: "#fff",
              cursor: "pointer",
              display: { xs: "block", md: "none" },
            }}
          >
            Back
          </Box>
        </Typography>
        <Grid container spacing={"12px"}>
          <Grid item xs={12} md={3}>
            <img
              style={{ width: "100%", height: "auto", borderRadius: "8px" }}
              src={item.img}
            />
          </Grid>
          <Grid item xs={12} md={7}>
            <Box
              sx={{ display: "flex", flexDirection: "column", height: "100%" }}
            >
              <Typography>Policy min years:10</Typography>
              <Typography sx={{ mb: 2, color: "green" }}>
                Condition:Lorem Ipsum is simply dummy text of the printing and
                typesetting industry. Lorem Ipsum has been the industry's
                standard dummy text ever since the 1500s, when an unknown
                printer took a galley of type and scrambled it to make a type
                specimen book. It has survived not only five centuries, but also
                the leap into electronic typesetting, remaining essentially
                unchanged. It was popularised in the 1960s with the release of
                Letraset sheets containing Lorem Ipsum passages, and more
                recently with desktop publishing software like Aldus PageMaker
                including versions of Lorem Ipsum.
              </Typography>

              <Box
                sx={{
                  mt: "auto",
                }}
              >
                <Toast title={"Appliy success you policy"}>
                  <Button
                    onClick={() => setAddToPolicy([...addToPolicy, item])}
                    disableRipple
                    variant="contained"
                    sx={{
                      width: { xs: "50%", md: "100%" },
                      textTransform: "capitalize",
                      backgroundColor: "#d2b619",
                      color: "black",
                      textShadow: "0px 0px 2px black",
                      ":hover": {
                        backgroundColor: "#d2b619",
                      },
                    }}
                  >
                    Apply Now
                  </Button>
                </Toast>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
