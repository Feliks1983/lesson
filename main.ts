{
  interface User {
    name: string;
    age: number;
  }

  let user: User = {
    name: "Alice",
    age: 30
  };

  let prod: {
    name: string;
    colors: string[];
  } = {
    name: "Gadget",
    colors: ["red", "green", "blue"]
  }

  let arr: User [] = [];
  arr.push({
    name: "Bob",
    age: 25
  });


	let elem: HTMLElement = document.querySelector(".elem") as HTMLElement;
	elem.innerText = user.name + " is " + user.age + " years old.";
  elem.innerText += " The product " + prod.name + " comes in colors: " + prod.colors.join(", ") + ".";
  elem.innerText += `${arr[0].name} is ${arr[0].age} years old.`;
}
