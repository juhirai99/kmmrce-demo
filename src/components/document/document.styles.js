import styled from "@emotion/styled";
import { mediaQuery } from "../../styles/styles";

export const Document = styled.div`
  ${mediaQuery({ flexDirection: ["column", "row"] })}
  overflow: hidden;
  display: flex;
  align-items: flex-end;
  margin-left :20px;
`;
export const Title = styled.span`
font-size: 20px;
`;
export const Subtitle = styled.h3`
  ${mediaQuery({ maxWidth: ["100%", "70%"] })};
  font-size: 30px;
  margin-top:0px
`;

export const Description = styled.span`
  display: inline-block;
  ${mediaQuery({ maxWidth: ["100%", "70%"] })};
  font-size: 20px;
  padding: 30px 0;
  color: #333;
  line-height :1.5
  font-family: "yellixregular",sans-serif;
`;

export const caseStudy = styled.img`
 max-width: 100%;
`;

export const ImgDiv= styled.div`
flex: 1 1 0;
${mediaQuery({ order: [0, 1, 1] })}
`;
export const ButtonDiv = styled.div`
  & > button {
    margin-right: 5px;
  }
  display: flex;
`;

export const WrapperDiv = styled.div(() => {
  return mediaQuery({
    flex: "1 1 0",
    order: [1, 0, 0],
    padding: [`22px`, 0],
  });
});

export const Paragraph = styled.p`
margin-top :0px;
`