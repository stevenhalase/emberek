import * as React from 'react';
import './Curriculum.css'

import ICurriculumUnit from '../../types/ICurriculumUnit';
import CurriculumUnitList from '../CurriculumUnitList/CurriculumUnitList';

interface IProps {
  curriculumUnits: ICurriculumUnit[];
}

class Curriculum extends React.Component<IProps, object> {
  public render() {
    return (
      <div className="Curriculum">
        <CurriculumUnitList curriculumunits={this.props.curriculumUnits} />
      </div>
    );
  }
}
  
export default Curriculum;