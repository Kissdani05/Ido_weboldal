function updateBackgroundAndTime() {
    const hour = new Date().getHours();
    const background = document.getElementById('app');
    const greeting = document.getElementById('greeting');
    let timeOfDay;
    if(hour >= 6 && hour < 12) {
        timeOfDay = 'morning';
        greeting.textContent = ' Good Morning, its currently';
        background.style.backgroundImage = 'url("src/Morning.png")';
    } else if(hours >= 12 && hours < 20) {
        timeOfDay = 'afternoon';
        greeting.textContent = ' Good Afternoon, its currently';
        background.style.backgroundImage = 'url("src/Afternoon.png")';
    } else {
        timeOfDay = 'night';
        greeting.textContent = ' Good Night, its currently';
        background.style.backgroundImage = 'url("src/Night.png")';

    }
    const icon = document.getElementById('icon');
    icon.src = timeOfDay === 'morning' ? 'src/sun.svg' : timeOfDay === 'afternoon' ? 'src/sun.svg' : 'src/moon.svg';

    // Update the time display every second
    const time = document.getElementById('time');
    setInterval(() => {
        const newNow = new Date();
        time.textContent = newNow.toLocaleTimeString('en-US', { hour12: false });
    }, 1000);
  }
  
  function fetchQuote() {
    fetch('https://type.fit/api/quotes')
      .then(response => response.json())
      .then(quotes => {
        const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
        document.getElementById('quote').textContent = `"${randomQuote.text}"`;
        document.getElementById('author').textContent = `- ${randomQuote.author}`;
      });
  }
  
  // Initial call to set the background and time
  updateBackgroundAndTime();
  // Set interval to update time every minute
  setInterval(updateBackgroundAndTime, 60000);
  
  document.getElementById('refresh-quote').addEventListener('click', fetchQuote);
  
  // Initial quote fetch
  fetchQuote();
  