"use client";
import React, { createContext, useState, FC, ReactNode } from "react";

type RadioContextType = {
  handleClick: () => void;
  hide: boolean;
};

export const RadioContext = createContext<RadioContextType>({
  handleClick: () => {},
  hide: false,
});

export const RadioProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [hide, setHide] = useState<boolean>(false);
  const handleClick = () => {
    setHide(() => !hide);
    console.log("handle click", hide);
  };

  return (
    <RadioContext.Provider value={{ handleClick, hide }}>
      {children}
    </RadioContext.Provider>
  );
};
