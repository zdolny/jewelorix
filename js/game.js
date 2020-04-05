const jewel = {};
jewel.screens = [];

jewel.game = {
  setup() {
    document.addEventListener('touchmove', function(e){
      e.preventDefault();
    });
  },
  showScreen(screenId) {
    const prevActiveScreen = document.querySelector('.screen.active');
    const activeScreen = document.querySelector(`[data-screen="${screenId}"]`);
    if (prevActiveScreen) {
      prevActiveScreen.classList.remove('active');
    }
    // run screen module
    jewel.screens[screenId].run();
    // show screen
    activeScreen.classList.add('active');
  }
};
