import React from 'react';
import Typography from '../typography/typography';
import './list-item.scss';

type Props = {
  number: number;
  copy: string;
}

export const ListItem = ({ number, copy }: Props) => {
  return (
    <li className="app-list-item">
      <span className="badge-sm">
        <Typography variant={"p"} color={"primary"}>{number}</Typography>
      </span>
      <span>
        <Typography variant={"p"} color={"color-gray"}>{copy}</Typography>
      </span>
    </li>
  )
}