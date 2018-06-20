import * as React from 'react';

import { Link } from 'react-router-dom';
import { Button, Item } from 'semantic-ui-react';

import './Course.css';

import ICourse from '../../types/ICourse';
import LessonsList from '../LessonsList/LessonsList';

interface IProps {
  course: ICourse;
}

class Course extends React.Component<IProps, object> {
  public render() {
    return (
      <Item>
        <Item.Image size='tiny' src={this.props.course.image} />
        <Item.Content>
          <Item.Header>
            <span>{this.props.course.name}</span>
            <Link to={`/course/${this.props.course.id}`}>
              <Button inverted={true}>
                Start Course
              </Button>
            </Link>
          </Item.Header>
          <Item.Meta>{this.props.course.description}</Item.Meta>
          <LessonsList lessons={this.props.course.lessons} />
        </Item.Content>
      </Item>
    );
  }
}

export default Course;