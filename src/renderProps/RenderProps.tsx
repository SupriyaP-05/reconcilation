import React from "react";

interface IRecipeProps {
    render: any;
  }

class RenderPropsComponent extends React.Component <IRecipeProps> {
    render() {
      return (
        <div>
          <h2>I am Child Component</h2>
          {this.props.render()}
        </div>
      )
    }
  }

export default RenderPropsComponent