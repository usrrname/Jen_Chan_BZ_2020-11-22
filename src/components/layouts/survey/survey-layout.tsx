import React, { useState } from 'react';
import { useRouteMatch } from "react-router-dom";
import { BottomFloater } from '../../bottom-floater/bottom-floater';
import './survey-layout.scss';
import { Button } from '../../buttons/Button';
import { Logo } from '../../logo/logo';
import { X } from 'react-feather';
import { SurveyDetail } from './survey-detail';
import { RouteParams } from '../../../types/components';

type Props = RouteParams;

export const SurveyScreen = (props: Props) => {
  let match = useRouteMatch('/survey');

  // survey pages start at 1
  let [state, setState] = useState<number>(1);

  return (
    <>
      { match && <div className="container ph-6">
        <div className="row">
          <Button className="btn-cancel">
            <X color='#0074d9' size={14} />
          </Button>
          <Logo />

          <SurveyDetail id={props.id} />
        </div>

        < BottomFloater
          currentPage={state}
          pageCount={7}
          onIncrement={() => {
            if (state > 1 && state < 3) {
              setState(state + 1)
            }
          }}
          onDecrement={() => {
            if (state < 3) {
              setState(state - 1);
            }
          }} />

      </div>

      }


    </>
  )
}