const butInstall = document.getElementById('buttonInstall')
console.log('butInstall', butInstall)

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
  event.preventDefault()
  installBtn.style.visibility = 'visible'
  textHeader.textContent = 'Click the button to install!'

  butInstall.addEventListener('click', async () => {
    event.prompt()
    installBtn.setAttribute('disabled', true)
    installBtn.textContent = 'Installed!'
  })
})

// TODO: Implement a click event handler on the `butInstall` element

// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
  textHeader.textContent = 'Successfully installed!'
  console.log('👍', 'appinstalled', event)
})
