import React from 'react';
import {formatHelper} from '/client/helpers/format-helpers';
import Dropdown from '../containers/dropdown';
class FilterArea extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sortType: 'status',
      sortTypes: ['updated', 'status'],
      sortDirection: 'asc',
    };
  }

  getSortType() {

  }

  toggleSortType() {
    this.setState({sortType: (this.state.sortType == 'status') ? 'updated' : 'status'});
  }

  toggleDirection() {
    this.setState({sortDirection: (this.state.sortDirection == 'asc') ? 'desc' : 'asc'});
  }

  render() {
    let {sortTypes}=this.state;
    let {dappCount, toggleDirection, toggleSortType, sortType, sortDirection}= this.props;
    return (
      <div className="row">
        <div className='filter-area white-text'>
          <div className="col s6">
            <div className='col s6'>
              {dappCount} dapps listed
            </div>
            <div className="col s6">

            </div>
          </div>


          <div className='col s6 right-align'>
            <div className="col s6">
              <Dropdown/>
            </div>
            <div className="col s6">
              Sort: <a className="sort-direction"
                       onClick={toggleSortType.bind(this)}>{formatHelper.capitalize(sortType)} </a>
              <i className={`sort-direction fa fa-sort-amount-${sortDirection}`}
                 onClick={toggleDirection.bind(this)}></i>
            </div>

          </div>
        </div>

      </div>
    );
  }
}
FilterArea.defaultProps = {
  dappCount: 0
};
export default FilterArea;
