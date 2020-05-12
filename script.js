// let deadline = '2020-02-01';

const timer = (id, deadline) => {

  const addZero = (num) => {
    if (num <= 9) {
      return '0' + num;
    } else {
      return num;
    }
  }

  const getTimeRemaining = (endtime) => {

    // Date.parse(); пишем объект Dаte, у данного объекта есть такой метод как parse(). Данный метод принимает в себя строку с датой записаной в определенном формате и после некоторых манипуляций он вернет количесвто миллисекунд с 1970года 
    const t = Date.parse(endtime) - Date.parse(new Date()), // в new Date() записывается наша текущая дата
      seconds = Math.floor((t / 1000) % 60),
      minutes = Math.floor((t / 1000 / 60) % 60),
      hours = Math.floor((t / (1000 * 60 * 60)) % 24),
      days = Math.floor((t / (1000 * 60 * 60 * 24)));

    return {
      'total': t,
      'days': days,
      'hours': hours,
      'minutes': minutes,
      'seconds': seconds
    };
  };

  const setClock = (selector, endtime) => {
    const timer = document.querySelector(selector),
      days = timer.querySelector('#days'),
      hours = timer.querySelector('#hours'),
      minutes = timer.querySelector('#minutes'),
      seconds = timer.querySelector('#seconds'),
      timeInterval = setInterval(updateClock, 1000);

    updateClock(); // чтобы небыло как в верстке, а сразу наш таймер

    function updateClock() {
      const t = getTimeRemaining(endtime);

      days.textContent = addZero(t.days);
      hours.textContent = addZero(t.hours);
      minutes.textContent = addZero(t.minutes);
      seconds.textContent = addZero(t.seconds);

      if (t.total <= 0) {
        days.textContent = '00';
        hours.textContent = '00';
        minutes.textContent = '00';
        seconds.textContent = '00';

        clearInterval(timeInterval)
      }
    }
  };
  setClock(id, deadline);
};

timer('.countdown', '12 may 2020 19:00:00')