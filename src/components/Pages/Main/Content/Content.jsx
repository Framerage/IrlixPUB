import React from "react";
import Cards from "./cards/Cards";
import "./content.css";
import EmptyCard from "./cards/EmptyCard.jsx";
const Main = ({params_card}) => {

  return (
    <div className="main">
      <div className="wrapper">
        <div id="main__menu">
          {params_card.length !== 0 ? (
            params_card.map((params) => (
              <Cards params_card={params} key={params.id}/>
            ))
          ) 
          : 
            <EmptyCard key={''}/>
          }
        </div>
      </div>
    </div>
  );
};

export default Main;
