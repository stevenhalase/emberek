import * as React from 'react';
import { List } from 'semantic-ui-react';
import './Lesson.css';

import ILesson from '../../types/ILesson';

interface IProps {
  lesson: ILesson;
}

class Lesson extends React.Component<IProps, object> {
  public render() {
    return (
      <List.Item>
        <List.Icon name='folder outline' size='large' verticalAlign='middle' />
        <List.Content>
          <List.Header className="Lesson-name">{this.props.lesson.name}</List.Header>
          <List.Description>{this.props.lesson.description}</List.Description>
        </List.Content>
      </List.Item>
    );
  }
}

export default Lesson;