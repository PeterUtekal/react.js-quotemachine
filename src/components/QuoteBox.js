import React from 'react';
import '../App.css';

export default class Box extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div id='quote-box'>
                <blockquote id='text' ></blockquote>
                <p id='author' className='flexy'></p>
                <button id='new-quote' onClick={this.props.handleClick} className='flexy'>New quote</button>
                <a className='flexy' id='twitter'><img src='https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fsdweg.files.wordpress.com%2F2016%2F09%2Fl62697-new-twitter-logo-49466.png&f=1' height='25'></img></a>
            </div>
        )
    }
}

