class Product {
  title = "DEFAULT";
  imageUrl;
  description;
  price;

  constructor(title, image, desc, price) {
    this.title = title;
    this.imageUrl = image;
    this.description = desc;
    this.price = price;
  }
}

class ProductItem {
  constructor(product) {
    this.product = product;
  }

  render() {
    const prodEl = document.createElement("li");
    prodEl.className = "product-item";
    prodEl.innerHTML = `
                <div>
                    <img src="${this.product.imageUrl}" alt="${this.product.title}"> 
                    <div class="product-item__content">
                        <h2>${this.product.title}</h2>
                        <h3>${this.product.price}</h3>
                        <p>${this.product.description}</p>
                        <button> Add to Cart </button>
                    </div>
                </div>    
            
            `;

            return prodEl
  }
}

class ProductList {
  products = [
    new Product(
      "A Pillow",

      "https://canada.fairmontstore.com/cdn/shop/products/Pillow_Feather_Shot_3.jpg?v=1665158422&width=1946",
      19.99,
      "A soft pillow"
    ),
    new Product(
      "A Carpet",

      "https://m.media-amazon.com/images/I/916yp2kvMcL._AC_UF894,1000_QL80_.jpg",
      89.99,
      "A carpet which might like - or not"
    ),
  ];

  constructor() {}

  render() {
    const renderHook = document.getElementById("app");
    const prodList = document.createElement("ul");
    prodList.className = "product-list";

    for (const prod of this.products) {
      const productItem = new ProductItem(prod);
      const prodEl = productItem.render();
      prodList.append(prodEl);
    }

    renderHook.append(prodList);
  }
}

const productList = new ProductList();
productList.render();
