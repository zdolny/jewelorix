jewel.screens['main-menu'] = (() => {
  const game = jewel.game;
  let firstRun = true;

  function setup() {
    const menu = document.querySelector('.menu');
    menu.addEventListener('click', function(e) {
      if (e.target.matches('button')) {
        const action = e.target.name;
        game.showScreen(action);
      }
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
