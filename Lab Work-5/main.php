<?php
//customer class
class customers{
    public function main()
    {
        $burger= new Burger("Mutton");
        $burger->printFilling();
        echo $burger->printCost() . "\n";
//for veg burger
       $vegburger= new Burger("Vegetable");
       $vegburger->printFilling();
       echo $vegburger->printCost() . "\n";

//for non-veg burger~
       $nonVegburger= new Burger("Chiken");
       $nonVegburger->printFilling();
       echo $nonVegburger->printCost() . "\n";
    

    $drink= new Drink("Glass Bottle");
    $drink->printBottleType();
    echo $drink->printCost() . "\n";
//for juice
   $juice= new juice("Plastic Bottle");
   $juice->printBottleType();
   echo $juice->printCost() . "\n";

//for soft drinks
   $softDrink= new softDrink("Can");
   $softDrink->printBottleType();
   echo $softDrink->printCost() . "\n";
}
}
$customers= new Customer();
$customers->main();