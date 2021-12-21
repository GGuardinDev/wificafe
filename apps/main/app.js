class menu{

    constructor(){

        this.icon1 = document.getElementById("Menu");
        this.icon2 = document.getElementById("close");
        this.nav = document.getElementById("nav-zone");

    }

    show(){

        this.nav.style = "transition: ease-out; transition-property: transform; transition-duration: 0.5s; transform: translateX(-105vw); background-color: white;"

    }

    hide(){

        this.nav.style = "transition: ease-in; transition-property: transform; transition-duration: 0.5s; transform: translateX(105vw);"

    }

}

class dropDownProduct{

    constructor(linkZone, linkImg, linkProducts, state){

        this.linkZone = linkZone;
        this.linkImg = linkImg;
        this.linkProducts = linkProducts;
        this.state = 0;

    }

    Manager(){

        if (this.state == 1){

            this.dropUp();

        } else {

            this.dropDown();

        }

    }

    dropDown(){

        this.linkImg.src = "img/up.svg";
        this.linkProducts.style = "transition: ease-in; transition-property: display; transition-duration: 2s; display: flex;"
        this.state = 1;

    }

    dropUp(){

        this.linkImg.src = "img/down.svg";
        this.linkProducts.style = "transition: ease-in; transition-property: display; transition-duration: 2s; display: none;"
        this.state = 0;

    }

}

if (window.innerWidth <= 768){

let Menu = new menu();
let DropDownFrappes = new dropDownProduct(document.getElementById("frappes"), document.getElementById("down"), document.getElementById("frappe-zone"));
let DropDownIceCreams = new dropDownProduct(document.getElementById("icecream"), document.getElementById("icecream-down"), document.getElementById("icecream-zone"))
let DropDownWifi = new dropDownProduct(document.getElementById("wifi"), document.getElementById("wifi-down"), document.getElementById("wifi-zone"));

document.getElementById("Menu").addEventListener("click", () => {

    Menu.show();

});

document.getElementById("close").addEventListener("click", () => {

    Menu.hide();

});

document.addEventListener("scroll", () => {

    Menu.hide();

});

document.getElementById("frappes").addEventListener("click", () => {

    DropDownFrappes.Manager();

});

document.getElementById("icecream").addEventListener("click", () => {

    DropDownIceCreams.Manager();

});

document.getElementById("wifi").addEventListener("click", () => {

    DropDownWifi.Manager();

});

}

console.log("snapshot03");
