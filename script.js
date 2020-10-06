const shapes = document.getElementById('shapes')
const calcInputs = document.getElementById('calc-inputs')

shapes.onclick = function(e) {
    let selected =  e.target.value

    setInputs(selected)
}

function setInputs(shape) {
    //clears calcInputs
    while (calcInputs.firstChild) {
        calcInputs.removeChild(calcInputs.lastChild)
    }
    switch (shape) {
        case 'cube':
            //create cube side lengths inputs
            let sideli = document.createElement('li')
            let sideLabel = document.createElement('label')
            sideLabel.innerText = 'Length of side:'
            let sideInput = document.createElement('input')
            sideInput.type = 'number'
            sideInput.id = 'side-length'

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

            let heightli = document.createElement('li')
            let heightLabel = document.createElement('label')
            heightLabel.innerText = 'Height:'
            let heightInput = document.createElement('input')
            heightInput.type = 'number'
            heightInput.id = 'cyl-height'

            calcInputs.appendChild(cylRadiusli)
            cylRadiusli.appendChild(cylRadiusLabel)
            cylRadiusli.appendChild(cylRadiusInput)
            calcInputs.appendChild(heightli)
            heightli.appendChild(heightLabel)
            heightli.appendChild(heightInput)
            break;
        case 'sphere':
            let sphRadiusli = document.createElement('li')
            let sphRadiusLabel = document.createElement('label')
            sphRadiusLabel.innerText = 'Radius:'
            let sphRadiusInput = document.createElement('input')
            sphRadiusInput.type = 'number'
            sphRadiusInput.id = 'sph-radius'

            calcInputs.appendChild(sphRadiusli)
            sphRadiusli.appendChild(sphRadiusLabel)
            sphRadiusli.appendChild(sphRadiusInput)
            break;
    }
}