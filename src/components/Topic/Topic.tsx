import * as React from 'react';
import './Topic.css'

import { Item } from 'semantic-ui-react';

import SubjectList from '../SubjectList/SubjectList';
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
          <SubjectList subjects={this.props.topic.subjects} />
        </Item.Content>
      </Item>
    );
  }
}
  
export default Topic;