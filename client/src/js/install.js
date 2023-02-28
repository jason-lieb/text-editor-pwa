const butInstall = document.getElementById('buttonInstall')

// Logic for installing the PWA
window.addEventListener('beforeinstallprompt', (event) => {
  event.preventDefault()
  butInstall.style.visibility = 'visible'

  butInstall.addEventListener('click', async () => {
    let res = await event.prompt()
    if (res.outcome !== 'dismissed') {
      butInstall.setAttribute('disabled', true)
      butInstall.textContent = 'Installed!'
    }
  })
})

window.addEventListener('appinstalled', (event) => {
  console.log('👍', 'appinstalled', event)
})
