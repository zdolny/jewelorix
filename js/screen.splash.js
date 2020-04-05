jewel.screens['splash-screen'] = (() => {
  const game = jewel.game;
  let firstRun = true;

  function setup() {
    const splashScreen = document.querySelector('.splash-screen');
    splashScreen.addEventListener('click', function() {
      game.showScreen('main-menu');
    });
  }

  function run() {
    if (firstRun) {
      setup();
      firstRun = false;
    }
  }

  return {
    run
  };
})();
