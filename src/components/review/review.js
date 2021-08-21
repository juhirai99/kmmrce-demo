import React from "react";

import { Wrapper } from "../wrapper/wrapper";
import * as Styled from "./review.styles";

export const Review = () => {
  return (
    <Styled.Review>
      <Wrapper>
        <Styled.Container>
          <Styled.doublequote>“</Styled.doublequote>
          <Styled.Comment>
            KMMRCE is an ideal solution for anyone looking to build a bespoke
            e-commerce website. A great foundation has been designed to get you
            started on a fully-fledged storefront 
            with minimal effort.
          </Styled.Comment>
          <Styled.doublequote>“</Styled.doublequote>
          <Styled.TowerImg src={process.env.PUBLIC_URL+"/image/image-11.png"} alt="feedback image" />
          <Styled.givenby>
            Tyler Hilderband, Head of Engineering at patch
          </Styled.givenby>
        </Styled.Container>
      </Wrapper>
    </Styled.Review>
  );
};

export default Review;
