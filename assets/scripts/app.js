const productList = {
     products : [
        {
          title: "A Pillow",
          imageUrl:
            "https://canada.fairmontstore.com/cdn/shop/products/Pillow_Feather_Shot_3.jpg?v=1665158422&width=1946",
          price: 19.99,
          description: "A soft pillow",
        },
        {
          title: "A Carpet",
          imageUrl:
            "https://m.media-amazon.com/images/I/916yp2kvMcL._AC_UF894,1000_QL80_.jpg",
          price: 89.99,
          description: "A carpet which might like - or not",
        },
      ],

      render(){
        const renderHook = document.getElementById('app');
        const prodList = document.createElement('ul');
        prodList.className = 'product-list';

        for(const prod of this.products){
            const prodEl = document.createElement('li');
            prodEl.className = 'product-item';
            prodEl.innerHTML = `
                <div>
                    <img src="${prod.imageUrl}" alt="${prod.title}"> 
                    <div class="product-item__content">
                        <h2>${prod.title}</h2>
                        <h3>${prod.price}</h3>
                        <p>${prod.description}</p>
                        <button> Add to Cart </button>
                    </div>
                </div>    
            
            `
            prodList.append(prodEl);
        }


        renderHook.append(prodList);
      }
      
}


productList.render();