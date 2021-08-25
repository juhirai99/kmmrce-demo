import styled from "@emotion/styled";
import { mediaQuery } from "../../styles/styles";
export const Document = styled.div` 
display: flex; 
align-items : flex-end; 
${mediaQuery({ flexDirection: ["column", "row"] })}
 overflow: hidden;`;

export const WrapperDiv = styled.div(() => { 
  return mediaQuery({ flex: "1 1 0", order: [1, 0, 0], 
  padding: [`28px`, 0], });
});

export const Title = styled.span`
font-size: 20px;
${mediaQuery({ marginLeft: ["25%", "2%"] })};
`;

export const Subtitle = styled.h3` 
${mediaQuery({ maxWidth: ["100%", "70%"] })}; 
${mediaQuery({ marginLeft: ["25%", "2%"] })};
${mediaQuery({ fontSize: ["28px", "3.8rem"] })}; 
margin-top:0px; 
font-family :"yellixregular, sans-serif";
 font-weight : 300;`;

export const Description = styled.span`
 display: inline-block; 
${mediaQuery({ maxWidth: ["100%", "70%"] })}; 
${mediaQuery({ marginLeft: ["25%", "2%"] })};
font-size: 28px; 
padding: 20px 0;
 color: #333; 
 line-height :1.0; 
 font-family: "yellixregular",sans-serif; 
 font-weight :300; 
 word-spacing: 5px;`;

export const caseStudy = styled.img` width: 100%;`;
export const ImgDiv= styled.div`
flex: 1 1 0;
`;

export const ButtonDiv = styled.div`
${mediaQuery({ marginLeft: ["25%", "2%"] })};
& > button { margin-right: 5px; } 
display: flex;`;

export const Paragraph = styled.p`
margin-top :0px;
`