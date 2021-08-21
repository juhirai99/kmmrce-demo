import React from "react";
import { Button, Wrapper, Section } from "..";
import * as Styled from "./explore-platform.styles";
import useBreakpoints from "../../hooks/useBreakpoint";
import {Animated} from "react-animated-css";
export const ExplorePlatform = () => {
  const { isLaptop } = useBreakpoints();
  return (
    <Styled.Explore >
      { isLaptop && (
        <Styled.Content>
          <Styled.Img src={process.env.PUBLIC_URL+'/image/image-1.png'}/>
          <Styled.Img src={process.env.PUBLIC_URL+'/image/image-2.png'}/>
          <Styled.Img src={process.env.PUBLIC_URL+'/image/image-3.png'} />
          <Styled.Img  src={process.env.PUBLIC_URL+'/image/image-6.png'}/>
          <Styled.Img src={process.env.PUBLIC_URL+'/image/image-5.png'} />
          <Styled.Img src={process.env.PUBLIC_URL+'/image/image-4.png'} />
        </Styled.Content>
      )}
      <Wrapper>
      <Animated animationIn="fadeInLeft" animationInDuration={2500} component="div" >
        <Styled.PlatformDiv>
          <Section title="Platform" description="Sell digital or physical inventory, with configurable or simple attributes, in a way that suits your business.">
            <Button type="buttonStyleWhite">Explore the Platform</Button>
          </Section>
        </Styled.PlatformDiv>
        </Animated>
      </Wrapper>
    </Styled.Explore>
  );
};

export default ExplorePlatform;
