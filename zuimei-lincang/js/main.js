// main.js

document.addEventListener('DOMContentLoaded', function() {
    // 移动端菜单
    const mobileMenu = document.getElementById('mobileMenu');
    const menuBtn = document.getElementById('menuBtn');
    const mobileMenuLinks = document.querySelectorAll('#mobileMenu a[data-menu-link]');

    // 切换移动菜单的显示/隐藏
    menuBtn.addEventListener('click', function() {
        mobileMenu.classList.toggle('hidden');
        const isOpen = !mobileMenu.classList.contains('hidden');
        menuBtn.innerHTML = isOpen ? '<i class="fa fa-times"></i>' : '<i class="fa fa-bars"></i>';
    });

    // 点击移动菜单内的链接后关闭菜单
    mobileMenuLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (!mobileMenu.classList.contains('hidden')) {
                mobileMenu.classList.add('hidden');
                menuBtn.innerHTML = '<i class="fa fa-bars"></i>';
            }
        });
    });

    // 导航栏滚动效果
    const header = document.getElementById('mainHeader');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
        
        // 回到顶部
        const backToTopButton = document.getElementById('backToTop');
        if (window.scrollY > 300) {
            backToTopButton.classList.add('show');
        } else {
            backToTopButton.classList.remove('show');
        }
    });

    // 点击回到顶部
    const backToTopButton = document.getElementById('backToTop');
    backToTopButton.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});