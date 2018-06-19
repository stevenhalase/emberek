import * as React from 'react';
import './Courses.css'

import ICourse from '../../types/ICourse';
import CourseList from '../CourseList/CourseList';

interface IProps {
  courses: ICourse[];
}

class Courses extends React.Component<IProps, object> {
  public render() {
    return (
      <div className="Courses">
        <CourseList courses={this.props.courses} />
      </div>
    );
  }
}
  
export default Courses;