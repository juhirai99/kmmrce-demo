import React, { useCallback, useState } from "react";
import * as Styled from "./titlebanner.styles";
import { Wrapper } from "../wrapper/wrapper.styles";
import {Navigation} from "../navigation/navigation"
import {MobileMenu} from "../mobile-menu/mobile-menu"
import {Button} from "../button/button"
import useBreakpoints from "../../hooks/useBreakpoint";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Titlebanner = () => {
  const [isOpen, setIsModalOpen] = useState(false);
  const { isLaptop } = useBreakpoints();
  const toggleNavigationBar = useCallback(() => {
    setIsModalOpen(!isOpen);
  }, [isOpen]);
  
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
          {isLaptop && <Navigation />}
          {isLaptop && <Button type="lightColor">Request Demo</Button>}
        </Styled.BannerWrapper>
        <Styled.NavigationDrawer>
          {isOpen && <MobileMenu isOpen={isOpen} />}
        </Styled.NavigationDrawer>
        
      </Wrapper>
   </Styled.Banner>
  );
};
export default Titlebanner;
