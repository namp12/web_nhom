document.addEventListener('DOMContentLoaded', function() {
    // Xử lý hiển thị/ẩn mật khẩu
    const togglePasswordButtons = document.querySelectorAll('.btn-outline-secondary');
    togglePasswordButtons.forEach(button => {
        button.addEventListener('click', function() {
            const input = this.previousElementSibling;
            const icon = this.querySelector('i');
            
            if (input.type === 'password') {
                input.type = 'text';
                icon.classList.remove('fa-eye');
                icon.classList.add('fa-eye-slash');
            } else {
                input.type = 'password';
                icon.classList.remove('fa-eye-slash');
                icon.classList.add('fa-eye');
            }
        });
    });

    // Xử lý submit form đăng nhập
    const loginForm = document.getElementById('login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = document.getElementById('login-email').value;
            const password = document.getElementById('login-password').value;
            const rememberMe = document.getElementById('remember-me').checked;

            // Thêm loading state cho nút submit
            const submitBtn = this.querySelector('button[type="submit"]');
            const originalText = submitBtn.innerHTML;
            submitBtn.innerHTML = '<span class="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>Đang đăng nhập...';
            submitBtn.disabled = true;

            // Giả lập API call
            setTimeout(() => {
                console.log('Login attempt:', { email, password, rememberMe });
                alert('Đăng nhập thành công!');
                
                // Khôi phục nút submit
                submitBtn.innerHTML = originalText;
                submitBtn.disabled = false;
                
                // Chuyển hướng (trong thực tế)
                // window.location.href = '../index.html';
            }, 1500);
        });
    }

    // Xử lý submit form đăng ký
    const registerForm = document.getElementById('register-form');
    if (registerForm) {
        registerForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const fullname = document.getElementById('register-fullname').value;
            const email = document.getElementById('register-email').value;
            const password = document.getElementById('register-password').value;
            const confirmPassword = document.getElementById('register-confirm-password').value;
            const agreeTerms = document.getElementById('agree-terms').checked;

            if (password !== confirmPassword) {
                alert('Mật khẩu xác nhận không khớp!');
                return;
            }

            if (!agreeTerms) {
                alert('Vui lòng đồng ý với điều khoản dịch vụ!');
                return;
            }

            // Thêm loading state cho nút submit
            const submitBtn = this.querySelector('button[type="submit"]');
            const originalText = submitBtn.innerHTML;
            submitBtn.innerHTML = '<span class="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>Đang đăng ký...';
            submitBtn.disabled = true;

            // Giả lập API call
            setTimeout(() => {
                console.log('Register attempt:', { fullname, email, password });
                alert('Đăng ký thành công!');
                
                // Khôi phục nút submit
                submitBtn.innerHTML = originalText;
                submitBtn.disabled = false;
                
                // Chuyển sang tab đăng nhập
                const loginTab = document.getElementById('login-tab');
                if (loginTab) {
                    const tab = new bootstrap.Tab(loginTab);
                    tab.show();
                }
            }, 1500);
        });
    }
});