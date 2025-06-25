<?php
class Drink extends Meal{
    protected $bottleType;
    public function __construct($bottleType)
    {
        $this->bottleType = $bottleType;
    }
    public function getCost()
    {
        return 0;
    }
    public function printbottleType()
    {
        echo "bottleType: " .$this->bottleType."\n";
    }

    public function printCost()
    {
        return "Cost of Drink";
    }

}

?>