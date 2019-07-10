import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';

class TopNav extends React.Component{
    render(){
        return(
            <div id="test">
                <h1>ShopO Translator</h1>
                <InputForm />
            </div>
        );
    }
}

class InputForm extends React.Component{
    render(){
        return(
            <div className="form">
                <form>
                    <input type="file" id="input" multiple="multiple"></input>
                </form>
            </div>
        );
    }
}

class SiteStyle extends React.Component{
    render(){
        return(
            <TopNav />
        );
    }
}

ReactDOM.render(<SiteStyle />, document.getElementById("root"));