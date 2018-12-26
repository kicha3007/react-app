import React from "react";
import styled from 'styled-components';
import  {media}  from "../../mixin";

const  IconSection  = styled.a`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  text-decoration: none;
  color: #ffffff;
`

const IconImgBox = styled.div`
    max-width: 30px;
  width: 100%;
  max-height: 30px;
  margin-right: 13px;
  overflow: hidden;
`

const IconImg = styled.img`
  display: block;
  max-width: 100%;
  width: 100%;
  height: auto;
`
const IconText = styled.div`
   color: #ffffff;
  font-size: 20px;
  ${media.phone`
       display: none;  
  `       }
`

const Icon = (props) => {
    return (
        <IconSection href={props.href}>
            <IconImgBox>
                <IconImg src={props.src} alt={props.alt} />
            </IconImgBox>
            <IconText>
                {props.text}
            </IconText>
        </IconSection>
    );
}

export default Icon;
