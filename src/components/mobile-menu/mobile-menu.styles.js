import styled from "@emotion/styled";
import { motion } from "framer-motion";

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
