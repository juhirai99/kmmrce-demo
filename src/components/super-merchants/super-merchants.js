import React from "react";
import * as Styled from "./super-merchants.styles";
import { Button, Section } from "../../components";
import {Animated} from "react-animated-css";

export const SuperMerchants = () => {
  return (
    <Styled.Merchants>
      <Styled.wrapperDiv>
      <Animated animationIn="jello" animationInDuration={6000} component="div" >  
        <Section title="Super Merchants" description="Multisite, made easy." subtitle="Sed magna enim, bibendum a quam eu, commodo consectetur quam. Morbi pellentesque eu dolor luctus sagittis, Praesent commodo velit eget
            urna mollis dignissim.Nunc lobortis, augue non pulvinar consequat, enim massa pharetra neque.">
          <Button type="buttonStyleWhite">Explore Super Merchants</Button>
        </Section>
        </Animated>
      </Styled.wrapperDiv>
    </Styled.Merchants>
  );
};

export default SuperMerchants;
