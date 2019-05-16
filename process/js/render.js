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
  render: function() {
    return (
      <div>
        <h1>Wisdom Pet Application</h1>
      </div>
    );
  },
});

ReactDOM.render(<MainInterface />, document.getElementById('petAppointments'));
