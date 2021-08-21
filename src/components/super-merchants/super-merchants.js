import React from "react";
import * as Styled from "./super-merchants.styles";
import { Button, Section } from "../../components";

export const SuperMerchants = () => {
  return (
    <Styled.Merchants>
      <Styled.wrapperDiv>
        <Section title="Super Merchants" description="Multisite, made easy." subtitle="Sed magna enim, bibendum a quam eu, commodo consectetur quam. Morbi pellentesque eu dolor luctus sagittis, Praesent commodo velit eget
            urna mollis dignissim.Nunc lobortis, augue non pulvinar consequat, enim massa pharetra neque.">
          <Button type="buttonStyleWhite">Explore Super Merchants</Button>
        </Section>
      </Styled.wrapperDiv>
    </Styled.Merchants>
  );
};

export default SuperMerchants;
