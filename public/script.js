const btn = document.createElement('button')
btn.textContent = 'Click on me?'
btn.addEventListener("click", () => {
    btn.textContent = "YESS, YOU HAVE CLICKED!"
})
document.body.appendChild(btn)
