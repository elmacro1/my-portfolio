"use client";
import { ReactNode, createContext, useState } from "react";

export const SlideMenuContext = createContext({
  isOpen: false,
  closeSlide: () => {},
  openSlide: () => {},
});

interface Props {
  children: ReactNode;
}

const SlideMenuContextProvider = ({ children }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  const closeSlide = () => {
    setIsOpen(false);
  };

  const openSlide = () => {
    setIsOpen(true);
  };

  return (
    <SlideMenuContext.Provider value={{ isOpen, closeSlide, openSlide }}>
      {children}
    </SlideMenuContext.Provider>
  );
};

export default SlideMenuContextProvider;
