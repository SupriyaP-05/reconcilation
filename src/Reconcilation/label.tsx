import React from "react";

class Label extends React.Component {
    componentDidMount () {
        console.log("is created")
    }
    render() {
      return (
          <code>
              Edit src app here
          </code>
      ) ; 
    };
}

export default Label;