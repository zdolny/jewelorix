const jewel = {};

jewel.game = {
  showScreen(screenId) {
      const prevActiveScreen = document.querySelector('.screen.active');
      const activeScreen = document.querySelector(`[data-screen="${screenId}"]`);
      if (prevActiveScreen) {
        prevActiveScreen.classList.remove('active');
      }
      activeScreen.classList.add('active');
  }
};
