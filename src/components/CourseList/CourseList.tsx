import * as React from 'react';
import './CourseList.css';

import { List } from 'semantic-ui-react';

import ICourse from '../../types/ICourse';
import Course from '../Course/Course';

interface IProps {
  courses: ICourse[];
}

class CourseList extends React.Component<IProps, object> {
  public render() {
    return (
      <div className="CourseList">
        <List divided={true} relaxed={true}>
          {
            this.props.courses.map((course: ICourse, ind: number) => {
              return <Course course={course} key={ind} />
            })
          }
        </List>
      </div>
    );
  }
}
  
export default CourseList;