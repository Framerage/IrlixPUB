import React from "react";
import searchIcon from './input_images/SearchIcon.png'
const Pubinput = ({props,classInput,returnBtn,classInputBlock,searchBlockIconClass,iconClass})=>{
    //console.log({...props});
    return (
        <div className={classInputBlock}>            
            <input type="text" 
                placeholder="Поиск"
                className={classInput}
                {...props}
                >
            </input>
            <div className={searchBlockIconClass}>
            <img 
                src={searchIcon}
                alt=''
                className={iconClass}
                onClick={returnBtn}
            />
            </div>           
        </div>

            
    )
}
export default Pubinput;