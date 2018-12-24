import React from "react";
import Icon from "../Icon/Icon";
import icon from "../Icon/icon.png"

class MainForm extends React.Component {
    render(){
        return (
           <section>
               <div>
                   <Icon href="aviasales.com" src={icon} alt="aviasales"/>
               </div>
           </section>
        )
    }
}

export default MainForm;
