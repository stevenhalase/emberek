import * as React from 'react';
import CourseContainer from '../../components/CourseContainer/CourseContainer';
import './CoursePage.css';

import advancedWebDevelopment from '../../assets/images/advanced_web_development.png';
import basicWebDevelopment from '../../assets/images/basic_web_development.png';
import css3 from '../../assets/images/css3.png';
import gettingStarted from '../../assets/images/getting_started.png';
import html5 from '../../assets/images/html5.png';

class CoursePage extends React.Component<any, any> {
  
  constructor(props: any) {
    super(props);
    this.state = {
      catalog: {
        topics: [
          {
            courses: [],
            description: `Learn your way around emberek's interface.`,
            image: gettingStarted,
            name: `Getting Started`
          },{
            courses: [
              {
                description: `Learn your way around the DOM.`,
                id: '0001',
                image: html5,
                lessons: [
                  {
                    description: `Learn how to use the most basic building blocks of every website.`,
                    name: `HTML Elements`
                  },
                  {
                    description: `Learn details on how to use the most basic building blocks of every website.`,
                    name: `HTML Elements Deep Dive`
                  }
                ],
                name: `HTML5`,
              },
              {
                description: `Learn how to style pages.`,
                id: '0002',
                image: css3,
                lessons: [
                  {
                    description: `Learn how to use CSS Selectors to style elements.`,
                    name: `CSS Selectors`
                  },
                  {
                    description: `Learn how to use Classes to style elements.`,
                    name: `CSS Classes`
                  }
                ],
                name: `CSS3`,
              }
            ],
            description: `Learn the basics of HTML, CSS and Javascript.`,
            image: basicWebDevelopment,
            name: `Basic Web Development`
          },{
            courses: [],
            description: `Learn advanced techniques for DOM manupulation, OOP and advanced styling`,
            image: advancedWebDevelopment,
            name: `Advanced Web Development`
          }
        ]
      },
      selectedCourse: null
    }
  }

  public componentDidMount() {
    if (typeof this.props.match.params.courseid !== 'undefined') {
      const selectedCourseId = this.props.match.params.courseid;
      let selectedCourse = null;
      for (const topic of this.state.catalog.topics) {
        for (const course of topic.courses) {
          if (course.id === selectedCourseId) {
            selectedCourse = course;
          }
        }
      }
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