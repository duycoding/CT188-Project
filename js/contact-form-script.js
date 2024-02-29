$("#contactForm").validator().on("submit", function (event) {
    if (event.isDefaultPrevented()) {
        formError();
        submitMSG(false, "Bạn chưa điền đầy đủ thông tin!");
    } else {
        event.preventDefault();
        submitForm();
    }
});

// script đoạn about us
function submitForm(){
    var name = $("#name").val();
    var email = $("#email").val();
    var msg_subject = $("#msg_subject").val();
    var message = $("#message").val();
}

function formSuccess(){
    $("#contactForm")[0].reset();
    submitMSG(true, "Message Submitted!")
}

function formError(){
    $("#contactForm").removeClass().addClass('shake animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
        $(this).removeClass();
    });
}

function submitMSG(valid, msg){
    if(valid){
        var msgClasses = "h3 text-center tada animated text-success";
    } else {
        var msgClasses = "h3 text-center text-danger";
    }
    $("#msgSubmit").removeClass().addClass(msgClasses).text(msg);
}

// Lấy form theo id
const form = document.getElementById("contactForm");

// Thêm sự kiện "submit" cho form
form.addEventListener("submit", function(event) {
  event.preventDefault(); // Ngăn chặn form submit

  // Lấy giá trị từ các trường nhập liệu
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const subject = document.getElementById("subject").value;
  const message = document.getElementById("message").value;

  // Tạo biểu thức chính quy để kiểm tra tên
  const nameRegex = /^(?=.{1,30}$)[a-zA-Z\sáàảãạăắằẳẵặâấầẩẫậđéèẻẽẹêếềểễệíìỉĩịóòỏõọôốồổỗộơớờởỡợúùủũụưứừửữựýỳỷỹỵ]+\b$/;

  // Tạo biểu thức chính quy để kiểm tra email
  const emailRegex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/; 

  // Kiểm tra tên và hiển thị thông báo nếu có lỗi
  if (!nameRegex.test(name)) {
    alert("Tên không hợp lệ. Tên phải ít hơn 30 ký tự và chỉ chấp nhận ký tự hoa và ký tự thường.");
    return;
  }

  // Kiểm tra email và hiển thị thông báo nếu có lỗi
  if (!emailRegex.test(email)) {
    alert("Email không hợp lệ.");
    return;
  }

  // Kiểm tra chủ đề và hiển thị thông báo nếu có lỗi
  if (subject.includes("\\") || subject.includes("/") || subject.includes(":") || subject.includes("*") || subject.includes("?") || subject.includes("\"") || subject.includes("<") || subject.includes(">") || subject.includes("|")) {
    alert("Chủ đề không được chứa ký tự đặc biệt.");
    return;
  }

  // Kiểm tra message không rỗng và hiển thị thông báo nếu có lỗi
  if (message.trim() === "") {
    alert("Tin nhắn không được để trống.");
    return;
  }

  // Nếu dữ liệu nhập vào hợp lệ, hiển thị tin nhắn gửi thành công
  alert("Tin nhắn đã được gửi thành công!");
});
