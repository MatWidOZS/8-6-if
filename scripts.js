var a = prompt('Give a value of "a"'),
    b = prompt('Give a value of "b"'),
    value;

value = (a * a) - (2 * a * b) - (b * b);

console.log('Wynik działania wynosi: ' + value);

if (value > 0) {
	console.log('Wynik dodatni');
} else if (value < 0) {
	console.log('Wynik ujemny');
} else {
	console.log('Wynik to 0');
}