$(document).ready(function() {

    var data = localStorage.getItem("listOrder");
    data = JSON.parse(data);
    $(".header-cart").find(".quantity-value").text(data.length);
    var content = "";
    //var totalPrice = 0;
    for(i=0; i<data.length; i++) {
        // Thêm sản phẩm vào giao diện
        var item = `<div class="order-item">
            <div class="order-img"><img src="${data[i].image}" alt=""></div>
            <div class="order-info">
                <!-- Tên -->                    
                <div class="order-name">${data[i].name}</div>
                <!-- Giá -->
                <div class="order-price">
                    <span>Giá:</span>
                    <span class="price">${data[i].price}đ</span>
                </div>
                <!-- Số lượng -->
                <div class="order-quantity">
                    <form class="quantity" action="">
                        <input class="order-action decrease" type="button" value="-">
                        <input class="order-number" id="textbox" type="text" style="text-align: center;" value="${data[i].quantity}">
                        <input class="order-action inc" type="button" value="+">
                    </form>
                </div>
                <!-- Vận chuyển -->
                <div class="order-delevery">
                    <span class="delevery">Miễn phí vận chuyển 3km </span>
                </div>
                <div class="order-ssi">
                    <!-- Size -->
                    <div class="order-sizes order-control">
                        <svg width="24px" height="24px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                            <path fill="currentcolor" d="M32 0C23.1 0 14.6 3.7 8.6 10.2S-.6 25.4 .1 34.3L28.9 437.7c3 41.9 37.8 74.3 79.8 74.3H275.3c42 0 76.8-32.4 79.8-74.3L383.9 34.3c.6-8.9-2.4-17.6-8.5-24.1S360.9 0 352 0H32zM73 156.5L66.4 64H317.6L311 156.5l-24.2 12.1c-19.4 9.7-42.2 9.7-61.6 0c-20.9-10.4-45.5-10.4-66.4 0c-19.4 9.7-42.2 9.7-61.6 0L73 156.5z"/>
                        </svg>
                        <span class="size">${data[i].size}</span>
                    </div>
                    <!-- Đường -->
                    <div class="order-sugars order-control">
                        <svg width="24px" height="24px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                            <path fill="currentcolor" d="M192 64v64c0 17.7 14.3 32 32 32h64c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H224c-17.7 0-32 14.3-32 32zM82.7 207c-15.3 8.8-20.5 28.4-11.7 43.7l32 55.4c8.8 15.3 28.4 20.5 43.7 11.7l55.4-32c15.3-8.8 20.5-28.4 11.7-43.7l-32-55.4c-8.8-15.3-28.4-20.5-43.7-11.7L82.7 207zM288 192c-17.7 0-32 14.3-32 32v64c0 17.7 14.3 32 32 32h64c17.7 0 32-14.3 32-32V224c0-17.7-14.3-32-32-32H288zm64 160c-17.7 0-32 14.3-32 32v64c0 17.7 14.3 32 32 32h64c17.7 0 32-14.3 32-32V384c0-17.7-14.3-32-32-32H352zM160 384v64c0 17.7 14.3 32 32 32h64c17.7 0 32-14.3 32-32V384c0-17.7-14.3-32-32-32H192c-17.7 0-32 14.3-32 32zM32 352c-17.7 0-32 14.3-32 32v64c0 17.7 14.3 32 32 32H96c17.7 0 32-14.3 32-32V384c0-17.7-14.3-32-32-32H32z"/>
                        </svg>
                        <span class="sugar">${data[i].sugar}</span>
                    </div>
                    <!-- Đá -->
                    <div class="order-ices order-control">
                        <svg width="24px" height="24px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                            <path fill="currentcolor" d="M75.8 304.8L1 35.7c-.7-2.5-1-5-1-7.5C0 12.6 12.6 0 28.2 0H482.4C498.8 0 512 13.2 512 29.6c0 1.6-.1 3.3-.4 4.9L434.6 496.1c-1.5 9.2-9.5 15.9-18.8 15.9c-9.2 0-17.1-6.6-18.7-15.6L336 160 307.2 303.9c-1.9 9.3-10.1 16.1-19.6 16.1c-9.2 0-17.2-6.2-19.4-15.1L240 192 210.6 368.2c-1.5 9.1-9.4 15.8-18.6 15.8s-17.1-6.7-18.6-15.8L144 192 115.9 304.3c-2.3 9.2-10.6 15.7-20.1 15.7c-9.3 0-17.5-6.2-20-15.2z"/>
                        </svg>
                        <span class="ice">${data[i].ice}</span>
                    </div>
                </div>
                <!-- Ghi chú -->
                <div class="order-note order-control">
                    <textarea class="note" name="order-note" id="order-note" placeholder="Nhập ghi chú..."></textarea>
                </div>
            </div>

            <!-- Remove -->
            <div class="order-remove">
                <button class="remove-btn">Xóa</button>
            </div>
        </div>`;
        content += item

        // Tổng số sản phẩm
        var totalProduct = $("#total-product").text();
        var currentProduct = Number(totalProduct);
        var newTotalProduct = currentProduct + Number(data[i].quantity);
        $('#total-product').text(newTotalProduct);

        // Thay đổi thành tiền
        var totalPrice = $('#totalPrice').text();
        var currentPrice = Number(totalPrice);
        var newPrice = currentPrice + (Number(data[i].price) * Number(data[i].quantity));
        $('#totalPrice').text(newPrice);

        // Thành tiền
        var ship = $('#shipcost').text();
        var newFinalPrice = Number(newPrice) + Number(ship);;
        $('#final-Price').text(newFinalPrice);

    }
    $(".list-order").html(content);

    var sP =  $('#shipcost').text();
    var shipCost = Number(sP);
    // Tăng số lượng
    function increaseAmount(cls) {
        //var $input = $("." + cls);
        var a = cls.val();
        cls.val(Number(a) + 1);
    }

    // Giảm số lượng
    function decreaseAmount(cls) {
        //var $input = $("." + cls);
        var b = cls.val();
        if (Number(b) > 1) {
            cls.val(Number(b) - 1);
        }
    }

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

    //Sửa lại giá
    function updatePrice(id1, id2, quantity, price) {
        var tPrice = $(id1).text();
        var tP = Number(tPrice);
        var newPrice = tP + ((Number(quantity) - Number(quantity - 1)) * Number(price));
        var newFinalPrice = shipCost + Number(newPrice);

        $(id1).text(newPrice);
        $(id2).text(newFinalPrice);

        // console.log(shipCost);
    }

    function updatePrice2(id1, id2, quantity, price) {
        var tPrice = $(id1).text();
        var tP = Number(tPrice);
        if(Number(quantity) > 1) {
            var newPrice = tP - ((Number(quantity) - Number(quantity - 1)) * Number(price));
            var newFinalPrice = shipCost + Number(newPrice);

            $(id1).text(newPrice);
            $(id2).text(newFinalPrice);
        }
    }

    // Bắt sự kiện click cho nút tăng số lượng
    $('.inc').click(function() {
        var $input = $(this).siblings('.order-number');
        increaseAmount($input);
        increaseTotalproduct('total-product');

        var $product = $(this).closest('.order-info');
        var productPrice = $product.find('.price').text();
        var price = parseFloat(productPrice);
        var quantity = Number($input.val());

        updatePrice("#totalPrice", "#final-Price", quantity, price);
    });

    // Bắt sự kiện click cho nút giảm số lượng (Chưa thay đổi được giá khi giảm)
    $('.decrease').click(function() {
        var $input = $(this).siblings('.order-number');
        decreaseAmount($input);
        decreaseTotalproduct('total-product');

        // Lấy giá của sản phẩm đang được click
        var $product = $(this).closest('.order-info');
        var productPrice = $product.find('.price').text();
        var price = parseFloat(productPrice);
        
        var quantity = Number($input.val());
        updatePrice2("#totalPrice", "#final-Price", quantity, price);
    });
});
