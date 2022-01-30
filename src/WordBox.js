import './App.css';
import LetterBox from './LetterBox';

import React from 'react';
class WordBox extends React.Component{
    render(){
        return(
        <div className="wordRow">
            <LetterBox letter={this.props.word[0]} letterStyle={this.props.rowStyle[0]}/>
            <LetterBox letter={this.props.word[1]} letterStyle={this.props.rowStyle[1]} />
            <LetterBox letter={this.props.word[2]} letterStyle={this.props.rowStyle[2]} />
            <LetterBox letter={this.props.word[3]} letterStyle={this.props.rowStyle[3]} />
            <LetterBox letter={this.props.word[4]} letterStyle={this.props.rowStyle[4]} />
        </div>
    );
    }
}

export default WordBox