const React = require('react');
const createReactClass = require('create-react-class');

const AptList = createReactClass({
  handleDelete: function() {
    this.props.onDelete(this.props.whichItem);
  },
  render: function() {
    const {singleItem} = this.props;
    return (
      <li className="pet-item d-flex align-items-start mb-3">
        <div className="me-3">
          <button
            type="button"
            className="pet-delete btn btn-sm btn-danger"
            onClick={this.handleDelete}
          >
            X
          </button>
        </div>
        <div className="pet-info flex-grow-1">
          <div className="pet-head d-flex justify-content-between">
            <span className="pet-name">{singleItem.petName}</span>
            <span className="apt-date">{singleItem.aptDate}</span>
          </div>
          <div className="owner-name">
            <span className="label-item">Owner:</span>
            {singleItem.ownerName}
          </div>
          <div className="apt-notes">{singleItem.aptNotes}</div>
        </div>
      </li>
    );
  },
});

module.exports = AptList;