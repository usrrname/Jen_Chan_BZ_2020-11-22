import React from 'react';
import { Umbrella } from 'react-feather';
import Typography from '../typography/typography';
import './logo.scss';

export const Logo = () => {
  return (
    <div className="app-logo">
      <span className="mr-2"><Umbrella size={25.89} color='#0074d9' /></span>
      <Typography variant={"h6"} className="regular-weight" color="primary">Umbrella Hub</Typography>
    </div>
  )
}
