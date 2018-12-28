import React from "react";
import styled from 'styled-components';
import Icon from "../Icon";
import DateChange from "./DateChange";
import Input from "./Input";
import OptionsPassanger from "./OptionsPassanger";
import ChangeButton from "./ChangeButton";
import  {media}  from "../../mixin";
import  {passangersData}  from "./ChangeButton/data/";

import {Button} from "../Button";
import arrow from "./ChangeButton/img/arrow.png";
import icon from "../Icon/icon.png";
import aero from "../Button/img/aero.png";
import  dateImg  from "./DateChange/img/date.png";



const MainFormSection = styled.section`  
      background-color: #00b0de;
      background: linear-gradient( 
          148.48deg, 
          #00b0de 22.46%, 
          #01aedc 26.15%, 
          #02abdb 29.89%, 
          #02abdb 33.59%, 
          #02abdb 33.81%,  
          #196ebd 122.26% );
      padding-top: 12px;
      margin-bottom: 65px;
`;

const MainFormWrap = styled.div`
    overflow: hidden;
    padding: 19% 0 22%;
    ${media.tablets`
          padding: 12% 0 19%;
    `       }
    ${media.phone`
          padding-bottom: 80px;
    `       }
`;

const MainFormTitle = styled.h1`
  font-size: 40px;
  margin-top: 0;
  margin-bottom: 5px;
  text-align: center;
  color: #ffffff;
  font-weight: 700;
  ${media.tablets`
    font-size: rem(32px);
  `}
   ${media.phone`
      font-size: 20px;
      margin-bottom: 15px;
   `}
`;

const MainFormSubtitle = styled.h2`
    font-size: rem(24px);
    text-align: center;
    color: #ffffff;
    margin-top: 0;
    margin-bottom: 40px;
    font-weight: 700;
    ${media.tablets`
            font-size: rem(20px)   
    `}
`;

const MainFormMain = styled.form`
    box-sizing: content-box;
`
const MainFormInputWrap = styled.div`
    display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: start;
  -ms-flex-align: start;
  align-items: flex-start;
  margin: 0 -1px 45px;
  ${media.tablets`
    margin-bottom: 30px;
  `}
    ${media.phone`
      margin-bottom: 15px;
  
    `}
`;

const MainFormHalf = styled.div`
  flex-grow: 1;
  flex-basis: 120px;
  width: 100%;
  margin: 0 1px 2px;
  max-width: 224px;
  position: relative;
  ${media.tablets`
    max-width: calc(50% - 1px);
    flex-basis: 265px;
  `}
  ${media.phone`
    max-width: 308px;
    flex-basis: 265px;
  `}
  
  &.size-basis-1 {
    flex-basis: 110px;
  ${media.tablets`
    max-width: calc(25% - 2px);
    flex-basis: 138px;
  `}
  ${media.phone`
    max-width: 152px;
    flex-basis: 90px;
  `}
  }
  
  &.size-basis-2 {
    flex-basis: 150px;
  }
  
  &.size-1 {
    max-width: 180px;
  }
  
`

const MainFormButtonWrap = styled.div`
      text-align: center;
`

const MainFormButtons = styled.div`
      display: inline-block;
      max-width: 308px;
      width: 100%;
`

class MainForm extends React.Component {
    constructor (props) {
        super(props);
      this.state = {
            cityfromvalue: "Москва",
            citytovalue: "Тюмень"
        }

        this.handleChangeCity = this.handleChangeCity.bind(this);
        this.inputCityFrom = React.createRef();
        this.inputCityTo = React.createRef();
}



    handleChangeCity = () => {
        const inputCityFromValue = this.inputCityFrom.value;
        const inputCityToValue = this.inputCityTo.value;

        this.setState({cityfromvalue: inputCityToValue});
        this.setState({citytovalue: inputCityFromValue});

        this.inputCityFrom.value = inputCityToValue;
        this.inputCityTo.value = inputCityFromValue;

    }

    render() {


        return (
            <MainFormSection>
                <div className="it-container it-container--big">
                    <Icon href="aviasales.com" src={icon} alt="aviasales" text="aviasales"/>
                </div>

                <div className="it-container">
                    <MainFormWrap>
                        <MainFormTitle> Поиск дешевых авиабилетов</MainFormTitle>
                        <MainFormSubtitle className="it-all--hide-mobile">
                             "Лучший способ купить авиабилеты дешево"
                        </MainFormSubtitle>
                        <MainFormMain action="" method="post">
                            <MainFormInputWrap>
                                <MainFormHalf >
                                    <Input
                                        border="desktop-1"
                                        type="text"
                                        name="city-from"
                                        maxlength="200"
                                        value={this.state.cityfromvalue}
                                        placeholder="Откуда"
                                        required
                                        id="city-from"
                                        inputRef={el => (this.inputCityFrom = el)}
                                    />
                                    <ChangeButton
                                        src={arrow}
                                        alt="change-arrow"
                                        handleChangeCityProp={this.handleChangeCity}

                                    />
                                </MainFormHalf>
                                <MainFormHalf className="size-basis-2">
                                    <Input
                                        border="laptop-1"
                                        type="text"
                                        name="city-to"
                                        maxlength="200"
                                        value={this.state.citytovalue}
                                        inputRef={el => (this.inputCityTo = el)}
                                        placeholder="Город прибытия"
                                        required
                                    />
                                </MainFormHalf>
                                <MainFormHalf
                                    className="size-1 size-basis-1">
                                    <Input
                                        className="datepicker-here"
                                        border="laptop-2"
                                        type="text"
                                        name="time-to"
                                        id="city-to"
                                        maxlength="200"
                                        placeholder="Туда"
                                        required
                                        />
                                    <DateChange src={dateImg} alt="date" htmlFor="city-to"/>

                                </MainFormHalf>
                                <MainFormHalf
                                    className="size-1 size-basis-1">
                                    <Input
                                        className="datepicker-here"
                                        type="text"
                                        name="time-back"
                                        id="city-from"
                                        maxlength="200"
                                        placeholder="Обратно"
                                        required
                                    />
                                    <DateChange src={dateImg} alt="date" htmlFor="city-from"/>
                                </MainFormHalf>
                                <MainFormHalf className="size-2">
                                    <OptionsPassanger data={passangersData} tabIndex="1"/>
                                </MainFormHalf>
                            </MainFormInputWrap>


                            <MainFormButtonWrap>
                                <MainFormButtons>
                                     <Button src={aero} alt="aero-btn" mod="mainForm" btnText="Найти билеты"  />
                                </MainFormButtons>
                            </MainFormButtonWrap>



                        </MainFormMain>
                    </MainFormWrap>
                </div>
            </MainFormSection>
        )
    }
}

export default MainForm;
