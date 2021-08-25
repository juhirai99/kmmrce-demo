import React from "react";
import { Button, Wrapper, Section } from "..";
import * as Styled from "./explore-platform.styles";
import useBreakpoints from "../../hooks/useBreakpoint";
export const ExplorePlatform = () => {
  const { isLaptop } = useBreakpoints();
  return (
    <Styled.Explore >
      { isLaptop && (
        <Styled.Content>
          <Styled.Img src={process.env.PUBLIC_URL+'/image/image-1.png'} className={"wrapperCol"}
              data-aos="fade-up"
              data-aos-offset="200"
              data-aos-delay="50"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"/>
          <Styled.Img src={process.env.PUBLIC_URL+'/image/image-2.png'} data-aos="fade-up"
              data-aos-offset="200"
              data-aos-delay="50"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"/>
          <Styled.Img src={process.env.PUBLIC_URL+'/image/image-3.png'} data-aos="fade-up"
              data-aos-offset="200"
              data-aos-delay="50"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"/>
          <Styled.Img  src={process.env.PUBLIC_URL+'/image/image-6.png'} data-aos="fade-up"
              data-aos-offset="200"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"/>
          <Styled.Img src={process.env.PUBLIC_URL+'/image/image-5.png'} 
          data-aos="fade-up"
          data-aos-offset="300"
          data-aos-duration="500"
          data-aos-easing="ease-in-out"/>
          <Styled.Img src={process.env.PUBLIC_URL+'/image/image-4.png'} 
          />
        </Styled.Content>
      )}
      <Wrapper >
        <Styled.PlatformDiv data-aos="fade-up"
              data-aos-offset="100"
              data-aos-duration="500"
              data-aos-easing="ease-in-out"> 
          <Section title="Platform" description="Sell digital or physical inventory, with configurable or simple attributes, in a way that suits your business.">
            <Button type="buttonStyleWhite">Explore the Platform</Button>
          </Section>
        </Styled.PlatformDiv>
      </Wrapper>
    </Styled.Explore>
  );
};

export default ExplorePlatform;
