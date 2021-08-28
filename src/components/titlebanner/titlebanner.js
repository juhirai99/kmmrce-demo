import React, { useCallback, useState } from "react";
import * as Styled from "./titlebanner.styles";
import { Wrapper } from "../wrapper/wrapper.styles";
import {MobileMenu} from "../mobile-menu/mobile-menu"
import {Button} from "../button/button"
import useBreakpoint from "../../hooks/useBreakpoint";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MENU_LIST from "../../service/navigation.mock";

export const Titlebanner = () => {
  const [isOpen, setIsModalOpen] = useState(false);
  const { isLaptop } = useBreakpoint();
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
          {isLaptop &&
          <Styled.Navigation>
          <Styled.List>
            {MENU_LIST.menu.map(({ name, link }) => (
                <a href={`${link}`} key={link}><Styled.Item>{name}</Styled.Item></a>
            ))}
          </Styled.List>
        </Styled.Navigation>
          
          }
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
