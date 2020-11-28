import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Button } from '../buttons/Button';
import { ChevronUp, ChevronDown } from 'react-feather'

export const BottomFloater = () => {

  const history = useHistory<History>();
  let routeParam = history.location.pathname.slice(history.location.pathname.length - 1, history.location.pathname.length)
  const routeNumber = Number(routeParam);

  let pageCount = 7;

  // survey pages start at 1
  let [route, setRoute] = useState<number>(routeNumber);

  useEffect(() => { }, [route])

  const nextPage = () => {
    if (routeNumber >= 2) {
      return
    } else {
      setRoute((route) => route + 1);
    }
  }
  const prevPage = () => { if (routeNumber > 1 && routeNumber < 3) { route = routeNumber - 1 } }

  const getPath = (next?: boolean) => {
    let link = '';
    if (next) {
      if (routeNumber === 1) {
        link = `/survey/${routeNumber + 1}`
      } else {
        link = `/survey/${routeNumber}`
      }
    } else {
      if (routeNumber > 1 && routeNumber < 3) {
        const prevPage = routeNumber - 1;
        link = `/survey/${prevPage}`;
      } else if (route === 1) {
        link = '/'
      } else {
        link = '/'
      }
    }
    return link;
  }

  return (
    <nav className="col-12">
      <div className="ml-5 col-2 pagination">
        <p className="white mv-2">{routeNumber}/{pageCount}</p>
      </div>
      <Button className="nav-button up" onClick={prevPage}>
        <Link to={getPath(false)}>
          <ChevronUp color="black" />
        </Link>
      </Button>
      <Button className="nav-button down" onClick={nextPage} disabled={routeNumber > 2 ? true : false}>
        <Link to={getPath(true)}>
          <ChevronDown color="black" />
        </Link>
      </Button>
    </nav>
  )
}