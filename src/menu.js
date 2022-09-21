import bitter from './img/bitter.png'
import milk from './img/milk.png'
import both from './img/milk and bitter.png'
import packages from './img/package.png'
import rainbow from './img/rainbow.png'
import and from './img/&.png'
import cake from './img/birthdayCake.png'
import christmas from './img/Christmas.png'
import homePage from './home'
import aboutPage from './about'

export default function menuPage(content) {
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

    const menuMain = document.createElement('div')
    const menuContainer = document.createElement('div')
    const firstCard = document.createElement('div')
    const secondCard = document.createElement('div')
    const thirdCard = document.createElement('div')
    const fourthCard = document.createElement('div')
    const fifthCard = document.createElement('div')
    const sixthCard = document.createElement('div')
    const seventhCard = document.createElement('div')
    const eighthCard = document.createElement('div')
    const firstImg = document.createElement('img')
    const secondImg = document.createElement('img')
    const thirdImg = document.createElement('img')
    const fourthImg = document.createElement('img')
    const fifthImg = document.createElement('img')
    const sixthImg = document.createElement('img')
    const seventhImg = document.createElement('img')
    const eighthImg = document.createElement('img')
    const firstHeader = document.createElement('h4')
    const secondHeader = document.createElement('h4')
    const thirdHeader = document.createElement('h4')
    const fourthHeader = document.createElement('h4')
    const fifthHeader = document.createElement('h4')
    const sixthHeader = document.createElement('h4')
    const seventhHeader = document.createElement('h4')
    const eighthHeader = document.createElement('h4')

    menuMain.classList.add('menu')
    menuContainer.classList.add('menuContainer')
    firstCard.classList.add('card')
    secondCard.classList.add('card')
    thirdCard.classList.add('card')
    fourthCard.classList.add('card')
    fifthCard.classList.add('card')
    sixthCard.classList.add('card')
    seventhCard.classList.add('card')
    eighthCard.classList.add('card')
    firstHeader.classList.add('card-header')
    secondHeader.classList.add('card-header')
    thirdHeader.classList.add('card-header')
    fourthHeader.classList.add('card-header')
    fifthHeader.classList.add('card-header')
    sixthHeader.classList.add('card-header')
    seventhHeader.classList.add('card-header')
    eighthHeader.classList.add('card-header')

    firstImg.src = `${bitter}`
    secondImg.src = `${milk}`
    thirdImg.src = `${both}`
    fourthImg.src = `${packages}`
    fifthImg.src = `${rainbow}`
    sixthImg.src = `${and}`
    seventhImg.src = `${cake}`
    eighthImg.src = `${christmas}`

    firstHeader.textContent = 'BITTER CHOCOLATE'
    secondHeader.textContent = 'MILK CHOCOLATE'
    thirdHeader.textContent = 'ENJOY BOTH TASTES'
    fourthHeader.textContent = 'BUY IN PACK'
    fifthHeader.textContent = 'UNLIMITED TASTES'
    sixthHeader.textContent = '&'
    seventhHeader.textContent = 'NOT ONLY CHOCOLATES'
    eighthHeader.textContent = 'EVEN CHRISTMAS HOMES'

    content.appendChild(menuMain)
    menuMain.appendChild(menuContainer)
    menuContainer.appendChild(firstCard)
    menuContainer.appendChild(secondCard)
    menuContainer.appendChild(thirdCard)
    menuContainer.appendChild(fourthCard)
    menuContainer.appendChild(fifthCard)
    menuContainer.appendChild(sixthCard)
    menuContainer.appendChild(seventhCard)
    menuContainer.appendChild(eighthCard)
    firstCard.appendChild(firstImg)
    firstCard.appendChild(firstHeader)
    secondCard.appendChild(secondImg)
    secondCard.appendChild(secondHeader)
    thirdCard.appendChild(thirdImg)
    thirdCard.appendChild(thirdHeader)
    fourthCard.appendChild(fourthImg)
    fourthCard.appendChild(fourthHeader)
    fifthCard.appendChild(fifthImg)
    fifthCard.appendChild(fifthHeader)
    sixthCard.appendChild(sixthImg)
    sixthCard.appendChild(sixthHeader)
    seventhCard.appendChild(seventhImg)
    seventhCard.appendChild(seventhHeader)
    eighthCard.appendChild(eighthImg)
    eighthCard.appendChild(eighthHeader)

    const homeButton = document.getElementById('home')
    homeButton.addEventListener('click', () => homePage(content))
    const aboutButton = document.getElementById('about')
    aboutButton.addEventListener('click', () => aboutPage(content))

}