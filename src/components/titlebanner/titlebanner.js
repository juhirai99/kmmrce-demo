import React, { useCallback, useState } from "react";
import * as Styled from "./titlebanner.styles";
import { Wrapper } from "../wrapper/wrapper.styles";
import {Button} from "../button/button"
import useBreakpoint from "../../hooks/useBreakpoint";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MENU_LIST from "../../service/navigation.mock";
import MENU_MOCK from "../../service/navigation.mock"

export const Titlebanner = () => {
  const [isOpen, openModal] = useState(false);
  const { isLaptop } = useBreakpoint();
  const toggleNavigationBar = useCallback(() => {
    openModal(!isOpen);
  }, [isOpen]);
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
  return (
    <Styled.Banner>
      <Wrapper>
        <Styled.BannerWrapper>
          <Styled.MenuLogo src={process.env.PUBLIC_URL+"/image/logo.svg"} alt="kMMRCE Logo" />
          {!isLaptop && (
            <Styled.ButtonDiv onClick={toggleNavigationBar}>
               {!isOpen && <FontAwesomeIcon icon={faBars} />}
               {isOpen && <FontAwesomeIcon icon={faTimes} />}
            </Styled.ButtonDiv>
          )}
          {isLaptop &&
          <Styled.Navigation>
          <Styled.List>
            {MENU_LIST.menu.map(({ name, link }) => (<a href={`${link}`} key={link}><Styled.Item>{name}</Styled.Item></a>))}
          </Styled.List>
        </Styled.Navigation>
          }
          {isLaptop && <Button type="lightColor">Request Demo</Button>}
        </Styled.BannerWrapper>
        <Styled.NavigationDrawer>
          {isOpen &&
          <Styled.MobileMenu variants={menuVisibility} initial={{ x: "100%" }}
          animate={isOpen ? "show" : "hidden"} transition={{ duration: 0.5 }}
          >
          <Styled.Menu variants={navigation} initial="hidden" animate="show">
         {MENU_MOCK.menu.map(({ name }) => (
         <Styled.Nav variants={navVisibility} key={name}>{name}</Styled.Nav>
         ))}
        </Styled.Menu>
        </Styled.MobileMenu>
          }
        </Styled.NavigationDrawer> 
      </Wrapper>
   </Styled.Banner>
  );
};
export default Titlebanner;
