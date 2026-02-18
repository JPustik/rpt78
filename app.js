// Мобильное меню
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mainNav = document.getElementById('mainNav');

mobileMenuBtn.addEventListener('click', function() {
        mainNav.classList.toggle('active');
});
    
// Обработка кнопок "Арендовать"
const orderButtons = document.querySelectorAll('.btn-order');
const tractorSelect = document.getElementById('tractor');
        
orderButtons.forEach(button => {
    button.addEventListener('click', function() {
        const tractorName = this.getAttribute('data-tractor');
        tractorSelect.value = tractorName;
                
        // Прокрутка к форме заказа
        document.getElementById('order').scrollIntoView({
            behavior: 'smooth'
        });
    });
});
        
// Обработка формы заказа
const orderForm = document.getElementById('orderForm');
        
orderForm.addEventListener('submit', function(e) {
    e.preventDefault();
            
    // Получение данных из формы
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const tractor = document.getElementById('tractor').value;
    const period = document.getElementById('period').value;
    const message = document.getElementById('message').value;
        
    // В реальном приложении здесь был бы AJAX-запрос к серверу
    // Для демонстрации просто покажем сообщение
    alert(`Спасибо, ${name}! Ваша заявка на аренду трактора ${tractor} на ${period} дней принята. Мы свяжемся с вами по телефону ${phone} в ближайшее время.`);
            
    // Сброс формы
    orderForm.reset();
});
        
// Плавная прокрутка для ссылок навигации
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        if(this.getAttribute('href').startsWith('#')) {
            e.preventDefault();
                    
            const targetId = this.getAttribute('href');
            if(targetId === '#') return;
                    
            const targetElement = document.querySelector(targetId);
            if(targetElement) {
                // Закрываем мобильное меню если открыто
                mainNav.classList.remove('active');
                        
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        }
    });
});