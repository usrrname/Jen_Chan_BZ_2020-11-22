import React from 'react';
import { Umbrella, X } from 'react-feather';
import { Link } from 'react-router-dom';
import { Button, ButtonProps } from '../../../components/buttons/Button';
import { ListItem } from '../../list-item/list-item';
import Typography from '../../typography/typography';
import { Watermark } from '../../watermark/watermark';
import './login.scss';

type Props = ButtonProps;

export const LoginScreen = (props: Props) => {

  return (
    <div className="container">
      <div className="cover mt-0">
        <p className="cover-text p-3">Narrow your browser or switch to a phone. This view only works under 415px.</p>
      </div>
      <Button className="btn-cancel">
        <X color='#0074d9' size={14} />
      </Button>

      <div className="badge-lg">
        <Umbrella color='#0074d9' size={60} />
      </div>

      <Typography variant={"h1"} color={"dark"}>So what gives?</Typography>
      <ul className='m-0 app-list-items'>
        <ListItem number={1} copy="Answer a few simple questions
about your business"/>
        <ListItem number={2} copy="Browse through specially curated quotes" />
        <ListItem number={3} copy="Select your quote-of-choice and receive your policy instantly" />
      </ul>

      <Button className="btn">
        <Link to="/survey/1">
          <p className="cta p-0">Get Started</p>
        </Link>
      </Button>

      <Watermark path="../../../logo.svg" copy='Powered by Briza' />
    </div>
  )
}