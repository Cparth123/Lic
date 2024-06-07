"use client";
import { Avatar, Box, Typography } from "@mui/material";
import { MdLogout } from "react-icons/md";
import { MdSpaceDashboard } from "react-icons/md";
import { MdOutlineConstruction } from "react-icons/md";
import { RiCustomerService2Line } from "react-icons/ri";
import { FcGallery } from "react-icons/fc";
import { MdSettings } from "react-icons/md";
import { useRouter } from "next/navigation";
import { FaChevronLeft } from "react-icons/fa6";
import { FaChevronRight } from "react-icons/fa6";
import Link from "next/link";
import { useContext, useState } from "react";
import { Commcon } from "../usecontext/Commancontext";
import { GiHamburgerMenu } from "react-icons/gi";
import CloseIcon from "@mui/icons-material/Close";

const menu = [
  {
    id: 1,
    name: "dashboard",
    path: "/dashboard",
    icon: <MdSpaceDashboard />,
  },
  {
    id: 2,
    name: "service",
    path: "/dashboard/service",
    icon: <MdOutlineConstruction />,
  },
  {
    id: 3,
    name: "contact",
    path: "/dashboard/contact",
    icon: <RiCustomerService2Line />,
  },
  {
    id: 4,
    name: "policy",
    path: "/dashboard/policy",
    icon: <FcGallery />,
  },
  {
    id: 5,
    name: "setting",
    path: "/dashboard/setting",
    icon: <MdSettings />,
  },
];
const Sidebar = (props) => {
  const navigator = useRouter();
  const [open, setOpen] = useState(true);
  const { toggleside, setToggleside, dark, userimg } = useContext(Commcon);
  const role = 2;
  return (
    <>
      {/* lablate and dasktop screen */}
      <Box
        sx={{
          width: open ? "200px" : "52px",
          bgcolor: dark ? "#272640 " : "#80808061",
          display: "flex",
          flexDirection: "column",
          transition: "all ease .7s",
          display: { xs: "none", md: "block" },
        }}
      >
        <Typography
          onClick={() => {
            setOpen(!open);
          }}
          sx={{
            alignSelf: "end",
            color: "black",
            width: "40px",
            height: "40px",
            bgcolor: "white",
            display: "grid",
            borderRadius: "20px",
            placeContent: "center",
            p: 1,
            mt: 1,
          }}
        >
          {open ? <FaChevronLeft /> : <FaChevronRight />}
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            mt: 5,
          }}
        >
          {menu.map((item) => {
            return (
              <>
                <Box
                  key={item.id}
                  onClick={() => {
                    navigator.push(`${item.path}`);
                  }}
                  sx={{
                    my: 1,
                    height: "auto",
                    borderRadius: 0,
                    fontWeight: 600,
                    color: "#FFF",
                    textTransform: "capitalize",
                    display: "flex",
                    // alignItems: "center",
                    px: 2,
                    py: 1,
                    gap: 2,
                    cursor: "pointer",
                    bgcolor: dark ? "#272640 " : "#80808061",

                    // "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,.9) 100%)",
                  }}
                >
                  <Typography sx={{ fontSize: "20px" }}>{item.icon}</Typography>
                  <Typography
                    sx={{
                      display: open ? "inline-block" : "none",
                      transition: "all ease .7s",
                    }}
                  >
                    {item.name}
                  </Typography>
                </Box>
              </>
            );
          })}

          <Box sx={{ mt: 10 }}>
            {role == 1 ? (
              <Box
                onClick={() => {
                  navigator.push(`/dashboard/MyDash`);
                }}
                sx={{
                  my: 1,
                  height: "auto",
                  borderRadius: 0,
                  fontWeight: 600,
                  color: "#FFF",
                  textTransform: "capitalize",
                  display: "flex",
                  // alignItems: "center",
                  px: 2,
                  py: 1,
                  gap: 2,
                  cursor: "pointer",
                  bgcolor: dark ? "#272640 " : "#80808061",
                }}
              >
                <Typography sx={{ fontSize: "20px" }}></Typography>
                <Typography
                  sx={{
                    display: open ? "inline-block" : "none",
                    transition: "all ease .7s",
                  }}
                >
                  My policy
                </Typography>
              </Box>
            ) : role == 2 ? (
              <Box
                onClick={() => {
                  navigator.push(`/dashboard/adminDash`);
                }}
                sx={{
                  my: 1,
                  height: "auto",
                  borderRadius: 0,
                  fontWeight: 600,
                  color: "#FFF",
                  textTransform: "capitalize",
                  display: "flex",
                  // alignItems: "center",
                  px: 2,
                  py: 1,
                  gap: 2,
                  cursor: "pointer",
                  bgcolor: dark ? "#272640 " : "#80808061",
                }}
              >
                <Typography sx={{ fontSize: "20px" }}></Typography>
                <Typography
                  sx={{
                    display: open ? "inline-block" : "none",
                    transition: "all ease .7s",
                  }}
                >
                  My dashboard
                </Typography>
              </Box>
            ) : role == 3 ? (
              ""
            ) : (
              ""
            )}

            <Box
              sx={{
                width: "100%",
                height: "auto",
                p: 1,
                bgcolor: dark ? "#272640 " : "#80808061",
                borderRadius: 0,
                color: "black",
                fontWeight: 600,
                textTransform: "capitalize",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                cursor: "pointer",
              }}
            >
              <Avatar
                sx={{
                  p: 0,
                  border: "1px solid black",
                  bgcolor: "#FFF",
                  outline: "2px solid grey",
                  display: open ? "inline-block" : "none",
                  transition: "all ease .7s",
                }}
                src={userimg}
              />

              <Typography
                sx={{
                  fontSize: "10px",
                  fontWeight: 900,
                  color: "#FFF",
                  textTransform: "capitalize",
                  display: open ? "inline-block" : "none",
                }}
              >
                rajendra solanki
              </Typography>
              <MdLogout
                onClick={() => navigator.push("/auth/Singin")}
                style={{
                  color: "#FFF",
                  textAlign: "center",
                  fontSize: "1.4rem",
                }}
              />
            </Box>
          </Box>
        </Box>
      </Box>
      {/* mobile screen sidebar */}
      <Box
        sx={{
          position: "fixed",
          top: "0px",
          right: "0px",
          zIndex: 100,
          width: "100%",
          height: "100%",
          display: { xs: `${toggleside ? "block" : "none"}`, lg: "none" },
          // transition:'all ease .6s'
        }}
      >
        <Box
          sx={{
            position: "relative",
          }}
        >
          <CloseIcon
            onClick={() => {
              setToggleside(!toggleside);
            }}
            style={{
              width: "30px",
              height: "30px",
              padding: "5px",
              position: "absolute",
              right: "8px",
              top: "17px",
              boxShadow: "0px 0px 15px grey",
              borderRadius: "50%",
              display: { xs: "block", md: "none" },
              backgroundColor: "blue",
              color: "#FFF",
            }}
          />
        </Box>

        <Box
          sx={{
            bgcolor: dark ? "#272640 " : "#808080",
            height: "100vh",
            overflowY: "scroll",
            width: "50%",
            padding: "1px px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              mt: 5,
            }}
          >
            {menu.map((item) => {
              return (
                <>
                  <Box
                    key={item?.id}cr
                    onClick={() => {
                      navigator.push(`${item.path}`);
                      setToggleside(!toggleside);
                    }}
                    sx={{
                      m: 1,
                      height: "auto",
                      borderRadius: 1,
                      fontWeight: 600,
                      color: "#FFF",
                      textTransform: "capitalize",
                      display: "flex",
                      px: 2,
                      py: 1,
                      gap: 2,
                      cursor: "pointer",
                      bgcolor: dark ? "#272640 " : "#80808061",
                    }}
                  >
                    <Typography sx={{ fontSize: "20px" }}>
                      {item.icon}
                    </Typography>
                    <Typography
                      sx={{
                        display: open ? "inline-block" : "none",
                        transition: "all ease .7s",
                      }}
                    >
                      {item.name}
                    </Typography>
                  </Box>
                </>
              );
            })}

            <Box sx={{ mt: 10 }}>
              {role == 1 ? (
                <Box
                  onClick={() => {
                    navigator.push(`/dashboard/MyDash`);
                  }}
                  sx={{
                    my: 1,
                    height: "auto",
                    borderRadius: 0,
                    fontWeight: 600,
                    color: "#FFF",
                    textTransform: "capitalize",
                    display: "flex",
                    // alignItems: "center",
                    px: 2,
                    py: 1,
                    gap: 2,
                    cursor: "pointer",
                    bgcolor: dark ? "#272640 " : "#80808061",
                  }}
                >
                  <Typography sx={{ fontSize: "20px" }}></Typography>
                  <Typography
                    sx={{
                      display: open ? "inline-block" : "none",
                      transition: "all ease .7s",
                    }}
                  >
                    My policy
                  </Typography>
                </Box>
              ) : role == 2 ? (
                <Box
                  onClick={() => {
                    navigator.push(`/dashboard/adminDash`);
                  }}
                  sx={{
                    my: 1,
                    height: "auto",
                    borderRadius: 0,
                    fontWeight: 600,
                    color: "#FFF",
                    textTransform: "capitalize",
                    display: "flex",
                    // alignItems: "center",
                    px: 2,
                    py: 1,
                    gap: 2,
                    cursor: "pointer",
                    bgcolor: dark ? "#272640 " : "#80808061",
                  }}
                >
                  <Typography sx={{ fontSize: "20px" }}></Typography>
                  <Typography
                    sx={{
                      display: open ? "inline-block" : "none",
                      transition: "all ease .7s",
                    }}
                  >
                    My dashboard
                  </Typography>
                </Box>
              ) : role == 3 ? (
                ""
              ) : (
                ""
              )}
              <Box
                sx={{
                  width: "100%",
                  height: "auto",
                  p: 1,
                  bgcolor: dark ? "#272640 " : "#80808061",
                  borderRadius: 0,
                  color: "black",
                  fontWeight: 600,
                  textTransform: "capitalize",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  cursor: "pointer",
                }}
              >
                <Avatar
                  sx={{
                    p: 0,
                    border: "1px solid black",
                    bgcolor: "#FFF",
                    outline: "2px solid grey",
                    display: open ? "inline-block" : "none",
                    transition: "all ease .7s",
                  }}
                  src={userimg}
                />
                <MdLogout
                  onClick={() => navigator.push("/auth/Singin")}
                  style={{
                    color: "#FFF",
                    textAlign: "center",
                    fontSize: "1.4rem",
                  }}
                />
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};
export default Sidebar;
