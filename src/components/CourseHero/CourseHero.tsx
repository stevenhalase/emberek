import * as React from 'react';
import './CourseHero.css'

import { Container, Header, Item } from 'semantic-ui-react';
import ICourse from './../../types/ICourse';

interface IProps {
  course: ICourse;
}

class CourseHero extends React.Component<IProps, object> {
  public render() {
    return (
      <div className="CourseHero">
        <Container>
          <Header as='h2'>Course</Header>
          <Item.Group>
            <Item>
              <Item.Image size='tiny' src={this.props.course.image} />
              <Item.Content>
                <Item.Header>{this.props.course.name}</Item.Header>
                <Item.Meta>{this.props.course.description}</Item.Meta>
              </Item.Content>
            </Item>
          </Item.Group>
        </Container>
      </div>
    );
  }
}
  
export default CourseHero;