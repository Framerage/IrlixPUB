import React from 'react'
import Empty from "./bg-cards/empty.jpg";

const EmptyCard = () => {
return (
    <div className="card_block zoom">
    <div 
        className="card__back"
        style={{ 
            backgroundImage: `url(${Empty})`
        }}>
        <div className='card__empty__text' >
            <h2 style={{textAlign:'center',fontSize:'6em',color:'white',margin:'40px 0 0 0'}} >Ничего не найдено</h2>
            <div style={{position:'relative',top:'286px',left:'32px'}}>
                <span className="sentence__product" >Пусто<br/></span>
                <span className="sentence__chapter" >Попробуйте изменить запрос<br/></span>
            </div>
        </div>
    </div>
</div>
);
};
export default EmptyCard;