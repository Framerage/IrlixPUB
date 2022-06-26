import React, { useState } from "react";
import "./card.css";
import Ingridslist from "./Ingridslist.jsx";
import { Link } from "react-router-dom";
import imageForChooseCard from "./images-cards/Vector2.png";
import imageChoosedCard from "./images-cards/Vector.png";
const Cards = ({ ...props }) => {
  let ingrids_value = [...props.params_card.ingrids_value];
  let ingrids = [...props.params_card.ingrids];
  let ingrArr = ["ingrids", "ingrids_value"];

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

  const [rec_ing, setReceptIngr] = useState([...ingrText]);

  const detali_page = (event) => {
    let nameCard = props.params_card.card_name;
    let bg_image = props.params_card.bg_card;
    let type_name = props.params_card.typeofcard;
    let ingrids_all = [ingrids];
    let value_ingrids = [ingrids_value];
    let descrip_text = props.params_card.recipe_descrip;
    localStorage.clear();
    localStorage.setItem("card_name", nameCard);
    localStorage.setItem("type_name", type_name);
    localStorage.setItem("image_name", bg_image);
    localStorage.setItem("ingrids", ingrids_all);
    localStorage.setItem("ingrids_value", value_ingrids);
    localStorage.setItem("descrip_text", descrip_text);
    //console.log(localStorage)
  };

  const checkChoosedCard = (event) => {
    if (props.params_card.check) {
      event.target.src = imageForChooseCard;
      props.params_card.check = false;
    } else {
      event.target.src = imageChoosedCard;
      props.params_card.check = true;
    }
  };

  return (
    <div className="card_block zoom">
      <img
        onClick={checkChoosedCard}
        src={props.params_card.imgForChooseCard}
        className="sentence__fav__checkbox"
        alt=""
      />
      <Link to="./detailed">
        <div
          onClick={detali_page}
          className="card__back"
          style={{
            backgroundImage: `url(${props.params_card.bg_card})`,
          }}
        >
          <div className="sentence__discont">
            {props.params_card.discont_value}
            <br />
            <span className="sentence__classification">
              {props.params_card.classificofcard}{" "}
            </span>
          </div>
          <div className="sentence__window_scroll">
            <span className="sentence__product">
              {props.params_card.card_name}
              <br />
            </span>
            <span className="sentence__chapter">
              {props.params_card.typeofcard}
              <br />
            </span>
            <span className="recipe_top">
              Ингредиенты
              <br />
            </span>
            {rec_ing.map((values) => (
              <Ingridslist rec_ing={values} key={values.id} />
            ))}
            <span className="recipe_bottom">
              Как готовить?
              <br />
            </span>
            <span className="ingrid_bottom">
              {props.params_card.recipe_descrip}
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Cards;
