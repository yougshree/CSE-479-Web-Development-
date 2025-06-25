<?php

class Burger extends Meal{
    protected $filling;
    public function __construct($filling)
    {
        $this->filling = $filling;
    }
    public function getCost()
    {
        return 0;
    }
    public function printFilling()
    {
        echo "Filling: " .$this->filling."\n";
    }
    public function printCost()
    {
        return "Cost of Burger";
    }


}
?>