import * as React from 'react';
import './CourseContainer.css'

import CourseHero from '../CourseHero/CourseHero';
import ICourse from './../../types/ICourse';

interface IProps {
  course: ICourse;
}

class CourseContainer extends React.Component<IProps, object> {
  public render() {
    return (
      <div className="CourseContainer">
        <CourseHero course={this.props.course} />
      </div>
    );
  }
}
  
export default CourseContainer;