

export default class Header{
    constructor(body){
        this.body = body;
    }

    generate(){
        const header = document.createElement('div');
        header.classList.add('header');

        const menu = document.createElement('span');
        menu.classList.add('menu');
        header.appendChild(menu);


        this.body.appendChild(header);
    }
}