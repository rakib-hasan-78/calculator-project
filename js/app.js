// * grabbing text-input & buttons

const calculationOutput = document.querySelector(`#Calculation-output`)
const buttons = document.querySelectorAll(`[name="button"]`)

//* Initialize the calculation value

let calculationValue = ``

// ** calculation starts here ---
//* Handling calculator button clicks

;[...buttons].forEach(button=>{
    button.addEventListener(`click`, function (e) {
        e.preventDefault()
        try {
            const buttonValue = button.value
            switch (buttonValue) {
                case `=`:
                        // Evaluate the calculation and display the result
                        calculationValue = eval(calculationValue)
                        calculationOutput.value = calculationValue
                    break
                case `C`:
                    // Remove the last character from the calculation value   
                    calculationValue = calculationValue.substring(0,calculationValue.length-1)
                    calculationOutput.value = calculationValue
                    break
                case `AC`:
                    // Clear the calculation value
                    calculationValue = ``
                    calculationOutput.value = calculationValue
                    break
                case `+`:
                    // Append operators and special functions to the calculation value
                    if (calculationValue !== ``) {
                        calculationValue+=buttonValue
                        calculationOutput.value = calculationValue
                    }
                    break
                case `/`:
                    // Append operators and special functions to the calculation value
                    if (calculationValue!==``) {
                        calculationValue+=buttonValue
                        calculationOutput.value = calculationValue
                    }    
                    break
                case `*`:
                    // Append operators and special functions to the calculation value
                    if (calculationValue!==``) {
                        calculationValue+=buttonValue
                        calculationOutput.value = calculationValue
                    }    
                    break
                case `-`:
                    // Append operators and special functions to the calculation value
                    if (calculationValue!==``) {
                        calculationValue+=buttonValue
                        calculationOutput.value = calculationValue
                    }
                    break
                case `=`:
                    // Append operators and special functions to the calculation value
                    if (calculationValue!==``) {
                        calculationValue+=buttonValue
                        calculationOutput.value = calculationValue
                    }    
                    break
                case `%`:
                    // Append operators and special functions to the calculation value
                    if (calculationValue !== ``) {
                        if (calculationValue) {
                            calculationValue = eval(calculationValue) / 100
                            calculationOutput.value = calculationValue
                        }
                    }        
                    break
                case `sqrt`:
                    // Append operators and special functions to the calculation value
                    if (calculationValue!== ``) {
                        if (calculationValue) {
                            calculationValue =  Math.sqrt(eval(calculationValue))
                            calculationOutput.value = calculationValue
                        }
                    }    
                    break
                default:
                    // Append numbers and other characters to the calculation value
                    calculationValue+=buttonValue
                    calculationOutput.value = calculationValue
                    break;
            }
        } catch (error) {
            // Handle syntax errors in the calculation
            calculationValue = `Syntax Error !`
            calculationOutput.value = calculationValue
        }
    })
})
// ** calculation completed here ---


// Function to create scss to change the calculator theme

function themeChanger(bodyTheme, bodyThemeColor, elementTheme, elementThemeColor, outputField, outputFieldColor, operartorBtns,operatorBackground,numberBtn, numberBtnDesign ) {
    let style = document.createElement(`style`)
    style.textContent = `

    ${bodyTheme}{
        background-color: #000000;
        background-image: ${bodyThemeColor} !important;
    }
    ${elementTheme}{
        background-color: #000000;
        background-image:${elementThemeColor} !important;
    }
    ${outputField}{
        color: rgb(26,25,25)!important;
        background-color: #6daddb;
        background-image:${outputFieldColor};
    }
    ${operartorBtns}{
        color: #737686 !important;
        background-image:${operatorBackground}!important;
    }
    ${numberBtn}{
        color: #7a7a7a !important;
        background-image:${numberBtnDesign}!important;
    }

    `
    document.head.appendChild(style)
}

// Elements and icons for theme switching
const themeBtn = document.getElementById(`dark-light-switch`)
const section = document.getElementById(`section`)
const calculator = document.getElementsByClassName(`calculator`)[0]
const calculationOutputField = document.getElementById(`Calculation-output`)
const operators = document.querySelectorAll(`.operator`)
const numberButtons = document.querySelectorAll(`.numBtn`)
const iconOne = document.querySelector(`.bi-brightness-high-fill`)
const iconTwo = document.querySelector(`.bi-moon-fill`)

// Apply the function to create css classes and linear gradient for dark mode background

themeChanger(
    `.dark-theme`,
    `linear-gradient(147deg, #000000 0%, #434343 74%) `,
    `.dark-theme-calculator`,
    `linear-gradient(147deg, #000000 0%, #2c3e50 74%) `,
    `.dark-output-field`,
    `linear-gradient(315deg, #6daddb 0%, #313131 74%) !important;`,
    `.dark-operator-btn`,
    `linear-gradient(147deg, #4d4855 0%, #000000 74%) `,
    `.dark-number-btn-design`,
    `linear-gradient(235deg, #3a3537 0%, #202222 74%)`
)


// Handler function to toggle CSS classes

let buttonsHandler =(targets, asset, assetContext) => {
    [...targets].forEach(target=>{
        if (assetContext) {
            target.classList.add(asset)
        } else {
            target.classList.remove(asset)
        }
    })
}

// Load the saved theme from session storage
let savedTheme = sessionStorage.getItem('Theme')

// Apply the saved theme
    if (savedTheme ==='Light') {
        sessionStorage.setItem('Theme', 'Light')
        section.classList.remove(`dark-theme`)
        calculator.classList.remove(`dark-theme-calculator`)
        calculationOutputField.classList.remove(`dark-output-field`)
        buttonsHandler(numberButtons,`dark-number-btn-design`,false)
        buttonsHandler(operators,`dark-operator-btn`, false)
        
    } else {

        sessionStorage.setItem('Theme', 'Dark')
        section.classList.add(`dark-theme`)
        calculator.classList.add(`dark-theme-calculator`)
        calculationOutputField.classList.add(`dark-output-field`)
        buttonsHandler(numberButtons,`dark-number-btn-design`,true)
        buttonsHandler(operators,`dark-operator-btn`, true)
        
    }

// Event listener for theme button click
themeBtn.addEventListener(`click`, function () {

    let theme = sessionStorage.getItem(`Theme`)
    if (theme===`Dark`) {

        sessionStorage.setItem('Theme', 'Light')

        section.classList.remove(`dark-theme`)
        calculator.classList.remove(`dark-theme-calculator`)
        calculationOutputField.classList.remove(`dark-output-field`)
        buttonsHandler(numberButtons,`dark-number-btn-design`,false)
        buttonsHandler(operators,`dark-operator-btn`, false)



    } else {
        sessionStorage.setItem('Theme', 'Dark')
        section.classList.add(`dark-theme`)
        calculator.classList.add(`dark-theme-calculator`)
        calculationOutputField.classList.add(`dark-output-field`)
        buttonsHandler(numberButtons,`dark-number-btn-design`,true)
        buttonsHandler(operators,`dark-operator-btn`, true)
    }
    
    isTrue = section.classList.contains(`dark-theme`)
    if (isTrue) {
        iconOne.style.display= `flex`
        iconTwo.style.display = `none`
    } else {
        iconTwo.style.display = `flex`
        iconOne.style.display = `none`
    }
})

