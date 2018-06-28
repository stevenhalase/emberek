import * as React from 'react';

import { Link } from 'react-router-dom';
import { Button, List } from 'semantic-ui-react';
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
          <List.Header>{this.props.course.name}</List.Header>
          <List.Description>
            {this.props.course.description}
            <Link to={`/course/${this.props.course.id}`}>
              <Button size="mini" compact={true} inverted={true}>
                View Course
              </Button>
            </Link>
          </List.Description>
        </List.Content>
      </List.Item>
    );
  }
}

export default Course;