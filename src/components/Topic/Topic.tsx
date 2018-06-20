import * as React from 'react';
import './Topic.css'

import { Item } from 'semantic-ui-react';

import CourseList from '../CourseList/CourseList';
import ITopic from './../../types/ITopic';

interface IProps {
  topic: ITopic;
}

class Topic extends React.Component<IProps, object> {
  public render() {
    return (
      <Item>
        <Item.Image size='tiny' src={this.props.topic.image} />
        <Item.Content>
          <Item.Header>{this.props.topic.name}</Item.Header>
          <Item.Meta>{this.props.topic.description}</Item.Meta>
          <CourseList courses={this.props.topic.courses} />
        </Item.Content>
      </Item>
    );
  }
}
  
export default Topic;