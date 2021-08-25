import React from "react";
import { Button, Wrapper } from "../../components";
import * as Styled from "./introduction.styles";
import {Animated} from "react-animated-css";


export const Introduction = () => {
  return(
  <Wrapper>
    <Styled.introduction>
      <Styled.Introdiv>
        <Styled.Heading>
          <Styled.coloredSpan>KMMRCE
            </Styled.coloredSpan> is an enterprise 
          level digital platform that 
          provides a turnkey solution to online retailing.
        </Styled.Heading>
        <Button type="lightColor">Request Demo</Button>
      </Styled.Introdiv>
      <Animated animationIn="zoomIn" animationIterationCount="infinite" animationInDuration={2000} component="div" >
      <Styled.ImageDiv>
        <Styled.Image src={process.env.PUBLIC_URL+"/image/circle.png"} alt="hero image" />
      </Styled.ImageDiv>
      </Animated>
    </Styled.introduction>
  </Wrapper>
)};

export default Introduction;
