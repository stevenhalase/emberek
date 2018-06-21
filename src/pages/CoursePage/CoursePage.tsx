import * as React from 'react';
import CourseContainer from '../../components/CourseContainer/CourseContainer';
import './CoursePage.css';

import CatalogService from './../../services/CatalogService';

class CoursePage extends React.Component<any, any> {
  
  constructor(props: any) {
    super(props);
    this.state = {
      selectedCourse: null
    }
  }

  public componentDidMount() {
    if (typeof this.props.match.params.courseid !== 'undefined') {
      const selectedCourse = CatalogService.GetCourse(this.props.match.params.courseid);
      this.setState({ selectedCourse });
    }
  }

  public render() {
    return (
      <div className="CoursePage">
        {
          this.state.selectedCourse !== null ?
            <CourseContainer course={this.state.selectedCourse} /> : 'No Course found!'
        }
      </div>
    );
  }

}

export default CoursePage;