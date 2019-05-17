const React = require('react');
const createReactClass = require('create-react-class');

const AptList = createReactClass({
  handleDelete: function() {
    this.props.onDelete(this.props.whichItem);
  },
  render: function() {
    const {singleItem} = this.props;
    return (
      <li className="pet-item media">
        <div className="media-left">
          <div
            className="pet-delete btn btn-xs btn-danger"
            onClick={this.handleDelete}
          >
            X
          </div>
        </div>
        <div className="pet-info media-body">
          <div className="pet-head">
            <span className="pet-name">{singleItem.petName}</span>
            <span className="apt-date float-right">{singleItem.aptDate}</span>
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
