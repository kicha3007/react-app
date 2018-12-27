import React from "react";
import styled from 'styled-components';
import  {media}  from "../../../mixin";


const PassangerWrap = styled.div`
  position: relative;
  width: 100%;
  display: flex;
`

const PassangerLabel = styled.label`
  padding: 0 30px 0 10px;
  min-height: 56px;
  display: flex;
  align-items: center;
  background: #ffffff;
  position: absolute;
  top: 0;
  width: 100%;
  pointer-events: none;
  order: 2;
  z-index: 1;
  transition: background .4s ease-in-out;
  white-space: nowrap;
  line-height: 1.42;
  border-radius: 2px;
  border: 1px solid #d8d7d7;
  padding: 4px 20px;
  color: rgba(0, 0, 0, .38);
  font-size: 16px;
  flex-basis: 80px;
  
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  ${media.laptop`
    flex-wrap: wrap;
  `}
  ${media.tablets`
    border-top-right-radius: 0;
  `}
  ${media.phone`
    flex-wrap: nowrap;
    border-bottom-right-radius: 5px;
    border-bottom-left-radius: 5px;
  `}
  
`

const PassangerInputWrap = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  height: 56px;
  cursor: pointer;
  position: relative;
  outline: none;
  
  :before {
      content: '';
      display: block;
      position: absolute;
      top: 0;
  }
  
  :after {
      content: '';
      display: block;
      position: absolute;
      top: 50%;
      right: 15px;
      margin-top: -2px;
      height: 0;
      border-left: 5px solid transparent;
      border-right: 5px solid transparent;
      border-top: 5px solid #000000;
      z-index: 20;
      pointer-events: none;
      max-width: 100%;
  }
  
   &:focus  label${PassangerLabel} {
       position: relative;
      pointer-events: all
  }
  
`

const PassangerSelectopt = styled.input`
  opacity: 0;
  position: absolute;
  left: -99999px;
  flex-basis: 90px;
  display: flex;
  flex-wrap: wrap;
  
  &:checked + label${PassangerLabel} {
  order: 1;
  z-index: 10;
  position: relative;
}

`

const PassangerText = styled.span`
    & + & {
        margin-left: 4px;
    }
`

const PassangerTextColor = styled(PassangerText)`
    color: #A0B0B9;
`



class OptionsPassanger extends React.Component {
    render() {
        const passangersOptions = this.props.data.map(function(item, index) {
            return (
            <React.Fragment key={`opt${item.id}`}>
                <PassangerSelectopt id={`opt${item.id}`} name="test"
                                    type="radio" defaultChecked />
                <PassangerLabel htmlFor={`opt${item.id}`} >
                    <PassangerText>{item.passanger},</PassangerText>
                    <PassangerTextColor>	{item.class}</PassangerTextColor>
                </PassangerLabel>
            </React.Fragment>
            )
        });

        return (
        < PassangerWrap>
            <PassangerInputWrap tabIndex={this.props.tabIndex }  >
                    {passangersOptions}
             </PassangerInputWrap>
        </PassangerWrap>
        )
    }

}



export default OptionsPassanger;