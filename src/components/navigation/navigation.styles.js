import styled from "@emotion/styled";

export const Navigation = styled.nav``;
export const List = styled.ul``;
export const Item = styled.li`
  position: relative;
  display: inline-block;
  margin-right:32px;
  font-size: 18px;
  color: #333;
  padding-bottom: 4px;
  &:after {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    width: 0;
    margin: auto;
    height: 2px;
    background-color: #333333;
  }

  &:hover:after {
    width: 100%;
  }
`;
