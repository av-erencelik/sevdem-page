export default function aboutPage(content) {
    // content.textContent = ""
    const header = document.createElement('header')
    const container = document.createElement('div')
    const logo = document.createElement('h1')
    const links = document.createElement('div')
    const home = document.createElement('h3')
    const menu = document.createElement('h3')
    const about = document.createElement('h3')

    container.classList.add('container')
    logo.classList.add('logo')
    logo.textContent = "SEVDEM"
    links.classList.add('links')
    menu.classList.add('active')
    home.textContent = "Home"
    menu.textContent = "Menu"
    about.textContent = "About"
    home.setAttribute('id','home')
    menu.setAttribute('id','menu')
    about.setAttribute('id','about')
    
    content.appendChild(header)
    header.appendChild(container)
    container.appendChild(logo)
    container.appendChild(links)
    links.appendChild(home)
    links.appendChild(menu)
    links.appendChild(about) 
}