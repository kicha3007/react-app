import React from "react";
import styled, {css} from 'styled-components';
import  {media}  from "../../../mixin";

const MainFormInput = styled.input`
          font-size: 16px;
          padding: 16px 17px;
          color: #4a4a4a;
          width: 100%;
          line-height: 1.42;
          border: 1px solid rgba(80, 66, 66, 0.2);
      ${props => props.border === "desktop-1" && css`
          border-top-left-radius: 5px;
          border-bottom-left-radius: 5px;
          ${media.tablets`
            border-bottom-left-radius: 0px;
          `}
          ${media.phone`
            border-top-right-radius: 5px;
          `}      
`}

     ${props => props.border === "laptop-1" && css`
              ${media.tablets`
                  border-top-right-radius: 5px;
              `}
              ${media.phone`
                 border-top-right-radius: 0;
              `}
           `} 
           
       ${props => props.border === "laptop-2" && css`
      ${media.tablets`
            border-bottom-left-radius: 5px;
      `}
      ${media.phone`
        border-bottom-left-radius: 0;
      `}
   `} 
   

    
 
`

class Input extends React.Component {
    render() {
        return (
            <MainFormInput
                type={this.props.type}
                name={this.props.name}
                id={this.props.id}
                maxlength={this.props.maxlength}
                value={this.props.value}
                placeholder={this.props.placeholder}
                required={this.props.required}
                border={this.props.border}
            />
        )

    }

}

export default Input;