import React from "react";
import { skolCDN_URL, logo_URL } from "../constants/urls";

export const Logo = ({variant, position, classes}) => {

  const styles = {
  small: "h-auto max-h-[7.5em] w-[7.5em] max-w-[7.5em]",
  normal: "h-auto max-h-[15em] w-[15em] max-w-[15em]",
  large: "h-auto max-h-[30em] w-[30em] max-w-[30em]",
};

  const positions = {
    main: `${logo_URL}`,
  }

  const logoStyle = styles[variant] ?? styles.normal;
  const logoUrl = positions[position] ?? positions.main;

  return (
    <>
      <img 
        className={`${classes} ${logoStyle}`} 
        src={`${skolCDN_URL}${logoUrl}`} 
      />
    </>
  )
}