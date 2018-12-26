import React from "react";
import styled from 'styled-components';
import  {media}  from "../../mixin";

const MainFormInput = styled.div`
    font-size: 16px;
  padding: 16px 17px;
  color: #4a4a4a;
  width: 100%;
  line-height: 1.42;
  border: 1px solid rgba(80, 66, 66, 0.2);
`

class Input extends React.component {
    render() {
        return (

         <MainFormInput
        type="text" name="city-from" maxlength="200" value="Москва" placeholder="Москва"
        required data-it-city-from="" />

        )

    }

}

export default Input;