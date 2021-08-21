import React from "react";
import { MOCK_DATA } from "../../service/CustomerDetail.mock";
import * as Styled from "./customer.styles";
import {Animated} from "react-animated-css";

export const CustomerDetail = () => {

  return (
    <Styled.CustomerDetail>
      <Animated animationIn="zoomIn" animationInDuration={6000} component="div" >
      <Styled.ImageDiv>
          <Styled.Image src={process.env.PUBLIC_URL+"/image/image-15.svg"}/>
      </Styled.ImageDiv>
      </Animated>
      <Animated animationIn="zoomIn" animationInDuration={6000} component="div" >
      <Styled.Div>

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
      </Animated>
    </Styled.CustomerDetail>
  );
};

export default CustomerDetail;
