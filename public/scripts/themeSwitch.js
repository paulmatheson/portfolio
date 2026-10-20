export function switchTheme(link, dayIcon, nightIcon) {
    const currentTheme = document.documentElement.getAttribute('data-theme') || 'light'
    const newTheme = currentTheme === 'light' ? 'dark' : 'light'
    const icon = newTheme === 'light' ? dayIcon : nightIcon

    document.documentElement.setAttribute('data-theme', newTheme)
    document.querySelectorAll('.theme-toggle-link').forEach((toggle) => {
        toggle.innerHTML = icon
    })
    localStorage.setItem('theme', newTheme)
}

