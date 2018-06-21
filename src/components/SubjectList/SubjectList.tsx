import * as React from 'react';
import './SubjectList.css';

import SmoothCollapse from 'react-smooth-collapse';
import { Divider, Icon, Item } from 'semantic-ui-react';

import ISubject from '../../types/ISubject';
import Subject from '../Subject/Subject';

interface IProps {
  subjects: ISubject[];
}

class SubjectList extends React.Component<IProps, any> {

  constructor(props: any) {
    super(props);
    this.state = {
      open: false
    }
  }

  public render() {
    if (this.props.subjects.length > 0) {
      return (
        <div className={this.state.open ? 'SubjectList' : 'SubjectList closed'}>
          <Divider horizontal={true}>Subjects</Divider>
          <SmoothCollapse expanded={this.state.open}>
            <Item.Group>
              {
                this.props.subjects.map((subject: ISubject, ind: number) => {
                  return <Subject subject={subject} key={ind} />
                })
              }
            </Item.Group>
          </SmoothCollapse>
          <div className="SubjectList-expand" onClick={this.toggleOpen}>
            <Icon name={this.state.open ? 'chevron up' : 'chevron down'} /></div>
          </div>
      );
    } else {
      return (
        <div className="SubjectList empty" />
      );
    }
  }

  private toggleOpen = (ev: any) => {
    this.setState({ open: !this.state.open });
  }
}
  
export default SubjectList;