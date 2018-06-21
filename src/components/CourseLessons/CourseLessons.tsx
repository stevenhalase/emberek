import * as React from 'react';
import './CourseLessons.css';

import { List } from 'semantic-ui-react';

import ICourse from '../../types/ICourse';
import ILesson from '../../types/ILesson';

interface IProps {
  course: ICourse;
}

class CourseLessons extends React.Component<IProps, object> {
  public render() {
    return (
      <div className="CourseLessons">
        <List divided={true} relaxed={true}>
          {
            typeof this.props.course.lessons === 'undefined' ?
              <List.Item>
                <List.Icon name='info circle' size='large' verticalAlign='middle' />
                <List.Content>
                  <List.Header>No lessons available</List.Header>
                </List.Content>
              </List.Item> :
              this.props.course.lessons.map((lesson: ILesson, ind: number) => {
                return (
                  <List.Item key={ind}>
                    <List.Icon name='list' size='small' verticalAlign='middle' />
                    <List.Content>
                      <List.Header>{lesson.name}</List.Header>
                      <List.Description>
                        {lesson.description}
                      </List.Description>
                    </List.Content>
                  </List.Item>
                )
              })
          }
        </List>
      </div>
    );
  }
}
  
export default CourseLessons;