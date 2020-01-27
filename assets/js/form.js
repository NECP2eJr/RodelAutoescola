function  openContForm(){
    document.getElementById("contactForm").style.display = "block";
    document.getElementById("contactForm").style.position = "absolute";
}

function closeContForm(){
    document.getElementById("contactForm").style.display = "none";
    document.getElementById("contactForm").style.position = "fixed";
}

function  openOrcForm(){
    document.getElementById("orcForm").style.display = "block";
    document.getElementById("orcForm").style.position = "absolute";
}

function closeOrcForm(){
    document.getElementById("orcForm").style.display = "none";
    document.getElementById("orcForm").style.position = "fixed";
}

function verificaOrc(){
    var optionSelected = document.getElementById("service").value;
    var categoryService = document.getElementById("category");
    if(optionSelected =="1"||optionSelected=="2"){
        categoryService.disabled = false;
    }else{
        categoryService.value = "0"
        categoryService.disabled = true;
    }
}

function navigateTo(elId){
    var elmt = document.getElementById(elId);
    elmt.scrollIntoView();
}