import AppWindow from './AppWindow';
import style from './style.scss';
(function(window){
  let _init = ()=> {
    const ap = new AppWindow();
  }
  window.Cineweb = {
    init:_init
  }
})(window)