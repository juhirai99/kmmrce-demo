import React from "react";
import { Button, Wrapper } from "../../components";
import * as Styled from "./introduction.styles";
import {Animated} from "react-animated-css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Typed from 'react-typed';

export const Introduction = () => {
  const notify = () => toast("Request Sumbitted");
  return(
  <Wrapper>
    <Styled.introduction>
      <Styled.Introdiv>
      <Animated animationIn="fadeInLeft" animationInDuration={2000} component="div" >
        <Styled.Heading>
          <Styled.coloredSpan>
          <Typed strings={['KMMRCE']} typeSpeed={50}  loop={true}/>
            </Styled.coloredSpan> is an enterprise 
          <Styled.paragraph>level digital platform that 
          </Styled.paragraph>
          provides a turnkey solution to online retailing.
        </Styled.Heading>
        </Animated>
        <Animated animationIn="fadeInLeft" animationInDuration={2000} component="div" >
        <Button type="lightColor" onClick={notify}>Request Demo</Button>
        </Animated>
      </Styled.Introdiv>
      <Animated animationIn="zoomIn" animationInDuration={2000} component="div" >
      <Styled.ImageDiv>
        <Styled.Image src={process.env.PUBLIC_URL+"/image/circle.png"} alt="hero image" />
      </Styled.ImageDiv>
      </Animated>
    </Styled.introduction>
  </Wrapper>
)};

export default Introduction;
