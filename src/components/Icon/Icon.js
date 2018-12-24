import React from "react";

const Icon = (props) => {
    return (
        <a href={props.href}>
            <div>
                <img src={props.src} alt={props.alt} />
            </div>
            <div>

            </div>
        </a>
    );
}

export default Icon;