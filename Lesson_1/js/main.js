const products = [{
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
        price: 4500
    },
];

const renderProduct = (title, price, img = 'https://dummyimage.com/350x150/00ffae.jpg&text=%D0%97%D0%B0%D0%B3%D0%BB%D1%83%D1%88%D0%BA%D0%B0') => {
    return `<div class="product-item">
                <h3>${title}</h3>
                <img src="${img}" alt="фото">
                <p>${price}</p>
                <button class="by-btn">Добавить в корзину</button>
              </div>`;
};

const renderProducts = list => {
    const productList = list.map(item => renderProduct(item.title, item.price, item.img)).join("");
    console.log(productList);
    document.querySelector('.products').innerHTML = productList;
};


renderProducts(products);
