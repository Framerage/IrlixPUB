import React, { useState } from "react";
import { Link } from "react-router-dom";
import dtST from "./DetaliedPage.module.css";
import IngridsDetailedPage from "./IngridsDetailedPage";
const DetailedPage = () => {
  let image_name = localStorage.getItem("image_name");
  let type_card = localStorage.getItem("type_name");
  let product_name = localStorage.getItem("card_name");
  let nameIngrids = localStorage.getItem("ingrids");
  let get_ingrids = nameIngrids.split(",");
  let valuesIngrids = localStorage.getItem("ingrids_value");
  let get_ingrids_value = valuesIngrids.split(",");
  let descrip_text = localStorage.getItem("descrip_text");

  var ingrids_value = [...get_ingrids_value];
  var ingrids = [...get_ingrids];
  var ingrArr = ["ingrids", "ingrids_value"];
  let ingrs = (ingrids) => {
    return ingrids.map((val) => ({
      [ingrArr[0]]: val.toString(),
    }));
  };
  let values = (ingrids_value) => {
    return ingrids_value.map((valu) => ({
      [ingrArr[1]]: valu.toString(),
    }));
  };
  let ingrText = [];
  for (let i = 0; i < ingrs(ingrids).length; i++) {
    ingrText[i] = [ingrs(ingrids)[i], values(ingrids_value)[i]];
  }

  var [rec_ing, setRectpeIngr] = useState([...ingrText]);

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <div className={dtST.header_upperblock}>
        <h1 className={dtST.header__block_left}>
          <span className={dtST.header__text}>
            <a href="">Описание</a>
            <br />
            <span id="timedisplay"></span>
          </span>
        </h1>
      </div>
      <div
        id={dtST.top_block}
        style={{ backgroundImage: `url(${image_name})` }}
      >
        <Link to="/irlixpub/">
          <div id={dtST.turn_back} 
          onClick={localStorage.clear()}>
            {"<"}
          </div>
        </Link>
        <div id={dtST.bottom_block}>
          <div id={dtST.bottom_container}>
            <span className={dtST.sentence__product}>{product_name}<br/></span>
            <span className={dtST.sentence__chapter}>{type_card}<br/></span>
            <span className={dtST.recipe_top}>
              Ингредиенты
              <br />
            </span>
            {rec_ing.map((array) => (
              <IngridsDetailedPage rec_ing={array} key={array.id}/>
            ))}
            <span className={dtST.recipe_bottom}>
              Как готовить?
              <br />
            </span>
            <span className={dtST.ingrid_bottom}>{descrip_text}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailedPage;
