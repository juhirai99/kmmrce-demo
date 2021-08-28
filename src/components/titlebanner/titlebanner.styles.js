import styled from "@emotion/styled";
import { motion } from "framer-motion";

export const Banner = styled.div`
  border-bottom: 1px solid #acacac;
  padding: 0px 0;
  align-self: flex-start;
  position: -webkit-sticky;
  position: sticky;
  top:0;
  left:0;
  z-index : 1020;
  background-color : white;
`;
export const BannerWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding :27px;
`;

export const MenuLogo = styled.img`
  height: 35px;
`;

export const NavigationDrawer = styled.div`
  position: relative;
  > button {
    top: 0;
    padding: 0;
    right: 0;
    position: absolute;
  }
`;


export const ButtonDiv = styled.div`
  display: inline-block;  
  z-index: 999;
  position: relative;
  height: 27px;
  width: 32px;
`;

export const Bar = styled.span`
  width: 100%;
  margin-top: 10px;
  position: absolute;
  height: 9px;
  background-color: #333;
`;

export const ToggleButton = styled.i`
  cursor: pointer;
  top: -4px;
  opacity: 0;
  position: absolute;
  left: -4px;
  width: 100%;
  height: 100%;
  z-index: 1;
  }
`;

export const Navigation = styled.nav`

`;
export const List = styled.ul``;
export const Item = styled.li`
  position: relative;
  display: inline-block;
  margin-right:32px;
  font-family: yellixregular,sans-serif;
  font-weight: 200;
  font-size: 15px;
  color: #333;
  padding-bottom: 4px;
  &:after {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    width: 0;
    margin: auto;
    height: 2px;
    background-color: #333333;
  }

  &:hover:after {
    width: 100%;
  }
`;

export const MobileMenu = styled(motion.div)`
  width: 50%;
  background-color: #0c4d7b;
  position : fixed;
  height: 100vh;
  padding: 0 17px;
  z-index : 1302;
  left :0;
  bottom :0;
  top:0
`;

export const Menu = styled(motion.ul)`
  padding-top: 32px;
`;
export const Nav = styled(motion.li)`
  list-style: none;
  color:#fff;
  font-size: 18px;
  font-weight :400;
  padding-bottom: 8px;
  line-height :40px;
  
`;

