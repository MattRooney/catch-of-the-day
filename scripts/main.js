var React = require('react');
var ReactDOM = require('react-dom');

/* App */

var App = React.createClass({
  render : function() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header />
        </div>
        <Order/>
        <Inventory/>
      </div>
    )
  }
});

/* Header */

var Header = React.createClass({
  render : function(){
    return (
      <p>Header</p>
    )
  }
})
/* Order */

var Order = React.createClass({
  render : function(){
    return (
      <p>Order</p>
    )
  }
})
/* Inventory */

var Inventory = React.createClass({
  render : function(){
    return (
      <p>Inventory</p>
    )
  }
})

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

ReactDOM.render(<App/>, document.querySelector('#main'));
