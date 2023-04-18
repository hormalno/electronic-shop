import { collection, doc, setDoc } from "firebase/firestore"; 
import {db} from '../utils/firebase';
import { useState } from "react";

const categories = ["laptops","accessories","cameras","smartphones"];
const brandsLaptop = ["Asus","Acer","iMac","Lenovo"];
const brandsAccessories = ["JBL","Phillips","Sony","Lenovo"];
const brandsCameras = ["Canon", "Nikon", "Olympus","Fujifilm"];
const brandsSmartphones = ["Samsung","Huawei","Xiaomi","iPhone"];

const ProductService = () => {
    const [title, setTitle] = useState('');
  const onClickHandler = async () => {
    await createProducts();
    setTitle("Products created!")
  }

  return (
    <div className="container">
        <h3>{title}</h3>
        <button className="primary-btn" onClick={onClickHandler}>create products</button>
    </div>
  )
}
export const createProducts = () => {
    const getRndInteger = (min, max) => {return Math.floor(Math.random() * (max - min + 1) ) + min;};
    let products = [];
    categories.forEach((category)=> {
        for (let index = 1; index <= 15; index++) {
            let newProduct = {};
            newProduct.name = `Name ${index}`;
            newProduct.category = category;
            newProduct.price = getRndInteger(index*10,index*100);
            newProduct.oldPrice = getRndInteger(index*100,index*200);
            let mainImgRnd = getRndInteger(1,4);
            switch(true) {
                case category === "laptops":
                    newProduct.brand = brandsLaptop[getRndInteger(1,4)-1];                    
                    if (mainImgRnd === 1) {
                        newProduct.mainImg = '../img/product01.png';
                    } else if (mainImgRnd === 2) {
                        newProduct.mainImg = '../img/product02.png';
                    } else if (mainImgRnd === 3) {
                        newProduct.mainImg = '../img/product03.png';
                    } else {
                        newProduct.mainImg = '../img/product04.png';
                    }                    
                    newProduct.images = ['../img/product01.png','../img/product02.png','../img/product03.png','../img/product04.png'];
                    break;
                case category === "accessories":
                    newProduct.brand = brandsAccessories[getRndInteger(1,4)-1];
                    if (mainImgRnd === 1) {
                        newProduct.mainImg = '../img/product05.png';
                    } else if (mainImgRnd === 2) {
                        newProduct.mainImg = '../img/product06.png';
                    } else if (mainImgRnd === 3) {
                        newProduct.mainImg = '../img/product07.png';
                    } else {
                        newProduct.mainImg = '../img/product08.png';
                    }  
                    newProduct.images = ['../img/product05.png','../img/product06.png','../img/product07.png','../img/product08.png'];
                    break;
                case category === "cameras":
                    newProduct.brand = brandsCameras[getRndInteger(1,4)-1];  
                    if (mainImgRnd === 1) {
                        newProduct.mainImg = '../img/product09.png';
                    } else if (mainImgRnd === 2) {
                        newProduct.mainImg = '../img/product10.png';
                    } else if (mainImgRnd === 3) {
                        newProduct.mainImg = '../img/product11.png';
                    } else {
                        newProduct.mainImg = '../img/product12.png';
                    }  
                    newProduct.images = ['../img/product09.png','../img/product10.png','../img/product11.png','../img/product12.png'];
                    break;
                case category === "smartphones":
                    newProduct.brand = brandsSmartphones[getRndInteger(1,4)-1];
                    if (mainImgRnd === 1) {
                        newProduct.mainImg = '../img/product13.png';
                    } else if (mainImgRnd === 2) {
                        newProduct.mainImg = '../img/product14.png';
                    } else if (mainImgRnd === 3) {
                        newProduct.mainImg = '../img/product15.png';
                    } else {
                        newProduct.mainImg = '../img/product16.png';
                    }  
                    newProduct.images = ['../img/product14.png','../img/product13.png','../img/product15.png','../img/product16.png'];
                    break;
                default:
                    console.log("default")
            }
            newProduct.description =  'This is the full description. This is the full description. This is the full description. This is the full description. This is the full description.This is the full description.This is the full description.This is the full description.This is the full description.This is the full description.This is the full description.This is the full description.This is the full description.This is the full description.This is the full description.';
            newProduct.shortDescription = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.';
            newProduct.details = 'This is more details. This is more details.This is more details.This is more details.This is more details.This is more details.This is more details.This is more details.This is more details.This is more details.This is more details.This is more details.This is more details.This is more details.This is more details.This is more details.This is more details.This is more details.This is more details.This is more details.This is more details.';
            newProduct.rating = 0.00;
            newProduct.reviewsCount = 0;
            if (index === 2 || index === 8 || index === 14 || index === 17) {
                newProduct.sale = getRndInteger(10,75);
            } else {
                newProduct.sale = 0;
            }
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
    });

    products.forEach((product) => {
        const productRef = doc(collection(db, "products"))
        setDoc(productRef,{...product,id:productRef.id})
        .then(()=>console.log("Product created!"))
        .catch(e => console.log(e));
    });

};

export default ProductService;