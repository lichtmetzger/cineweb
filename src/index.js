import AppWindow from './app-window';
import style from './style.scss';
(function(window){
  let _init = (params)=> {
      AppWindow.generate(params);
  }
  window.Cineweb = {
    init:_init
  }
})(window)