import styled from "@emotion/styled";
import { mediaQuery } from "../../styles/styles";
import { Section } from "../section/section.styles";

export const CustomerDetail = styled(Section)`
 margin-top :-50px;
 flex-direction: row;
 ${mediaQuery({ flexDirection: ["column", "row"] })}
`;
export const Image = styled.img`
  ${mediaQuery({ maxWidth: ["100%", "60%"] })}
`;
export const ImageDiv = styled.div`
  flex: 1 1 0;
  text-align: center;
`;
export const Div = styled.div(() => {
  return mediaQuery({
    paddingRight: [`24px`, "0"],
    paddingLeft: [`24px`, "0"],
    flex: "1 1 0", 
  });
});

export const Heading = styled.h2(() => {
  return mediaQuery({
    marginBottom: [`16px`],
    maxWidth: ["100%", "80%"],
    fontSize: [`21px`,`26px`,],
    fontWeight: 600,
  });
});

export const Development = styled.div`
  margin-bottom: 16px;
`;
export const Images = styled.img`
  margin-right: 4px;
`;
export const Description = styled.span`
font-size : 30px
font-weight : 400
`;

export const Subtitle = styled.p`
  margin-bottom: 4px;
  font-size : 18px;
  padding-bottom :15px
`;
export const Item = styled.li`
  margin-bottom: 4px;
  display: flex;
  list-style: none;
`;

export const List = styled.ul`
margin-left : -38px;
`;

export const Line = styled.hr`
`


