let count = 0

const template = `
<h1>Hello world!</h1>
<p>Welcome to our mighty counter! You can only count up, to the stars</p>
<h2>The count is: <span class="display">${count}</span></h2>
<h2>The count is: <span class="display">${count}</span></h2>
<button id="increment">Increment</button>
`

function renderApp() {
  document.querySelector('#app').innerHTML = template
}

function bindEvents() {
  document.querySelector('#increment').addEventListener('click', handleIncrementClick)
}

function incrementCount() {
  count++
}

function updateDisplays() {
  document.querySelectorAll('.display').forEach(display => {
    display.innerText = count
  })
}

function handleIncrementClick() {
  incrementCount()
  updateDisplays()
}

renderApp()
bindEvents()
