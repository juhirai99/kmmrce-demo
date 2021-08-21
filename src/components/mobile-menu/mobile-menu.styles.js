import styled from "@emotion/styled";
import { motion } from "framer-motion";

export const MobileMenu = styled(motion.div)`
  width: 330px;
  position: fixed;
  background-color: #0c4d7b;
  right: 0;
  bottom: 0;
  height: 100%;
  padding: 0 17px;
  z-index:9;
`;

export const Menu = styled(motion.ul)`
  padding-top: 32px;
  margin-left :45px;
`;
export const Nav = styled(motion.li)`
  list-style: none;
  color:#fff;
  font-size: 18px;
  font-weight :400;
  padding-bottom: 8px;
  line-height :40px;
`;
