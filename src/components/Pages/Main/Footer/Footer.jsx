import React, { useState } from "react";
import PubForm from "../../../UI/PubForm/PubForm";
import ftST from './Footer.module.css';
const Footer = (props)=> {

const [showBtnORInput,setShowBtnORInput]=useState(false);

const btnOptions = [ftST.footer__btn]
btnOptions.push(ftST.activeBtn)

const inputBlockOptions = [ftST.footer__inputblock]
if(showBtnORInput){
    inputBlockOptions.push(ftST.active);
    btnOptions.splice(1,1);
}
else {
    btnOptions.push(ftST.activeBtn);
    inputBlockOptions.splice(1,1);  
}

    return (
<div className={ftST.footer} id={ftST.foot}>
        <div className={ftST.wrapper}>
            <PubForm 
            idForm={ftST.footer__form} 
            props={props}
            inputBlockClass={inputBlockOptions.join(' ')}
            inputClass={ftST.footer__input}
            btnClass={btnOptions.join(' ')}
            visible={showBtnORInput}
            setVisible={setShowBtnORInput}
            iconblockClass={ftST.searchIconBlock}
            iconClass={ftST.searchIcon}
            />
        </div>        
</div>
    )
}
export default Footer;