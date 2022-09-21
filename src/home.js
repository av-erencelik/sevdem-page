export default function homePage(content) {
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
    home.classList.add('active')
    home.textContent = "Home"
    menu.textContent = "Menu"
    about.textContent = "About"
    
    content.appendChild(header)
    header.appendChild(container)
    container.appendChild(logo)
    container.appendChild(links)
    links.appendChild(home)
    links.appendChild(menu)
    links.appendChild(about) 

    const main = document.createElement('main')
    const slogan = document.createElement('div')
    const mainSlogan = document.createElement('h1')
    const secondSlogan = document.createElement('h3')
    const orderButton = document.createElement('button')

    orderButton.textContent = "Order Now"
    mainSlogan.textContent = "Sevdem Will Brighten Your Day"
    secondSlogan.textContent = "7/24 Open"
    slogan.classList.add('slogan')

    content.appendChild(main)
    main.appendChild(slogan)
    slogan.appendChild(mainSlogan)
    slogan.appendChild(secondSlogan)
    main.appendChild(orderButton)
}