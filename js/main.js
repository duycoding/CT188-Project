$(document).ready(function() {
    // Biểu thức chính quy để ràng buộc cho chuỗi nhập vào
    var regexName = /^(?=.{1,30}$)[a-zA-Z\sáàảãạăắằẳẵặâấầẩẫậđéèẻẽẹêếềểễệíìỉĩịóòỏõọôốồổỗộơớờởỡợúùủũụưứừửữựýỳỷỹỵ]+\b$/; // Tên từ 2-30 ký tự bao gồm chữ cái và khoảng trắng
    var regexEmail = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/; // Email đúng định dạng
    var regexPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/; // Mật khẩu từ 8 ký tự trở lên, gồm chữ thường, chữ hoa và số
  
    // Lắng nghe sự kiện submit form
    $('.form-account').submit(function(event) {
        // Ngăn chặn việc submit mặc định của form
        event.preventDefault();

        // Lấy giá trị từ các trường input
        var name = $('#hoten').val();
        var email = $('#email').val();
        var email1 = $('#email1').val();
        var password = $('#password').val();
        var confirmPassword = $('#confirm_password').val();

        // Kiểm tra giá trị từng trường input
        if (!regexName.test(name)) {
        alert('Tên không hợp lệ! Vui lòng nhập lại tên.');
        return false;
        }
        if (!regexEmail.test(email)) {
        alert('Email không hợp lệ! Vui lòng nhập lại email.');
        return false;
        }
        if (!regexPassword.test(password)) {
        alert('Mật khẩu không hợp lệ! Vui lòng nhập lại mật khẩu.');
        return false;
        }
        if (password !== confirmPassword) {
        alert('Mật khẩu nhập lại không khớp! Vui lòng nhập lại mật khẩu.');
        return false;
        }

        // Nếu tất cả các trường input đều hợp lệ, submit form
        alert('Đăng ký thành công!');
        this.submit();

        // Lấy email và mật khẩu lưu trên Local Strogae
        var email = $('#email').val();
        var password = $('#password').val();
        var user = {
            email: email,
            password: password
        }
        localStorage.setItem('user', JSON.stringify(user));
        // Chuyển đến trang Login.html
        window.location.href = 'Login.html'
    });
});

$(document).ready(function() {
    // Lắng nghe sự kiện submit form
    $('.form-login').submit(function(event) {
      // Ngăn chặn việc submit mặc định của form
      event.preventDefault();
  
      // Lấy giá trị từ các trường input
      var email = $('#email1').val();
      var password = $('#password1').val();
  
      // Lấy đối tượng user từ localStorage
      var user = JSON.parse(localStorage.getItem('user'));
  
      // Kiểm tra xem email và password nhập vào có khớp với thông tin user trong localStorage hay không
      if (user && user.email === email && user.password === password) {
        alert('Đăng nhập thành công!');
        window.location.href = 'index.html';
      } else {
        alert('Email hoặc mật khẩu không đúng! Vui lòng nhập lại.');
      }
    });
  });
  



