import * as React from 'react';
import './Lessons.css';

import { List } from 'semantic-ui-react';

import ILesson from '../../types/ILesson';
import Lesson from '../Lesson/Lesson';

interface IProps {
  lessons: ILesson[];
}

class Lessons extends React.Component<IProps, object> {
  public render() {
    return (
      <div className="Lessons">
        <List divided={true} relaxed={true}>
          {
            typeof this.props.lessons === 'undefined' ?
              <List.Item>
                <List.Icon name='info circle' size='large' verticalAlign='middle' />
                <List.Content>
                  <List.Header>No lessons available</List.Header>
                </List.Content>
              </List.Item> :
              this.props.lessons.map((lesson: ILesson, ind: number) => {
                return <Lesson lesson={lesson} key={ind} />
              })
          }
        </List>
      </div>
    );
  }
}
  
export default Lessons;