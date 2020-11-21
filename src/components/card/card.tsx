import React from 'react';
import { Icon } from 'ts-react-feather-icons';
import { RadioOptionCard } from '../../types/components';
import './card.scss';

type Props = RadioOptionCard;

export const Card = (props: Props) => {
  return (

    <label className="card row ph-3">
      <input type="radio" className="card-input d-none" />
      <div className='d-inline mr-4'>
        <Icon name={props.className} color="#0074d9" size={30} />
      </div>
      <div className='d-inline-block'>
        <h4>{props.heading}</h4>
        <p className="small mt-1 mr-0">{props.caption}</p>
      </div>
      <span className='d-none checkmark mr-1'>
        <Icon name='check' color="#AFB8EA" size={30} />
      </span>
    </label>
  )
}