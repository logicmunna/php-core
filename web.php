<?php

require_once "vendor/autoload.php";
use App\classes\Welcome;
use App\classes\Calculator;

$welcome = new Welcome();

if (isset ($_GET['page'])){
    if($_GET['page']=='home'){
        $welcome->index();
    } elseif($_GET['page']=='about'){
        $welcome->about();
    }elseif($_GET['page']=='calculator'){
        $welcome->calculator();
    }elseif($_GET['page']=='read-more'){
        $welcome->readMore($_GET['id']?? null);
    }
}elseif(isset($_POST['calculator_btn'])){
    $calculator = new Calculator($_POST);
    $calculator-> calculator();
}