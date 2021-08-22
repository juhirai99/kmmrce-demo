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
            <Styled.Icons src={process.env.PUBLIC_URL+icon} />
            <Styled.Title>{title}</Styled.Title>
            {isLaptop && <Button type="buttonStyleDark">Request Demo</Button>}
          </Styled.Head>
        ))}
      </Styled.Row>
      <Styled.Body>
        <Styled.SubTitle>Core Features</Styled.SubTitle>
        {LIST_MOCK.coreFeatures.map(
          ({ title, standard, professional, enterprise }) => (
            <Styled.Row key={title}>
              <Styled.Column key={title}>{title}</Styled.Column>
              <Styled.WrappedDiv>
                <Styled.Column>
                  {isMobile && <Styled.Item>is Standard</Styled.Item>}
                  { standard ?<Styled.Icons src={process.env.PUBLIC_URL+`/image/tick.svg`}/>
                  :<Styled.Icons
                  src={process.env.PUBLIC_URL+`/image/null.svg`}
                />
                }
                </Styled.Column>

                <Styled.Column>
                  {isMobile && <Styled.Item>is Professional</Styled.Item>}
                  { professional ?<Styled.Icons
                    src={process.env.PUBLIC_URL+`/image/tick.svg`} />:
                  <Styled.Icons
                    src={process.env.PUBLIC_URL+`/image/null.svg`}
                  />
                  }
                </Styled.Column>
                <Styled.Column>
                  {isMobile && <Styled.Item>is Enterprise</Styled.Item>}
                  {enterprise ? <Styled.Icons
                    src={process.env.PUBLIC_URL+`/image/tick.svg`}
                  />:
                  <Styled.Icons
                    src={process.env.PUBLIC_URL+`/image/null.svg`}
                  />
                  }
                </Styled.Column>
              </Styled.WrappedDiv>
            </Styled.Row>
          )
        )}

        <Styled.SubTitle>Team Support</Styled.SubTitle>
        {LIST_MOCK.teamSupport.map(
          ({ title, standard, professional, enterprise }) => (
            <Styled.Row>
              <Styled.Column key={title}>{title}</Styled.Column>
              <Styled.WrappedDiv>
                <Styled.Column>
                  {isMobile && <Styled.Item>is Standard</Styled.Item>}
                  { standard ?<Styled.Icons src= {process.env.PUBLIC_URL+"/image/tick.svg"}/> 
                  :<Styled.Icons
                    src= {process.env.PUBLIC_URL+"/image/null.svg"}/> 
                }
                </Styled.Column>
                <Styled.Column>
                  {isMobile && <Styled.Item>is Professional</Styled.Item>}
                  {professional? 
                  <Styled.Icons src= {process.env.PUBLIC_URL+"/image/tick.svg"}/>:
                  <Styled.Icons src= {process.env.PUBLIC_URL+"/image/null.svg"}/>
                  }
                </Styled.Column>
                <Styled.Column>
                  {isMobile && <Styled.Item>is Enterprise</Styled.Item>}
                  {enterprise ?<Styled.Icons src={process.env.PUBLIC_URL+"/image/tick.svg"}/> :
                  <Styled.Icons src={process.env.PUBLIC_URL+"/image/null.svg"} /> 
                  }
                </Styled.Column>
              </Styled.WrappedDiv>
            </Styled.Row>
          )
         )}
        {isLaptop && (
          <Styled.Row>
            <Styled.Column></Styled.Column>
            <Styled.Column>
              <Styled.QuotedPrice>$100/month</Styled.QuotedPrice>
              <Button type="buttonStyleDark">Select this plan</Button>
            </Styled.Column>
            <Styled.Column>
              <Styled.QuotedPrice>$2000/month</Styled.QuotedPrice>
              <Button type="buttonStyleDark">Select this plan</Button>
            </Styled.Column>
            <Styled.Column>
              <Styled.QuotedPrice>$3,500/month</Styled.QuotedPrice>
              <Button type="buttonStyleDark">Select this plan</Button>
            </Styled.Column>
          </Styled.Row>
        )}
      </Styled.Body>
    </Styled.Table>
  );
};

export default PriceList;
