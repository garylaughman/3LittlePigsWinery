import React from 'react';
import '../../index.css';

class Square extends React.Component {
    static get defaultProps() {
        return {
          value: null
        };
      }

    render() {
        const { value } = this.props;

        return (
            <button className="square">
                { value }
            </button>
        );
      }
}

export default Square;
