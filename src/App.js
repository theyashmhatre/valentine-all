import logo from './logo.svg';
import './App.css';
import { gifs, texts } from './data';
import { useState } from 'react';
import EntryPage from './Components/EntryPage';

function App() {

  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);

  function addContent() {
    let additionalContent = document.createElement("div");
    additionalContent.id = "animation-content";
    additionalContent.innerHTML = '<img id="animation" src="https://media.tenor.com/0IKwuW91-ZQAAAAi/mimibubu.gif" alt="Animated Image">';
    let yayText = document.createElement("div");
    yayText.id = "yay-text";
    yayText.textContent = "Yayyyy!!! 🥳";
    additionalContent.appendChild(yayText);
    document.body.appendChild(additionalContent);

    yayText = document.createElement("div");
    yayText.id = "yay-text";
    yayText.textContent = "Mai chala chane ke jhaad pr chadne. Bye.";
    additionalContent.appendChild(yayText);
    document.body.appendChild(additionalContent);

  }

  function clearContent() {

    // Remove specific elements while keeping the footer
    let animationElement = document.getElementById("animation");

    let valentineText = document.getElementById("valentine-text");
    let headingText = document.getElementById("heading");

    let animationButtons = document.getElementById("buttons");
    if (animationElement && valentineText && animationButtons) {
      animationElement.remove();
      animationButtons.remove();
      valentineText.remove();
    }
    if (headingText) {
      headingText.remove();
    }
    addContent();

  }

  function adjustButtonSize() {
    setCount(count + 1);

    let yesBtn = document.getElementById("yesBtn");
    let noBtn = document.getElementById("noBtn");
    let heading = document.getElementById("heading");

    if (heading) {
      heading.remove();
    }

    let currentYesSize = parseFloat(getComputedStyle(yesBtn).fontSize);
    // let currentNoWidth = parseFloat(getComputedStyle(noBtn).width);
    // let currentNoHeight = parseFloat(getComputedStyle(noBtn).height);

    let newYesSize = currentYesSize + 16;

    yesBtn.style.fontSize = newYesSize + "px";

  }

  return (
    <div className="App">
      {started ? <div className='main-page normal-font'>
        {!count ? <div id="animation-container">
          <img id="animation" src="https://media1.tenor.com/m/Vy46BTSo3hsAAAAC/bear-love.gif" alt="Animated Image" />
        </div> :
          <div id="animation-container">
            <img id="animation" src={gifs[count % gifs.length]} alt="Animated Image" />
          </div>}
        <div id="heading" style={{ fontSize: "large", fontWeight: "bold" }}>Hi Cutie</div>
        <div id="valentine-text">Will you be my Valentine?</div>
        <div id="buttons">
          <button id="yesBtn" onClick={clearContent}>YES</button>
          <button id="noBtn" onClick={adjustButtonSize}>{texts[count % gifs.length]}</button>
        </div>
      </div> :
        <div className='entry-page'>
          <h1 className='font-link'>Hi Aparna. Welcome.</h1>
          <p className='font-link'>I've got a serious question for you.</p>
          <button style={{ fontSize: "large", fontWeight: "bolder", padding: "5px", cursor: "pointer", borderRadius: "5px", backgroundColor: "red" }} onClick={() => { setStarted(true) }}>Let's Begin!</button>
        </div>}
    </div>
  );
}

export default App;
