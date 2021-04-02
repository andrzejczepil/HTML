 window.amoSocialButtonConfig = {
  hidden: false, // скрыть кнопку при загрузке страницы
  color: '#e31c1c', // изменить цвет кнопки через, проигнорирует цвет настроенный в amoCRM
  onlinechat: {
    mode: 'widget', // еще может быть 'frame', об этом ниже
    locale: {
      extends: "en",
      date_format: 'YYYY-MM-dd',
      time_format: 'HH:mm',
      compose_placeholder: "Napisz swoje pytanie...",
      delivery_status_sending: 'Odjeżdżać',
      delivery_status_sent: 'Wysłane przez',
      delivery_status_read: 'Przeczytane',
      delivery_status_error: 'Błąd',
      powered_by: 'od',
      new_messages: 'Nowe posty',
    
    
    },
    theme: {
      header: { // можно указать header: false, тогда он вообще не будет отрисован
        background: '#4682B4', // цвет фона верхней части чата
        color: 'white', // цвет текста верхней части
      },
    },
  },
};