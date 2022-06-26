import React, { useState } from "react";
import Header from "./Header/Header";
import '../../../styles/mainstyle.css';
import Footer from "./Footer/Footer";
import Content from "./Content/Content";
import Blackberry from "./Content/cards/bg-cards/Blackberry.png";
import Mohito from "./Content/cards/bg-cards/Mohito.png";
import Glegi from "./Content/cards/bg-cards/Glegi.jpg";
import imageForChooseCard from "./Content/cards/images-cards/Vector2.png";
import { useFoundCards } from "../../../hooks/useFilter";
const Main = (key) => {
  const [params_card, setParams] = useState([
    {
      card_name: "Blackberry",
      bg_card: Blackberry,
      imgForChooseCard: imageForChooseCard,
      check:false,
      discont_value: "40%",
      classificofcard: "Алкоголь",
      typeofcard: "Fresh drink(New)",
      ingrids: [
        "Джин",
        "Шнапс яблоко",
        "Ликер кассис",
        "Сок лимона",
        "Жасмин лемонграсс",
        "Ежевика свежая",
        "Белок",
      ],
      ingrids_value: ["40мл", "10мл", "25мл", "25мл", "15мл", "2шт", "20мл"],
      recipe_descrip:
        "Ежевику (одну штуку) размять в шейкере," +
        "засыпать лёд на 2/3 шейкераДобавить джин, шнапс, ликёр, сок," +
        "жасмин лемонграсс и белок.Тщательно взбить и процедить в бокал." +
        "Украсить ежевикойЕжевику (одну штуку) размять в шейкере, засыпать лёд на 2/3 шейкера." +
        "Добавить джин, шнапс, ликёр, сок, жасмин лемонграсс и белок." +
        "Тщательно взбить и процедить в бокал.Украсить ежевикой.",
    },
    {
      card_name: "Mohito",
      bg_card: Mohito,
      imgForChooseCard: imageForChooseCard,
      check:false,
      discont_value: "20%",
      classificofcard: "Алкоголь",
      typeofcard: "Long",
      ingrids: [
        "Джин",
        "Шнапс яблоко",
        "Ликер кассис",
        "Сок лимона",
        "Жасмин лемонграсс",
        "Ежевика свежая",
        "Белок",
      ],
      ingrids_value: ["40мл", "10мл", "25мл", "25мл", "15мл", "2шт", "20мл"],
      recipe_descrip:
        "Положи в хайбол лайм 3 дольки и подави мадлером." +
        "Возьми мяту 10 листиков в одну руку и хлопни по ним другой рукой" +
        " Положи мяту в хайбол" +
        " Наполни бокал дробленым льдом доверху" +
        "Добавь сахарный сироп 15 мл и белый ром 50 мл" +
        " Долей содовую доверху и аккуратно размешай коктейльной ложкой" +
        " Досыпь немного дробленого льда" +
        "Укрась веточкой мяты и долькой лайма",
    },
    {
      card_name: "Glegi",
      bg_card: Glegi,
      imgForChooseCard: imageForChooseCard,
      check:false,
      discont_value: "10%",
      classificofcard: "Tea",
      typeofcard: "Warm tea",
      ingrids: ["Принцесса Нури"],
      ingrids_value: ["1 пак"],
      recipe_descrip: "Чай завари и ложечкой его",
    },
    {
      card_name: "Ice tea",
      bg_card: Mohito,
      imgForChooseCard: imageForChooseCard,
      check:false,
      discont_value: "5%",
      classificofcard: "Tea",
      typeofcard: "Sweat",
      ingrids: ["Сок лимона", "Жасмин лемонграсс", "Ежевика свежая", "Чай"],
      ingrids_value: ["25мл", "15мл", "2шт", "1пак"],
      recipe_descrip:
        "Положи в хайбол лайм 3 дольки и подави мадлером. " +
        "Возьми мяту 10 листиков в одну руку и хлопни по ним другой рукой. " +
        " Положи мяту в хайбол. " +
        " Наполни бокал дробленым льдом доверху. " +
        "Добавь сахарный сироп 15 мл и белый ром 50 мл" +
        " Долей содовую доверху и аккуратно размешай коктейльной ложкой. " +
        " Досыпь немного дробленого льда. " +
        "Укрась веточкой мяты и долькой лайма. ",
    },
    {
      card_name: "Tea",
      bg_card: Glegi,
      imgForChooseCard: imageForChooseCard,
      check:false,
      discont_value: "1%",
      classificofcard: "Tea",
      typeofcard: "Hot tea",
      ingrids: ["Принцесса Нури", "Сахар", "Лимон"],
      ingrids_value: ["1 пак", "10г", "1шт"],
      recipe_descrip: "Чай завари и ложечкой его",
    },
    {
      card_name: "Black",
      bg_card: Blackberry,
      imgForChooseCard: imageForChooseCard,
      check:false,
      discont_value: "7%",
      classificofcard: "Алкоголь",
      typeofcard: "Sweat",
      ingrids: [
        "Джин",
        "Шнапс яблоко",
        "Ликер кассис",
        "Сок лимона",
        "Жасмин лемонграсс",
        "Ежевика свежая",
        "Белок",
      ],
      ingrids_value: ["40мл", "10мл", "25мл", "25мл", "15мл", "2шт", "20мл"],
      recipe_descrip:
        "Ежевику (одну штуку) размять в шейкере," +
        "засыпать лёд на 2/3 шейкераДобавить джин, шнапс, ликёр, сок," +
        "жасмин лемонграсс и белок.Тщательно взбить и процедить в бокал." +
        "Украсить ежевикойЕжевику (одну штуку) размять в шейкере, засыпать лёд на 2/3 шейкера." +
        "Добавить джин, шнапс, ликёр, сок, жасмин лемонграсс и белок." +
        "Тщательно взбить и процедить в бокал.Украсить ежевикой.",
    },
  ]);

  const [selectedSort, setSelectedSort] = useState("");
  const [searchCard, setSearchCard] = useState("");
  const [favoriteCards, setFavoriteCards] = useState("");

  const sortAndSearch = useFoundCards(params_card,selectedSort,searchCard,favoriteCards);
  
  const sortCards = (sort) => {
    console.log(sort)
    setSelectedSort(sort);
  }

  const getFavoriteCards = (favorites) => {
    setFavoriteCards(favorites);
  };

  return (
    <>
      <Header
        value={selectedSort}
        onChange={sortCards}
        pageName="Главная"
        options={[
          { value: "New", name: "Новинки" },
          { value: "Sweat", name: "Сладкие" },
          { value: "Warm tea", name: "Хит" },
          { value: "Hot tea", name: "Горячие" },
          { value: "Long", name: "Лонг" },
          { value: "Shot", name: "Шот" },
        ]}
        //key={headId}
      />
      <Content params_card={sortAndSearch} 
      //key={contentId}
      />
      <Footer
        value={searchCard}
        onChange={(el) => setSearchCard(el.target.value)}
        //key={footId}
      />
    </>
  );
};
export default Main;
