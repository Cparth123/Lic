"use client";
import { Box } from "@mui/material";
import Navbar from "../Componets/Navbar";
import Sidebar from "../Componets/Sidebar";
import Commconfn, { Commcon } from "../usecontext/Commancontext";
import { useContext } from "react";

export default function layout({ children }) {

  return (
    <>
      <Commconfn>
        <Box>
          <Box
            sx={{
              display: "flex",
            }}
          >
            <Sidebar />
            <Box
              sx={{
                flex: 1,
                height: "100vh",
                overflowY: "scroll",
              }}
            >
              <Navbar />
              <Box
                sx={{
                  px: 1,
                  pt: 1,
                  pb: 3,
                }}
              >
                {children}
              </Box>
            </Box>
          </Box>
        </Box>
      </Commconfn>
    </>
  );
}
