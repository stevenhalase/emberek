import * as React from 'react';
import './CurriculumUnitList.css';

import { List } from 'semantic-ui-react';

import ICurriculumUnit from '../../types/ICurriculumUnit';
import CurriculumUnit from '../CurriculumUnit/CurriculumUnit';

interface IProps {
  curriculumunits: ICurriculumUnit[];
}

class CurriculumUnitList extends React.Component<IProps, object> {
  public render() {
    return (
      <div className="CurriculumUnitList">
        <List divided={true} relaxed={true}>
          {
            this.props.curriculumunits.map((curriculumUnit: ICurriculumUnit, ind: number) => {
              return <CurriculumUnit curriculumunit={curriculumUnit} key={ind} />
            })
          }
        </List>
      </div>
    );
  }
}
  
export default CurriculumUnitList;