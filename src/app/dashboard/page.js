"use client";

import { Box, Button, Grid, Typography } from "@mui/material";
import { IoHappyOutline } from "react-icons/io5";
import { FaUser } from "react-icons/fa6";
import { MdOutlinePublic } from "react-icons/md";
import Home from "../Componets/charts/Home";
import { IoIosCall } from "react-icons/io";
import { useContext } from "react";
import { Commcon } from "../usecontext/Commancontext";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Motion from "../Componets/Motion";

const data = [
  {
    id: 1,
    icon: <IoHappyOutline />,
    title: "Customer Happiness",
    chartval: [2, 3, 4, 5, 6, 6, 7, 7, 8],
    chartcolor: "blue",
    resio: "75%",
  },
  {
    id: 2,
    icon: <FaUser />,
    title: "Our Clients",
    chartval: [2, 3, 6, 8, 9, 4],
    chartcolor: "yellow",
    chart: "",
  },
  {
    id: 3,
    icon: <MdOutlinePublic />,
    title: "all over over company policy selling",
    chartval: [8, 7, 5, 99, 6, 4, 8],
    chartcolor: "white",
    chart: "",
    resio: "75%",
  },
];
const Page = () => {
  const { toggleside, dark } = useContext(Commcon);
  const nav = useRouter();
  return (
    <>
      <Motion>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-around",
            flexDirection: { xs: "column", sm: "row" },
            bgcolor: dark ? "#042426 " : "#FFFFFF",
            borderRadius: "8px",
          }}
        >
          <Box
            sx={{
              p: { xs: 3, md: 10 },
              order: { xs: 2, md: 1 },
              color: dark ? "#FFFFFF " : "black",
            }}
          >
            <Typography
              sx={{
                fontSize: "20px",
                fontStyle: "italic",
                fontWeight: 600,
                textTransform: "capitalize",
              }}
            >
              Hello I`m
            </Typography>
            <Typography
              sx={{
                fontSize: "25px",
                fontWeight: 500,
                fontStyle: "italic",
                mt: 2,
              }}
            >
              FUTURE LIFE ADVISORS
              <br />
              Wealth Manager
            </Typography>
            <Typography
              sx={{
                fontSize: "30px",
                fontWeight: "300",
                mt:'13px',
                fontFamily: "sans-serif",
              }}
            >
              Rajendra Solanki
            </Typography>
            <Button
              onClick={() => nav.push("https://wa.me/919099100131")}
              startIcon={<IoIosCall />}
              disableRipple
              variant="contained"
              sx={{
                mt: 1,
                textTransform: "capitalize",
                backgroundColor: "#d2b619",
                textWrap: "nowrap",
                ":hover": {
                  backgroundColor: "#d2b619",
                },
              }}
            >
              Contect Now
            </Button>
          </Box>
          <Box
            sx={{
              order: { xs: 1, md: 2 },
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Image
              width={100}
              height={100}
              alt="emty"
              style={{
                height: "300px ",
                width: "300px",
              }}
              src="/img/png/loder.png"
            />
          </Box>
        </Box>
      </Motion>

      {/* <Typography
        sx={{ px: {xs:'0', md:"150px"} }}
      >
        I am a Life Insurance Consultant working with Indias most trusted brand
        Life Insurance Corporation of India LIC is Indias Largest & Oldest
        Insurance Company which Sold more than 30 Crore policies.
        <br />
        The approximate asset value of LIC of India is ₹ 45,50,517 Crore.
        <br />
        LIC has the Worlds best claim settlement ratio, In 2022-2023, LIC
        settled 225.51 lakh claims amounting to Rs.2,09,938 Crores.
        <br />
        LIC offers every type of product with both safety and security for all
        age groups.
        <br />
        If listed on the stock markets LIC would be Indias most valued company
        beating giants like Reliance Industries & TCS.
        <br />
        LIC is one of the biggest contributors of funds for Infrastructure and
        Nation buildings like the construction of dams, bridges and highways.
      </Typography> */}

      <Box
        sx={{
          mt: 2,
        }}
      >
        <Grid container spacing={2}>
          {data.map((item) => {
            return (
              <Grid key={item?.id} item xs={12} sm={6} lg={4}>
                <Box
                  sx={{
                    bgcolor: dark ? "#042426 " : "#80808061",

                    boxShadow: "0px 0px 5px -2px black",
                    height: "170px",
                    borderRadius: "12px",
                    display: "flex",
                    justifyContent: "space-between",
                    width: "100%",
                    p: 1,
                    color: dark ? "#FFF " : "black",
                  }}
                >
                  <Box>
                    <Typography
                      sx={{
                        fontSize: "35px",
                      }}
                    >
                      {" "}
                      {item.icon}
                    </Typography>
                    <Typography
                      sx={{
                        textTransform: "capitalize",
                        mt: 1,
                        fontWeight: 900,
                        fontSize: "18px",
                      }}
                    >
                      {item.title}
                    </Typography>
                  </Box>
                  <Box>
                    <Box
                      sx={{
                        width: "100px",
                        height: "70px",
                        overflow: "hidden",
                        display: "grid",
                        placeItems: "center",
                      }}
                    >
                      <Home data={item.chartval} color={item.chartcolor} />
                    </Box>
                    <Typography
                      sx={{
                        fontWeight: "600",
                        fontSize: "2rem",
                        mt: 1,
                        textAlign: "center",
                      }}
                    >
                      {item.resio}
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </>
  );
};
export default Page;
