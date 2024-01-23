

export default class Header{
    constructor(){
        this.body = document.body;
    }

    generate(){
        const header = document.createElement('div');
        header.classList.add('header');
        

        // create menu

        const menuHidden = document.createElement('ul');
        const item1 = document.createElement('li');
        item1.id = 'menuItem';
        const item2 = document.createElement('li');
        const item3 = document.createElement('li');
        item2.classList.add('hidden');
        item3.classList.add('hidden');

        item1.textContent = 'Drop down';
        item2.textContent = 'Item 1';
        item3.textContent = 'Item 2';


        menuHidden.appendChild(item1);
        menuHidden.appendChild(item2);
        menuHidden.appendChild(item3);
        menuHidden.classList.add('menu');
        header.appendChild(menuHidden);


        // add listeners

        item1.addEventListener('mouseover', () => {
            item2.classList.remove('fade-out');
            item3.classList.remove('fade-out');

            item2.classList.add('fade-in');
            item3.classList.add('fade-in'); // Add 'fade-in' class to item3
        });

        item1.addEventListener('mouseleave', () => {
            item2.classList.remove('fade-in');
            item3.classList.remove('fade-in');

            item2.classList.add('fade-out');
            item3.classList.add('fade-out');
        })
        
        


        this.body.appendChild(header);
    }
}