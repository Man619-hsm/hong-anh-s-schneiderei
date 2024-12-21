document.addEventListener("DOMContentLoaded", function() {
    const mobileNavIcons = document.getElementById("mobile-nav-icons");
    if (mobileNavIcons) {
        mobileNavIcons.addEventListener("click", function() {
            document.getElementById("main-nav").classList.toggle('open');
        });
    }

    /*PRESIE POP UPS*/

    // Select all close buttons and add click event listeners
    const closeBtns = document.getElementsByClassName("close-btn");
    Array.from(closeBtns).forEach(function(btn) {
        btn.addEventListener("click", function() {
            // Close the parent preise-box of the clicked close button
            btn.parentElement.style.display = "none";
        });
    });

    const hosenBtn = document.getElementById("hosen-btn");
    if (hosenBtn) {
        hosenBtn.addEventListener("click", function() {
            const hosenPreise = document.getElementById("hosen-preise");
            hosenPreise.style.display = "block";
        });
    } 
    else {
        hosenPreise.style.display = "none";
    }

    const oberteileBtn = document.getElementById("oberteile-btn");
    if (oberteileBtn) {
        oberteileBtn.addEventListener("click", function() {
            const oberteilePreise = document.getElementById("oberteile-preise");
            oberteilePreise.style.display = "block";
        });
    } 
    else {
        oberteilePreise.style.display = "none";
    }

    const jackenBtn = document.getElementById("jacken-btn");
    if (jackenBtn) {
        jackenBtn.addEventListener("click", function() {
            const jackenPreise = document.getElementById("jacken-preise");
            jackenPreise.style.display = "block";
        });
    } 
    else {
        jackenPreise.style.display = "none";
    }


    const kleiderBtn = document.getElementById("kleider-btn");
    if (kleiderBtn) {
        kleiderBtn.addEventListener("click", function() {
            const kleiderPreise = document.getElementById("kleider-preise");
            kleiderPreise.style.display = "block";
        });
    } 
    else {
        kleiderPreise.style.display = "none";
    }


    const röckeBtn = document.getElementById("röcke-btn");
    if (röckeBtn) {
        röckeBtn.addEventListener("click", function() {
            const röckePreise = document.getElementById("röcke-preise");
            röckePreise.style.display = "block";
        });
    } 
    else {
        röckePreise.style.display = "none";
    }

    const weiteresBtn = document.getElementById("weiteres-btn");
    if (weiteresBtn) {
        weiteresBtn.addEventListener("click", function() {
            const weiteresPreise = document.getElementById("weiteres-preise");
            weiteresPreise.style.display = "block";
        });
    } 
    else {
        weiteresPreise.style.display = "none";
    }

    /*REINIGUNG*/

    const unterteileBtn = document.getElementById("unterteile-btn");
    if (unterteileBtn) {
        unterteileBtn.addEventListener("click", function() {
            const unterteilePreise = document.getElementById("reinigung_hosen-preise");
            unterteilePreise.style.display = "block";
        });
    } 
    else {
        unterteilePreise.style.display = "none";
    }

    const reinigungOberteileBtn = document.getElementById("reinigung_oberteile-btn");
    if (reinigungOberteileBtn) {
        reinigungOberteileBtn.addEventListener("click", function() {
            const reinigungOberteilePreise = document.getElementById("reinigung_oberteile-preise");
            reinigungOberteilePreise.style.display = "block";
        });
    } 
    else {
        reinigungOberteilePreise.style.display = "none";
    }

    const reinigungJackenBtn = document.getElementById("reinigung_jacken-btn");
    if (reinigungJackenBtn) {
        reinigungJackenBtn.addEventListener("click", function() {
            const reinigungJackenPreise = document.getElementById("reinigung_jacken-preise");
            reinigungJackenPreise.style.display = "block";
        });
    } 
    else {
        reinigungJackenPreise.style.display = "none";
    }

    const reinigungKleiderBtn = document.getElementById("reinigung_kleider-btn");
    if (reinigungKleiderBtn) {
        reinigungKleiderBtn.addEventListener("click", function() {
            const reinigungKleiderPreise = document.getElementById("reinigung_kleider-preise");
            reinigungKleiderPreise.style.display = "block";
        });
    } 
    else {
        reinigungKleiderPreise.style.display = "none";
    }

    const spezialBtn = document.getElementById("spezial-btn");
    if (spezialBtn) {
        spezialBtn.addEventListener("click", function() {
            const spezialPreise = document.getElementById("spezial-preise");
            spezialPreise.style.display = "block";
        });
    } 
    else {
        spezialPreise.style.display = "none";
    }

    const reinigungWeiteresBtn = document.getElementById("reinigung_weiteres-btn");
    if (reinigungWeiteresBtn) {
        reinigungWeiteresBtn.addEventListener("click", function() {
            const reinigungWeiteresPreise = document.getElementById("reinigung_weiteres-preise");
            reinigungWeiteresPreise.style.display = "block";
        });
    } 
    else {
        reinigungWeiteresPreise.style.display = "none";
    }










   
});

