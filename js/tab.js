class Tab {
    constructor() {
        this.init();
        this.click();
    }
    init() {
        const box = document.createElement('div');
        box.className = 'box';
        box.append(this.head());
        box.append(this.main());
        document.body.prepend(box);
    }
    head() {
        const ul = document.createElement('ul');
        ul.className = "head";
        for (let i = 0; i < 3; i++) {
            const li = document.createElement('li');
            li.innerHTML = i + 1;
            ul.append(li);
            if (i == 0) {
                li.className = "show"
            }
        }
        return ul
    }
    main() {
        const ol = document.createElement('ol');
        ol.className = "main";
        const lis = this.head().querySelectorAll('li');
        [...lis].forEach((v, i) => {
            const olLi = document.createElement('li');
            olLi.innerHTML = i + 1;
            ol.append(olLi);
            if (i == 0) {
                olLi.style.display = 'block';
            }
        })
        return ol
    }
    click() {
        let ulLis = document.getElementsByTagName('ul')[0].getElementsByTagName('li');
        let olLis = document.getElementsByTagName('ol')[0].querySelectorAll('li');
        [...ulLis].forEach((v, i) => {
            v.addEventListener('click', () => {
                for (let j = 0; j < ulLis.length; j++) {
                    olLis[j].style.display = "none";
                    ulLis[j].className = " ";
                }
                v.className = "show";
                olLis[i].style.display = "block";
            })
        })

    }
}
const tab = new Tab();