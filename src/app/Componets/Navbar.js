"use client";

import { Avatar, Badge, Box } from "@mui/material";
import { GiHamburgerMenu } from "react-icons/gi";
import { useContext } from "react";
import { Commcon } from "../usecontext/Commancontext";
import Notification from "./Drowers/Notification";
import FolderSpecialIcon from "@mui/icons-material/FolderSpecial";
import Darkmoodbtn from "./Darkmoodbtn";
import Addtopolicy from "./Drowers/Addtopolicy";
import { useRouter } from "next/navigation";
const Navbar = () => {
  const { toggleside, setToggleside, dark } = useContext(Commcon);
  const nav = useRouter();
  const { userimg } = useContext(Commcon);

  return (
    <>
      <Box
        sx={{
          width: "100%",
          boxShadow: "11px 0px 11px grey",
          display: "flex",
          backgroundColor: dark ? "#272640" : "#e1cece",
          justifyContent: "space-between",
          p: 1,
          position: "sticky",
          zIndex: 99,
          top: 0,
          left: 0,
        }}
      >
        <img
        onClick={()=>nav.push('/dashboard')}
          style={{
            width: "100px",
            height: "50px",
            mixBlendMode: "multiply ",
          }}
          src="/img/png/logo.png"
        />
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 2,
          }}
        >
          <Darkmoodbtn />
          <Badge color="secondary" badgeContent=" " variant="dot">
            <Notification />
          </Badge>
          <Addtopolicy
            children={
              <FolderSpecialIcon
                style={{
                  width: "30px",
                  height: "30px",
                  padding: "5px",
                  boxShadow: "0px 0px 15px grey",
                  borderRadius: "50%",
                  backgroundColor: "blue",
                  color: "#FFF",
                }}
              />
            }
          />

          <Avatar
            onClick={() => {
              nav.push("/dashboard/setting");
            }}
            sx={{
              p: 0,
              border: "1px solid black",
              bgcolor: "#FFF",
              outline: "2px solid grey",
              display: { xs: "none", md: "block" },
            }}
            src={userimg}
          />
          <Box
            sx={{
              display: { xs: "block", md: "none" },
            }}
          >
            <GiHamburgerMenu
              onClick={() => {
                setToggleside(!toggleside);
              }}
              style={{
                width: "30px",
                height: "30px",
                padding: "5px",
                boxShadow: "0px 0px 15px grey",
                borderRadius: "50%",
                display: { xs: "block", md: "none" },
                backgroundColor: "blue",
                color: "#FFF",
              }}
            />
          </Box>
        </Box>
      </Box>
    </>
  );
};
export default Navbar;
