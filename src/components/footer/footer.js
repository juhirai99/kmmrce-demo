import React from "react";

import { Wrapper } from "../wrapper/wrapper";
import * as Styled from "./footer.styles";
import ITEM_MOCK from "../../service/footer.mock";

export const Footer = () => (
  <Styled.FooterDiv>
    <Wrapper>
      <Styled.MobileFooter>
        <Styled.Kmmrcelogo src={process.env.PUBLIC_URL+'/image/logo1.svg'} alt="KMMRCE logo" />
        <Styled.FooterWrapper>
          {ITEM_MOCK.items.map(({ title, links }) => (
            <Styled.Navigation key={title}>
              <Styled.Heading>{title}</Styled.Heading>
              <Styled.NavigationMenu>
                {links.map(({ title, url }) => (
                  <Styled.Url href={url} key={title}>
                    {title}
                  </Styled.Url>
                ))}
              </Styled.NavigationMenu>
            </Styled.Navigation>
          ))}
        </Styled.FooterWrapper>
      </Styled.MobileFooter>
    </Wrapper>
  </Styled.FooterDiv>
);

export default Footer;
