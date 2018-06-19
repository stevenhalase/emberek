import * as React from 'react';
import './CourseList.css';

import { Item } from 'semantic-ui-react';

import ICourse from '../../types/ICourse';
import Course from '../Course/Course';

interface IProps {
  courses: ICourse[];
}

class CourseList extends React.Component<IProps, object> {
  public render() {
    return (
      <div className="CourseList">
        <Item.Group>
          {
            this.props.courses.map((course: ICourse, ind: number) => {
              return <Course course={course} key={ind} />
            })
          }
        </Item.Group>
      </div>
    );
  }
}
  
export default CourseList;