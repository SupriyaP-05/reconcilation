import React from "react";
import Label from "./label";

class LabelWrapper extends React.Component<{}, any> {
    constructor(props: any) {
        super(props)
        this.state = { label: true };
    }
    componentDidMount() {
        console.log("label is created");
        setInterval(() => {
            this.setState({ label: !this.state.label })
        }, 2000)
    }
    render() {
        return (
            <div>
                {
                    this.state.label ? (
                        <p title={`${this.state.label}`}>
                            <Label></Label>
                        </p>
                    ) : (
                        <div title={`${this.state.label}`}>
                            <Label></Label>
                        </div>
                    )
                }
            </div>
        );
    };
}

export default LabelWrapper;