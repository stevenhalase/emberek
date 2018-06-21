import * as React from 'react';

import { Link } from 'react-router-dom';
import { Button, Item } from 'semantic-ui-react';

import './Subject.css';

import ISubject from '../../types/ISubject';
import CoursesList from '../CoursesList/CoursesList';

interface IProps {
  subject: ISubject;
}

class Subject extends React.Component<IProps, object> {
  public render() {
    return (
      <Item>
        <Item.Image size='tiny' src={this.props.subject.image} />
        <Item.Content>
          <Item.Header>
            <span>{this.props.subject.name}</span>
            <Link to={`/subject/${this.props.subject.id}`}>
              <Button className="Subject-button" compact={true} inverted={true}>
                View Subject
              </Button>
            </Link>
          </Item.Header>
          <Item.Meta>{this.props.subject.description}</Item.Meta>
          <CoursesList courses={this.props.subject.courses} />
        </Item.Content>
      </Item>
    );
  }
}

export default Subject;