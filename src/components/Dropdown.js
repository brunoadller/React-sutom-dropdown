import React, {useState} from "react"
import './style.css'



export default function Dropdown(props){

    const [isActive, setIsActive] = useState(false)

    return(
        <div className = "dropdown">
            <div className="dropdown-btn" onClick = {e => setIsActive(!isActive)}>Choose One
                <img  src="https://img.icons8.com/material-rounded/24/000000/sort-down.png"/>
            </div>
               {isActive && (
                    <div id="conteudo" className="dropdown-content">
                    <div className="dropdown-item">
                        React
                    </div>
                    <div className="dropdown-item">
                        Vue
                    </div>
                </div>
               )}
            </div>

    )
}