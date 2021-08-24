import React from "react";

import { Button, Wrapper, Section } from "..";

export const RequestDemo = () => (
  <Wrapper data-aos="flip-up"
  data-aos-offset="1300"
  data-aos-delay="200"
  data-aos-duration="2000"
  data-aos-easing="ease-in-out">
    <Section description="Ready to grow your business?">
      <Button type="lightColor" >Request Demo</Button>
    </Section>
  </Wrapper>
);

export default RequestDemo;
