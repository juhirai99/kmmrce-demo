import styled from "@emotion/styled";
import { mediaQuery } from "../../styles/styles";

export const header = styled.h2`
font-size: 40px;
font-weight :300
`
export const ProjectDetail = styled.div`
  ${mediaQuery({ flexDirection: ["column", "row"] })}
  overflow: hidden;
  display: flex;
  margin-left:20px;
`;

export const wrapperDiv = styled.div(() => {
    return mediaQuery({
      flex: "1 1 0",
      marginTop :"20px"
    });
  });
export const Span = styled.p`
font-family:Yellix TRIAL; 
font-weight: formal;
 font-size: 23px; 
 color: rgba(172,172,172,1)
`

export const description = styled.p`
font-family:Yellix TRIAL; 
font-weight: formal; 
font-size: 20px;
text-decoration : underline
`
export const LightText = styled.p`
font-family:Yellix TRIAL; 
font-weight: formal; 
font-size: 32px; 
color: rgba(172,172,172,1)
`
export const ImageDiv= styled.div`
margin-top :20px;
flex: 1 1 0;
${mediaQuery({ order: [0, 1, 1] })}
`;

export const ImageText = styled.h1`
font-size : 24px;
font-weight :400
`

export const Image = styled.img`
width :100%
`

export const Icons = styled.img``

export const Text = styled.span`
font-size : 20px
`

export const NewLine = styled.br``