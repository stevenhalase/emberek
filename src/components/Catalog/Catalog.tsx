import * as React from 'react';
import './Catalog.css'

import { Container, Header, Item } from 'semantic-ui-react';

import ITopic from '../../types/ITopic';
import Topic from '../Topic/Topic';
import ICatalog from './../../types/ICatalog';

interface IProps {
  catalog: ICatalog;
}

class Catalog extends React.Component<IProps, object> {
  public render() {
    return (
      <div className="Catalog">
        <Container>
          <Header as='h2'>Course Catalog</Header>
          <Item.Group>
            {
              this.props.catalog.topics.map((topic: ITopic, ind: number) => {
                return <Topic topic={topic} key={ind} />
              })
            }
          </Item.Group>
        </Container>
      </div>
    );
  }
}
  
export default Catalog;