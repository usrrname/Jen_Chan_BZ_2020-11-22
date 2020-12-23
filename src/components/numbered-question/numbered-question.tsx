import React from 'react';
import Typography from '../typography/typography';
import './numbered-question.scss';

type Props = {
  number: number;
  copy: string;
}

export const NumberedQuestion = ({ number, copy }: Props) => {
  return (
    <div className="app-numbered-question d-flex">
      <span className="badge-sm"><Typography variant={"p"} color={"primary"}>{number}</Typography></span>
      <Typography variant={"h3"} color={"dark"}>{copy}</Typography>
    </div>
  )
}