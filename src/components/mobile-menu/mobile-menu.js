import MENU_MOCK from "../../service/navigation.mock"
import React from "react";
import * as Styled from "./mobile-menu.styles";

const menuVisibility = {
  show: { opacity: 1, x: 0 },
  hidden: { opacity: 0, x: "100%" },
};

const navigation = {
  show: { opacity: 1},
  hidden: { opacity: 0 }
};

const navVisibility = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

export const MobileMenu = ({ isOpen }) => (
  <Styled.MobileMenu variants={menuVisibility} initial={{ x: "100%" }}
    animate={isOpen ? "show" : "hidden"} transition={{ duration: 0.5 }}
>
    <Styled.Menu variants={navigation} initial="hidden" animate="show">
      {MENU_MOCK.menu.map(({ name }) => (
        <Styled.Nav variants={navVisibility} key={name}>{name}</Styled.Nav>
      ))}
    </Styled.Menu>
  </Styled.MobileMenu>
);

export default MobileMenu;
