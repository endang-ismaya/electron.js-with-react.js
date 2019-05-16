const React = require('react');
const ReactDOM = require('react-dom');
const createReactClass = require('create-react-class');

const $ = require('jquery');
const bootstrap = require('bootstrap');
const popper = require('popper.js');
const fs = eRequire('fs');
const loadApts = JSON.parse(fs.readFileSync(dataLocation));

// $(() => {
//   $('#petAppointments').append(
//       '<h3 class="text-success">Wisdom Pet App Loaded</h3>'
//   );
// });

const MainInterface = createReactClass({
  getInitialState: function() {
    return {
      myAppointments: loadApts,
    };
  },
  render: function() {
    const myAppointments = this.state.myAppointments;
    return (
      <div className="application">
        <div className="container">
          <div className="row">
            <div className="appointments col-sm-12">
              <h2 className="appointments-headline">Current Appointments</h2>
              <ul className="item-list media-list">
                <li className="pet-item media">
                  <div className="pet-info media-body">
                    <div className="pet-head">
                      <span className="pet-name">
                        {myAppointments[0].petName}
                      </span>
                      <span className="apt-date float-right">
                        {myAppointments[0].aptDate}
                      </span>
                    </div>
                    <div className="owner-name">
                      <span className="label-item">Owner:</span>
                      {myAppointments[0].ownerName}
                    </div>
                    <div className="apt-notes">
                      {myAppointments[0].aptNotes}
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            {/* col-sm-12 */}
          </div>
          {/* row */}
        </div>
        {/* container */}
      </div>
    );
  },
});

ReactDOM.render(<MainInterface />, document.getElementById('petAppointments'));
