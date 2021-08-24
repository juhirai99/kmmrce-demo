import styled from "@emotion/styled";
import { mediaQuery } from "../../styles/styles";

export const Section = styled.div`
  padding: 64px 0;
  display: flex;
  flex-direction: column;
  align-items: ${(props) => (props.alignLeft ? "flex-start" : "center")};
  margin-left :10px;
`;

export const Description = styled.span(() => {
  return mediaQuery({
    maxWidth: ["100%", "65%"],
    display: "inline-block",
    padding: [`24px 0`],
    fontSize: [`20px`,`39px`,],
    fontFamily: "yellixregular, sans-serif"

  });
});

export const Title = styled.h2`
  font-weight: 100;  
  font-size: 28px;
  font-family: "yellixregular, sans-serif",
  width: 100%;
  text-align: ${(props) => (props.alignLeft ? "left" : "center")};
`;

export const Subtitle = styled.h3(() => {
  return mediaQuery({
    fontSize: [`20px`,`30px`,],
    paddingBottom: [`34px`],
    maxWidth: ["100%", "60%"],
    fontFamily: "yellixregular, sans-serif",
    fontWeight : "300"
  });
});


