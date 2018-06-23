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
              id: '1100000',
              lessons: [
                {
                  complete: false,
                  description: `Introduction to HTML Elements`,
                  id: '1110000',
                  name: `HTML Elements`,
                  stages: [
                    {
                      active: false,
                      complete: true,
                      description: `Welcome to the world of code! Last year, millions of learners from our community started with HTML. Why? HTML is the skeleton of all web pages. It's often the first language learned by marketers and designers and is core to front-end development work. If this is your first time touching code, we're excited for what you're about to create.`,
                      id: '1111000',
                      name: `What is HTML?`,
                      steps: [
                        {
                          active: false,
                          complete: false,
                          description: `In the code editor to the right, type your name in between <h1> and </h1>, then press Run.`,
                          id: '1111100',
                          name: ``,
                          validator: () => {
                            return true;
                          }
                        }
                      ]
                    },
                    {
                      active: true,
                      complete: false,
                      description: `Welcome to the world of code! Last year, millions of learners from our community started with HTML. Why? HTML is the skeleton of all web pages. It's often the first language learned by marketers and designers and is core to front-end development work. If this is your first time touching code, we're excited for what you're about to create.`,
                      id: '1112000',
                      name: `The Body`,
                      steps: [
                        {
                          active: false,
                          complete: false,
                          description: `In the code editor to the right, type your name in between <h1> and </h1>, then press Run.`,
                          id: '1111100',
                          name: ``,
                          validator: () => {
                            return true;
                          }
                        }
                      ]
                    },
                    {
                      active: false,
                      complete: false,
                      description: `HTML is organized as a collection of family tree relationships, including parent-child and siblings. As you saw in the last exercise, we placed the <p> tags within the <body> tags. When an element is contained inside another element, it is considered the child of that element. The child element is said to be nested inside of the parent element.`,
                      id: '1113000',
                      name: `HTML Structure`,
                      steps: [
                        {
                          active: false,
                          complete: false,
                          description: `In the code editor to the right, type your name in between <h1> and </h1>, then press Run.`,
                          id: '1111100',
                          name: ``,
                          title: ``,
                          validator: () => {
                            return true;
                          }
                        }
                      ]
                    }
                  ]
                },
                {
                  complete: false,
                  description: `Introduction to HTML Header Elements`,
                  id: '1120000',
                  name: `HTML Header Elements`
                },
                {
                  description: `Introduction to HTML Paragraph Elements`,
                  id: '130000',
                  name: `HTML Paragraph Elements`
                },
                {
                  description: `Introduction to HTML Element Attributes`,
                  id: '1140000',
                  name: `HTML Element Attributes`
                }
              ],
              name: `HTML Elements`
            },
            {
              description: `Learn details on how to use the most basic building blocks of every website.`,
              id: '1200000',
              lessons: [],
              name: `HTML Elements Deep Dive`
            }
          ],
          description: `Learn your way around the DOM.`,
          id: '1000000',
          image: html5,
          name: `HTML5`
        },
        {
          courses: [
            {
              description: `Learn how to use CSS Selectors to style elements.`,
              id: '2100000',
              lessons: [],
              name: `CSS Selectors`
            },
            {
              description: `Learn how to use Classes to style elements.`,
              id: '2200000',
              lessons: [],
              name: `CSS Classes`
            }
          ],
          description: `Learn how to style pages.`,
          id: '2000000',
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

  public static GetLesson(lessonId: string) {
    let selectedLesson = null;
    for (const topic of catalog.topics) {
      for (const subject of topic.subjects) {
        for (const course of subject.courses) {
          for (const lesson of course.lessons) {
            if (lesson.id === lessonId) {
              selectedLesson = lesson;
            }
          }
        }
      }
    }
    return selectedLesson;
  }

}