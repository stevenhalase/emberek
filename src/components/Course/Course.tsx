import * as React from 'react';

import { Item } from 'semantic-ui-react';

import './Course.css';

import ICourse from '../../types/ICourse';
import CurriculumUnitList from '../CurriculumUnitList/CurriculumUnitList';

interface IProps {
  course: ICourse;
}

class Course extends React.Component<IProps, object> {
  public render() {
    return (
      <Item>
        <Item.Content>
          <Item.Header as='a'>{this.props.course.name}</Item.Header>
          <Item.Description as='a'>{this.props.course.description}</Item.Description>
          <CurriculumUnitList curriculumunits={this.props.course.curriculum} />
        </Item.Content>
      </Item>
    );
  }
}

export default Course;