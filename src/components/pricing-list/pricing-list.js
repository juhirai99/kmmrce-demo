import React from "react";

import { Button } from "../button/button";
import { TITLE_MOCK ,LIST_MOCK } from "../../service/price.mock";
import * as Styled from "./pricing-list.styles";
import useBreakpoints from "../../hooks/useBreakpoint";

const PriceList = () => {
  const { isLaptop, isMobile } = useBreakpoints();
   return (
    <Styled.Table>
      <Styled.Row>
        <Styled.Head></Styled.Head>
        {TITLE_MOCK.map(({ icon, title }) => (
          <Styled.Head key={icon}>
            <Styled.Icons src={icon} alt={title} />
            <Styled.Title>{title}</Styled.Title>
            {isLaptop && <Button type="buttonStyleDark">Request Demo</Button>}
          </Styled.Head>
        ))}
      </Styled.Row>
      <Styled.Body>
        <Styled.SubTitle>Core Features</Styled.SubTitle>
        {LIST_MOCK.coreFeatures.map(
          ({ title, isStandard, isProfessional, isEnterprise }) => (
            <Styled.Row key={title}>
              <Styled.Col key={title}>{title}</Styled.Col>
              <Styled.WrappedDiv>
                <Styled.Col>
                  {isMobile && <Styled.Item>is Standard</Styled.Item>}
                  { isStandard ?
                    <Styled.Icons
                    src={process.env.PUBLIC_URL+`/image/tick.svg`}
                  />
                  :<Styled.Icons
                  src={process.env.PUBLIC_URL+`/image/null.svg`}
                />
                }
                </Styled.Col>

                <Styled.Col>
                  {isMobile && <Styled.Item>is Professional</Styled.Item>}
                  { isProfessional ?<Styled.Icons
                    src={process.env.PUBLIC_URL+`/image/tick.svg`}
                    alt="is Professional"
                  />:
                  <Styled.Icons
                    src={process.env.PUBLIC_URL+`/image/null.svg`}
                  />
                  }
                </Styled.Col>
                <Styled.Col>
                  {isMobile && <Styled.Item>is Enterprise</Styled.Item>}
                  {isEnterprise ? <Styled.Icons
                    src={process.env.PUBLIC_URL+`/image/tick.svg`}
                  />:
                  <Styled.Icons
                    src={process.env.PUBLIC_URL+`/image/null.svg`}
                  />
                  }
                </Styled.Col>
              </Styled.WrappedDiv>
            </Styled.Row>
          )
        )}

        <Styled.SubTitle>Team Support</Styled.SubTitle>
        {LIST_MOCK.teamSupport.map(
          ({ title, isStandard, isProfessional, isEnterprise }) => (
            <Styled.Row>
              <Styled.Col key={title}>{title}</Styled.Col>
              <Styled.WrappedDiv>
                <Styled.Col>
                  {isMobile && <Styled.Item>is Standard</Styled.Item>}
                  { isStandard ?
                    <Styled.Icons
                    src= {process.env.PUBLIC_URL+`/image/tick.svg`}
                    
                  /> 
                  :
                  <Styled.Icons
                    src= {process.env.PUBLIC_URL+`/image/null.svg`}
                  /> 
                }
                </Styled.Col>
                <Styled.Col>
                  {isMobile && <Styled.Item>is Professional</Styled.Item>}
                  {isProfessional? 
                  <Styled.Icons
                  src= {process.env.PUBLIC_URL+"/image/tick.svg"}
                />
                 :
                  <Styled.Icons
                    src= {process.env.PUBLIC_URL+"/image/null.svg"}
                  />
                  }
                </Styled.Col>
                <Styled.Col>
                  {isMobile && <Styled.Item>is Enterprise</Styled.Item>}
                  {
                    isEnterprise ?
                    <Styled.Icons
                    src={process.env.PUBLIC_URL+"image/tick.svg"}
                  /> :
                  <Styled.Icons
                    src={process.env.PUBLIC_URL+"image/null.svg"}
                  /> 
                  }
                </Styled.Col>
              </Styled.WrappedDiv>
            </Styled.Row>
          )
        )}
        {isLaptop && (
          <Styled.Row>
            <Styled.Col></Styled.Col>
            <Styled.Col>
              <Styled.QuotedPrice>$100/month</Styled.QuotedPrice>
              <Button type="buttonStyleDark">Select this plan</Button>
            </Styled.Col>
            <Styled.Col>
              <Styled.QuotedPrice>$2000/month</Styled.QuotedPrice>
              <Button type="buttonStyleDark">Select this plan</Button>
            </Styled.Col>
            <Styled.Col>
              <Styled.QuotedPrice>$3,500/month</Styled.QuotedPrice>
              <Button type="buttonStyleDark">Select this plan</Button>
            </Styled.Col>
          </Styled.Row>
        )}
      </Styled.Body>
    </Styled.Table>
  );
};

export default PriceList;
