const shapes = document.getElementById('shapes')
const calcInputs = document.getElementById('calc-inputs')
const inputs = document.getElementsByClassName('inputs')
const submit = document.getElementById('submit')
const result = document.getElementById('result')
let selected = 'cube'
let sideInput = document.getElementById('side-length')

shapes.onclick = function(e) {
    selected =  e.target.value

    setInputs(selected)
};

submit.onclick = function() {
    result.innerText = parseInt(calculate(selected))
    console.log(selected)
};

function setInputs(shape) {
    //clears calcInputs
    while (calcInputs.firstChild) {
        calcInputs.removeChild(calcInputs.lastChild)
    }
    //create DOM elements for each calculation
    switch (shape) {
        case 'cube':
            //create cube side lengths inputs
            let sideli = document.createElement('li')
            let sideLabel = document.createElement('label')
            sideLabel.innerText = 'Length of side:'
            sideInput = document.createElement('input')
            sideInput.type = 'number'
            sideInput.id = 'side-length'
            sideInput.className = 'inputs'

            calcInputs.appendChild(sideli)
            sideli.appendChild(sideLabel)
            sideli.appendChild(sideInput)
            break;
        case 'cylinder':
            let cylRadiusli = document.createElement('li')
            let cylRadiusLabel = document.createElement('label')
            cylRadiusLabel.innerText = 'Radius:'
            let cylRadiusInput = document.createElement('input')
            cylRadiusInput.type = 'number'
            cylRadiusInput.id = 'cyl-radius'
            cylRadiusInput.className = 'inputs'
            console.log(cylRadiusInput)

            let cylHeightli = document.createElement('li')
            let cylHeightLabel = document.createElement('label')
            cylHeightLabel.innerText = 'Height:'
            let cylHeightInput = document.createElement('input')
            cylHeightInput.type = 'number'
            cylHeightInput.id = 'cyl-height'
            cylHeightInput.className = 'inputs'

            calcInputs.appendChild(cylRadiusli)
            cylRadiusli.appendChild(cylRadiusLabel)
            cylRadiusli.appendChild(cylRadiusInput)
            calcInputs.appendChild(cylHeightli)
            cylHeightli.appendChild(cylHeightLabel)
            cylHeightli.appendChild(cylHeightInput)
            break;
        case 'sphere':
            let sphRadiusli = document.createElement('li')
            let sphRadiusLabel = document.createElement('label')
            sphRadiusLabel.innerText = 'Radius:'
            let sphRadiusInput = document.createElement('input')
            sphRadiusInput.type = 'number'
            sphRadiusInput.id = 'sph-radius'
            sphRadiusInput.className = 'inputs'

            calcInputs.appendChild(sphRadiusli)
            sphRadiusli.appendChild(sphRadiusLabel)
            sphRadiusli.appendChild(sphRadiusInput)
            break;
    }
}

function calculate(selected) {
    switch (selected) {
        case 'cube':
            return  Math.pow(sideInput.value, 3)
        case 'cylinder':
            const cylRadius = document.querySelector('#cyl-radius')
            const cylHeight = document.querySelector('#cyl-height')
            return Math.PI * Math.pow(cylRadius.value, 2) * cylHeight.value
        case 'sphere':
            const sphRadius = document.querySelector('#sph-radius')
            return (4/3) * Math.PI * Math.pow(sphRadius.value, 3)
    }
}