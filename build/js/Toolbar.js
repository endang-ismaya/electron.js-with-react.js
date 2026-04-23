const React = require('react');
const createReactClass = require('create-react-class');
const Toolbar = createReactClass({
  displayName: "Toolbar",
  render: function () {
    return /*#__PURE__*/React.createElement("nav", {
      className: "navbar navbar-expand-lg navbar-dark bg-dark mb-4"
    }, /*#__PURE__*/React.createElement("div", {
      className: "container-fluid"
    }, /*#__PURE__*/React.createElement("a", {
      className: "navbar-brand",
      href: "#"
    }, "Wisdom Pet"), /*#__PURE__*/React.createElement("button", {
      className: "navbar-toggler",
      type: "button",
      "data-bs-toggle": "collapse",
      "data-bs-target": "#navbarNav"
    }, /*#__PURE__*/React.createElement("span", {
      className: "navbar-toggler-icon"
    })), /*#__PURE__*/React.createElement("div", {
      className: "collapse navbar-collapse",
      id: "navbarNav"
    }, /*#__PURE__*/React.createElement("ul", {
      className: "navbar-nav ms-auto"
    }, /*#__PURE__*/React.createElement("li", {
      className: "nav-item"
    }, /*#__PURE__*/React.createElement("button", {
      className: "nav-link btn btn-link",
      onClick: this.props.handleAbout
    }, "About"))))));
  }
});
module.exports = Toolbar;