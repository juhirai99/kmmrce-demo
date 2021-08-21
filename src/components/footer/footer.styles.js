import styled from "@emotion/styled";
import { mediaQuery } from "../../styles/styles";

export const FooterDiv = styled.div`
  padding: 24px 0;
  background: #1f1f1f;
`;

export const MobileFooter = styled.div`
  display: flex;
  ${mediaQuery({ flexDirection: ["column", "row"] })}
  align-items: flex-start;
  justify-content: space-between;
`;


export const FooterWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const Kmmrcelogo = styled.img`
  width: 35px;
`;

export const Heading = styled.div`
 font-weight: 500; 
 color: #fff;
  padding-bottom: 4px;
`;

export const Navigation = styled.div((props) => {
  return mediaQuery({
    marginRight: [`16px`, `32px`],
    marginTop: [`32px`, 0],
    marginLeft: [0, `32px`],
  });
});


export const Url = styled.a`
  text-decoration: none;
  color: #acacac;
  padding-bottom: 4px;
  display: block;
`; 
export const NavigationMenu = styled.div`
  color: "#acacac;
`;

