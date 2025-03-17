
$(document).ready(function() {
    var data = localStorage.getItem("click");
    data = JSON.parse(data);
    var product = data[data.length - 1];

    $('.detail-img').attr('src', product.image);
    $('.detail-name').text(product.name);
    $('.detail-price').text(product.price);

    //Tăng tổng số sản phẩm
    function increaseTotalproduct(id) {
        var totalProduct = $("#" + id);
        var c = totalProduct.text();
        totalProduct.text(Number(c) + 1)
    }

    //Giảm tổng số sản phẩm
    function decreaseTotalproduct(id) {
        var totalProduct = $("#" + id);
        var d = totalProduct.text();
        if (Number(d) > 1) {
            totalProduct.text(Number(d) - 1);
        }
    }

    // Tăng số lượng
    $('.inc').click(function() {
        var input = $(this).siblings('.detail-number');
        var c = input.val();
        input.val(Number(c) + 1);

        //console.log(c);
    });

    // Giảm số lượng
    $('.decrease').click(function() {
        var input = $(this).siblings('.detail-number');
        var c = input.val();
        if(Number(c) > 1) {
            input.val(Number(c) - 1);
        }
    });


    // Chọn size, đường, đá
    var size = "M"; 
    var sugar = "100%"; 
    var ice = "100%";
    function changeInfor(cls, btn, type) {
        $(cls).removeClass("checked");
        $(btn).addClass("checked");
    
        var value = $(btn).text();
        $(btn).closest('.control').find('.picked').text(value);
    
        if (type === "size") {
            size = value;
        } else if (type === "sugar") {
            sugar = value;
        } else if (type === "ice") {
            ice = value;
        }
    }
    
    $('.size').click(function() {
        changeInfor(".size", this, "size");
    });
    
    $('.sugar').click(function() {
        changeInfor(".sugar", this, "sugar");
    });
    
    $('.ice').click(function() {
        changeInfor(".ice", this, "ice");
    });
    
    // Thêm vào giỏ hàng
    $(".add-detail").click(function() {
        var detaiInfor = $(this).parent();
        var detailPicked = $(detaiInfor).parent(); 

        var detailName = $(detaiInfor).find(".detail-name").text();
        var detailImage = $(detailPicked).find(".detail-img").attr("src")
        var detailPrice = $(detaiInfor).find(".detail-price").text();
        var detailQuantity = $(detaiInfor).find(".detail-number").val();

        var order = {
            'name': detailName,
            'price': detailPrice,
            'image': detailImage,
            'quantity': Number(detailQuantity), 
            'size': size,
            'sugar': sugar,
            'ice': ice,
        };
    
        var listOrder = localStorage.getItem("listOrder");
        //var count = parseInt(localStorage.getItem("count")) || 0;
    
        if (!listOrder) {
            listOrder = [];
        } else {
            listOrder = JSON.parse(listOrder);
        }
    
        var found = false;
        for (var i = 0; i < listOrder.length; i++) {
            if (listOrder[i].name === detailName) {
                listOrder[i].quantity += 1;
                found = true;
                break;
            }
        }
    
        if (!found) {
            listOrder.push(order);
        }
        localStorage.setItem("listOrder", JSON.stringify(listOrder));
        // console.log(size);
        // console.log(sugar);
        console.log(detailQuantity);
    });
});