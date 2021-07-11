import './src/component/styles/settings/colors.css'
import './src/component/styles/generic/reset.css'
import './src/component/styles/elements/base.css'

import CardGame from "./src/component/CardGame";
import CardWrapper from './src/component/CardWrapper';
import CardDiv from './src/component/SideDiv';
 
 const $root = document.querySelector("#root");
 const $htmlCardWrapper = CardWrapper();
 const $htmlCardDiv = CardDiv();
 const $htmlCardGame = CardGame() + CardGame() + CardGame();

 $root.insertAdjacentHTML('beforeend', $htmlCardWrapper);

 const $CardWrapper = document.querySelector(".card-wrapper");

 $CardWrapper.insertAdjacentHTML('beforeend', $htmlCardDiv);
 $CardWrapper.insertAdjacentHTML('beforeend', $htmlCardDiv);

 $CardWrapper.firstElementChild.classList.add("left");
 $CardWrapper.lastElementChild.classList.add("right");

 const $htmlLeft = document.querySelector(".left");
 const $htmlRight = document.querySelector(".right");

 $htmlLeft.insertAdjacentHTML('beforeend', $htmlCardGame);
 $htmlRight.insertAdjacentHTML('beforeend', $htmlCardGame);
