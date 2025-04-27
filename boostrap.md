# Bootstrap 5 Cheat Sheet + Class hay dùng thực tế (cho website/blog)

---

# 🔹 Layout & Grid
| Class | Công dụng |
|:---|:---|
| `.container`, `.container-fluid` | Tạo khung layout |
| `.row` | Dòng grid |
| `.col`, `.col-6`, `.col-md-4` | Cột chia layout |
| `.g-3`, `.gx-2`, `.gy-4` | Khoảng cách giữa cột |

---

# 🔹 Flexbox & Position
| Class | Công dụng |
|:---|:---|
| `.d-flex`, `.flex-row`, `.flex-column` | Flex layout |
| `.justify-content-center`, `.align-items-center` | Căn giữa |
| `.position-relative`, `.position-absolute` | Vị trí phần tử |

---

# 🔹 Spacing (Margin/Padding)
| Class | Công dụng |
|:---|:---|
| `.m-3`, `.mt-2`, `.mb-4` | Margin ngoài |
| `.p-2`, `.pt-4`, `.px-1` | Padding trong |
| `.mx-auto` | Căn giữa ngang |

---

# 🔹 Text & Typography
| Class | Công dụng |
|:---|:---|
| `.text-center`, `.text-start`, `.text-end` | Căn chữ |
| `.fw-bold`, `.fst-italic`, `.text-uppercase` | Style chữ |
| `.text-primary`, `.text-danger` | Màu chữ |

---

# 🔹 Background & Borders
| Class | Công dụng |
|:---|:---|
| `.bg-primary`, `.bg-light`, `.bg-dark` | Màu nền |
| `.rounded`, `.rounded-circle`, `.border` | Bo góc, border |
| `.shadow`, `.shadow-lg` | Bóng đổ |

---

# 🔹 Components hay dùng
| Component | Class |
|:---|:---|
| **Button** | `.btn`, `.btn-primary`, `.btn-outline-success` |
| **Navbar** | `.navbar`, `.navbar-expand-lg`, `.navbar-light` |
| **Card** | `.card`, `.card-body`, `.card-title` |
| **Modal** | `.modal`, `.modal-dialog` |
| **Alert** | `.alert`, `.alert-success` |
| **Badge** | `.badge`, `.bg-info` |
| **Progress Bar** | `.progress`, `.progress-bar` |

---

# 🔹 Class "hay dùng thực tế" cho website/blog

- **Căn giữa nội dung**:
  ```html
  <div class="container d-flex justify-content-center align-items-center" style="min-height:100vh">
    Nội dung ở giữa màn hình
  </div>
  ```

- **Tạo nút đẹp**:
  ```html
  <button class="btn btn-primary btn-lg">Đăng ký ngay</button>
  ```

- **Form input đẹp**:
  ```html
  <input type="text" class="form-control" placeholder="Nhập tên của bạn">
  ```

- **Tạo Blog Card**:
  ```html
  <div class="card shadow rounded">
    <img src="image.jpg" class="card-img-top">
    <div class="card-body">
      <h5 class="card-title">Tiêu đề bài viết</h5>
      <p class="card-text">Mô tả ngắn...</p>
      <a href="#" class="btn btn-outline-primary">Đọc tiếp</a>
    </div>
  </div>
  ```

- **Navbar responsive**:
  ```html
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container">
      <a class="navbar-brand" href="#">MyBlog</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item"><a class="nav-link" href="#">Trang chủ</a></li>
          <li class="nav-item"><a class="nav-link" href="#">Bài viết</a></li>
          <li class="nav-item"><a class="nav-link" href="#">Liên hệ</a></li>
        </ul>
      </div>
    </div>
  </nav>
  ```

- **Footer đơn giản**:
  ```html
  <footer class="bg-dark text-light text-center p-3">
    © 2025 MyBlog. All rights reserved.
  </footer>
  ```

---

# ✨ Mẹo:
- Luôn dùng **`.container`** để nội dung căn lề chuẩn.
- Kết hợp **spacing class** (`p-`, `m-`) để căn chỉnh layout nhanh gọn.
- Thêm **`shadow`, `rounded`** cho các block nhìn hiện đại hơn.

---

# ⚡ Hot tip: Dùng thêm thư viện **Bootstrap Icons** cho icon miễn phí!
```html
<i class="bi bi-house"></i>
<i class="bi bi-facebook"></i>
```
> (Nhớ tải thư viện icons từ [https://icons.getbootstrap.com/](https://icons.getbootstrap.com/))

---

# Done! 🚀
> (File này phù hợp in ra hoặc dán cạnh màn hình để "chém" Bootstrap nhanh hơn!)
