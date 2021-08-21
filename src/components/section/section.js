import React from "react";
import * as Styled from "./section.styles";

export const Section = ({ children,alignLeft, title, subtitle, description, }) => {
  return (
    <Styled.Section alignLeft={alignLeft}>
      {title && <Styled.Title alignLeft={alignLeft}>{title}</Styled.Title>}
      {description && <Styled.Description>{description}</Styled.Description>}
      {subtitle && <Styled.Subtitle>{subtitle}</Styled.Subtitle>}
      {children}
    </Styled.Section>
  );
};

export default Section;
