import React from 'react';
import { IconName } from 'ts-react-feather-icons';
import cardData from "../../assets/data.json";
import './card-group.scss';
import { Card } from '../card/card';

export const CardGroup = () => {

  const CardList = cardData.cards.map(card =>
    <Card heading={card.heading}
      caption={card.caption}
      className={card.className as IconName}
      key={card.heading}
    />
  );

  return (
    <div className="app-card-group mt-7 mb-4" >
      {CardList}
    </div>
  )
}
