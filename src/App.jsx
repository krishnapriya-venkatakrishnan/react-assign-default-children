import React, { useState } from "react";
import Badge from "./components/Badges/Badge";

export default function App(){
    
    const colorArray = ["#1F2937", "#991B1B", "#92400E", "#065F46", "#1E40AF", "#3730A3", "#5B21B6", "#9D174D"]
    const bgColorArray = ["#F3F4F6", "#FEE2E2", "#FEF3C7", "#D1FAE5", "#DBEAFE", "#E0E7FF", "#EDE9FE", "#FCE7F3"]
    const category=["square", "pill"]
    const squareElements = colorArray.map((item, index) => {
        return (
            <Badge key={`square-${index}`}
                color={item} 
                bgColor = {bgColorArray[index]} 
                category={category[0]}
                displayBadge={displayBadge}
            >
            </Badge>
        )
    })
    const pillElements = colorArray.map((item, index) => {
        return (
            <Badge key={`pill-${index}`}
                color={item} 
                bgColor = {bgColorArray[index]} 
                category={category[1]}
                displayBadge={displayBadge}
            >
            </Badge>
        )
    })

    const [selectedBadge, setSelectedBadge] = useState([])
    function displayBadge(color, bgColor, category){
        setSelectedBadge( 
            <Badge
                color={color} 
                bgColor = {bgColor} 
                category={category}
                displayBadge={displayBadge}
            >
            </Badge>
        )
    }

    
    return (
        <div className="main-container">
            <div className="square-container">
                {squareElements}
            </div>

            <div className="pill-container">
                {pillElements}
            </div>

            <div className="random-badge">
                {selectedBadge}
            </div>
        </div>
        
    
)
}