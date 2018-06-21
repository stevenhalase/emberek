import advancedWebDevelopment from '../assets/images/advanced_web_development.png';
import basicWebDevelopment from '../assets/images/basic_web_development.png';
import css3 from '../assets/images/css3.png';
import gettingStarted from '../assets/images/getting_started.png';
import html5 from '../assets/images/html5.png';

const catalog = {
  topics: [
    {
      description: `Learn your way around emberek's interface.`,
      image: gettingStarted,
      name: `Getting Started`,
      subjects: []
    },{
      description: `Learn the basics of HTML, CSS and Javascript.`,
      image: basicWebDevelopment,
      name: `Basic Web Development`,
      subjects: [
        {
          courses: [
            {
              description: `Learn how to use the most basic building blocks of every website.`,
              id: '0110',
              lessons: [
                {
                  description: `Introduction to HTML Elements`,
                  id: '0111',
                  name: `HTML Elements`
                },
                {
                  description: `Introduction to HTML Header Elements`,
                  id: '0112',
                  name: `HTML Header Elements`
                },
                {
                  description: `Introduction to HTML Paragraph Elements`,
                  id: '0113',
                  name: `HTML Paragraph Elements`
                },
                {
                  description: `Introduction to HTML Element Attributes`,
                  id: '0114',
                  name: `HTML Element Attributes`
                }
              ],
              name: `HTML Elements`
            },
            {
              description: `Learn details on how to use the most basic building blocks of every website.`,
              id: '0120',
              lessons: [],
              name: `HTML Elements Deep Dive`
            }
          ],
          description: `Learn your way around the DOM.`,
          id: '0100',
          image: html5,
          name: `HTML5`
        },
        {
          courses: [
            {
              description: `Learn how to use CSS Selectors to style elements.`,
              id: '0210',
              lessons: [],
              name: `CSS Selectors`
            },
            {
              description: `Learn how to use Classes to style elements.`,
              id: '0220',
              lessons: [],
              name: `CSS Classes`
            }
          ],
          description: `Learn how to style pages.`,
          id: '0200',
          image: css3,
          name: `CSS3`,
        }
      ]
    },{
      description: `Learn advanced techniques for DOM manupulation, OOP and advanced styling`,
      image: advancedWebDevelopment,
      name: `Advanced Web Development`,
      subjects: []
    }
  ]
};

export default class CatalogService {

  public static GetCatalog() {
    return catalog;
  }

  public static GetCourse(courseId: string) {
    let selectedCourse = null;
    for (const topic of catalog.topics) {
      for (const subject of topic.subjects) {
        for (const course of subject.courses) {
          if (course.id === courseId) {
            selectedCourse = course;
          }
        }
      }
    }
    return selectedCourse;
  }

}