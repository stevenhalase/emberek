import * as React from 'react';
import './CatalogPage.css';

import Catalog from '../../components/Catalog/Catalog';
import CatalogService from './../../services/CatalogService';

class CatalogPage extends React.Component<any, any> {
  
  constructor(props: any) {
    super(props);
    this.state = {
      catalog: CatalogService.GetCatalog()
    }
  }

  public render() {
    return (
      <div className="CatalogPage">
        <Catalog catalog={this.state.catalog}/>
      </div>
    );
  }
}

export default CatalogPage;
