import React from "react";
import styled from 'styled-components';
import Icon from "../Icon";
import Input from "/Input";
import  {media}  from "../../mixin";

import icon from "../Icon/icon.png";

const MainFormSection = styled.section` 
      background-color: #00b0de;
      background: linear-gradient( 
          148.48deg, 
          #00b0de 22.46%, 
          #01aedc 26.15%, 
          #02abdb 29.89%, 
          #02abdb 33.59%, 
          #02abdb 33.81%,  
          #196ebd 122.26% )
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
  font-size: rem(40px);
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
const MainFormInputWrap = styled.form`
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
import  {media}  from "../../mixin";
  `}
  ${media.phone`
    max-width: 308px;
    flex-basis: 265px;
  `}
`




class MainForm extends React.Component {
    render() {
        return (
            <MainFormSection>
                <div className="it-container it-container--big">
                    <Icon href="aviasales.com" src={icon} alt="aviasales" text="aviasales"/>
                </div>

                <div className="it-container">
                    <MainFormWrap>
                        <MainFormTitle> Поиск дешевых авиабилетов</MainFormTitle>
                        <MainFormSubtitle className="it-all--hide-mobile"> Лучший способ купить авиабилеты
                                                                                   дешево</MainFormSubtitle>
                        <MainFormMain action="" method="post">
                            <MainFormInputWrap>
                                <MainFormHalf>
                                    <Input
                                        className="it-main-form__input it-main-form__input--color-1 it-main-form__input--border-desktop-1"  data-it-city-from="" />
                                    <div className="it-main-form__city-change" data-it-change-city>
                                        <div className="it-main-form__city-change-text"> MOW</div>
                                        <div className="it-main-form__city-change-img-box">
                                            <img className="it-main-form__city-change-img"
                                                 src="static/img/rbk/main-form/arrow.png" alt="" />
                                        </div>
                                    </div>
                                </MainFormHalf>
                                <MainFormHalf className=" it-main-form__half--size-basis-2">
                                    <Input className=" it-main-form__input--border-laptop-1"
                                           type="text" name="city-to" maxlength="200" value="Тюмень"
                                           placeholder="Город прибытия" required data-it-city-to="" />
                                </MainFormHalf>
                                <MainFormHalf
                                    className=" it-main-form__half--size-1 it-main-form__half--size-basis-1">
                                    <Input
                                        className=" it-main-form__input--border-laptop-2 datepicker-here"
                                        id="city-to" type="text" name="time-to" maxlength="200" value=""
                                        placeholder="Туда" required />
                                    <label className="it-main-form__date-change" for="city-to">
                                        <div className="it-main-form__date-change-img-box">
                                            <img className="it-main-form__city-change-img"
                                                 src="static/img/rbk/main-form/date.png" alt="" />
                                        </div>
                                    </label>
                                </MainFormHalf>
                                <MainFormHalf
                                    className=" it-main-form__half--size-1 it-main-form__half--size-basis-1">
                                    <Input className=" datepicker-here" id="city-from" type="text"
                                           name="time-back" maxlength="200" value="" placeholder="Обратно" required />
                                    <label className="it-main-form__date-change" for="city-from">
                                        <div className="it-main-form__date-change-img-box">
                                            <img className="it-main-form__city-change-img"
                                                 src="static/img/rbk/main-form/date.png" alt="" />
                                        </div>
                                    </label >
                                </MainFormHalf>
                                <MainFormHalf className=" it-main-form__half--size-2">
                                    <div className="it-main-form__passanger-wrap">
                                        <div className="it-main-form__passanger-input-wrap" tabindex="1" />
                                        <input className="it-main-form__passanger-selectopt" id="opt1" name="test"
                                               type="radio" checked="" />
                                        <label
                                            className="it-main-form__passanger-label it-main-form__passanger-label--border-desktop-1"
                                            for="opt1"><span className="it-main-form__passanger-text">1 пассажир,</span><span
                                            className="it-main-form__passanger-text it-main-form__passanger-text--color">	эконом</span>
                                        </label>
                                        <input className="it-main-form__passanger-selectopt" id="opt2" name="test"
                                               type="radio" />
                                        <label
                                            className="it-main-form__passanger-label it-main-form__passanger-label--border-desktop-1"
                                            for="opt2"><span
                                            className="it-main-form__passanger-text">2 пассажира,</span><span
                                            className="it-main-form__passanger-text it-main-form__passanger-text--color"></span>
                                            эконом
                                        </label>
                                        <input className="it-main-form__passanger-selectopt" id="opt3" name="test"
                                               type="radio" />
                                        <label
                                            className="it-main-form__passanger-label it-main-form__passanger-label--border-desktop-1"
                                            for="opt3"><span className="it-main-form__passanger-text">1 пассажир,</span><span
                                            className="it-main-form__passanger-text it-main-form__passanger-text--color"></span>
                                            бизнес
                                        </label>
                                        <input className="it-main-form__passanger-selectopt" id="opt4" name="test"
                                               type="radio" />
                                        <label
                                            className="it-main-form__passanger-label it-main-form__passanger-label--border-desktop-1"
                                            for="opt4"><span
                                            className="it-main-form__passanger-text">2 пассажира,</span><span
                                            className="it-main-form__passanger-text it-main-form__passanger-text--color"></span>
                                            бизнес
                                        </label>
                                    </div>
                                </MainFormHalf>
                            </MainFormInputWrap>


                            <div className="it-main-form__buttons-wrap">
                                <div className="it-main-form__buttons">
                                    <button className="it-btn it-main-form__btn"><span
                                        className="it-main-form__btn-text">	Найти билеты</span>
                                        <div className="it-main-form__btn-img-box">
                                            <img className="it-main-form__btn-img"
                                                 src="static/img/rbk/main-form/aero.png" alt="" />
                                        </div>
                                    </button>
                                </div>
                            </div>



                        </MainFormMain>
                    </MainFormWrap>
                </div>
            </MainFormSection>
        )
    }
}

export default MainForm;
