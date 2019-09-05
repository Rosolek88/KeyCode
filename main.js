const input1 = document.getElementById('char')
const input2 = document.getElementById('key')
const input3 = document.getElementById('code')
document.addEventListener('keydown', () => {
   input1.textContent = event.key
   input2.textContent = event.code
   input3.textContent = event.which
})
