import React from 'react';

class Dropdown extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.initializeDropDown();
  }

  componentDidUpdate() {
    this.initializeDropDown();
  }

  initializeDropDown() {
    $('.dropdown-button').dropdown({
        inDuration: 300,
        outDuration: 225,
        constrainWidth: false, // Does not change width of dropdown to that of the activator
        hover: true, // Activate on hover
        gutter: 0, // Spacing from edge
        belowOrigin: false, // Displays dropdown below the button
        alignment: 'left', // Displays dropdown with edge aligned to the left of button
        stopPropagation: false // Stops event propagation
      }
    );

  }

  render() {
    return (
      <div id="dropdown">
        <a className='dropdown-button' href='#' data-activates='dropdown1'>Categories</a>
        <ul id='dropdown1' className='dropdown-content'>
          <li><a href="#!">game</a></li>
          <li><a href="#!">money</a></li>
          <li className="divider"></li>
          <li><a href="#!">gambling</a></li>
        </ul>
      </div>


    );
  }
}

export default Dropdown;
