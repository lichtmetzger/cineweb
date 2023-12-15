import AppWindow from './app-window';
(function(window){
  let _init = (params)=> {
      AppWindow.generate(params);
  }
  window.Cineweb = {
    init:_init
  }
})(window)