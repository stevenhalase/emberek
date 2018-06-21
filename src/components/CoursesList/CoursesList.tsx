import * as React from 'react';
import './CoursesList.css'

import ICourse from '../../types/ICourse';
import Courses from '../Courses/Courses';

interface IProps {
  courses: ICourse[];
}

class CoursesList extends React.Component<IProps, object> {
  public render() {
    return (
      <div className="CoursesList">
        <Courses courses={this.props.courses} />
      </div>
    );
  }
}
  
export default CoursesList;