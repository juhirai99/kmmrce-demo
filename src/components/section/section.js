import React from "react";
import * as Styled from "./section.styles";

export const Section = ({ children,alignLeft, title, subtitle, description, }) => {
  return (
    <Styled.Section alignLeft={alignLeft} data-aos="fade-up" data-aos-offset="800"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out">
      {title && <Styled.Title alignLeft={alignLeft}>{title}</Styled.Title>}
      {description && <Styled.Description>{description}</Styled.Description>}
      {subtitle && <Styled.Subtitle>{subtitle}</Styled.Subtitle>}
      {children}
    </Styled.Section>
  );
};

export default Section;
