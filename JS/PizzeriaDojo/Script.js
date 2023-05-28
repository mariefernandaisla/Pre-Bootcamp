function pizzaOven(masaDelgada, tipoCorteza, quesos, salsas) {
    var pizza = {};
    pizza.masaDelgada = masaDelgada;
    pizza.tipoCorteza = tipoCorteza;
    pizza.quesos = quesos;
    pizza.salsas = salsas;
    return pizza;
}
    
var pizza = pizzaOven("estilo chicago", "tradicional", ["mozzarella", "pepperoni", "salchicha"], "tomate");
console.log(pizza);
var pizza2 = pizzaOven("lanzada a mano", "marinara", ["mozzarella", "feta"],["champiñones", "aceitunas","cebollas"]);
console.log(pizza2);
var pizza3 = pizzaOven("española", "carnes", ["mozzarella4quesos", "pepperoni", "pollo"], "tomate");
console.log(pizza3);
var pizza4 = pizzaOven("italiana", "pimenton", ["mozzarellatriple", "salame", "carne"], "tomate");
console.log(pizza4);




