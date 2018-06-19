import * as React from 'react';
import { List } from 'semantic-ui-react';
import './CurriculumUnit.css';

import ICurriculumUnit from '../../types/ICurriculumUnit';

interface IProps {
  curriculumunit: ICurriculumUnit;
}

class CurriculumUnit extends React.Component<IProps, object> {
  public render() {
    return (
      <List.Item>
        <List.Icon name='folder outline' size='large' verticalAlign='middle' />
        <List.Content>
          <List.Header as='a'>{this.props.curriculumunit.name}</List.Header>
          <List.Description as='a'>{this.props.curriculumunit.description}</List.Description>
        </List.Content>
      </List.Item>
    );
  }
}

export default CurriculumUnit;