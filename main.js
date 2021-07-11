import './src/component/styles/settings/colors.css'
import './src/component/styles/generic/reset.css'
import './src/component/styles/elements/base.css'

import CardGame from "./src/component/CardGame";
 
 const $root = document.querySelector("#root");
 const $htmlCardGame = CardGame();

 $root.insertAdjacentHTML('beforeend', $htmlCardGame);
