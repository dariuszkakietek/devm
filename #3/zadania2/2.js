// Omów krok po kroku, w jaki sposób następuje porównywanie dwóch stringów. W jaki sposób interpreter wie, która litera stoi wcześniej w alfabecie?

// Porównanie pierwszej litery obydwu stringów
// Jeżeli okaże się, że litery są różne, to sprawdzamy, która występuje wcześniej/później w porządku alfabetycznym. Ten wyraz, której litera spełni ten warunek, uznawany jest za “mniejszy/większy”. Wtedy następuje koniec sprawdzenia i zwracana jest wartość logiczna true (gdy litera jest pierwsza w porządku alfabetycznym) lub false (gdy litera znajduje się później w porządku alfabetycznym).
// W momencie, gdy pierwsze litery wyrazów są takie same, przechodzimy do rozpatrywania kolejnej pary i powtarzamy krok 2.
// Jeżeli dojdziemy do końca obu stringów i ani razu nie zostanie spełniony warunek spod (2), to znaczy że stringi są takie same. Jeżeli natomiast wtedy okaże się, że któryś z nich jest dłuższy, to wtedy mówimy o nim jak o “większym” stringu, np. “Kacperek” > “Kacper”.
