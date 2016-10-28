import React from 'react';

var Component = React.createClass({
  render: function () {
    if (this.props.onRender) {
      this.props.onRender();
    }
    return (
        <div>
          <h1>3 Little Pigs Winery</h1>
          <p>...building React app</p>
        </div>
    );
  },
  propTypes: {
    onRender: React.PropTypes.func
  }
});

export default Component;
