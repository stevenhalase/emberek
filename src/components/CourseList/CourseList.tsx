import * as React from 'react';
import './CourseList.css';

import SmoothCollapse from 'react-smooth-collapse';
import { Divider, Icon, Item } from 'semantic-ui-react';

import ICourse from '../../types/ICourse';
import Course from '../Course/Course';

interface IProps {
  courses: ICourse[];
}

class CourseList extends React.Component<IProps, any> {

  constructor(props: any) {
    super(props);
    this.state = {
      open: false
    }
  }

  public render() {
    if (this.props.courses.length > 0) {
      return (
        <div className={this.state.open ? 'CourseList' : 'CourseList closed'}>
          <Divider horizontal={true}>Courses</Divider>
          <SmoothCollapse expanded={this.state.open}>
            <Item.Group>
              {
                this.props.courses.map((course: ICourse, ind: number) => {
                  return <Course course={course} key={ind} />
                })
              }
            </Item.Group>
          </SmoothCollapse>
          <div className="CourseList-expand" onClick={this.toggleOpen}>
            <Icon name={this.state.open ? 'chevron up' : 'chevron down'} /></div>
          </div>
      );
    } else {
      return (
        <div className="CourseList empty" />
      );
    }
  }

  private toggleOpen = (ev: any) => {
    this.setState({ open: !this.state.open });
  }
}
  
export default CourseList;