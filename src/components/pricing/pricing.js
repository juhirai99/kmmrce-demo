import React from "react";

import { Section, Wrapper } from "..";
import * as Styled from "./pricing.styles";
import FeaturesTable from "../pricing-list/pricing-list";

export const Pricing = () => {
  return (
    <Styled.background>
      <Wrapper>
        <Section
          title="Features &amp; Solutions"
          description="consectetur quam. Morbi pellentesque eu dolor luctus sagittis. Praesent  commodo velit eget urna mollis dignissim."
          alignLeft
        >
          <FeaturesTable />
        </Section>
      </Wrapper>
    </Styled.background>
  );
};

export default Pricing;
