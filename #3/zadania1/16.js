//Spróbuj przewidzieć wartości zmiennej new_value po wykonaniu każdej operacji z osobna:

//Przykład I
var value = 100;
var new_value = value++;
alert(new_value); // jaka wartość? 100

//Przykład II
var value = 150;
var new_value = ++value;
alert(new_value); // jaka wartość? 151

//Przykład III
var value = 99;
var new_value = value++ * 10;
alert(new_value); // jaka wartość? 990

//Przykład IV
var value = 10;
var other_value = 20;
var new_value = value++ + ++other_value;
alert(new_value); // jaka wartość? 31
