$(document).ready(function() {
    // Thêm vào giỏ hàng
    $(".product .add").click(function() {
        var product = $(this).closest('.product');
        var productName = product.find(".product-name").text();
        var productPrice = product.find(".product-price").text();
        var productImage = product.find(".product-img").attr("src");
    
        var order = {
            'name': productName,
            'price': productPrice,
            'image': productImage,
            'quantity': 1, 
            'size': "L",
            'sugar': 50,
            'ice': 100,
        };
    
        var listOrder = localStorage.getItem("listOrder");
        var count = parseInt(localStorage.getItem("count")) || 0;
    
        if (!listOrder) {
            listOrder = [];
        } else {
            listOrder = JSON.parse(listOrder);
        }
    
        var found = false;
        for (var i = 0; i < listOrder.length; i++) {
            if (listOrder[i].name === productName) {
                listOrder[i].quantity += 1;
                found = true;
                break;
            }
        }
    
        if (!found) {
            listOrder.push(order);
        }
        localStorage.setItem("listOrder", JSON.stringify(listOrder));
        count += 1;
        localStorage.setItem("count", count);
        $(".header-cart .quantity-value").text(count);
    });
    


    //Click vào 1 sản phẩm, hiện ra trang chi tiết của sản phẩm đó
    $(".product-link").click(function() {
        var productImage = $(this).find(".product-img").attr("src");
        var product = $(this).parent();
        var productInfor = product.find(".product-infor");
        var productName = productInfor.find(".product-name").text();
        var productPrice = productInfor.find(".product-price").text();

        var productClick = {
            "name": productName,
            "price": productPrice,
            "image": productImage,
        };
        var clickData = localStorage.getItem("click");
        var clickArray = clickData ? JSON.parse(clickData) : [];
        clickArray.push(productClick);
        localStorage.setItem("click", JSON.stringify(clickArray));

        //console.log(productPrice);
    });
});