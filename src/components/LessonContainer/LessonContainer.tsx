import * as React from 'react';
import './LessonContainer.css'

import {Controlled as CodeMirror} from 'react-codemirror2';
/* tslint:disable:no-var-requires */
require('codemirror/mode/xml/xml');
require('codemirror/mode/javascript/javascript');

import { Container, Image } from 'semantic-ui-react';

import ILesson from './../../types/ILesson';

import logoDark from '../../assets/images/logo_dark.png';

interface IProps {
  lesson: ILesson;
}

class LessonContainer extends React.Component<IProps, any> {

  constructor(props: any) {
    super(props);
    this.state = {
      value: `<html>
  <head>
    <title>Hello World</title>
  </head>
  <body></body>
</html>`
    }
  }

  public render() {
    const options = {
      lineNumbers: true,
      mode: 'xml',
      theme: 'material'
    }
    return (
      <div className="LessonContainer">
        <Container>
          <Image src={logoDark} size='tiny' />
          <div>
            {this.props.lesson.name}
          </div>
          <CodeMirror
            value={this.state.value}
            options={options}
            onBeforeChange={this.onBeforeChange}
            onChange={this.onChange}
          />
        </Container>
      </div>
    );
  }

  public onBeforeChange = (editor: any, data: any, value: any) => {
    this.setState({value});
  }

  public onChange = (editor: any, data: any, value: any) => {
    /* tslint:disable:no-console */
    console.log('onBeforeChange', value);
  }

}
  
export default LessonContainer;