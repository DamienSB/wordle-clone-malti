import './App.css';
import React from 'react';

class EndPopup extends React.Component{

    checkGameState(gameState){
       if(gameState === "playing"){
           return "none";
       }else{
           return "block";
       }
    }
    getMessage(gameState){
        if(gameState === "won"){
            return "Prosit Qtajta!";
        }else if(gameState === "lost"){
            return "Ma Qtajtiex, Forsi Darb Oħra";
        }
    }
    copyMessage(){
        navigator.clipboard.writeText(this.props.shareText);
    }

    render(){
        return(
            <popup-container style ={{display: this.checkGameState(this.props.gameState)}}>
                <popup-card>
                    <br></br>
                    <br></br>
                    <popup-title>{this.getMessage(this.props.gameState)}</popup-title>
                    <br></br>
                    <br></br>
                    <br></br>

                    <popup-word>Il-kelma kienet </popup-word>
                    <popup-word>{this.props.word} </popup-word>
                    <br></br>
                    <br></br>

                    <popup-word>Id-definizzjoni huwa " {this.props.definition} "</popup-word>
                    <br></br>
                    <br></br>
                    <br></br>
                    <button className="popup-button" onClick={()=>this.copyMessage()}>SHARE</button>              
                    <br></br>
                    <popup-small-text>
                        Kliem ġie meħud minn <a href="https://mlrs.research.um.edu.mt/resources/gabra/" target='_blank' rel="noreferrer">Ġabra</a>
                    </popup-small-text>
                    <br></br>
                    <popup-small-text>
                        Ibbażat fuq il-logħba <a href="https://www.powerlanguage.co.uk/wordle/" target='_blank' rel="noreferrer">Wordle</a> ta' <a href="https://twitter.com/powerlanguish" target='_blank' rel="noreferrer">Josh Wardle</a> 
                    </popup-small-text>
                    <br></br>
                    <popup-small-text>
                        Magħmul bl-🎔 minn Damien SB
                    </popup-small-text>
                    <br></br>
                    <br></br>
                    <popup-small-text>
                    <a href='https://ko-fi.com/A0A8581I4' target='_blank' rel="noreferrer"><img height='36'  src='https://cdn.ko-fi.com/cdn/kofi1.png?v=3' border='0' alt='Buy Me a Coffee at ko-fi.com' /></a>
                    </popup-small-text>
                    <br></br>
                    <br></br>

                </popup-card>
            </popup-container>
        );
    }
}

export default EndPopup