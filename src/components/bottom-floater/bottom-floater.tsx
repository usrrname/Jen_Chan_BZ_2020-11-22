import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../buttons/Button';
import { ChevronUp, ChevronDown } from 'react-feather'

type Props = {
  currentPage: number;
  pageCount: number;
  onIncrement: () => void;
  onDecrement: () => void
}

export const BottomFloater = (props: Props) => {

  return (
    <nav className="col-12">
      <div className="ml-5 col-2 pagination">
        <p className="white mv-2">{props.currentPage}/{props.pageCount}</p>
      </div>
      <Button className="nav-button up" onClick={props.onDecrement}>
        <Link to={ props.currentPage === 1 ? '/' : `/survey/${props.currentPage}`}>
          <ChevronUp color="black" />
        </Link>
      </Button>
      <Button className="nav-button down" onClick={props.onIncrement}>
        <Link to={`/survey/${props.currentPage + 1}`}>
          <ChevronDown color="black" />
        </Link>
      </Button>
    </nav>
  )
}