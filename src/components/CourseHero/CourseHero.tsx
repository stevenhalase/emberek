import * as React from 'react';
import './CourseHero.css'

import { Link } from 'react-router-dom';
import { Button, Header, Item } from 'semantic-ui-react';
import ICourse from './../../types/ICourse';

interface IProps {
  course: ICourse;
}

class CourseHero extends React.Component<IProps, object> {
  public render() {
    return (
      <div className="CourseHero">
        <Header>
          <h2>Course</h2>
          <Link to={`/course/${this.props.course.id}`}>
            <Button compact={true} inverted={true}>
              Start Course
            </Button>
          </Link>
        </Header>
        <Item.Group>
          <Item>
            <Item.Image size='tiny' src={this.props.course.image} />
            <Item.Content>
              <Item.Header>{this.props.course.name}</Item.Header>
              <Item.Meta>{this.props.course.description}</Item.Meta>
            </Item.Content>
          </Item>
        </Item.Group>
      </div>
    );
  }
}
  
export default CourseHero;