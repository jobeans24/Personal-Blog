// Get the switcher element
const switcher = document.createElement('div');
switcher.classList.add('mode-switcher');
document.body.appendChild(switcher);

// Create the light mode button
const lightModeButton = document.createElement('button');
lightModeButton.textContent = '🌞';
lightModeButton.addEventListener('click', () => {
  document.body.classList.remove('dark-mode');
});
switcher.appendChild(lightModeButton);

// Create the dark mode button
const darkModeButton = document.createElement('button');
darkModeButton.textContent = '🌑';
darkModeButton.addEventListener('click', () => {
  document.body.classList.add('dark-mode');
});
switcher.appendChild(darkModeButton);
