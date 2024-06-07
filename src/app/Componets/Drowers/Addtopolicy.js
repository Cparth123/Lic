import React, { useContext, useRef, useState } from "react";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Button from "@mui/material/Button";
import { Box, Typography } from "@mui/material";
import { Commcon } from "../../usecontext/Commancontext";

export default function AddToPolicy({ children }) {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const { dark, addToPolicy, setAddToPolicy } = useContext(Commcon);
  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  return (
    <div>
      <React.Fragment>
        <Box onClick={toggleDrawer(true)}>{children}</Box>
        <SwipeableDrawer
          anchor="right"
          open={drawerOpen}
          onClose={toggleDrawer(false)}
          onOpen={toggleDrawer(true)}
        >
          {/* Drawer content goes here */}
          <div
            style={{
              backgroundColor: dark ? "#272640" : "#e1cece",
              width: 250,
              padding: "5px",
              height: "100vh",
              overflowY: "auto",
            }}
          >
            <Typography
              sx={{
                textAlign: "center",
                mb: "13px",
                fontSize: "21px",
                color: "blue",
              }}
            >
              Your Like policy
            </Typography>
            {addToPolicy.map((item) => {
              return (
                <>

                  <Likepolicy key={item.img}  item={item} setAddToPolicy={setAddToPolicy} />
                </>
              );
            })}
          </div>
        </SwipeableDrawer>
      </React.Fragment>
    </div>
  );
}

export const Likepolicy = ({ item }) => {
  const likeRef = useRef();
  const { addToPolicy, setAddToPolicy } = useContext(Commcon);

  const hadlingremove = (item) => {
    let less = addToPolicy.filter((items) => item.id !== items.id);
    setAddToPolicy(less);
  };
  return (
    <>
      <Box
        ref={likeRef}
        sx={{
          width: "100%",
          backgroundColor: "grey",
          maxHeight: "200px",
          my: 1,
          display: "flex",
          borderRadius: "12px",
          overflow: "hidden",
          flexDirection: "column",
        }}
      >
        <img
          style={{
            width: "100%",
            height: "160px",
            objectFit: "cover",
          }}
          src={item.img}
        />
        <Box sx={{ display: "flex", gap: 1 }}>
          <Button
            disableRipple
            variant="contained"
            sx={{
              width: "100%",
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
          <Button
            onClick={() => {
              hadlingremove(item);
            }}
            disableRipple
            variant="contained"
            sx={{
              width: "100%",
              textTransform: "capitalize",
              backgroundColor: "red",
              color: "black",
              textShadow: "0px 0px 2px black",
              ":hover": {
                backgroundColor: "red",
              },
            }}
          >
            Remove
          </Button>
        </Box>
      </Box>
    </>
  );
};
