import React from "react";
import { MOCK_DATA } from "../../service/services.mock";
import { Section,Button } from "..";
import * as Styled from "./customer-value.styles";

export const CustomerValue = () => {
  return (
    <Styled.CustomerValue>
      <Styled.wrapperDiv data-aos="fade-up"
            data-aos-offset="600"
            data-aos-duration="1000"
            data-aos-easing="ease-in">
        <Section title="Serving Our Customers" description="Sed magna enim, bibendum a quam eu, commodo consectetur quam. Morbi
            pellentesque eu dolor luctus sagittis, Praesent commodo velit eget urna mollis dignissim." alignLeft/>
      </Styled.wrapperDiv>
      <Styled.Div >
        {MOCK_DATA.map(({ icon, title, description }) => (
          <Styled.ValueDiv key={title} data-aos="fade-up"
          data-aos-offset="600"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in">
            <Styled.Image src={process.env.PUBLIC_URL+ icon} alt={title} />
            <Styled.CustomerValueTitle>{title}</Styled.CustomerValueTitle>
            <Styled.CustomerValueDesc>{description}</Styled.CustomerValueDesc>
            <Button type="buttonStyleWhite">Request Demo</Button>
          </Styled.ValueDiv>
        ))}
      </Styled.Div>
    </Styled.CustomerValue>
  );
};

export default CustomerValue;
