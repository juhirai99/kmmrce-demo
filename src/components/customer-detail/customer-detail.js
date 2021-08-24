import React from "react";
import { MOCK_DATA } from "../../service/CustomerDetail.mock";
import * as Styled from "./customer.styles";

export const CustomerDetail = () => {

  return (
    <Styled.CustomerDetail>
      <Styled.ImageDiv data-aos="fade-right"
          data-aos-offset="200"
          data-aos-delay="200"
          data-aos-duration="500"
          data-aos-easing="ease-in-out">
          <Styled.Image src={process.env.PUBLIC_URL+"/image/image-15.svg"}/>
      </Styled.ImageDiv>
      <Styled.Div data-aos="fade-left"
          data-aos-offset="200"
          data-aos-delay="200"
          data-aos-duration="500"
          data-aos-easing="ease-in-out">

        <Styled.Heading>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, quos
          eum veritatis quia odio delectus!
        </Styled.Heading>
        {MOCK_DATA.map(({ title, description, features }) => (
          <Styled.Development key={title}>
            <Styled.Subtitle>{title}</Styled.Subtitle>
            <Styled.Description>{description}</Styled.Description>
            {title === 'Development features' ?<Styled.Line></Styled.Line> :''}
            {features && (
              <Styled.List>
                {features.map(({ title ,id}) => (
                  <>
                    <Styled.Item key={id}>
                      <Styled.Images src={process.env.PUBLIC_URL+"/image/tick.svg"} alt={title} /> {title}
                    </Styled.Item>
                  </>
                ))}
              </Styled.List>
            )}
          </Styled.Development>
        ))}
      </Styled.Div>
    </Styled.CustomerDetail>
  );
};

export default CustomerDetail;
