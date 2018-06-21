import * as React from 'react';
import './CourseDescription.css'

import ICourse from './../../types/ICourse';

interface IProps {
  course: ICourse;
}

class CourseDescription extends React.Component<IProps, object> {
  public render() {
    return (
      <div className="CourseDescription">
        <p>{this.props.course.description}</p>
      </div>
    );
  }
}
  
export default CourseDescription;