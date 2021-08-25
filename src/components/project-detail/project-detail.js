import React from "react"
import * as Styled from "./project-detail.styles";

export const ProjectDetail = () => (
    <Styled.ProjectDetail>
     <Styled.ImageDiv data-aos="zoom-in-right" data-aos-offset="200"
          data-aos-duration="500"
          data-aos-easing="ease-in-out">
       <Styled.ImageText>
       Duis aute irure dolor in reprehenderit in voluptate velit 
        </Styled.ImageText> 
      <Styled.ImageText>
      esse cillum dolore eu fugiat nulla pariatur.
      </Styled.ImageText>  
      <Styled.Icons src={process.env.PUBLIC_URL+`/image/tick.svg`}/> 
      <Styled.Text>Sed manga enim</Styled.Text>
      <Styled.NewLine></Styled.NewLine>
      <Styled.Icons src={process.env.PUBLIC_URL+`/image/tick.svg`}/> 
      <Styled.Text>Bidendum a quam eu</Styled.Text>  
    <Styled.Image src={process.env.PUBLIC_URL + '/image/project.jpeg'}></Styled.Image>
    </Styled.ImageDiv> 
    <Styled.wrapperDiv data-aos="zoom-in-left" data-aos-offset="200"
          data-aos-delay="200"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out">
    <Styled.header>Lorem ipsum dolor sit  amet, consectetur adipiscing elit, sed do</Styled.header>
    <Styled.Span>
     Stay up to date with the feed
    </Styled.Span>
    <Styled.description>Keep track of projects</Styled.description>
    <Styled.LightText>Invite and view your team members</Styled.LightText>
  
    </Styled.wrapperDiv>  
    </Styled.ProjectDetail>
    );

export default ProjectDetail;
