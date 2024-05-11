"use client";
import { Box, Grid, Typography } from "@mui/material";
import { useContext, useState } from "react";
import { MdOutlineMedicalServices } from "react-icons/md";
import { FaFileMedical } from "react-icons/fa6";
import { FaHandsAslInterpreting } from "react-icons/fa6";
import { RiEmpathizeFill } from "react-icons/ri";
import { FaHandsHoldingChild } from "react-icons/fa6";
import { RiInsertRowTop } from "react-icons/ri";
import { TbSitemap } from "react-icons/tb";
import { FaHandsHelping } from "react-icons/fa";
import { IoMan } from "react-icons/io5";
import { MdSettingsInputComposite } from "react-icons/md";
import { AiFillProfile } from "react-icons/ai";
import { CgFormatUnderline } from "react-icons/cg";
import { GiDeadlyStrike } from "react-icons/gi";
import { VscRepoClone } from "react-icons/vsc";
import { CgPolaroid } from "react-icons/cg";
import { FaRegAddressCard } from "react-icons/fa6";
import Model from "@/app/Componets/service_model/Model";
import { Commcon } from "@/app/usecontext/Commancontext";
const sev1 = [
  {
    id: 1,
    title: "All Services related to LIC",
    icon: <MdOutlineMedicalServices />,
  },
  {
    id: 2,
    title: "Mediclaim & Health Insurance",
    icon: <FaFileMedical />,
  },
  {
    id: 3,
    title: "Planning for Retirement & Tax free Pension",
    icon: <FaHandsAslInterpreting />,
  },
  {
    id: 4,
    title: " Employer-Employee Scheme",
    icon: <RiEmpathizeFill />,
  },
  {
    id: 5,
    title: "Financial Planning for Child’s Education and Marriage",
    icon: <FaHandsHoldingChild />,
  },
  {
    id: 6,
    title: "M.W.P.A.",
    icon: <MdOutlineMedicalServices />,
  },
  {
    id: 7,
    title: "Group Health Insurance",
    icon: <RiInsertRowTop />,
  },
  {
    id: 8,
    title: "Group Term Insurance",
    icon: <TbSitemap />,
  },
  {
    id: 9,
    title: "Partnership Insurance",
    icon: <FaHandsHelping />,
  },
  {
    id: 10,
    title: "Key Man Insurance",
    icon: <IoMan />,
  },
  {
    id: 11,
    title: "H.U.F.",
    icon: <MdOutlineMedicalServices />,
  },
];
const sev2 = [
  {
    id: 1,
    title: "Claim Settlement",
    icon: <MdSettingsInputComposite />,
  },
  {
    id: 2,
    title: "Survival Benefit Dues",
    icon: <AiFillProfile />,
  },
  {
    id: 3,
    title: "Maturity Dues",
    icon: <CgFormatUnderline />,
  },
  {
    id: 4,
    title: "Death Claims",
    icon: <GiDeadlyStrike />,
  },
  {
    id: 5,
    title: "Loan Facilities",
    icon: <VscRepoClone />,
  },
  {
    id: 6,
    title: "Surrender of policies",
    icon: <CgPolaroid />,
  },
  {
    id: 7,
    title:
      "Change of mode/Change of Nominee/Change of Address/NEFT Registration etc",
    icon: <FaRegAddressCard />,
  },
];
const service = () => {
  const [oversev, setOversev] = useState(sev1);
  const [open, setOpen] = useState(false);
  const [senddata, setSendata] = useState([]);
  const { dark } = useContext(Commcon);

  const hadlingopen = (item) => {
    setSendata(item);
    setOpen(true);
  };
  return (
    <>
      <Box>
        <Box
          sx={{
            display: { xs: "block", md: "flex" },
            gap: 5,
            justifyContent: "center",
            py: 1,
            borderBottom: "2px solid blue",
          }}
        >
          <Typography
            onClick={() => {
              setOversev(sev1);
            }}
            sx={{
              fontSize: { xs: "18px", md: "24px" },
              bgcolor:
                oversev === sev1 ? `${dark ? "#042426" : "#80808061"}` : "",
              color: oversev === sev1 ? `${dark ? "#FFF" : "black"}` : "",
              px: "10px",
              borderRadius: "5px",
              fontWeight: 600,
              textTransform: "capitalize",
              boxShadow: "0px 0px 5px grey",
              textAlign: "center",
              cursor: "pointer",
            }}
          >
            OUR SERVICES
          </Typography>

          <Typography
            onClick={() => {
              setOversev(sev2);
            }}
            sx={{
              fontSize: { xs: "18px", md: "24px" },
              bgcolor:
                oversev === sev2 ? `${dark ? "#042426" : "#80808061"}` : "",
              color: oversev === sev2 ? `${dark ? "#FFF" : "black"}` : "",
              boxShadow: "0px 0px 5px grey",
              px: "10px",
              borderRadius: "5px",
              fontWeight: 600,
              textTransform: "capitalize",
              textAlign: "center",
              cursor: "pointer",
            }}
          >
            OUR ADDITIONAL SERVICES
          </Typography>
        </Box>

        <Box
          sx={{
            mt: 2,
          }}
        >
          <Grid container spacing={2}>
            {oversev.map((item) => {
              return (
                <Grid item xs={12} sm={6} lg={4}>
                  <Box
                    key={item.id}
                    onClick={() => {
                      hadlingopen(item);
                    }}
                    sx={{
                      bgcolor: dark ? "#042426 " : "#80808061",
                      boxShadow: "0px 0px 5px -2px black",
                      height: "120px",
                      borderRadius: "12px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      cursor: "pointer",
                    }}
                  >
                    <Box>
                      <Typography
                        sx={{
                          textAlign: "center",
                          color: dark ? "#FFFFFF " : "blue",
                          fontSize: "25px",
                        }}
                      >
                        {item.icon}
                      </Typography>
                      <Typography
                        sx={{
                          color: dark ? "#FFFFFF " : "black",
                          textAlign: "center",
                          fontSize: "18px",
                          fontWeight: 700,
                        }}
                      >
                        {item.title}
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
              );
            })}
          </Grid>
        </Box>
      </Box>

      <Model open={open} senddata={senddata} setOpen={setOpen} />
    </>
  );
};
export default service;
