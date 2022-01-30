import './App.css';
import Keyboard from './Keyboard';
import React from 'react';
import WordBox from './WordBox';
import EndPopup from './EndPopup'
import Dictionary from './data/dictionary.json'
import Words from './data/chosen-words.json'
class App extends React.Component {
  constructor(props) {
    super(props);
    this.wordSolution = this.getDailyWord();
    this.handleKeyPress = this.handleKeyPress.bind(this);

    this.state = {
      gameState:"playing",

      guessedWords: ["", "", "", "", "",""],
      guessRow: 0,

      rowStyle: [
        ["default", "default", "default", "default", "default"],
        ["default", "default", "default", "default", "default"],
        ["default", "default", "default", "default", "default"],
        ["default", "default", "default", "default", "default"],
        ["default", "default", "default", "default", "default"],
        ["default", "default", "default", "default", "default"]
      ],

      errorMessage:"errorMessage-hidden",
      shareText:"",
      keyboardStyle:
      {
        'Q': '',
        'W': '',
        'E': '',
        'R': '',
        'T': '',
        'U': '',
        'I': '',
        'O': '',
        'P': '',
        'Ġ': '',
        'Ħ': '',
        'Ż': '',
        'A': '',
        'S': '',
        'D': '',
        'F': '',
        'G': '',
        'H': '',
        'J': '',
        'K': '',
        'L': '',
        'Z': '',
        'X': '',
        'Ċ': '',
        'V': '',
        'B': '',
        'N': '',
        'M': ''
      }
    };
  }
  getDayOfYear(){
    // code that should return the day of the year (1-366):
    var now = new Date();
    var start = new Date(now.getFullYear(), 0, 0);
    var diff = (now - start) + ((start.getTimezoneOffset() - now.getTimezoneOffset()) * 60 * 1000);
    var oneDay = 1000 * 60 * 60 * 24;
    var day = Math.floor(diff / oneDay);
    return day
  }

  getDailyWord(){
    var day = this.getDayOfYear();
    console.log("Super Secret Hidden Answer (No Cheating 😡)");
    console.log(Words[day]);
    return Words[day]
  }
  updateWord(newWord, index) {
    var tempGuessedWords = this.state.guessedWords;
    tempGuessedWords[index] = newWord;
    this.setState({ guessedWords: tempGuessedWords });
  }

  incrementGuessRow() {
    var tempGuessRow = this.state.guessRow;
    tempGuessRow++;
    this.setState({ guessRow: tempGuessRow });
  }

  checkIfWord(word) {
    if (Dictionary.includes(word) > 0) { return true }
    else { return false }
  }

  updateGameState(guessWord, solutionWord, guessAttempt) {
    var tempGameState= "playing"
    if (guessWord === solutionWord) {
      tempGameState="won";
    }
    else if (guessAttempt >= 5) {
      tempGameState ="lost";
    }
    this.setState({ gameState: tempGameState });
  }

  styleRow(guessWord, solutionWord, guessRow) {
    var tempStyle = []
    for (var x in guessWord) {
      if (solutionWord[x] === guessWord[x]) {
        tempStyle.push('correct');
      } else if (solutionWord.includes(guessWord[x])) {
        tempStyle.push('present');
      } else {
        tempStyle.push('absent');
      }
    }
    var tempRowStyle = this.state.rowStyle;
    tempRowStyle[guessRow] = tempStyle;
    this.setState({ rowStyle: tempRowStyle });
  }

  styleKeyboard() {
    var guessWord = this.state.guessedWords[this.state.guessRow];
    var rowStyle = this.state.rowStyle[this.state.guessRow];
    var tempKeyboardStyle = this.state.keyboardStyle;

    for(var x in guessWord){
      if((tempKeyboardStyle[guessWord[x]] === "correct") && (rowStyle[x]==="present")){
        tempKeyboardStyle[guessWord[x]] = "correct"
      }else{
        tempKeyboardStyle[guessWord[x]]= rowStyle[x]

      }
    }
    this.setState({ keyboardStyle: tempKeyboardStyle });
  }
  getShareText(temp,index){
    var tempShareText="Wordle Clone Malti "+this.getDayOfYear()+" "+(index+1)+"/6 \n";
    for (var x =0;x < temp.length;x++){
      for(var y =0;y < temp[x].length;y++){
        switch(temp[x][y]){
          case 'correct':tempShareText+="🟩"; break;
          case 'present':tempShareText+="🟨";break;
          case 'absent':tempShareText+="⬛";break;
          case '':tempShareText+="";break;
          default:break;
        }
      }
      tempShareText+="\n";
    }
    
    this.setState({shareText:tempShareText});
}

  handleKeyPress(key) {
    var guessRow = this.state.guessRow;
    var currentWord = this.state.guessedWords[guessRow];
    this.setState({ errorMessage: "errorMessage-hidden" });

    switch (key) {
      case 'enter':
        // enter key
        if (currentWord.length === 5) {
          if(this.checkIfWord(currentWord)){
            // if valid word corrects word and checks if game has been won, increments
              this.styleRow(currentWord, this.wordSolution["word"], guessRow);
              this.updateGameState(currentWord, this.wordSolution["word"], guessRow);
              this.styleKeyboard();
              this.getShareText(this.state.rowStyle,guessRow);

              this.incrementGuessRow();
            }
          else{
            this.updateWord("",guessRow)
            this.setState({ errorMessage: "errorMessage" });
          }}
        break;
      case 'back':
        // back space remove last inputed key 
        currentWord = currentWord.slice(0, currentWord.length - 1);
        this.updateWord(currentWord, guessRow);
        break;
      default:
        // normal key press appends it to word if word is less than 5 characters
        if (currentWord.length < 5) {
          currentWord += key;
          this.updateWord(currentWord, guessRow);
        }
        break;
    }
  }

  render() {
    return (
      <div>
        <wordle-title>WORDLE CLONE MALTI</wordle-title>
        <br></br>
        <EndPopup gameState={this.state.gameState} shareText={this.state.shareText} word={this.wordSolution["word"]} definition={this.wordSolution["definition"]}></EndPopup>
        <WordBox word={this.state.guessedWords[0]} rowStyle={this.state.rowStyle[0]}></WordBox>
        <WordBox word={this.state.guessedWords[1]} rowStyle={this.state.rowStyle[1]}></WordBox>
        <WordBox word={this.state.guessedWords[2]} rowStyle={this.state.rowStyle[2]}></WordBox>
        <WordBox word={this.state.guessedWords[3]} rowStyle={this.state.rowStyle[3]}></WordBox>
        <WordBox word={this.state.guessedWords[4]} rowStyle={this.state.rowStyle[4]}></WordBox>
        <WordBox word={this.state.guessedWords[5]} rowStyle={this.state.rowStyle[5]}></WordBox>
        <br></br>
        <div className={this.state.errorMessage}>** Mhux Kelma **</div>
        <br></br>
        <Keyboard function={this.handleKeyPress} keyboardStyle={this.state.keyboardStyle} />
      </div>
    );
  }
}

export default App;
