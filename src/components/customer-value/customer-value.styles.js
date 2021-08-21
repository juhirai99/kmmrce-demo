import styled from "@emotion/styled";
import { mediaQuery } from "../../styles/styles";

export const CustomerValue = styled.div`
 background: #1f1f1f;
 color: #fff;  
`;

export const ValueDiv = styled.div((props) => {
  return mediaQuery({
    borderRight: "1px solid #acacac",
    padding: [`32px`],
    borderBottom: [`1px solid #acacac`, "none"],
    "&:last-child ": {
      border: "none",
    },
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  });
});

export const Div = styled.div((props) => {
  return mediaQuery({
    padding: [0, `0px 4px`],
    borderTop: "1px solid #acacac",
    display: "flex",
    flexDirection: ["column", "row"],
    justifyContent: "center",
    alignItems: "center",
  });
});

export const CustomerValueTitle = styled.span`
  font-size: 19px;
  font-family: "akkurat-monoregular";
`;

export const CustomerValueDesc = styled.span`
  padding: 25px 0;
  font-size: 19px;
  display: inline-block;
`;

export const Image = styled.img`
  margin-bottom: 9px;
  width: 55px;
`;

export const wrapperDiv = styled.div`
margin-left : 20px
`
