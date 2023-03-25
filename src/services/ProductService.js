const product = {
    name: 'Some Name here',
    category: 'laptop',
    brand: 'Asus',
    mainImg: '../img/product01.png',
    images: ['../img/product01.png','../img/product03.png','../img/product06.png','../img/product08.png'],
    price: 800,
    oldPrice: 1000,
    shortDescription: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    description: 'This is the full description. This is the full description. This is the full description. This is the full description. This is the full description.This is the full description.This is the full description.This is the full description.This is the full description.This is the full description.This is the full description.This is the full description.This is the full description.This is the full description.This is the full description.',
    details: 'This is more details. This is more details.This is more details.This is more details.This is more details.This is more details.This is more details.This is more details.This is more details.This is more details.This is more details.This is more details.This is more details.This is more details.This is more details.This is more details.This is more details.This is more details.This is more details.This is more details.This is more details.',
    sale: 24,   
    reviews: [{name: 'asd1',email:'sdsfdsf',text:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua', rating: 5, date: '27 DEC 2018, 8:0 PM'},
              {name: 'asd2',email:'sdsfdsf',text:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua', rating: 3, date: '27 DEC 2018, 8:0 PM'},
              {name: 'asd3',email:'sdsfdsf',text:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua', rating: 3, date: '27 DEC 2018, 8:0 PM'},
              {name: 'asd4',email:'sdsfdsf',text:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua', rating: 3, date: '27 DEC 2018, 8:0 PM'},
              {name: 'asd5',email:'sdsfdsf',text:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua', rating: 4, date: '27 DEC 2018, 8:0 PM'},
              {name: 'asd6',email:'sdsfdsf',text:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua', rating: 3, date: '27 DEC 2018, 8:0 PM'},
              {name: 'asd7',email:'sdsfdsf',text:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua', rating: 2, date: '27 DEC 2018, 8:0 PM'},
              {name: 'asd8',email:'sdsfdsf',text:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua', rating: 1, date: '27 DEC 2018, 8:0 PM'},
              {name: 'asd9',email:'sdsfdsf',text:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua', rating: 4, date: '27 DEC 2018, 8:0 PM'},
              {name: 'asd10',email:'sdsfdsf',text:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua', rating: 3, date: '27 DEC 2018, 8:0 PM'},
              {name: 'asd11',email:'sdsfdsf',text:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua', rating: 2, date: '27 DEC 2018, 8:0 PM'},
              {name: 'asd12',email:'sdsfdsf',text:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua', rating: 1, date: '27 DEC 2018, 8:0 PM'},
              {name: 'asd1',email:'sdsfdsf',text:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua', rating: 5, date: '27 DEC 2018, 8:0 PM'},
              {name: 'asd2',email:'sdsfdsf',text:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua', rating: 3, date: '27 DEC 2018, 8:0 PM'},
              {name: 'asd3',email:'sdsfdsf',text:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua', rating: 3, date: '27 DEC 2018, 8:0 PM'},
              {name: 'asd4',email:'sdsfdsf',text:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua', rating: 3, date: '27 DEC 2018, 8:0 PM'},
              {name: 'asd5',email:'sdsfdsf',text:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua', rating: 4, date: '27 DEC 2018, 8:0 PM'},
              {name: 'asd6',email:'sdsfdsf',text:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua', rating: 3, date: '27 DEC 2018, 8:0 PM'},
              {name: 'asd7',email:'sdsfdsf',text:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua', rating: 2, date: '27 DEC 2018, 8:0 PM'},
              {name: 'asd8',email:'sdsfdsf',text:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua', rating: 1, date: '27 DEC 2018, 8:0 PM'},
              {name: 'asd9',email:'sdsfdsf',text:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua', rating: 4, date: '27 DEC 2018, 8:0 PM'},
              {name: 'asd10',email:'sdsfdsf',text:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua', rating: 3, date: '27 DEC 2018, 8:0 PM'},
              {name: 'asd11',email:'sdsfdsf',text:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua', rating: 2, date: '27 DEC 2018, 8:0 PM'},
              {name: 'asd12',email:'sdsfdsf',text:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua', rating: 1, date: '27 DEC 2018, 8:0 PM'}],
    rating: 3.2,
    isNew: true,
    isTopSelling: true,
    inStock: true
}


export const getAllProducts = () => {
    let productArray = [];
    for (let index = 0; index < 35; index++) {
        product.id = index;
        productArray.push(product);
    }
    return productArray;
}

export const getAllProductsByCategory = (category) => {
    let productArray = [];
    for (let index = 0; index < 35; index++) {
        product.id = index;
        productArray.push(product);
    }
    return productArray;
}

export const getProduct = () => {
    return product;
}

