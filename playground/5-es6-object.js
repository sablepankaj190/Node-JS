// Object property shorthand

const name = "Pankaj";
const userAge = 22;

const user = {
    name,
    age: userAge,
    location: 'Indore'
}

console.log(user);

// Object destructuring

const product = {
    label: 'Red notebook',
    price: 3,
    stock: 201,
    salePrice: undefined
}

// const label = product.label
// const stock = product.stock

// const { label: productLabel, stock, rating = 3 } = product;

// console.log(productLabel, stock, rating)

const transaction = (type, {label, stock}) => {
    console.log(type, label, stock);
}

transaction('order', product);