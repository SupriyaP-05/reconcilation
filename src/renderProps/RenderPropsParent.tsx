// Parent component sending render props to the child
import React from "react";
import RenderPropsComponent from "./RenderProps";

class SampleRenderProps extends React.Component<{}, any> {
    render() {
        return (
            <RenderPropsComponent
                // Passing render props to the child component
                render={() => {
                    return (
                        <div>
                            <h3>
                                I am coming from render props
                            </h3>
                        </div>
                    )
                }}
            />
        )
    }
}

export default SampleRenderProps