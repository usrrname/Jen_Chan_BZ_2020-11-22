import React from 'react';
import { useRouteMatch } from 'react-router-dom';
import { Icon } from 'ts-react-feather-icons';
import { RouteParams } from '../../../types/components';
import { Button } from '../../buttons/Button';
import { CardGroup } from '../../card-group/card-group';
import { NumberedQuestion } from '../../numbered-question/numbered-question';
import { TextInput } from '../../text-input/text-input';

type Props = RouteParams;

export const SurveyDetail = (props: Props) => {

  let route1 = useRouteMatch(`/survey/1`);
  let route2 = useRouteMatch(`/survey/2`);

  return (
    <div>
      {route1 &&
        <>
          <NumberedQuestion number={1} copy="What type of insurance are you looking for?" />
          <CardGroup />
        </>
      }
      {route2 &&
        <>
          <NumberedQuestion number={2} copy="What’s the name of your business?" />
          <TextInput />

          <Button className="btn-secondary d-flex mt-5">
            <p className="sea-blue d-inline mr-3">OK</p>
            <span className='sea-blue d-inline'>
              <Icon name='check' size={19} />
            </span>
          </Button>
        </>
      }
    </div>
  )
}