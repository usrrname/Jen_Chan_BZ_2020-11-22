import React from 'react';
import './numbered-question.scss';

type Props = {
  number: number;
  copy: string;
}

export const NumberedQuestion = (props: Props) => {
  return (
    <div className="app-numbered-question d-flex">
      <span className="badge-sm"><p className="sea-blue">{props.number}</p></span>
      <h3 className="d-inline-block"><p>{props.copy}</p></h3>
    </div>
  )
}