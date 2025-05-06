export function populateMenu() {
    const menuData = {
        burgers: [
            {name: "Hamburger" , description: "A good ol' regular hamburger with lettuce, onions, tomato, pickles, american cheese, and our secret sauce." , price: "$8.99"},
            {name: "Veggie Burger" , description: "Made with our house made veggie patty with lettuce, onions, tomato, pickles, vegan cheese, and our secret sauce." , price: "$8.99"},
            {name: "Breakfast All Day  Burger" , description: "The perfect hangover cure all made with fried egg, hashbrowns, bacon, carmerlized onions, american cheese, and our special maple syrup sauce." , price: "$10.99"},
            {name: "Picante Burger" , description: "A Tex Mex styled burger made with lettuce, avacado, pepper jack cheese, and house made salsa." , price: "$10.99"},
            {name: "Philly Burger" , description: "A twist on a Philly classic made with onions, bell peppers, mushrooms, and provolone cheese." , price: "$9.99"}
        ],
        sides: [
            {name: "French Fries" , description: "Freshly made, salted, and crisp to perfection." , price: "$2.50"},
            {name: "Sweet Potato Fries" , description: "A nutritious alternative that's crisp and salted to perfection. " , price: "$3.00"},
            {name: "Tater Tots" , description: "Crispy and fried to golden perfection tater tots" , price: "$3.00"},
            {name: "Onion Rings" , description: "Battered with a subtle blend of spices and fried golden brown." , price: "$3.25"},
            {name: "Tempura Green Beans" , description: "Tempura-battered green beans fried to perfection." , price: "$3.25"}
        ],
        drink: [
            {name: "Fountain Drink", description: "Drinks available: Coca-cola, Sprite, Dr. Pepper, Fanta Orange, Water", price: "Regular: $1.50 Large: $2.50"},
            {name: "Milkshake" , description: "Available flavors: Vanilla, Chocolate, Strawberry, Oreo, Mocha, dulce de leche" , price: "$5.99"}
        ]
    };

    const menu = document.createElement("main");
    menu.classList.add("menu");
    const menuItems = document.createElement("div");
    menuItems.classList.add("items");
    menu.appendChild(menuItems);

    const generateMenuItems = (items) => {
        return items.map(item => `
            <div class ="menu-item">
                <div class ="item-details">
                    <h3>${item.name}</h3>
                    <p>${item.description}</p>
                </div>
                <div class ="item-price"><h4>${item.price}</h4></div>
            </div>
        `).join('');
    };

    const burgerSection = document.createElement("div");
    const burHeading =  document.createElement("h1");
    const burItem = document.createElement("div");
    burHeading.innerText = "HAMBURGERS";
    burgerSection.appendChild(burHeading);
    burgerSection.appendChild(burItem);
    burItem.innerHTML = `${generateMenuItems(menuData.burgers)}`;

    const sideSection = document.createElement("div");
    const sidHeading = document.createElement("h1");
    const sidItem = document.createElement("div");
    sidHeading.innerText = "SIDES";
    sideSection.appendChild(sidHeading);
    sideSection.appendChild(sidItem);
    sidItem.innerHTML = `${generateMenuItems(menuData.sides)}`;

    const drinkSection = document.createElement("div");
    const drnkHeading = document.createElement("h1");
    const drnkItem = document.createElement("div");
    drnkHeading.innerText = "DRINKS"
    drinkSection.appendChild(drnkHeading);
    drinkSection.appendChild(drnkItem);
    drnkItem.innerHTML = `${generateMenuItems(menuData.drink)}`;

    menuItems.appendChild(burgerSection);
    menuItems.appendChild(sideSection);
    menuItems.appendChild(drinkSection);

    return menu
}