import React from "react";

import { Button, Wrapper, Section } from "..";

export const RequestDemo = () => (
  <Wrapper data-aos="fade-up" data-aos="fade-up"
  data-aos-offset="13000"
  data-aos-delay="200"
  data-aos-duration="2000"
  data-aos-easing="ease-in-out">
    <Section description="Ready to grow your business?">
      <Button type="lightColor" data-aos="fade-up"
                data-aos-offset="1300"
                data-aos-delay="200"
                data-aos-duration="2000"
                data-aos-easing="ease-in-out">Request Demo</Button>
    </Section>
  </Wrapper>
);

export default RequestDemo;
