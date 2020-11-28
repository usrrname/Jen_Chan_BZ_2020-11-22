import React from 'react';
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

  return (
    <>
      { match && <div className="container ph-6">
        <div className="row">
          <Button className="btn-cancel">
            <X color='#0074d9' size={14} />
          </Button>
          <Logo />

          <SurveyDetail/>
        </div>

        <BottomFloater />

      </div>

      }


    </>
  )
}