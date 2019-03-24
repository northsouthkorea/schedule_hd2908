import React from 'react';
import Counter from 'components/Counter';
import Buttons from 'components/Buttons';
import Option from 'components/Options';

class App extends React.Component {
    render(){
        return (
            <div style={ {textAlign: 'center'} }>
                <Counter/>
                <Option/>
                <Buttons/>
            </div>
        );
    }

}

export default App;