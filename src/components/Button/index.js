import React from "react";
import styled, {css} from 'styled-components';
import  {media}  from "../../mixin";


const Buttton = styled.button`
    display: inline-block;
    vertical-align: middle;
    width: 100%;
    font-weight: 900;
    line-height: 1.25;
    text-align: center;
    user-select: none;
    border: none;
    padding: 15px 10px;
    font-size: 28px;
    transition: all 0.2s ease-in-out;
    background-color: rgba(255, 146, 65, 1);
    color: #ffffff;
    cursor: pointer;
    text-decoration: none;
    position: relative;
    border-radius: 4px;
    
    &:hover {
    background: rgba(255, 146, 65, 0.7);
    }
    
    &:hover,
    &:active,
    &:visited {
     text-decoration: none;
     color: #ffffff;
    }
    
    ${props => props.mod == "mainForm" && css`
        display: flex;
      flex-wrap: wrap;
      align-items: flex-start;
      justify-content: center;
  `}  

`

const ButtonText = styled.div`
    margin-right: 25px;
    color: #ffffff;
`

const ButtonImgBox = styled.div`
  overflow: hidden;
  max-width: 30px;
  width: 100%;
  height: 32px;
`

const ButtonImg = styled.img`
    max-width: 100%;
    height: auto;
`

export class Button extends React.Component {
    render () {
        return (

            <Buttton mod={this.props.mod}>
                <ButtonText> {this.props.btnText}</ButtonText>
                <ButtonImgBox>
                    <ButtonImg src={this.props.src} alt={this.props.alt} />
                </ButtonImgBox>
            </Buttton>

        )
    }
}


