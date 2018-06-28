import * as React from 'react';
import './LessonInfo.css'

import { Icon, Step } from 'semantic-ui-react';
import ILesson from './../../types/ILesson';
import IStage from './../../types/IStage';

interface IProps {
  lesson: ILesson;
  currentStage: IStage;
}

class LessonInfo extends React.Component<IProps, object> {
  public render() {
    return (
      <div className="LessonInfo">
        <div className="LessonInfo-header">
          <div className="LessonInfo-title">
            {this.props.lesson.name}
          </div>
          <div className="LessonInfo-name">
            {this.props.currentStage.name}
          </div>
        </div>
        <div className="LessonInfo-body">
          <div className="LessonInfo-description">
            {this.props.currentStage.description}
          </div>
        </div>
      </div>
    );
  }
}
  
export default LessonInfo;