import * as React from 'react';
import './LessonContainer.css'

import {Controlled as CodeMirror} from 'react-codemirror2';
/* tslint:disable:no-var-requires */
require('codemirror/mode/xml/xml');
require('codemirror/mode/javascript/javascript');

import { Button, Container, Icon, Image } from 'semantic-ui-react';

import ILesson from './../../types/ILesson';

import logoDark from '../../assets/images/logo_dark.png';
import IStep from './../../types/IStep';
import LessonInfo from './../LessonInfo/LessonInfo';
import LessonStages from './../LessonStages/LessonStages';
import LessonSteps from './../LessonSteps/LessonSteps';

interface IProps {
  lesson: ILesson;
}

class LessonContainer extends React.Component<IProps, any> {

  constructor(props: any) {
    super(props);
    this.state = {
      codeMirror: React.createRef(),
      currentStage: this.props.lesson.stages[1],
      currentStep: this.props.lesson.stages[1].steps[0],
      value: `<html>
  <head>
    <title>Hello World</title>
  </head>
  <body></body>
</html>`
    }

    this.validate = this.validate.bind(this);
  }

  public render() {
    const options = {
      lineNumbers: true,
      mode: 'xml',
      theme: 'material',
      viewportMargin: Infinity
    }
    return (
      <div className="LessonContainer">
        <Container>
          <div className="LessonContainer-header">
            <Image src={logoDark} size='tiny' />
            <LessonStages stages={this.props.lesson.stages} />
            <div className="LessonContainer-navigation">
              <Button onClick={this.validate} compact={true} inverted={true}>
                Validate
              </Button>
              <Button compact={true} inverted={true} disabled={true}>
                Next
              </Button>
            </div>
          </div>
          <div className="LessonContainer-inner">
            <div className="LessonContainer-left">
              <LessonInfo lesson={this.props.lesson} currentStage={this.state.currentStage} />
              <LessonSteps currentStage={this.state.currentStage} />
            </div>
            <div className="LessonContainer-right">
              <CodeMirror
                value={this.state.value}
                options={options}
                onBeforeChange={this.onBeforeChange}
                onChange={this.onChange}
                ref={this.state.codeMirror}
              />
            </div>
          </div>
        </Container>
      </div>
    );
  }

  public validate = () => {
    return this.state.currentStep.validator();
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