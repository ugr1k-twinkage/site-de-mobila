let a = 5;
let b = 10;
suma = a + b;

console.log("Suma numerelor este: ", suma);
for(let i =1; i <= 10; i++){
    if (i % 2 == 0){
        console.log(i);
    }

}
let name = prompt("Introduceti numele si prenumele dvs.:") 
console.log(name)
alert("Salut " + name +"!")

const button = document.getElementById("logButton");
button.addEventListener("click", () => {
    console.log("Butonul a fost apasat!");
})