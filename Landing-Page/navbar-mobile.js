class NavbarMobile {
    constructor() {
        this.NavbarMobile = document.querySelector(NavbarMobile);
        this.navbar = document.querySelector(navbar);
        this.navLinks = document.querySelectorAll(this.navLinks);
        this.activeClass = "active";
    }
}
    
addClickEvent() ;{
    this.NavbarMobile.addEventListener("click", () => console.log("Hey"));
}

init() ;{
    if (this.NavbarMobile) {
        this.addClickEvent();
    }
    {
        return this;
    }
}

