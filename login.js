

$(document).ready(function() {
    function validation(input) {
        var inputVal = $(input).val();
        if (inputVal.length < 6) {
            $(input).siblings('.form-error').css('color', 'red');
        } else {
            $(input).siblings('.form-error').css('color', '#fff');
        }
        console.log(inputVal);
    }

    
    
    $('#taikhoan').blur(function() {
        validation(this);
    });

    $('#matkhau').blur(function() {
        validation(this);
    });

    // Check mật khẩu
    function checkPass(input1, input2) {
        var ip1Val = $(input1).val();
        var ip2Val = $(input2).val();

        if (ip1Val !== ip2Val) {
            $(input2).siblings('.form-error').css('color', 'red');
        } else {
            $(input2).siblings('.form-error').css('color', '#fff');
        }
        console.log(ip2Val);
    }

    $('#nhaplaimatkhau').blur(function() {
        
        checkPass("#matkhau", "#nhaplaimatkhau");
        //console.log(mk);
    });
});