import React from "react";
const Ingridslist = (values) => {
return (  
    <div className="ingrid_top">        
        <span className="param__ingrid"> {values.rec_ing[0].ingrids} </span>
        <span className="param__value"> {values.rec_ing[1].ingrids_value} <br/> </span>  
    </div>   
)
}
export default Ingridslist;