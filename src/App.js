import React from 'react';
import logo from './logo.svg';
import './App.css';
import QuoteBox from './components/QuoteBox.js';
import { Script } from 'vm';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      quote:'test',
      author:'test'
    }
    this.handleClick = this.handleClick.bind(this);
  }
  componentDidMount(){
    this.handleClick();
    const script = document.createElement('script');
    script.src = "https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js";
    script.async = true;

    document.body.appendChild(script);
  }
  
  handleClick(){
    let quotesData;
    let randomNum;
    //handle changing color
    
    let colors = ['#16a085', '#27ae60', '#2c3e50', '#f39c12', '#e74c3c', '#9b59b6', '#FB6964', '#342224', "#472E32", "#BDBB99", "#77B1A9", "#73A857"];
    let random = Math.floor(Math.random()*(4-1+1)+1);
    let body = document.getElementsByTagName('body')[0];
    let button = document.getElementById("new-quote");
    let twitter = document.getElementById('tweet-quote');
    button.style.backgroundColor = colors[random];
    body.style.color = colors[random];
    body.style.backgroundColor = colors[random];
    twitter.style.backgroundColor = colors[random];

    // Quote machine logic

    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
      if(this.readyState === 4 && this.status === 200){
          quotesData = JSON.parse(this.responseText);
          randomNum = Math.floor(Math.random()*(100-1+1)+1);
          let quote = quotesData["quotes"][randomNum]['quote'];
          let author = quotesData["quotes"][randomNum]['author'];
          document.getElementById('text').innerHTML = quote;
          document.getElementById('author').innerHTML = author;
          document.getElementById('tweet-quote').href = "https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=" + encodeURIComponent('"' + quote + '"' + author);
          
      }
    };

    xhttp.open('GET', "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json", true);
    xhttp.send();

  }




  render(){
    return(
      <div id='body'>
       <QuoteBox quote={this.state.quote} author={this.state.author} handleClick={this.handleClick} />
      
      </div>
    )
  }
}

export default App;
