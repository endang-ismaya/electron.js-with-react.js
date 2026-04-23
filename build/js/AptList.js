const React = require('react');
const createReactClass = require('create-react-class');
const AptList = createReactClass({
  displayName: "AptList",
  handleDelete: function () {
    this.props.onDelete(this.props.whichItem);
  },
  render: function () {
    const {
      singleItem
    } = this.props;
    return /*#__PURE__*/React.createElement("li", {
      className: "pet-item d-flex align-items-start mb-3"
    }, /*#__PURE__*/React.createElement("div", {
      className: "me-3"
    }, /*#__PURE__*/React.createElement("button", {
      type: "button",
      className: "pet-delete btn btn-sm btn-danger",
      onClick: this.handleDelete
    }, "X")), /*#__PURE__*/React.createElement("div", {
      className: "pet-info flex-grow-1"
    }, /*#__PURE__*/React.createElement("div", {
      className: "pet-head d-flex justify-content-between"
    }, /*#__PURE__*/React.createElement("span", {
      className: "pet-name"
    }, singleItem.petName), /*#__PURE__*/React.createElement("span", {
      className: "apt-date"
    }, singleItem.aptDate)), /*#__PURE__*/React.createElement("div", {
      className: "owner-name"
    }, /*#__PURE__*/React.createElement("span", {
      className: "label-item"
    }, "Owner:"), singleItem.ownerName), /*#__PURE__*/React.createElement("div", {
      className: "apt-notes"
    }, singleItem.aptNotes)));
  }
});
module.exports = AptList;