import React from 'react';

class Taglist extends React.Component {
  constructor(props) {
    super(props);
  }

  initializeChips() {
    $('.chips').material_chip();
  }

  componentDidMount() {
    this.initializeChips();
  }

  componentWillUpdate() {
    this.initializeChips();
  }


  render() {
    return (
      <div className="chip">
        Tag
        <i className="close material-icons">close</i>
      </div>
    );
  }
}

export default Taglist;
