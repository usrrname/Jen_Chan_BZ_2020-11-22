import React from 'react';
import './list-item.scss';

type Props = {
  number: number;
  copy: string;
}

export const ListItem = (props: Props) => {
  return (
    <li className="app-list-item">
      <span className="badge-sm"><p className="sea-blue">{props.number}</p></span>
      <span>
        <p>{props.copy}</p>
      </span>
    </li>
  )
}