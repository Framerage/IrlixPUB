import React from "react";
import './header.css';
import './DateSCR.js';
const Header = ({options,value,onChange,pageName})=> {
    return (
        <div className="header">
        <div className="header__block_right">
            <div className="header__logo"></div>
        </div>
        <div className="wrapper">
            <div className="header__block">
                <div className="header_upperblock">
                    <h1 className="header__block_left">
                    <span className="header__text"><a href="" >{pageName}</a><br/>
                        <span id="timedisplay"></span></span>
                    </h1>                    
                </div>
                <nav value={value} className="header__menublock" >                    
                    {options.map(option=>
                        <div><button
                        onClick={event=>onChange(event.target.value)}
                        key={option.value}
                        value={option.value}
                        >{option.name}
                        </button></div>
                        )}
                    <div>
                      <button  
                      className="favorite_btn" 
                      value="Favorites" 
                      onClick={event=>onChange(event.target.value)}>Избранные
                      </button>
                      </div>
                </nav>
            </div>
        </div>        
    </div>
    );
};

export default Header;