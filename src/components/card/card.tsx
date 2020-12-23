import React from 'react';
import { Icon } from 'ts-react-feather-icons';
import { RadioOptionCard } from '../../types/components';
import Typography from '../typography/typography';
import './card.scss';
type Props = RadioOptionCard;

export const Card = ({ heading, className, caption }: Props) => {
  return (

    <label className="card row ph-3">
      <input type="radio" className="card-input d-none" />
      <div className='d-inline mr-4'>
        <Icon name={className} color="#0074d9" size={30} />
      </div>
      <div className='d-inline-block'>
        <Typography variant={"h4"} color={"dark"} >{heading}</Typography>
        <Typography variant={"body2"} color={"dark"} className="mt-1 mr-0">{caption}</Typography>
      </div>
      <span className='d-none checkmark mr-1'>
        <Icon name='check' color="#AFB8EA" size={30} />
      </span>
    </label>
  )
}