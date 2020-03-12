<?php
    $nome = addslashes($_POST['nome']);
    $email = addslashes($_POST['email']);
    $telefone = addslashes($_POST['telefone']);
    $mensagem = addslashes($_POST['mensagem']);

    echo $nome."\n";
    echo $email."\n";
    echo $telefone."\n";
    echo $mensagem."\n";

    $to = "tiagodemoraispereira@gmail.com";
    $subject = "Contato pelo site";
    $body = "Nome: ".$nome. "\r\n".
            "Email: ".$email."\r\n".
            "Telefone: ".$telefone."\r\n".
            "Mensagem: ".$mensagem;

    $header = "From: tiagodemoraispereira@gmail.com"."\r\n"
            ."Reply-To: ".$email."\r\n"
            ."X=Mailer:PHP/".phpversion();
        
    if(mail($to, $subject, $body, $header)){
        echo("Email enviado com sucesso!!");
    }else{
        echo("Email não enviado com sucesso!!");
    }

?>