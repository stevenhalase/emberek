import * as React from 'react';
import './App.css';

import Courses from './components/Courses/Courses';

class App extends React.Component<any, any> {
  
  constructor(props: any) {
    super(props);
    this.state = {
      courses: [
        {
          curriculum: [],
          description: `Learn your way around emberek's interface.`,
          name: `Getting Started`
        },{
          curriculum: [
            {
              description: `Learn your way around the DOM.`,
              name: `HTML5`,
            },
            {
              description: `Learn how to style pages.`,
              name: `CSS3`,
            }
          ],
          description: `Learn the basics of HTML, CSS and Javascript.`,
          name: `Basic Web Development`
        },{
          curriculum: [],
          description: `Learn advanced techniques for DOM manupulation, OOP and advanced styling`,
          name: `Advanced Web Development`
        }
      ]
    }
  }

  public render() {
    return (
      <div className="App">
        <Courses courses={this.state.courses}/>
      </div>
    );
  }
}

export default App;
