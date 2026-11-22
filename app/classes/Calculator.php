<?php

namespace App\classes;

class Calculator
{
    public $firstNumber, $lastNumber, $operator, $result;

    public function __construct($post){
        $this->firstNumber = $post['first_number'];
        $this->lastNumber = $post['last_number'];
        $this->operator = $post['operator'];
    }

    public function calculator(){
        switch($this->operator){
            case '+':
                $this->result = $this->firstNumber + $this-> lastNumber;
                break;
            case '-':
                $this->result = $this->firstNumber - $this-> lastNumber;
                break;
            case '*':
                $this->result = $this->firstNumber * $this-> lastNumber;
                break;
            case '/':
                $this->result = $this->firstNumber / $this-> lastNumber;
                break;
            case '%':
                $this->result = $this->firstNumber % $this-> lastNumber;
                break;
        }
        echo $this->result;
    }
}