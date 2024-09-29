"use client";
import { Commcon } from "@/app/usecontext/Commancontext";
import {
  Avatar,
  Box,
  Button,
  Grid,
  InputBase,
  Typography,
} from "@mui/material";
import { useContext } from "react";

const Setting = () => {
  const { userimg } = useContext(Commcon);
  const defaultinputStyle = {
    boxShadow: "0px 0px 5px -2px black",
    mt: 1,
    borderRadius: "5px",
    width: "100%",
    backgroundColor: "#80808061",
    fontWeight: 700,
    px: 2,
  };

  return (
    <>
      <Box>
        <Typography
          component={"h1"}
          sx={{
            fontSize: "2rem",
            textAlign: "center",
            textTransform: "capitalize",
          }}
        >
          Setting
        </Typography>

        <Box
          sx={{
            px: 5,
          }}
        >
          <Grid container spacing={"12px"}>
            <Grid item xs={12}>
              <Avatar
                sx={{
                  p: 0,
                  width: "100px",
                  height: "100px",
                  border: "1px solid black",
                  bgcolor: "#FFF",
                  outline: "2px solid grey",
                  mt: { xs: 1, md: 0 },
                }}
                src={userimg}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Box>
                <Typography sx={{ fontWeight: 700, fontFamily: "fantasy" }}>
                  Fast name :-
                </Typography>
                <InputBase
                  value={"Rajendr"}
                  sx={{
                    ...defaultinputStyle,
                  }}
                />
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box>
                <Typography sx={{ fontWeight: 700, fontFamily: "fantasy" }}>
                  Last name :-
                </Typography>
                <InputBase
                  value={"solanki"}
                  sx={{
                    ...defaultinputStyle,
                  }}
                />
              </Box>
            </Grid>

            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  mt: 5,
                }}
              >
                <Typography sx={{ fontWeight: 700, fontFamily: "fantasy" }}>
                  Registered Email :-
                </Typography>
                <InputBase
                  value={"rajendrasolanki@123.gamil.com"}
                  sx={{
                    ...defaultinputStyle,
                  }}
                />
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  mt: 5,
                }}
              >
                <Typography sx={{ fontWeight: 700, fontFamily: "fantasy" }}>
                  Registered Phone Number :-
                </Typography>
                <InputBase
                  type="Number"
                  value={"9876543210"}
                  sx={{
                    ...defaultinputStyle,
                  }}
                />
              </Box>
            </Grid>

            <Grid item xs={12}>
              <Box
                sx={{
                  mt: 5,
                }}
              >
                <Typography sx={{ fontWeight: 700, fontFamily: "fantasy" }}>
                  Registered My Address :-
                </Typography>
                <InputBase
                  type="text"
                  value={"abc,katargram,surat"}
                  sx={{
                    ...defaultinputStyle,
                  }}
                />
              </Box>
            </Grid>

            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  mt: 5,
                }}
              >
                <Typography sx={{ fontWeight: 700, fontFamily: "fantasy" }}>
                  Policy Type :-
                </Typography>
                <InputBase
                  type="text"
                  value={"Life in...."}
                  sx={{
                    ...defaultinputStyle,
                  }}
                />
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  mt: 5,
                }}
              >
                <Typography sx={{ fontWeight: 700, fontFamily: "fantasy" }}>
                  My Policy Number :-
                </Typography>
                <InputBase
                  type="Number"
                  value={"87665566665"}
                  sx={{
                    ...defaultinputStyle,
                  }}
                />
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
};
export default Setting;
