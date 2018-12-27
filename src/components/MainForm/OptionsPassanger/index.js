import React from "react";
import styled from 'styled-components';
import  {media}  from "../../../mixin";


const PassangerWrap = styled.div`
  position: relative;
  width: 100%;
  display: flex;
`


class OptionsPassanger extends React.Component {
    render() {
        return (

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

        )
    }

}



export default OptionsPassanger;