import styled from "@emotion/styled";

export const Banner = styled.div`
  border-bottom: 1px solid #acacac;
  padding: 0px 0;
  align-self: flex-start;
  position: -webkit-sticky;
  position: sticky;
  top:0;
  left:0;
  z-index : 1020;
  background-color : white;
`;
export const BannerWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding :27px;
`;

export const MenuLogo = styled.img`
  height: 35px;
`;

export const NavigationDrawer = styled.div`
  position: relative;
  > button {
    top: 0;
    padding: 0;
    right: 0;
    position: absolute;
  }
`;


export const ButtonDiv = styled.div`
  display: inline-block;  
  z-index: 999;
  position: relative;
  height: 27px;
  width: 32px;
`;

export const Bar = styled.span`
  width: 100%;
  margin-top: 10px;
  position: absolute;
  height: 9px;
  background-color: #333;
`;

export const ToggleButton = styled.i`
  cursor: pointer;
  top: -4px;
  opacity: 0;
  position: absolute;
  left: -4px;
  width: 100%;
  height: 100%;
  z-index: 1;
  }
`;


