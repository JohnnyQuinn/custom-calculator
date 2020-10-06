const shapes = document.getElementById('shapes')
const calcInputs = document.getElementById('calc-inputs')

shapes.onclick = function(e) {
    console.log(e.target.value)
    let selected =  e.target.value

    setInputs(selected)
}

function setInputs(shape) {
    switch (shape) {
        case 'cube':
            console.log('clicked')
            //create elements for cube
            let li = document.createElement('li')
            let label = document.createElement('label')
            let input = document.createElement('input')

            label.innerText = 'Length of side:'

            input.type = 'number'
            input.id = 'side-length'

            calcInputs.appendChild(li)
            li.appendChild(label)
            li.appendChild(input)
    }
}