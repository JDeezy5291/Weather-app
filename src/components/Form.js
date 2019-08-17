import React from "react";

class Form extends React.Component  {
  render() {
    return(
        <form onSubmit={this.props.getWeather}>
          <input type="text" name="city" placeholder="city"></input>
          <input type="text" name="country" placeholder="country"></input>
          <button>Enter</button>
        </form>
    );
  }
}
export default Form;
