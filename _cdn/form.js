var selected;

function closeForm(form){
    document.getElementById("formDiv").style.display = "none";
    var e = document.getElementById(form);  
    e.remove();
}

function createCategorySelection(){
    var form = document.getElementById("div_cotent_selection");

    //selection category
    var selectionCategory = document.createElement("select");
    var attId_category = document.createAttribute("id");
    attId_category.value = "orcamento_categoria";
    var attName_category = document.createAttribute("name");
    attName_category.value = "orcamento_categoria";
    var attRequired_category = document.createAttribute("required");
	var attDisabled_category = document.createAttribute("disabled");
	attDisabled_category.value = "true";
    selectionCategory.setAttributeNode(attId_category);
    selectionCategory.setAttributeNode(attName_category);
    selectionCategory.setAttributeNode(attRequired_category);
	selectionCategory.setAttributeNode(attDisabled_category);

    //options para category
    var optionCategory0 = document.createElement("option");
    var attValue_category0 = document.createAttribute("value");
    attValue_category0.value = "";
    var category0_Text = document.createTextNode("--CATEGORIA--");
    optionCategory0.appendChild(category0_Text);
    optionCategory0.setAttributeNode(attValue_category0);

    var optionCategory1 = document.createElement("option");
    var attValue_category1 = document.createAttribute("value");
    attValue_category1.value = "A - Moto";
    var category1_Text = document.createTextNode("A - Moto");
    optionCategory1.appendChild(category1_Text);
    optionCategory1.setAttributeNode(attValue_category1);

    var optionCategory2 = document.createElement("option");
    var attValue_category2 = document.createAttribute("value");
    attValue_category2.value = "B - Carro";
    var category2_Text = document.createTextNode("B - Carro");
    optionCategory2.appendChild(category2_Text);
    optionCategory2.setAttributeNode(attValue_category2);
	
	var optionCategory3 = document.createElement("option");
    var attValue_category3 = document.createAttribute("value");
    attValue_category3.value = "D - Ônibus e vans";
    var category3_Text = document.createTextNode("D - Ônibus e vans");
    optionCategory3.appendChild(category3_Text);
    optionCategory3.setAttributeNode(attValue_category3);
	
	var optionCategory4 = document.createElement("option");
    var attValue_category4 = document.createAttribute("value");
    attValue_category4.value = "E - Caminhão";
    var category4_Text = document.createTextNode("E - Caminhão");
    optionCategory4.appendChild(category4_Text);
    optionCategory4.setAttributeNode(attValue_category4);

    //adicionando options ao menu de categoria
    selectionCategory.appendChild(optionCategory0);
    selectionCategory.appendChild(optionCategory1);
    selectionCategory.appendChild(optionCategory2);
    selectionCategory.appendChild(optionCategory3);
    selectionCategory.appendChild(optionCategory4);

    form.appendChild(selectionCategory);

    var categoryService = document.getElementById("orcamento_categoria");
    categoryService.disabled = false;

}

function deleteCategorySelection(){
    var e = document.getElementById("orcamento_categoria");  
    e.remove();
}

function verificaOrc(){
    var optionSelected = document.getElementById("orcamento_service").value;
    if(optionSelected =="1"||optionSelected=="2") {
        if (!selected){
            createCategorySelection();
            selected = true;
        }
    }else{
        deleteCategorySelection();
        selected = false;
    }
}


function createOrc(){
    selected = false;

    document.getElementById("formDiv").style.display = "block";
    var main = document.getElementById("formDiv");
    
    //creating the form
    var form = document.createElement("form");
    var attID = document.createAttribute("id");
    attID.value = "form_orcamento";
    var attClass = document.createAttribute("class");
    attClass.value = "form_orcamento";
    var attMethod = document.createAttribute("method");
    attMethod.value = "POST";
    form.setAttributeNode(attMethod); 
    var attAction = document.createAttribute("action");
    attAction.value = "orcamento.php";
    form.setAttributeNode(attAction); 
    form.setAttributeNode(attID);  
    form.setAttributeNode(attClass); 
    
    //creating tags tp the form
    var h2 = document.createElement("h2");
    var h2Text = document.createTextNode("ORÇAMENTO");
    h2.appendChild(h2Text);

    //input nome
    var inputName = document.createElement("input");
    var attName_name = document.createAttribute("name");
    attName_name.value = "nome";
    var attClassInput_name = document.createAttribute("class");
    attClassInput_name.value = "form_input";
    var attType_name = document.createAttribute("type");
    attType_name.value = "text";
    var attPlace_name = document.createAttribute("placeholder");
    attPlace_name.value = "Digite seu nome";
    var attRequired_name = document.createAttribute("required");
    inputName.setAttributeNode(attRequired_name);
    inputName.setAttributeNode(attClassInput_name);
    inputName.setAttributeNode(attType_name);
    inputName.setAttributeNode(attName_name);
    inputName.setAttributeNode(attPlace_name)

    //input email
    var inputEmail = document.createElement("input");
    var attName_email = document.createAttribute("name");
    attName_email.value = "email";
    var attClassInput_email = document.createAttribute("class");
    attClassInput_email.value = "form_input";
    var attType_email = document.createAttribute("type");
    attType_email.value = "email";
    var attPlace_email = document.createAttribute("placeholder");
    attPlace_email.value = "Digite seu email";
    var attRequired_email = document.createAttribute("required");
    inputEmail.setAttributeNode(attRequired_email);
    inputEmail.setAttributeNode(attClassInput_email);
    inputEmail.setAttributeNode(attType_email);
    inputEmail.setAttributeNode(attName_email);
    inputEmail.setAttributeNode(attPlace_email)

    //input telefone
    var inputTelefone = document.createElement("input");
    var attName_telefone = document.createAttribute("name");
    attName_telefone.value = "telefone";
    var attClassInput_telefone = document.createAttribute("class");
    attClassInput_telefone.value = "form_input";
    var attType_telefone = document.createAttribute("type");
    attType_telefone.value = "text";
    var attPlace_telefone = document.createAttribute("placeholder");
    attPlace_telefone.value = "Digite seu telefone (campo não obrigatório)";
    inputTelefone.setAttributeNode(attClassInput_telefone);
    inputTelefone.setAttributeNode(attType_telefone)
    inputTelefone.setAttributeNode(attName_telefone)
    inputTelefone.setAttributeNode(attPlace_telefone)

    //selection service
	
    var selectionService = document.createElement("select");
    var attId_service = document.createAttribute("id");
    attId_service.value = "orcamento_service";
    var attName_service = document.createAttribute("name");
    attName_service.value = "orcamento_service";
	var attChange_service = document.createAttribute("onchange");
	attChange_service.value = "verificaOrc("+selected+")";
    var attRequired_service = document.createAttribute("required");
    selectionService.setAttributeNode(attId_service);
    selectionService.setAttributeNode(attName_service);
    selectionService.setAttributeNode(attRequired_service);
	selectionService.setAttributeNode(attChange_service);

    //options service
    var optionService0 = document.createElement("option");
    var attValue_service0 = document.createAttribute("value");
    attValue_service0.value = "";
    var service0_Text = document.createTextNode("--SERVIÇO--");
    optionService0.appendChild(service0_Text);
    optionService0.setAttributeNode(attValue_service0);

    var optionService1 = document.createElement("option");
    var attValue_service1 = document.createAttribute("value");
    attValue_service1.value = "1";
    var service1_Text = document.createTextNode("Tirar CNH");
    optionService1.appendChild(service1_Text);
    optionService1.setAttributeNode(attValue_service1);

    var optionService2 = document.createElement("option");
    var attValue_service2 = document.createAttribute("value");
    attValue_service2.value = "2";
    var service2_Text = document.createTextNode("Adição ou mudança de CNH");
    optionService2.appendChild(service2_Text);
    optionService2.setAttributeNode(attValue_service2);
	
	var optionService3 = document.createElement("option");
    var attValue_service3 = document.createAttribute("value");
    attValue_service3.value = "3";
    var service3_Text = document.createTextNode("Renovação de CNH");
    optionService3.appendChild(service3_Text);
    optionService3.setAttributeNode(attValue_service3);
	
	var optionService4 = document.createElement("option");
    var attValue_service4 = document.createAttribute("value");
    attValue_service4.value = "4";
    var service4_Text = document.createTextNode("Curso de mototáxi e motofrete");
    optionService4.appendChild(service4_Text);
    optionService4.setAttributeNode(attValue_service4);

    //adicionando options ao menu de serviços
    selectionService.appendChild(optionService0);
    selectionService.appendChild(optionService1);
    selectionService.appendChild(optionService2);
    selectionService.appendChild(optionService3);
    selectionService.appendChild(optionService4);

    //div para seleção do orçamento
    var divCategory_selection = document.createElement("div");
    var attClass_categorySelection = document.createAttribute("class");
    attClass_categorySelection.value = "div_content_selection";
    var attId_categorySelection = document.createAttribute("id");
    attId_categorySelection.value = "div_cotent_selection";
    divCategory_selection.setAttributeNode(attClass_categorySelection);
    divCategory_selection.setAttributeNode(attId_categorySelection);


    //div para botões
    var divButton = document.createElement("div");
    var attClass_divButton = document.createAttribute("class");
    attClass_divButton.value = "form_content_btn";
    divButton.setAttributeNode(attClass_divButton);

    //botões
    var inputButton_send = document.createElement("input");
    var attClass_buttonSend = document.createAttribute("class");
    attClass_buttonSend.value = "btn send";
    var attValue_buttonSend = document.createAttribute("value");
    attValue_buttonSend.value = "ENVIAR";
    var attType_buttonSend = document.createAttribute("type");
    attType_buttonSend.value = "submit";
    inputButton_send.setAttributeNode(attClass_buttonSend);
    inputButton_send.setAttributeNode(attValue_buttonSend);
    inputButton_send.setAttributeNode(attType_buttonSend);

    var inputButton_close = document.createElement("input");
    var attClass_buttonClose = document.createAttribute("class");
    attClass_buttonClose.value = "btn close";
    var attValue_buttonClose = document.createAttribute("value");
    attValue_buttonClose.value = "FECHAR";
    var attType_buttonClose = document.createAttribute("type");
    attType_buttonClose.value = "button";
    var attClick_buttonClose = document.createAttribute("onclick");
    attClick_buttonClose.value = "closeForm('form_orcamento')";
    inputButton_close.setAttributeNode(attClass_buttonClose);
    inputButton_close.setAttributeNode(attValue_buttonClose);
    inputButton_close.setAttributeNode(attType_buttonClose);
    inputButton_close.setAttributeNode(attClick_buttonClose);

    form.appendChild(h2);
    form.appendChild(inputName);
    form.appendChild(inputEmail);
    form.appendChild(inputTelefone);
    form.appendChild(selectionService);
    form.appendChild(divCategory_selection);
    form.appendChild(divButton);
    

    divButton.appendChild(inputButton_send);
    divButton.appendChild(inputButton_close);

    main.appendChild(form);
}

function createContact(){
    document.getElementById("formDiv").style.display = "block";
    var main = document.getElementById("formDiv");
    
    //creating the form
    var form = document.createElement("form");
    var attID = document.createAttribute("id");
    attID.value = "form_contato";
    var attClass = document.createAttribute("class");
    attClass.value = "form_contato";
    var attMethod = document.createAttribute("method");
    attMethod.value = "POST";
    var attAction = document.createAttribute("action");
    attAction.value = "email.php";
    form.setAttributeNode(attMethod);  
    form.setAttributeNode(attAction); 
    form.setAttributeNode(attID);  
    form.setAttributeNode(attClass);  
    

    //creating tags tp the form
    var h2 = document.createElement("h2");
    var h2Text = document.createTextNode("CONTATO");
    h2.appendChild(h2Text);

    //input nome
    var inputName = document.createElement("input");
    var attName_name = document.createAttribute("name");
    attName_name.value = "nome";
    var attClassInput_name = document.createAttribute("class");
    attClassInput_name.value = "form_input";
    var attType_name = document.createAttribute("type");
    attType_name.value = "text";
    var attPlace_name = document.createAttribute("placeholder");
    attPlace_name.value = "Digite seu nome";
    var attRequired_name = document.createAttribute("required");
    inputName.setAttributeNode(attRequired_name);
    inputName.setAttributeNode(attClassInput_name);
    inputName.setAttributeNode(attType_name);
    inputName.setAttributeNode(attName_name);
    inputName.setAttributeNode(attPlace_name)

    //input email
    var inputEmail = document.createElement("input");
    var attName_email = document.createAttribute("name");
    attName_email.value = "email";
    var attClassInput_email = document.createAttribute("class");
    attClassInput_email.value = "form_input";
    var attType_email = document.createAttribute("type");
    attType_email.value = "email";
    var attPlace_email = document.createAttribute("placeholder");
    attPlace_email.value = "Digite seu email";
    var attRequired_email = document.createAttribute("required");
    inputEmail.setAttributeNode(attRequired_email);
    inputEmail.setAttributeNode(attClassInput_email);
    inputEmail.setAttributeNode(attType_email);
    inputEmail.setAttributeNode(attName_email);
    inputEmail.setAttributeNode(attPlace_email)

    //input telefone
    var inputTelefone = document.createElement("input");
    var attName_telefone = document.createAttribute("name");
    attName_telefone.value = "telefone";
    var attClassInput_telefone = document.createAttribute("class");
    attClassInput_telefone.value = "form_input";
    var attType_telefone = document.createAttribute("type");
    attType_telefone.value = "text";
    var attPlace_telefone = document.createAttribute("placeholder");
    attPlace_telefone.value = "Digite seu telefone (campo não obrigatório)";
    inputTelefone.setAttributeNode(attClassInput_telefone);
    inputTelefone.setAttributeNode(attType_telefone)
    inputTelefone.setAttributeNode(attName_telefone)
    inputTelefone.setAttributeNode(attPlace_telefone)

    //input mensagem
    var textMessage = document.createElement("textarea");
    var attName_message = document.createAttribute("name");
    attName_message.value = "mensagem";
    var attClass_message = document.createAttribute("class");
    attClass_message.value = "form_Text_Message";
    var attPlace_message = document.createAttribute("placeholder");
    attPlace_message.value = "Digite aqui sua mensagem";
    var attRequired_message = document.createAttribute("required");
    textMessage.setAttributeNode(attRequired_message);
    textMessage.setAttributeNode(attClass_message);
    textMessage.setAttributeNode(attName_message);
    textMessage.setAttributeNode(attPlace_message);

    //div para botões
    var divButton = document.createElement("div");
    var attClass_divButton = document.createAttribute("class");
    attClass_divButton.value = "form_content_btn";
    divButton.setAttributeNode(attClass_divButton);

    //botões
    var inputButton_send = document.createElement("input");
    var attClass_buttonSend = document.createAttribute("class");
    attClass_buttonSend.value = "btn send";
    var attValue_buttonSend = document.createAttribute("value");
    attValue_buttonSend.value = "ENVIAR";
    var attType_buttonSend = document.createAttribute("type");
    attType_buttonSend.value = "submit";
    inputButton_send.setAttributeNode(attClass_buttonSend);
    inputButton_send.setAttributeNode(attValue_buttonSend);
    inputButton_send.setAttributeNode(attType_buttonSend);

    var inputButton_close = document.createElement("input");
    var attClass_buttonClose = document.createAttribute("class");
    attClass_buttonClose.value = "btn close";
    var attValue_buttonClose = document.createAttribute("value");
    attValue_buttonClose.value = "FECHAR";
    var attType_buttonClose = document.createAttribute("type");
    attType_buttonClose.value = "button";
    var attClick_buttonClose = document.createAttribute("onclick");
    attClick_buttonClose.value = "closeForm('form_contato')";
    inputButton_close.setAttributeNode(attClass_buttonClose);
    inputButton_close.setAttributeNode(attValue_buttonClose);
    inputButton_close.setAttributeNode(attType_buttonClose);
    inputButton_close.setAttributeNode(attClick_buttonClose);
	

    form.appendChild(h2);
    form.appendChild(inputName);
    form.appendChild(inputEmail);
    form.appendChild(inputTelefone);
    form.appendChild(textMessage);
    form.appendChild(divButton);

    divButton.appendChild(inputButton_send);
    divButton.appendChild(inputButton_close);

    main.appendChild(form);
}


