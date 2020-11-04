let theme = localStorage.getItem('theme')

if (theme === null) {
    setTheme('light')
} else {
    setTheme(theme)
}

let themeDots = document.querySelectorAll('.theme-dot')

for (i = 0; i < themeDots.length; i++) {
    themeDots[i].addEventListener('click', function() {
        let mode = this.dataset.mode
        setTheme(mode)
    })
}

function setTheme(mode) {
    if (mode === 'light') {
        document.querySelector('#theme-style').href = 'style.css'
    }
    if (mode === 'blue') {
        document.querySelector('#theme-style').href = 'blue.css'
    }
    if (mode === 'green') {
        document.querySelector('#theme-style').href = 'green.css'
    }
    if (mode === 'purple') {
        document.querySelector('#theme-style').href = 'purple.css'
    }

    localStorage.setItem('theme', mode)
}