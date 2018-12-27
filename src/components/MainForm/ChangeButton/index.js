import React from "react";
import styled, {css} from 'styled-components';
import  {media}  from "../../../mixin";



const CityChange = styled.div`
  position: absolute;
  top: 50%;
  right: 16px;
  margin-top: -9px;
  display: flex;
  flex-wrap: wrap;
  cursor: pointer;
  align-items: flex-start;
`

const CityChangeText = styled.div`
  margin-right: 10px;
  color: #A0B0B9;
  font-size: 16px;
  line-height: 1.2;
  ${media.laptop`
    display: none;
  `}
  ${media.tablets`
    display: block;
  `}
`

const CityChangeImgBox = styled.div`
  max-width: 16px;
  width: 100%;
  max-height: 18px;
  overflow: hidden;

`

const CityChangeImg = styled.img`
  display: block;
  max-width: 100%;
  width: 100%;
  height: auto;   

`


const ChangeButton = (props) => {
    return (
        <CityChange>
            <CityChangeText> MOW</CityChangeText>
            <CityChangeImgBox>
                <CityChangeImg
                     src={props.src} alt={props.alt} />
            </CityChangeImgBox>
        </CityChange>
    );
}





export default ChangeButton;