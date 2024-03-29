const $ = require('jquery');
const _ = require('lodash');
const bootstrap = require('bootstrap');
const popper = require('popper.js');
const fs = eRequire('fs');
const loadApts = JSON.parse(fs.readFileSync(dataLocation));

// $(() => {
//   $('#petAppointments').append(
//       '<h3 class="text-success">Wisdom Pet App Loaded</h3>'
//   );
// });

const React = require('react');
const ReactDOM = require('react-dom');
const createReactClass = require('create-react-class');
const AptList = require('./AptList');
const Toolbar = require('./Toolbar');

const MainInterface = createReactClass({
  getInitialState: function() {
    return {
      myAppointments: loadApts,
    };
  },
  componentDidUpdate: function() {
    fs.writeFile(
        dataLocation,
        JSON.stringify(this.state.myAppointments),
        'utf8',
        function(err) {
          if (err) {
            console.log(err);
          }
        }
    );
  },
  showAbout: function() {
    ipc.sendSync('openInfoWindow');
  },
  deleteMessage: function(item) {
    const allApts = this.state.myAppointments;
    const newApts = _.without(allApts, item);
    this.setState({
      myAppointments: newApts,
    });
  },
  render: function() {
    let myAppointments = this.state.myAppointments;

    myAppointments = myAppointments.map((item, index) => {
      return (
        <AptList
          key={index}
          singleItem={item}
          whichItem={item}
          onDelete={this.deleteMessage}
        />
      );
    });

    return (
      <div className="application">
        <div className="interface">
          <Toolbar handleAbout={this.showAbout} />
          <div className="container">
            <div className="row">
              <div className="appointments col-sm-12">
                <h2 className="appointments-headline">Current Appointments</h2>
                <ul className="item-list media-list">{myAppointments}</ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  },
});

ReactDOM.render(<MainInterface />, document.getElementById('petAppointments'));
