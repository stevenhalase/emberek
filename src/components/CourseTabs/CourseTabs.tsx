import * as React from 'react';
import './CourseTabs.css'

import { Tab } from 'semantic-ui-react';
import ICourse from './../../types/ICourse';
import CourseDescription from './../CourseDescription/CourseDescription';
import CourseLessons from './../CourseLessons/CourseLessons';

interface IProps {
  course: ICourse;
}

class CourseTabs extends React.Component<IProps, object> {
  public render() {
    const panes = [
      { menuItem: 'Overview', render: () => <Tab.Pane attached={false}><CourseDescription course={this.props.course} /></Tab.Pane> },
      { menuItem: 'Lessons', render: () => <Tab.Pane attached={false}><CourseLessons course={this.props.course} /></Tab.Pane> },
    ];
    return (
      <div className="CourseTabs">
        <Tab menu={{ secondary: true, pointing: true }} panes={panes} />
      </div>
    );
  }
}
  
export default CourseTabs;