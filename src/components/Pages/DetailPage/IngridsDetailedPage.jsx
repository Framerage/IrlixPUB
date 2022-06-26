import React from "react";
import dtST from "./DetaliedPage.module.css";
const IngridsDetailedPage = (array) => {
return (  
    <div className={dtST.ingrid_top}>        
        <span className={dtST.param__ingrid}> {array.rec_ing[0].ingrids} </span>
        <span className={dtST.param__value}> {array.rec_ing[1].ingrids_value} <br/> </span>  
    </div>   
)
}
export default IngridsDetailedPage;