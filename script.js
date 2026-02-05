function toggleTheme() {
    const body = document.getElementById('body');
    const icon = document.getElementById('theme-icon');
    const themeBtn = document.getElementById('theme-btn');
    
    // Toggle Light Theme Class
    body.classList.toggle('light-theme');

    if (body.classList.contains('light-theme')) {
        // Light Mode ON
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
        icon.style.color = "#F59E0B"; 
        
        themeBtn.classList.remove('bg-gray-800');
        themeBtn.classList.add('bg-gray-200');
    } else {
        // Dark Mode ON
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
        icon.style.color = "";
        
        themeBtn.classList.remove('bg-gray-200');
        themeBtn.classList.add('bg-gray-800');
    }
}

function toggleMobileMenu() {
    const menu = document.getElementById('mobile-menu');
    const icon = document.getElementById('menu-icon');
    
    // Toggle Hidden Class
    menu.classList.toggle('hidden');
    
    // Switch Icon (Bars <-> Times)
    if (menu.classList.contains('hidden')) {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    } else {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
    }
}