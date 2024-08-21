document.addEventListener("DOMContentLoaded", function() {
    document.querySelector('h1').textContent = "Latihan JavaScript Selesai";
});
// Variabel dan Tipe Data
let name = "John";
const age = 30;

let output = document.getElementById('output');
output.innerHTML = `Nama: ${name}, Umur: ${age} <br>`;

// Array
let fruits = ["Apple", "Banana", "Mango"];
output.innerHTML += "Buah-buahan: <br>";
for(let i = 0; i < fruits.length; i++) {
    output.innerHTML += fruits[i] + "<br>";
}

// Objek
let person = {
    firstName: "John",
    lastName: "Doe",
    age: 30
};
output.innerHTML += `Nama lengkap: ${person.firstName} ${person.lastName}`;
// Pengendalian Alur
function checkValue() {
    let userValue = document.getElementById('userInput').value;
    let output = document.getElementById('output');
    output.innerHTML = "";

    if (userValue > 10) {
        output.innerHTML += "Nilai lebih besar dari 10.<br>";
    } else if (userValue == 10) {
        output.innerHTML += "Nilai sama dengan 10.<br>";
    } else {
        output.innerHTML += "Nilai kurang dari 10.<br>";
    }

    output.innerHTML += "Menampilkan angka dari 1 hingga " + userValue + ":<br>";
    for (let i = 1; i <= userValue; i++) {
        output.innerHTML += i + "<br>";
    }
}
// Fungsi dalam JavaScript
function greet(name) {
    return `Hello, ${name}`;
}

let output = document.getElementById('output');
output.innerHTML += greet("Alice") + "<br>";
output.innerHTML += greet("Bob") + "<br>";

function calculateSquare(number) {
    return number * number;
}

output.innerHTML += "Kuadrat dari 4 adalah " + calculateSquare(4) + "<br>";
output.innerHTML += "Kuadrat dari 7 adalah " + calculateSquare(7) + "<br>";

const addNumbers = (a, b) => a + b;
output.innerHTML += "Penjumlahan 3 + 5 adalah " + addNumbers(3, 5);
// Manipulasi Array dan Objek
let students = ["Alice", "Bob", "Charlie"];
students.push("Dave");

let output = document.getElementById('output');
output.innerHTML += "Daftar siswa:<br>";
students.forEach(student => {
    output.innerHTML += student + "<br>";
});

let car = {
    brand: "Toyota",
    model: "Corolla",
    year: 2020
};

output.innerHTML += "Informasi Mobil:<br>";
for(let key in car) {
    output.innerHTML += `${key}: ${car[key]}<br>`;
}

let cars = [
    { brand: "Toyota", model: "Corolla", year: 2020 },
    { brand: "Honda", model: "Civic", year: 2019 },
    { brand: "Ford", model: "Focus", year: 2018 }
];

output.innerHTML += "Daftar Mobil:<br>";
cars.forEach(car => {
    output.innerHTML += `${car.brand} ${car.model} (${car.year})<br>`;
});
