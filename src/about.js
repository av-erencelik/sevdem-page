import logoImg from './img/logo.png'
import homePage from './home'
import menuPage from './menu'

export default function aboutPage(content) {
    content.textContent = ""
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
    about.classList.add('active')
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

    const aboutContainer = document.createElement('div')
    const aboutUs = document.createElement('h2')
    const contact = document.createElement('div')
    const imgContainer = document.createElement('div')
    const img = document.createElement('img')
    const infos = document.createElement('div')
    const contactHeader = document.createElement('p')
    const info = document.createElement('div')
    const address = document.createElement('p')
    const addressI = document.createElement('i')
    const tel = document.createElement('p')
    const telI = document.createElement('i')
    const sMedia = document.createElement('p')
    const sMediaI = document.createElement('i')
    const sMediaLink = document.createElement('a')
    const addressText = document.createElement('span')
    const telText = document.createElement('span')

    aboutContainer.classList.add('about')
    contact.classList.add('contact')
    imgContainer.classList.add('img')
    infos.classList.add('infos')
    contactHeader.classList.add('contactHeader')
    info.classList.add('info')
    addressI.classList.add('fa-solid')
    addressI.classList.add('fa-location-pin')
    addressI.classList.add('fa-xl')
    telI.classList.add('fa-solid')
    telI.classList.add('fa-mobile')
    telI.classList.add('fa-xl')
    sMediaI.classList.add('fa-brands')
    sMediaI.classList.add('fa-square-instagram')
    sMediaI.classList.add('fa-xl')

    aboutUs.textContent = 'About Us'
    img.src = `${logoImg}`
    contactHeader.textContent = `"It's time to cheer your palate with our completely handmade chocolates made using the most natural coffee beans. The last of love!"`
    addressText.textContent = ' Salihli Manisa/Türkiye'
    telText.textContent = ' +90 123-123-1234'
    sMediaLink.setAttribute('href', 'https://www.instagram.com/sevdemcikolata/')
    sMediaLink.setAttribute('target', '_blank')
    sMediaLink.textContent = '@sevdemcikolata'

    content.appendChild(aboutContainer)
    aboutContainer.appendChild(aboutUs)
    aboutContainer.appendChild(contact)
    contact.appendChild(imgContainer)
    imgContainer.appendChild(img)
    contact.appendChild(infos)
    infos.appendChild(contactHeader)
    infos.appendChild(info)
    info.appendChild(address)
    address.appendChild(addressI)
    address.appendChild(addressText)
    info.appendChild(tel)
    tel.appendChild(telI)
    tel.appendChild(telText)
    info.appendChild(sMedia)
    sMedia.appendChild(sMediaI)
    sMedia.append(sMediaLink)

    const homeButton = document.getElementById('home')
    homeButton.addEventListener('click', () => homePage(content))
    const menuButton = document.getElementById('menu')
    menuButton.addEventListener('click', () => menuPage(content))
}