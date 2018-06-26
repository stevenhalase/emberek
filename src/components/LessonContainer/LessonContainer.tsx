import * as React from 'react';
import './LessonContainer.css'

import {Controlled as CodeMirror} from 'react-codemirror2';
/* tslint:disable:no-var-requires */
require('codemirror/mode/xml/xml');
require('codemirror/mode/javascript/javascript');

import { Container, Icon, Image, Step } from 'semantic-ui-react';

import ILesson from './../../types/ILesson';

import logoDark from '../../assets/images/logo_dark.png';
import IStep from './../../types/IStep';

interface IProps {
  lesson: ILesson;
}

class LessonContainer extends React.Component<IProps, any> {

  constructor(props: any) {
    super(props);
    this.state = {
      codeMirror: React.createRef(),
      currentStage: this.props.lesson.stages[1],
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
      theme: 'material',
      viewportMargin: Infinity
    }
    return (
      <div className="LessonContainer">
        <Container>
          <div className="LessonContainer-header">
            <Image src={logoDark} size='tiny' />
            <Step.Group size='small'>
              {
                this.props.lesson.stages.map((stage, ind) => {
                  return (
                    <Step active={stage.active} disabled={!stage.active && !stage.complete} key={ind}>
                      <Icon name={stage.complete ? 'check circle outline' : 'circle outline'} />
                      <Step.Content>
                        <Step.Title>{stage.name}</Step.Title>
                      </Step.Content>
                    </Step>
                  )
                })
              }
            </Step.Group>
          </div>
          <div className="LessonContainer-inner">
            <div className="LessonContainer-left">
              <div className="LessonContainer-info">
                <div className="LessonContainer-header">
                  <div className="LessonContainer-title">
                    {this.props.lesson.name}
                  </div>
                  <div className="LessonContainer-name">
                    {this.state.currentStage.name}
                  </div>
                </div>
                <div className="LessonContainer-body">
                  <div className="LessonContainer-description">
                    {this.state.currentStage.description}
                  </div>
                </div>
              </div>
              <div className="LessonContainer-steps">
                {
                  this.state.currentStage.steps.map((step: IStep, ind: number) => {
                    return (
                      <div className="LessonContainer-step" key={ind}>
                        <div className="LessonContainer-step-header">
                          Steps
                        </div>
                        <div className="LessonContainer-step-body">
                          <div className="LessonContainer-step-status">
                            <Icon name={step.complete ? 'square outline' : 'check square outline'} />
                          </div>
                          <div className="LessonContainer-step-description">
                            {step.description}
                          </div>
                        </div>
                      </div>
                    )
                  })
                }
              </div>
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

  public onBeforeChange = (editor: any, data: any, value: any) => {
    this.setState({value});
  }

  public onChange = (editor: any, data: any, value: any) => {
    /* tslint:disable:no-console */
    console.log('onBeforeChange', value);
  }

}
  
export default LessonContainer;