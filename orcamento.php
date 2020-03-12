<?php
    $nome = addslashes($_POST['nome']);
    $email = addslashes($_POST['email']);
    $telefone = addslashes($_POST['telefone']);
    $servico = addslashes($_POST['orcamento_service']);
    $categoria = 0;

    if ($servico == 1){
        $tipo_servico = "Tirar";
        $categoria = addslashes($_POST['orcamento_categoria']);
    }
    elseif ($servico == 2){
        $tipo_servico = "Mudar";
        $categoria = addslashes($_POST['orcamento_categoria']);
    }
    elseif ($servico == 3){
        $tipo_servico = "Renovar";
    }
    elseif ($servico == 4){
        $tipo_servico = "Curso";
    }

    echo $nome."\n";
    echo $email."\n";
    echo $telefone."\n";
    echo $tipo_servico."\n";
    echo $categoria."\n";

    $to = "tiagodemoraispereira@gmail.com";
    $subject = "Solicitação de orçamento (site)";
    $body = "Nome: ".$nome. "\r\n".
            "Email: ".$email."\r\n".
            "Telefone: ".$telefone."\r\n".
            "Serviço: ".$tipo_servico."\r\n". 
            "Categoria: ".$categoria;

    $header = "From: tiagodemoraispereira@gmail.com"."\r\n"
            ."Reply-To: ".$email."\r\n"
            ."X=Mailer:PHP/".phpversion();
        
    if(mail($to, $subject, $body, $header)){
        echo("Email enviado com sucesso!!");
    }else{
        echo("Email não enviado com sucesso!!");
    }

?>