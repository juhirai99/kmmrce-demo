import React from "react";
import { Button } from "../button/button";
import * as Styled from "./document.styles";

export const Document = () => {
  return (
    <Styled.Document >
      <Styled.WrapperDiv data-aos="slide-left"
              data-aos-offset="500"
              data-aos-duration="1000">
        <Styled.Title>Case Study</Styled.Title>
        <Styled.Subtitle>Created with KMMRCE: Watch <Styled.Paragraph> 1010</Styled.Paragraph></Styled.Subtitle>

        <Styled.Description>
        Disrupting and democratizing healthcare. Butterfly’s ambitious,
        rapid global scale-out is only possible with the support of Saleor. Their incredible journey has already taken the company from a disruptive startup to Apple Design Awards Winner 2019
        </Styled.Description>
        <Styled.ButtonDiv>
          <Button type="buttonStyleDark">View Case Study</Button>
          <Button type="buttonStyleDark">View All</Button>
        </Styled.ButtonDiv>
      </Styled.WrapperDiv>
      <Styled.ImgDiv data-aos="fade-zoom-in" data-aos-offset="400" data-aos-easing="ease-in-sine" data-aos-duration="600">
          <Styled.caseStudy src= {process.env.PUBLIC_URL+"/image/image-7.svg"}/> 
      </Styled.ImgDiv>
    </Styled.Document>
  );
};
export default Document;
