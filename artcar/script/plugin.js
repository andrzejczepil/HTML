document.querySelector('.btn-main').addEventListener('click', () => {
    document.querySelector('#widgetDobryMechanik').classList.add('active');
    document.querySelector('.btn-main').classList.add('btn-main-active');
    document.querySelector('.close-menu').classList.add('close-menu-active');
  })

  document.querySelector('.close-menu').addEventListener('click', () => {
    document.querySelector('#widgetDobryMechanik').classList.remove('active');
    document.querySelector('.btn-main').classList.remove('btn-main-active');
    document.querySelector('.close-menu').classList.remove('close-menu-active');
  })