import * as React from "react";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Box } from "@mui/material";
import { GrNotification } from "react-icons/gr";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import CloseIcon from "@mui/icons-material/Close";
export default function Notification() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <div>
      <Box aria-describedby={id} variant="contained" onClick={handleClick}>
        <GrNotification
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
      </Box>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        sx={{
          "&.MuiPopover-pap": {
            boxShadow: "none",
            backgroundColor: "red",
          },
        }}
      >
        <Box
          sx={{
            width: "300px",
          }}
        >
          <Typography
            variant="h6"
            sx={{
              boxShadow: "0px 0px 2px grey",
              padding: "5px 10px",
              alignItems: "center",
              display: "flex",
              gap: 3,
            }}
          >
            <span>
              <NotificationsActiveIcon sx={{ color: "blue" }} />
            </span>{" "}
            Notification
          </Typography>
          <Box>
            
            <Notificationlist />
            <Notificationlist />
            <Notificationlist />
            <Notificationlist />
            <Notificationlist />

          </Box>
        </Box>
      </Popover>
    </div>
  );
}

export const Notificationlist = (props) => {
  const list = React.useRef();
  return (
    <>
      <Typography
        ref={list}
        sx={{
          bgcolor: "#ffff006e",
          padding: "15px 10px",
          margin: "5px 9px",
          borderRadius: "7px",
          color: "black",
          position: "relative",
        }}
      >
        policy date:
        <Typography
          component={"span"}
          sx={{ position: "absolute", right: 2, top: 4 }}
        >
          <CloseIcon onClick={() => list.current.remove()} />
        </Typography>
      </Typography>
    </>
  );
};
