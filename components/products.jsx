const PizzaArray = [
    {
        id: "price_1MmC7xCZq7tIoNJgRMORMbfY",
        name: "Pepperoni",
        price: 15,
        ingredients: 'tomato sauce, chorizo, chili, bazil, onion, mozzarella',
        img: '/img/item/p1.png'
    },
    {
        id: "price_1MmCEaCZq7tIoNJgtOeEHJ7s",
        name: "Melacota",
        price: 20,
        ingredients: 'tomato sauce, pepper, chicken, grilled courgette, mozzarella',
        img: '/img/item/p2.png'
    },
    {
        id: "price_1MmCGICZq7tIoNJg5wulc6Tn",
        name: "Prosciutto",
        price: 18,
        ingredients: 'tomato sauce, ham, pickle, onion, chicken, mozzarella',
        img: '/img/item/p3.png'
    },
    {
        id: "price_1MmCH6CZq7tIoNJghTcH94sO",
        name: "Roma",
        price: 17,
        ingredients: 'tomato sauce, grilled chicken, onion, kabanos sausage, mozzarella',
        img: '/img/item/p4.png'
    },
    {
        id: "price_1MmCHnCZq7tIoNJgeNiPgysh",
        name: "Verona",
        price: 21,
        ingredients: 'tomato sauce, chorizo, jalapeno, bazil, sausage, red onion, mozarella',
        img: '/img/item/p5.png'
    },
    {
        id: "price_1MmCIgCZq7tIoNJgL8EB3uNt",
        name: "Gretto",
        price: 22,
        ingredients: 'tomato sauce, chicken, olives, red onion, pickle, mozzarella',
        img: '/img/item/p6.png'
    },
    {
        id: "price_1MmCJvCZq7tIoNJgiO9zdvAI",
        name: "Marina",
        price: 19,
        ingredients: 'tomato sauce, backon, scrambled egg, chives, dill pickle, mozzarella',
        img: '/img/item/p7.png'
    },
    {
        id: "price_1MmCKUCZq7tIoNJglgtsMI3H",
        name: "Italio",
        price: 20,
        ingredients: 'tomato sauce, salami, pepper, red onion, sausage, corn, mozzarella',
        img: '/img/item/p8.png'
    }
]

function getProductData(id) {
    let productData = PizzaArray.find(product => product.id === id);

    if(productData == undefined) {
        console.log("Cant find this pizza: " + id);
        return undefined;
    }
    return productData;
}

export { PizzaArray, getProductData };