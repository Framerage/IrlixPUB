import React from "react";
import PubButton from "../PubButton/PubButton";
import Pubinput from "../PUBinput/Pubinput";
const PubForm = ({idForm,props,inputBlockClass,inputClass,btnClass,setVisible,iconblockClass,iconClass})=>{


const showOffBtn = ()=>{
    setVisible(true)
}
const returnBtn=()=>{
    setVisible(false)
}
    return (
        <form id={idForm}>
        <Pubinput props={props}
        classInputBlock={inputBlockClass}
        classInput={inputClass}
        returnBtn={returnBtn}
        searchBlockIconClass={iconblockClass}
        iconClass={iconClass}
        />
        <PubButton 
            onClick={showOffBtn}
            className={btnClass}
            value='Поиск'
        />
    </form>
    )
}
export default PubForm;