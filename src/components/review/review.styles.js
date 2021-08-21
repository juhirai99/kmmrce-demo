import styled from "@emotion/styled";
import { mediaQuery } from "../../styles/styles";

export const Review = styled.div`
  padding: 64px 0;
  background: #3cd17f;
  color: #333;
`;
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const doublequote = styled.span(() => {
  return mediaQuery({
    fontSize: [`21px`,`25px`],
    fontWeight: 400,  
  });
});

export const TowerImg = styled.img`
  width: 160px;
`;

export const givenby = styled.span(() => {
  return mediaQuery({
    fontSize: [`10px`,`18px`,],
    fontWeight: 400,  
  });
});
export const Comment = styled.h2(() => {
  return mediaQuery({
    fontWeight: 510,
    fontSize: [`25px`,`43px`],
    textAlign: "center",
    maxWidth: ["100%", "70%"],
    
  });
});



