"use client";
// import {  } from 'react';
import { createContext, useState } from "react";

export const Commcon = createContext();

const Commconfn = ({ children }) => {
  const [toggleside, setToggleside] = useState(false);
  const [dark, setDark] = useState(false);
  const [userimg, setuserimg] = useState('/img/png/admin.jpg');
  const [addToPolicy,setAddToPolicy] = useState([]);
  return (
    <Commcon.Provider
      value={{
        toggleside,
        setToggleside,
        dark,
        setDark,
        userimg,
        setuserimg,
        addToPolicy,
        setAddToPolicy
      }}
    >
      {children}
    </Commcon.Provider>
  );
};
export default Commconfn;
