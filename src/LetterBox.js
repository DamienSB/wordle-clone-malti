import './App.css';
function LetterBox(props) {
    return (
        <letter-box class={props.letterStyle} onClick={props.onClick}>{props.letter}</letter-box>
    );

}

export default LetterBox