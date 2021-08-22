import styled from "@emotion/styled";
import { mediaQuery } from "../../styles/styles";

export const Head = styled.th(() => {
  return mediaQuery({
    display: ["none", "block"],
    width: ["100%", "25%"],
  });
});

export const Body = styled.tbody``;

export const Table = styled.table`
  width: 100%;
`;
export const Row = styled.tr(() => {
  return mediaQuery({
    padding: [0, `16px`],
    "&:first-child": {
      borderBottom: "none",
    },
    "&:last-child": {
      borderBottom: "none",
    },
    display: "flex",
    flexDirection: ["column", "row"],
    borderBottom: "1px solid #acacac"
  });
});

export const Icon = styled.img``;
export const Item = styled.h4`
  font-size: 0px;
  padding-bottom:16px;
  padding-top: 4px;

`;
export const SubTitle = styled.h4`
  border-bottom: 1px solid #acacac;
  font-weight: 500;
  font-size:22px;
  padding:16px;
`;
export const Title = styled.h3`
  font-size: 16px;
  padding-top: 4px;
  padding-bottom: 16px;
`;
export const WrappedDiv = styled.div`
  flex: 2;
  display: flex;
`;

export const Icons = styled.img``;
export const Column = styled.td((props) => {
  return mediaQuery({
    "&:first-child": {
      textAlign: "left",
      marginTop: [`4px`],
    },
    textAlign: "center",
    marginTop: [`4px`],
    flex: ["100%", "1"],
    marginBottom: [`8px`],
    
  });
});

export const QuotedPrice = styled.span`
  display: block;
  font-size: 24px;
  padding-bottom: 4px;
`;
