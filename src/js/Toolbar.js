const React = require('react');
const createReactClass = require('create-react-class');

const Toolbar = createReactClass({
  render: function() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-4">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Wisdom Pet</a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <button
                  className="nav-link btn btn-link"
                  onClick={this.props.handleAbout}
                >
                  About
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  },
});

module.exports = Toolbar;