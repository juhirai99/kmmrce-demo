import React from "react";
import MENU_LIST from "../../service/navigation.mock";
import * as Styled from "./navigation.styles";

export const Navigation = () => {
  return (
    <Styled.Navigation>
      <Styled.List>
        {MENU_LIST.menu.map(({ name, link }) => (
            <a href={`${link}`} key={link}><Styled.Item>{name}</Styled.Item></a>
        ))}
      </Styled.List>
    </Styled.Navigation>
  );
};

export default Navigation;
