import React from 'react';
import Taglist from '../containers/taglist';
class SettingsModal extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <div id='settingsModal' className='modal bottom-sheet modal-fixed-footer'>
        <div className="modal-content">
          <h4>Filter Settings</h4>
          <ul className="collection">
            <li className="collection-item">
              <div>
                <Taglist/>
              </div>
              <div className="row">
                <div className="row">
                  <div className="input-field col s6">
                    <input id="icon_prefix" type="text" className="validate"/>
                    <button className="prefix btn-floating waves-effect waves-light red"><i
                      className="material-icons">add</i></button>
                    <label>Ignored Tags</label>
                  </div>
                </div>
              </div>


            </li>
            <li>
              <div>
                <Taglist/>
              </div>
              <div className="row">
                <div className="row">
                  <div className="input-field col s6">
                    <input id="icon_prefix" type="text" className="validate"/>
                    <button className="prefix btn-floating waves-effect waves-light green"><i
                      className="material-icons">add</i></button>
                    <label>Interesting Tags</label>
                  </div>
                </div>
              </div>


            </li>
          </ul>
        </div>
        <div className="modal-footer">
          <button className="modal-action modal-close waves-effect waves-red btn-flat ">Cancel</button>
          <button className="modal-action modal-close waves-effect waves-green btn-flat ">Save</button>
        </div>
      </div>
    );

  }
}

export default SettingsModal;
