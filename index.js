document.getElementById('inputField').addEventListener('input', (event) => {
    document.getElementById('svgViewbox').style.height = event.target.value
})