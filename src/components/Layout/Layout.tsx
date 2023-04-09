import React from "react";
import Navbar from "../Navbar/Navbar";

// https://stackoverflow.com/questions/59106742/typescript-error-property-children-does-not-exist-on-type-reactnode

interface Props {
  children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
};
export default Layout;
