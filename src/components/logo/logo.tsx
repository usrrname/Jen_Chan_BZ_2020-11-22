import React from 'react';
import { Umbrella } from 'react-feather';
import './logo.scss';

export const Logo = () => {
  return (
    <div className="app-logo d-flex">
      <span className="sea-blue mr-2 d-inline"><Umbrella size={25.89} /></span>
      <h6 className="d-inline sea-blue">Umbrella Hub</h6>
    </div>
  )
}
