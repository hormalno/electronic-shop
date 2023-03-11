const product = {
    name: 'Some Name here',
    category: 'laptop',
    brand: 'Asus',
    mainImg: '../img/product01.png',
    imgs: ['../img/product01.png','../img/product03.png','../img/product06.png','../img/product08.png'],
    price: 900,
    oldPrice: 990,
    shortDecription: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    description: 'orem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    details: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    sale: 30,
    rating: 4.2,
    reviews: [{name: 'asd',email:'sdsfdsf',text:'asdasd', rating: 4, date: 'asdas'},
              {name: 'asd',email:'sdsfdsf',text:'asdasd', rating: 3, date: 'asdas'},
              {name: 'asd',email:'sdsfdsf',text:'asdasd', rating: 3, date: 'asdas'},
              {name: 'asd',email:'sdsfdsf',text:'asdasd', rating: 3, date: 'asdas'}],
    isNew: true,
    isTopSelling: true
}


export const getAllProducts = () => {
    let productArray = [];
    for (let index = 0; index < 12; index++) {
        productArray.push(product);
    }
    return productArray;
}

export const getProduct = () => {
    return product;
}

