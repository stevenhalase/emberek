import * as React from 'react';
import './CourseContainer.css'

import { Container, Image } from 'semantic-ui-react';

import CourseHero from '../CourseHero/CourseHero';
import ICourse from './../../types/ICourse';

import logoDark from '../../assets/images/logo_dark.png';
import CourseTabs from '../CourseTabs/CourseTabs';

interface IProps {
  course: ICourse;
}

class CourseContainer extends React.Component<IProps, object> {
  public render() {
    return (
      <div className="CourseContainer">
        <Container>
          <Image src={logoDark} size='tiny' />
          <CourseHero course={this.props.course} />
          <CourseTabs course={this.props.course}/>
        </Container>
      </div>
    );
  }
}
  
export default CourseContainer;