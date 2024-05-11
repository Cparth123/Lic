import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { Typography } from "@mui/material";
import { IoMdClose } from "react-icons/io";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "black",
  boxShadow: 24,
  color: "#FFF",
  pt: 2,
  px: 4,
  pb: 3,
};

export default function Model(props) {
  const { open,senddata, setOpen } = props;
  
  const handleClose = () => {
    setOpen(false);
  };


console.log('.................',);
  

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box
          sx={{
            ...style,
            height: 500,
            width: { xs: 300, sm: "500px" },
            overflowY: "scroll",
            borderRadius: "12px ",
          }}
        >
          <Box
            onClick={() => {
              handleClose();
            }}
            sx={{
              position: "fixed",
              top: 0,
              right: 0,
              width: "30px",
              height: "30px",
              bgcolor: "#FFF",
              borderRadius: "50%",
              display: "grid",
              placeItems: "center",
              color: "black",
              cursor: "pointer",
            }}
          >
            <IoMdClose />
          </Box>
          <Typography
            sx={{
              fontSize: "18px",
              mb: 2,
              textAlign: "center",
            }}
          >
            {senddata.title}
          </Typography>
          <Box
            sx={{
              display: "flex",
            }}
          >
            <img
              style={{
                width: "100%",
                height: "auto",
                objectFit: "cover",
              }}
              src="/img/png/download.jpeg"
            />
          </Box>
          <Typography
            sx={{
              mt: 2,
            }}
          >
            is simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the industry's standard dummy text ever since the
            1500s, when an unknown printer took a galley of type and scrambled
            it to make a type specimen book. It has survived not only five
            centuries, but also the leap into electronic typesetting, remaining
            essentially unchanged. It was popularised in the 1960s with the
            release of Letraset sheets containing Lorem Ipsum passages, and more
            recently with desktop publishing software like Aldus PageMaker
            including versions of Lorem Ipsum. is simply dummy text of the
            printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make a type
            specimen book. It has survived not only five centuries, but also the
            leap into electronic typesetting, remaining essentially unchanged.
            It was popularised in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of Lorem
            Ipsum. is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
