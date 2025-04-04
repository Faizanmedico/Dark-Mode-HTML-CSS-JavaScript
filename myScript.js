const header = document.createElement('header');
header.style.textAlign = 'center';
document.body.insertBefore(header, document.querySelector('.container'));

header.innerHTML += `
<button id="themeToggle" style="margin-top:15px;padding:5px 10px;cursor:pointer">
    🌙 Dark Mode
</button>`;

document.getElementById('themeToggle').addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    const button = document.getElementById('themeToggle');
    if(document.body.classList.contains('dark-mode')){
        button.textContent = '☀️ Light Mode';
    }else{
        button.textContent = '🌙 Dark Mode';
    }
});
