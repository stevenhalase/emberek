import * as React from 'react';
import './LessonSteps.css'

import { Icon, Step } from 'semantic-ui-react';
import IStage from './../../types/IStage';
import IStep from './../../types/IStep';

interface IProps {
  currentStage: IStage;
}

class LessonSteps extends React.Component<IProps, object> {
  public render() {
    return (
      <div className="LessonSteps">
        {
          this.props.currentStage.steps.map((step: IStep, ind: number) => {
            return (
              <div className="LessonSteps-step" key={ind}>
                <div className="LessonSteps-step-header">
                  Steps
                </div>
                <div className="LessonSteps-step-body">
                  <div className="LessonSteps-step-status">
                    <Icon name={step.complete ? 'check square outline' : 'square outline'} />
                  </div>
                  <div className="LessonSteps-step-description">
                    {step.description}
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
    );
  }
}
  
export default LessonSteps;