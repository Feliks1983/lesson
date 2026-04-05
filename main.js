"use strict";
{
    let user = {
        name: "Alice",
        age: 30
    };
    let prod = {
        name: "Gadget",
        colors: ["red", "green", "blue"]
    };
    let arr = [];
    arr.push({
        name: "Bob",
        age: 25
    });
    let elem = document.querySelector(".elem");
    elem.innerText = user.name + " is " + user.age + " years old.";
    elem.innerText += " The product " + prod.name + " comes in colors: " + prod.colors.join(", ") + ".";
    elem.innerText += `${arr[0].name} is ${arr[0].age} years old.`;
}
