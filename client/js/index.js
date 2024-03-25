const shopContent = document.getElementById("shopContent")
const cart = []

productos.forEach(product =>{
    const content = document.createElement("div");
    content.innerHTML = `
        <img src="${product.img}"
        <h3>${product.productName}</h3>
        <p>$ ${product.price}</p>
    `
    shopContent.append(content)

    const buyButton = document.createElement("button")
    buyButton.innerText = "buy"
    content.append(buyButton)

    buyButton.addEventListener("click",()=>{
        cart.push({
            id:product.id,
            productName: product.productName,
            price:product.price,
            quantity:product.quantity,
            img:product.img
        })

    })
})