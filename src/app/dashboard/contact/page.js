"use client";
import { Box, Grid, Typography } from "@mui/material";
import { FaWhatsapp } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { useContext } from "react";
import { Commcon } from "@/app/usecontext/Commancontext";
const social = [
  {
    id: 1,
    icon: <FaWhatsapp />,
    link: "https://wa.me/919099100131",
    color: "green",
  },
  {
    id: 2,
    icon: <FaFacebook />,
    link: "https://www.facebook.com/p/LIC-Rajendra-Solanki-100064818767541/?locale=nl_BE",
    color: "blue",
  },
  {
    id: 3,
    icon: <FaInstagram />,
    link: "https://www.instagram.com/mahekinsurance/",
    color: "orange",
  },
  {
    id: 4,
    icon: <FaTelegramPlane />,
    link: "",
    color: "blue",
  },
  {
    id: 5,
    icon: <FaLocationDot />,
    link: "https://www.google.com/maps/place/MAHEK+INSURANCE+%26+INVESTMENT/@21.2100218,72.8394648,15z/data=!4m10!1m2!2m1!1s+G-1132,+Central+Bazaar,+Near+Varachha+Police+Station,+!3m6!1s0x3be04f1993d4d3f1:0xd6c6dd0b6f83106f!8m2!3d21.2100218!4d72.8497645!15sCjVHLTExMzIsIENlbnRyYWwgQmF6YWFyLCBOZWFyIFZhcmFjaGhhIFBvbGljZSBTdGF0aW9uLJIBCmNvbnN1bHRhbnTgAQA!16s%2Fg%2F11q3l74htd?entry=ttu",
    color: "blue",
  },
  {
    id: 6,
    icon: <MdEmail />,
    link: "",
    color: "red",
  },
];
const Contact = () => {
  const { dark } = useContext(Commcon);

  return (
    <>
      <Typography
        sx={{
          textAlign: "center",
          fontSize: "28px",
          fontWeight: 600,
          textTransform: "capitalize",
        }}
      >
        contact us
      </Typography>

      <Box
        sx={{
          backgroundImage: "Url(/img/png/call-center.jpg)",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          width: "100%",
          minHeight: "470px",
          p: 2,
          borderRadius: "8px",
        }}
      >
        <Box
          sx={{
            width: { xs: "auto", md: "500px" },
          }}
        >
          <Grid container spacing={2}>
            {social.map((item) => {
              return (
                <Grid key={item.id} item xs={12} lg={6}>
                  <Box
                    component={"a"}
                    href={item.link}
                    sx={{
                      backgroundColor: !dark ? "#80808061" : "#c8101061",
                      boxShadow: "0px 0px 5px -2px black",
                      height: "100px",
                      display: "grid",
                      placeItems: "center",
                      borderRadius: "12px",
                      width: "100%",
                      transition: "all ease 0.6s",
                      ":hover": {
                        translate: "0 -5px",
                      },
                    }}
                  >
                    <Typography sx={{ fontSize: "40px", color: item.color }}>
                      {item.icon}
                    </Typography>
                  </Box>
                </Grid>
              );
            })}
          </Grid>
        </Box>
      </Box>
    </>
  );
};
export default Contact;
