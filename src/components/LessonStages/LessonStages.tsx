import * as React from 'react';
import './LessonStages.css'

import { Icon, Step } from 'semantic-ui-react';
import IStage from './../../types/IStage';

interface IProps {
  stages: IStage[];
}

class LessonStages extends React.Component<IProps, object> {
  public render() {
    return (
      <div className="LessonStages">
        <Step.Group size='mini' fluid={true}>
          {
            this.props.stages.map((stage, ind) => {
              return (
                <Step active={stage.active} disabled={!stage.active && !stage.complete} key={ind}>
                  <Icon name={stage.complete ? 'check circle outline' : 'circle outline'} />
                  <Step.Content>
                    <Step.Title>{stage.name}</Step.Title>
                  </Step.Content>
                </Step>
              )
            })
          }
        </Step.Group>
      </div>
    );
  }
}
  
export default LessonStages;