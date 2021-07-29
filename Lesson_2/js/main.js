class ProductsList {
    constructor(container = '.products'){
        this.container = container;
        this.goods = [];
        this.allProducts = [];
        this._fetchProducts();
    }
    
    _fetchProducts() {
        this.goods = [{
        id: 1,
        title: 'Notebook',
        img: 'img/notebook.jpg',
        price: 20000
    },
    {
        id: 2,
        title: 'Mouse',
        img: 'img/Mouse.jpg',
        price: 1500
    },
    {
        id: 3,
        title: 'Keyboard',
        img: 'img/keyboard.jpg',
        price: 5000
    },
    {
        id: 4,
        title: 'Gamepad',
        img: 'https://dummyimage.com/350x150/00ffae.jpg&text=%D0%97%D0%B0%D0%B3%D0%BB%D1%83%D1%88%D0%BA%D0%B0',
        price: 4500
    },
];
    }
    render() {
        const block = document.querySelector(this.container);
        for(let product of this.goods){
            const productObj = new ProductItem(product);
            this.allProducts.push(productObj);
            block.insertAdjacentHTML('beforeend',productObj.render())
        }
    }
    getSum() {
    let sum = 0;
       for(let product of this.goods){
            sum += product.price;
       }

    }    
};

class ProductItem {
	constructor(product, img = 'https://dummyimage.com/350x150/00ffae.jpg&text=%D0%97%D0%B0%D0%B3%D0%BB%D1%83%D1%88%D0%BA%D0%B0'){
		this.title = product.title;
		this.price = product.price;
		this.id = product.id;
		this.img = product.img;
		
	}
	
	render() {
		 return `<div class="product-item" data-id="${this.id}">
                <img src="${this.img}" alt="Some img">
                <h3>${this.title}</h3>
                <p>${this.price} рублей</p>
                <button class="by-btn">Купить</button>
            </div>`
	}
}

let list = new ProductsList();
list.render();
list.getSum();

class Basket {
    addGoods() {

    }
    removeGoods() {

    }
    changeGoods() {

    }
    
    render(){
        
    }
}

class ElemBasket {
    render(){}

}