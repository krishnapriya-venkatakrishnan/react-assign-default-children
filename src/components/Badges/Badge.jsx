import React from "react";
import classNames from "classnames";

export default function Badge(props){

    const { children = "Badge", color, bgColor, category, displayBadge } = props
    
    const style = {
        color: color,
        backgroundColor: bgColor
    }

    const generalStyle = "general"
    const customStyles = category
    const badgeStyles = classNames(generalStyle, customStyles)

    return (
        <div 
        onClick={()=> {displayBadge(color, bgColor, category)}}
        className={badgeStyles} style={style}>
            {color && children}
        </div>
    )

}