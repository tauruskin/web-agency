window.addEventListener('DOMContentLoaded', () => {

    const tabs = (headerSelector, tabSelector, contentSelector, activeClass, display = 'flex') => {
        const header = document.querySelector(headerSelector),
            tab = document.querySelectorAll(tabSelector),
            content = document.querySelectorAll(contentSelector);

        function hideTabContent() {
            content.forEach(item => {
                item.style.display = 'none';
            });

            tab.forEach(item => {
                item.classList.remove(activeClass);
            });
        }

        // при запуске функции без аргументов активным будет 1 элемент
        function showTabContent(i = 0) {
            content[i].style.display = display;
            tab[i].classList.add(activeClass);
        }

        hideTabContent();
        showTabContent();

        header.addEventListener('click', (e) => {
            const target = e.target;
            if (target &&
                (target.classList.contains(tabSelector.replace(/\./, "")) ||
                    target.parentNode.classList.contains(tabSelector.replace(/\./, "")))) {
                tab.forEach((item, i) => {
                    if (target == item || target.parentNode == item) {
                        hideTabContent();
                        showTabContent(i);
                    }
                });
            }
        });
    };

    tabs('.card__header', '.card__item', '.card__content', 'active');

});