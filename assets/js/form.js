function  openContForm(){
    document.getElementById("contactForm").style.display = "block";
    document.getElementById("contactForm").style.position = "absolute";
    document.getElementById("human").checked = false;
}

function closeContForm(){
    document.getElementById("contactForm").style.display = "none";
    document.getElementById("contactForm").style.position = "fixed";
    document.getElementById("nameCont").value = "";
    document.getElementById("emailCont").value = "";
    document.getElementById("messageCont").value = "";
}

function  openOrcForm(){
    document.getElementById("orcForm").style.display = "block";
    document.getElementById("orcForm").style.position = "absolute";
}

function closeOrcForm(){
    document.getElementById("orcForm").style.display = "none";
    document.getElementById("orcForm").style.position = "fixed";
    document.getElementById("nameOrc").value = "";
    document.getElementById("emailOrc").value = "";
    document.getElementById("service").value = "";
    document.getElementById("category").value = "0";
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