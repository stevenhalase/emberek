import * as React from 'react';
import './Courses.css';

import { List } from 'semantic-ui-react';

import ICourse from '../../types/ICourse';
import Course from '../Course/Course';

interface IProps {
  courses: ICourse[];
}

class Courses extends React.Component<IProps, object> {
  public render() {
    return (
      <div className="Courses">
        <List divided={true} relaxed={true}>
          {
            typeof this.props.courses === 'undefined' ?
              <List.Item>
                <List.Icon name='info circle' size='large' verticalAlign='middle' />
                <List.Content>
                  <List.Header>No courses available</List.Header>
                </List.Content>
              </List.Item> :
              this.props.courses.map((course: ICourse, ind: number) => {
                return <Course course={course} key={ind} />
              })
          }
        </List>
      </div>
    );
  }
}
  
export default Courses;