import React from "react";

import { Wrapper } from "../wrapper/wrapper";
import * as Styled from "./review.styles";
import {Animated} from "react-animated-css";

export const Review = () => {
  return (
    <Styled.Review>
      <Wrapper>
        <Styled.Container>
          <Styled.doublequote>“</Styled.doublequote>
          <Styled.Comment>
          <Animated animationIn="slideInDown" animationInDuration={6000} component="div" >
            KMMRCE is an ideal solution for anyone looking to build a bespoke
            e-commerce website. A great foundation has been designed to get you
            started on a fully-fledged storefront 
            with minimal effort.
            </Animated>
          </Styled.Comment>
          <Styled.doublequote>“</Styled.doublequote>
          <Animated animationIn="zoomIn" animationInDuration={6000} component="div" >
          <Styled.TowerImg src={process.env.PUBLIC_URL+"/image/image-11.png"} alt="feedback image" />
          </Animated>
          <Styled.givenby>
            Tyler Hilderband, Head of Engineering at patch
          </Styled.givenby>
        </Styled.Container>
      </Wrapper>
    </Styled.Review>
  );
};

export default Review;
