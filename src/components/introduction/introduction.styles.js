import styled from "@emotion/styled";
import { mediaQuery } from "../../styles/styles";

export const introduction = styled.div`
  ${mediaQuery({ flexDirection: ["column", "row", "row"] })}
  display: flex;
  margin-bottom : 0px;
  margin-left :10px;
  font-family: yellixregular,sans-serif

`;
export const Heading = styled.h2`
font-weight: 300 !Important;
font-family: yellixregular,sans-serif;
${mediaQuery({ fontSize: ["25px", "4.3rem"] })}
${mediaQuery({ lineHeight: ["2.8rem", "4.5rem"] })}
text-align :left;
letter-spacing: -1.36px;
`;
export const coloredSpan = styled.span`
color :#4B42AD;
font-family: yellixregular,sans-serif;

`
export const paragraph = styled.p`
margin-top :0px;
margin-bottom :0px
`;
export const Introdiv = styled.div((props) => {
  return mediaQuery({
    order: [1, 0, 0],
    borderRight: ["none", `1px solid #acacac`],
    display: "flex",
    flexDirection: "column",
    alignItems: ["center", "flex-start"],
    justifyContent: "center",
    flex: "1 1 0",
    marginBottom :"-6px"

  });
});

export const Image = styled.img`
  ${mediaQuery({ maxWidth: ["100%", "73%"] })}
`;

export const ImageDiv = styled.div`
${mediaQuery({ order: [0, 1, 1] })}
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1 1 0;
  margin: 32px 0;
`;




