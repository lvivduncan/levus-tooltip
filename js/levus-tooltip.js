// 22-06-2021
{
    // затримка
    const delay = 1000;

    // елементи
    const tultip = document.querySelectorAll('.levus-tultip');

    if(localStorage.tultip != 1){

        // швидше працює
        for(let i = 0; i<tultip.length; i++){

            // створили елемент
            const span = document.createElement('span');

            // додали клас для вибірки
            span.setAttribute('class', 'content');

            // отримали контент з атрибута
            const title = tultip[i].title;

            // встановили затримку
            span.style.animationDelay = `${delay * i}ms`;

            // поклали дані з атрибута у тултіп
            span.append(title);

            // додали в тег
            tultip[i].append(span);

        }

        localStorage.tultip = 1;

    }
}