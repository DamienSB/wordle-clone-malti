import './App.css';

import React from 'react';

import LetterBox from './LetterBox';

function Keyboard(props) {
        return (
                <div>
                        <div className="keyboardContainer">
                                <div className="keyboardRow">
                                        <LetterBox letter='Q' letterStyle={"pointer-cursor " + props.keyboardStyle['Q']} onClick={() => props.function('Q')} />
                                        <LetterBox letter='W' letterStyle={"pointer-cursor " + props.keyboardStyle['W']} onClick={() => props.function('W')} />
                                        <LetterBox letter='E' letterStyle={"pointer-cursor " + props.keyboardStyle['E']} onClick={() => props.function('E')} />
                                        <LetterBox letter='R' letterStyle={"pointer-cursor " + props.keyboardStyle['R']} onClick={() => props.function('R')} />
                                        <LetterBox letter='T' letterStyle={"pointer-cursor " + props.keyboardStyle['T']} onClick={() => props.function('T')} />
                                        <LetterBox letter='U' letterStyle={"pointer-cursor " + props.keyboardStyle['U']} onClick={() => props.function('U')} />
                                        <LetterBox letter='I' letterStyle={"pointer-cursor " + props.keyboardStyle['I']} onClick={() => props.function('I')} />
                                        <LetterBox letter='O' letterStyle={"pointer-cursor " + props.keyboardStyle['O']} onClick={() => props.function('O')} />
                                        <LetterBox letter='P' letterStyle={"pointer-cursor " + props.keyboardStyle['P']} onClick={() => props.function('P')} />
                                        <LetterBox letter='Ġ' letterStyle={"pointer-cursor " + props.keyboardStyle['Ġ']} onClick={() => props.function('Ġ')} />
                                        <LetterBox letter='Ħ' letterStyle={"pointer-cursor " + props.keyboardStyle['Ħ']} onClick={() => props.function('Ħ')} />
                                        <LetterBox letter='Ż' letterStyle={"pointer-cursor " + props.keyboardStyle['Ż']} onClick={() => props.function('Ż')} />
                                </div>
                                <div className="keyboardRow">
                                        <LetterBox letter='A' letterStyle={"pointer-cursor " + props.keyboardStyle['A']} onClick={() => props.function('A')} />
                                        <LetterBox letter='S' letterStyle={"pointer-cursor " + props.keyboardStyle['S']} onClick={() => props.function('S')} />
                                        <LetterBox letter='D' letterStyle={"pointer-cursor " + props.keyboardStyle['D']} onClick={() => props.function('D')} />
                                        <LetterBox letter='F' letterStyle={"pointer-cursor " + props.keyboardStyle['F']} onClick={() => props.function('F')} />
                                        <LetterBox letter='G' letterStyle={"pointer-cursor " + props.keyboardStyle['G']} onClick={() => props.function('G')} />
                                        <LetterBox letter='H' letterStyle={"pointer-cursor " + props.keyboardStyle['H']} onClick={() => props.function('H')} />
                                        <LetterBox letter='J' letterStyle={"pointer-cursor " + props.keyboardStyle['J']} onClick={() => props.function('J')} />
                                        <LetterBox letter='K' letterStyle={"pointer-cursor " + props.keyboardStyle['K']} onClick={() => props.function('K')} />
                                        <LetterBox letter='L' letterStyle={"pointer-cursor " + props.keyboardStyle['L']} onClick={() => props.function('L')} />
                                </div>
                                <div className="keyboardRow">
                                        <LetterBox letter='Z' letterStyle={"pointer-cursor " + props.keyboardStyle['Z']} onClick={() => props.function('Z')} />
                                        <LetterBox letter='X' letterStyle={"pointer-cursor " + props.keyboardStyle['X']} onClick={() => props.function('X')} />
                                        <LetterBox letter='Ċ' letterStyle={"pointer-cursor " + props.keyboardStyle['Ċ']} onClick={() => props.function('Ċ')} />
                                        <LetterBox letter='V' letterStyle={"pointer-cursor " + props.keyboardStyle['V']} onClick={() => props.function('V')} />
                                        <LetterBox letter='B' letterStyle={"pointer-cursor " + props.keyboardStyle['B']} onClick={() => props.function('B')} />
                                        <LetterBox letter='N' letterStyle={"pointer-cursor " + props.keyboardStyle['N']} onClick={() => props.function('N')} />
                                        <LetterBox letter='M' letterStyle={"pointer-cursor " + props.keyboardStyle['M']} onClick={() => props.function('M')} />
                                </div>
                                <div className="keyboardRow">
                                        <LetterBox letter='Enter' letterStyle="pointer-cursor" onClick={() => props.function('enter')} />
                                        <LetterBox letter='←' letterStyle="pointer-cursor" onClick={() => props.function('back')} />
                                </div>
                        </div>
                </div>
        );
}


export default Keyboard;