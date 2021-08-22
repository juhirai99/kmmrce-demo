import React from "react";
import { MOCK_DATA } from "../../service/services.mock";
import { Section,Button } from "..";
import * as Styled from "./customer-value.styles";

export const CustomerValue = () => {
  return (
    <Styled.CustomerValue>
      <Styled.wrapperDiv>
        <Section title="Serving Our Customers" description="Sed magna enim, bibendum a quam eu, commodo consectetur quam. Morbi
            pellentesque eu dolor luctus sagittis, Praesent commodo velit eget urna mollis dignissim." alignLeft/>
      </Styled.wrapperDiv>
      <Styled.Div>
        {MOCK_DATA.map(({ icon, title, desc }) => (
          <Styled.ValueDiv key={title}>
            <Styled.Image src={process.env.PUBLIC_URL+icon} alt={title} />
            <Styled.CustomerValueTitle>{title}</Styled.CustomerValueTitle>
            <Styled.CustomerValueDesc>{desc}</Styled.CustomerValueDesc>
            <Button type="buttonStyleWhite">Request Demo</Button>
          </Styled.ValueDiv>
        ))}
      </Styled.Div>
    </Styled.CustomerValue>
  );
};

export default CustomerValue;
