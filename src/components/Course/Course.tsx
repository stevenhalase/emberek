import * as React from 'react';

import { Item } from 'semantic-ui-react';

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
          <Item.Header as='a'>{this.props.course.name}</Item.Header>
          <Item.Meta as='a'>{this.props.course.description}</Item.Meta>
          <LessonsList lessons={this.props.course.lessons} />
        </Item.Content>
      </Item>
    );
  }
}

export default Course;