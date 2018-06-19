import * as React from 'react';
import { List } from 'semantic-ui-react';
import './Course.css';

import ICourse from '../../types/ICourse';

interface IProps {
  course: ICourse;
}

class Course extends React.Component<IProps, object> {
  public render() {
    return (
      <List.Item>
        <List.Icon name='folder outline' size='large' verticalAlign='middle' />
        <List.Content>
          <List.Header as='a'>{this.props.course.name}</List.Header>
          <List.Description as='a'>{this.props.course.description}</List.Description>
        </List.Content>
      </List.Item>
    );
  }
}

export default Course;