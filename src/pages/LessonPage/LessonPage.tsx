import * as React from 'react';
import './LessonPage.css'

import LessonContainer from './../../components/LessonContainer/LessonContainer';
import CatalogService from './../../services/CatalogService';

class LessonPage extends React.Component<any, any> {
  
  constructor(props: any) {
    super(props);
    this.state = {
      selectedLesson: null
    }
  }

  public componentDidMount() {
    if (typeof this.props.match.params.lessonid !== 'undefined') {
      const selectedLesson = CatalogService.GetLesson(this.props.match.params.lessonid);
      this.setState({ selectedLesson });
    }
  }

  public render() {
    return (
      <div className="LessonPage">
        {
          this.state.selectedLesson !== null ?
            <LessonContainer lesson={this.state.selectedLesson} /> : 'No Lesson found!'
        }
      </div>
    );
  }

}
  
export default LessonPage;