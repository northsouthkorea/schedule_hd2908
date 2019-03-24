import React from 'react';
import { connect } from 'react-redux';
import { setDiff } from 'modules/counterModule';

class Options extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            diff: 1
        }

        this.onChangeDiff = this.onChangeDiff.bind(this);
    }

    render() {
        return (
            <div>
                <input type="text" value={ this.state.diff } onChange={this.onChangeDiff}></input>
            </div>
        );
    }

    onChangeDiff(e) {
        console.log(this);
        if(isNaN(e.target.value))
            return;

        this.setState({ diff: e.target.value });

        if(e.target.value==='') {
            this.setState({ diff: 0 });
        }
        console.log(this.props)
        this.props.onUpdateDiff(parseInt(e.target.value));

    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        onUpdateDiff: (value) => dispatch(setDiff(value))
    };
}

export default connect(undefined, mapDispatchToProps)(Options);