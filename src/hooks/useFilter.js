import { useMemo } from "react";
export const useSortedCards = (params_card,selectedSort)=>{
    const sortedCards = useMemo(() => {
        if (selectedSort !=='Favorites') {
          let sortCards=params_card
          return [...sortCards].filter(
            (params) => params.typeofcard.includes(selectedSort)
          );
        } else {
          let favoriteCards=params_card
          return [...favoriteCards].filter(
                (params)=>params.check===true)
        }
        //return params_card;
      }, [selectedSort, params_card,params_card.check]);
      return sortedCards;
}

export const useFoundCards = (params_card,selectedSort,searchCard)=>{
    const sortedCards = useSortedCards(params_card,selectedSort);
    const sortAndSearch = useMemo(() => {
        return sortedCards.filter((card) =>
          card.card_name.toLowerCase().includes(searchCard)
        );
      }, [searchCard, sortedCards]);
      return sortAndSearch;
}