import React from 'react';
import { useRouteMatch } from 'react-router-dom';
import { Icon } from 'ts-react-feather-icons';
import { Button } from '../../buttons/Button';
import { CardGroup } from '../../card-group/card-group';
import { NumberedQuestion } from '../../numbered-question/numbered-question';
import { TextInput } from '../../text-input/text-input';
import Typography from '../../typography/typography';


export const SurveyDetail = () => {

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
            <Typography variant={"p"} color={"primary"} className="sea-blue d-inline mr-2">OK</Typography>
            <span className='d-inline'>
              <Icon name='check' size={19} color='#0074d9' />
            </span>
          </Button>
        </>
      }
    </div>
  )
}