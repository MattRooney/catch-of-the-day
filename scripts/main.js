var React = require('react');
var ReactDOM = require('react-dom');

/* Store Picker */

var StorePicker = React.createClass({

  render : function() {
    return (
      <form className="store-selector">
        {/* Comments! */}
        <h2>Please Enter a Store</h2>
        <input type= "text" ref="storeId" required />
        <input type= "submit"/>
      </form>
    )
  }
});

ReactDOM.render(<StorePicker/>, document.querySelector('#main'));
