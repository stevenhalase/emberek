import * as React from 'react';
import './LessonsList.css'

import ILesson from '../../types/ILesson';
import Lessons from '../Lessons/Lessons';

interface IProps {
  lessons: ILesson[];
}

class LessonsList extends React.Component<IProps, object> {
  public render() {
    return (
      <div className="LessonsList">
        <Lessons lessons={this.props.lessons} />
      </div>
    );
  }
}
  
export default LessonsList;