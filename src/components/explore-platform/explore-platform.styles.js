import styled from "@emotion/styled";
import { mediaQuery } from "../../styles/styles";

export const Explore = styled.div`
  display: flex;
  align-items: center;  
  position: relative;
  background: #1f1f1f;
  color: #fff;
  ${mediaQuery({ height: ["auto", "1000px"] })}
`;

export const Content = styled.div`
  z-index: 1;  
  position: absolute;
  transform: translateX(-50%) translateY(-50%);
  top: 50%;
  left: 50%;
  display: grid;
  row-gap: 300px;
  grid-template-columns: repeat(3, 1fr);
`;

export const PlatformDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 9;
`;

export const Img =styled.img`
  max-width: 650px;
`;
