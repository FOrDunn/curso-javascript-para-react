import './src/component/styles/settings/colors.css'
import './src/component/styles/generic/reset.css'
import './src/component/styles/elements/base.css'

import CardGame from "./src/component/CardGame";
import CardWrapper from './src/component/CardWrapper';
import CardDiv from './src/component/SideDiv';
import DIV from './src/component/NavBar';
import PlayerNames from './src/component/PlayerNames';
 
 const $root = document.querySelector("#root");
 const $htmlCardWrapper = CardWrapper();
 const $htmlNavBar = DIV();
 const $htmlPlayerName = PlayerNames();
 const $htmlCardDiv = CardDiv();
 const $htmlCardGame = CardGame() + CardGame() + CardGame();

 $root.insertAdjacentHTML('beforeend', $htmlCardWrapper);

 const $CardWrapper = document.querySelector(".card-wrapper");

 $CardWrapper.insertAdjacentHTML('beforeend', $htmlCardDiv);
 $CardWrapper.insertAdjacentHTML('beforeend', $htmlCardDiv);

 $CardWrapper.firstElementChild.classList.add("left");
 $CardWrapper.lastElementChild.classList.add("right");

 $CardWrapper.insertAdjacentHTML('afterbegin', $htmlNavBar);

 const $NavBar = document.querySelector(".nav-bar");

 $NavBar.insertAdjacentHTML('beforeend', $htmlPlayerName);
 $NavBar.insertAdjacentHTML('beforeend', $htmlPlayerName);

 $NavBar.firstElementChild.classList.add("player-left");
 $NavBar.lastElementChild.classList.add("player-right");

 const $PlayerNameLeft = document.querySelector(".player-left");
 const $PlayerNameRight = document.querySelector(".player-right");

 $PlayerNameLeft.insertAdjacentText('beforeend', "Player1");
 $PlayerNameRight.insertAdjacentText('beforeend', "Player1");

 const $WrapperLeft = document.querySelector(".left");
 const $WrapperRight = document.querySelector(".right");

 $WrapperLeft.insertAdjacentHTML('beforeend', $htmlCardGame);
 $WrapperRight.insertAdjacentHTML('beforeend', $htmlCardGame);
