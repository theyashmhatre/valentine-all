import React, { useState } from 'react'
import { gifs, texts } from '../data';
import EntryPage from './EntryPage';
import ConfettiExplosion from 'react-confetti-explosion';

export default function DummyPage() {

  const [started, setStarted] = useState(false);
  const [count, setCount] = useState(0);
  const [isExploding, setIsExploding] = useState(false);

  const user = {
    name: "Zoey",
    url_name: "zoey",
    final_message: "Thanks for accepting. I knew you would accept. Now send this to me as a screenshot and make my day 🥰"
  }

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
    yayText.className = "yay-text normal-font";
    yayText.textContent = user.final_message;
    additionalContent.appendChild(yayText);
    document.body.appendChild(additionalContent);

  }

  function clearContent() {
    if (!count) {
      let yesBtn = document.getElementById("yesBtn");
      yesBtn.innerText = `My heart flutters! \nBut let's explore both options. 😉`
      return;
    }

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
    setIsExploding(true);

  }

  function adjustButtonSize() {
    setCount(count + 1);

    let yesBtn = document.getElementById("yesBtn");
    if (yesBtn.innerText !== "Yes") {
      yesBtn.innerText = "Yes";
    }
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
    <>
      {started ? <div className='main-page normal-font'>
        {!count ?
          <div id="animation-container">
            <img id="animation" src="https://media1.tenor.com/m/Vy46BTSo3hsAAAAC/bear-love.gif" alt="Animated Image" />
          </div>
          :
          <div id="animation-container">
            <img id="animation" src={gifs[count % gifs.length]} alt="Animated Image" />
          </div>}
        <div id="heading" style={{ fontSize: "large", fontWeight: "bold" }}>Hi Cutie</div>
        <div id="valentine-text">Will you be my Valentine?</div>
        <div id="buttons">
          <button id="yesBtn" onClick={clearContent}>YES</button>
          <button id="noBtn" onClick={adjustButtonSize}>{texts[count % gifs.length]}</button>
        </div>
        {isExploding && <ConfettiExplosion />}
      </div>
        :
        <EntryPage setStarted={setStarted} user={user} />}
    </>
  )
}
