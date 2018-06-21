import * as React from 'react';
import './LessonContainer.css'

import MonacoEditor from 'react-monaco-editor';

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
      code: `<html>
        <head>
          <title>Hello World</title>
        </head>
        <body></body>
      </html>`
    }
  }

  public editorDidMount(editor: any, monaco: any) {
    editor.focus();
  }

  public onChange(newValue: any, e:any) {
    /* tslint:disable:no-console */
    // console.log('onChange', newValue, e);
  }

  public render() {
    const code = this.state.code;
    const options = {
      selectOnLineNumbers: true
    };
    return (
      <div className="LessonContainer">
        <Container>
          <Image src={logoDark} size='tiny' />
          <div>
            {this.props.lesson.name}
          </div>
          <MonacoEditor
            width="800"
            height="600"
            language="html"
            theme="vs-dark"
            value={code}
            options={options}
            onChange={this.onChange}
            editorDidMount={this.editorDidMount}
          />
        </Container>
      </div>
    );
  }

}
  
export default LessonContainer;