// 23-06-2021
{
    // затримка
    const delay = 1000;

    // елементи
    const tooltip = document.querySelectorAll('.levus-tooltip');

    if(localStorage.tooltip != 1){

        // швидше працює
        for(let i = 0; i<tooltip.length; i++){

            // створили елемент
            const span = document.createElement('span');

            // додали клас для вибірки
            span.setAttribute('class', 'content');

            // отримали контент з атрибута
            const title = tooltip[i].ariaLabel;

            // встановили затримку
            span.style.animationDelay = `${delay * i}ms`;

            // поклали дані з атрибута у тултіп
            span.append(title);

            // додали в тег
            tooltip[i].append(span);

        }

        // анімація 1 раз
        // localStorage.tooltip = 1;

    }
}

// примітка: відступ тултіпа залеже від розміру елемента, в якого є тултіп!