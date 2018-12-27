import React from "react";
import styled from 'styled-components';
import  {media}  from "../../../mixin";


const DateChangeWrap = styled.label`
  position: absolute;
  top: 50%;
  right: 16px;
  margin-top: -10px;
  display: flex;
  flex-wrap: wrap;
  cursor: pointer;
  align-items: flex-start;
`

const DateChangeImgBox = styled.div`
  max-width: 17px;
  width: 100%;
  max-height: 20px;
  overflow: hidden;
`

const DateChangeImg = styled.img`
  display: block;
  max-width: 100%;
  width: 100%;
  height: auto;
`


class DateChange extends React.Component {
    render () {
        return (
            <DateChangeWrap htmlFor={this.props.htmlFor}>
                <DateChangeImgBox>
                    <DateChangeImg
                         src={this.props.src} alt={this.props.alt} />
                </DateChangeImgBox>
            </DateChangeWrap >

        )

    }
}




export default DateChange;