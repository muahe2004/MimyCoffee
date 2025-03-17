const listImg = document.querySelector('.hero-list');
const imgs = document.getElementsByClassName('hero-slide');
const btnLeft = document.querySelector('.left');
const btnRight = document.querySelector('.right');

//console.log(imgs);

//Biến đếm ảnhh
let current = 0;

//Sự kiện chuyển slide sang...
const toRight = () => {
    if (current == imgs.length - 1){
        current = 0;

        //Lấy ra chiều rộng của ảnh
        let width = imgs[0].offsetWidth;

        listImg.style.transform = `translateX(${0}px)`
    
        document.querySelector('.active').classList.remove('active')
        document.querySelector('.index-item-'+ current).classList.add('active')
    }    
    else{
        current++;

        let width = imgs[0].offsetWidth;
    
        //Nhân với current thì mới có thể chuyển sang ảnh tiếp theo
        listImg.style.transform = `translateX(${width * -1 * current}px)`;

        document.querySelector('.active').classList.remove('active')
        document.querySelector('.index-item-'+ current).classList.add('active')
    }
}

//Gọi sự kiện tự chuyển
let changeSlide =  setInterval(toRight, 3500)

//Thêm sự kiện click
btnRight.addEventListener('click',  () => {
    //Loại bỏ việc tự chuyển slide
    clearInterval(changeSlide);
    toRight();
    //GỌi lại sk tự chuyển slide
    changeSlide = setInterval(toRight, 3500)
})

btnLeft.addEventListener('click', () => {
    clearInterval(changeSlide);
    changeSlide = setInterval(toRight, 3500)

    //Nếu ảnh đang ở đầu tiên
    if (current == 0){
        //THì nhảy sang cái cuối cùng
        current = imgs.length - 1;
        let width = imgs[0].offsetWidth;
        listImg.style.transform = `translateX(${width * -1 * current}px)`
        document.querySelector('.active').classList.remove('active')
        document.querySelector('.index-item-'+ current).classList.add('active')
    }    
    else{
        //CÒn không thì chuyển lùi lại
        current--;
        let width = imgs[0].offsetWidth;
    
        listImg.style.transform = `translateX(${width * -1 * current}px)`
        document.querySelector('.active').classList.remove('active')
        document.querySelector('.index-item-'+ current).classList.add('active')
    }
})



