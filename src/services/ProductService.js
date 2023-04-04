import { addDoc, collection, doc, setDoc, getDocs, serverTimestamp } from "firebase/firestore"; 
import {db, firestore} from '../utils/firebase';

const categories = ["laptop","accessory","camera","smartphone"];
const brandsLaptop = ["Asus","Acer","iMac","Lenovo"];
const brandsAccessories = ["JBL","Phillips","Sony","Lenovo"];
const brandsCameras = ["Canon", "Nikon", "Olympus","Fujifilm"];
const brandsSmartphones = ["Samsung","Huawei","Xiaomi","iPhone"];

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  };

export const createProducts = () => {
    let products = [];
    categories.forEach((category)=> {
        for (let index = 1; index <= 15; index++) {
            let newProduct = {};
            newProduct.name = `Some name here ${index}`;
            newProduct.category = category;
            newProduct.price = getRndInteger(index*10,index*100);
            newProduct.oldPrice = getRndInteger(index*100,index*250);
            switch(true) {
                case category === "laptop":
                newProduct.brand = brandsLaptop[getRndInteger(1,4)-1];
                break;
                case category === "accessory":
                newProduct.brand = brandsAccessories[getRndInteger(1,4)-1];
                break;
                case category === "camera":
                newProduct.brand = brandsCameras[getRndInteger(1,4)-1];  
                break;
                case category === "smartphone":
                newProduct.brand = brandsSmartphones[getRndInteger(1,4)-1];
                break;
                default:
                    console.log("default")
            }
            newProduct.mainImg = '../img/product01.png';
            newProduct.images = ['../img/product01.png','../img/product03.png','../img/product06.png','../img/product08.png'];
            newProduct.description =  'This is the full description. This is the full description. This is the full description. This is the full description. This is the full description.This is the full description.This is the full description.This is the full description.This is the full description.This is the full description.This is the full description.This is the full description.This is the full description.This is the full description.This is the full description.';
            newProduct.shortDescription = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.';
            newProduct.details = 'This is more details. This is more details.This is more details.This is more details.This is more details.This is more details.This is more details.This is more details.This is more details.This is more details.This is more details.This is more details.This is more details.This is more details.This is more details.This is more details.This is more details.This is more details.This is more details.This is more details.This is more details.';
            newProduct.sale = getRndInteger(10,75);
            newProduct.rating = parseFloat(getRndInteger(0,4) + "." + getRndInteger(10,75));
            if (index === 3 || index === 7 || index === 11 || index === 12 || index === 14) {
                newProduct.isNew = true;
            } else {
                newProduct.isNew = false;
            };
            if (index === 4 || index === 12) {
                newProduct.isTopSelling = true;
            } else {
                newProduct.isTopSelling = false;
            };             
            if (index === 5 || index === 10) {
                newProduct.inStock = false;
            } else {
                newProduct.inStock = true;
            };
            
            products.push(newProduct);
        }
    })
    // products.forEach((product) => {
    //     const productRef = doc(collection(db, "products"))
    //     setDoc(productRef,{...product,id:productRef.id})
    //     .then((createdProduct)=>console.log(createdProduct))
    //     .catch(e => console.log(e));
    // });

    // getDocs(collection(db, "products"))
    // .then((querySnapshot) => {
    //     querySnapshot.forEach((productRef) => {
    //         const reviewRef = doc(collection(db, "products", productRef.id, "reviews"))
    //         setDoc(reviewRef, {
    //             id: reviewRef.id,
    //             email: "asdf@asdf.com",
    //             name: "Yasen",
    //             rating: getRndInteger(1,5),
    //             text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    //             createdAt: serverTimestamp()
    //         })            
    //     })
    // }).catch(e => console.log(e));
};

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
    rating: 3.2,
    isNew: true,
    isTopSelling: true,
    inStock: true
};

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