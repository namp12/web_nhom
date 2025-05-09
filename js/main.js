window.addEventListener('scroll', function() {
    const logo = document.getElementById('logo');
    if (window.scrollY > 50) {
      logo.innerHTML = '<img src="./img-video/logo.png" alt="Logo">';
    } else {
      logo.innerHTML = '<h1 class="m-0" style="font-size: 28px;">A.Thw</h1>';
    }
  });

  $("#id_input").on("input", function () {
    let searchTerm = $(this).val().toLowerCase().trim();
    let $products = $(".product-item");

    // Kiểm tra nếu không có sản phẩm
    if ($products.length === 0) {
        $("#all-products").html('<p class="text-center text-muted">Không có sản phẩm để tìm kiếm.</p>');
        return;
    }

    let foundMatch = false;
    $products.each(function () {
        let productName = $(this).find(".card-title").text().toLowerCase();
        let productPrice = $(this).find(".price").text().toLowerCase();
        let categories = $(this).data("categories") || [];
        let categoryString = categories.join(",");

        // Kiểm tra khớp với tên, giá hoặc danh mục
        let isMatch = productName.includes(searchTerm) ||
                    productPrice.includes(searchTerm) ||
                    categoryString.includes(searchTerm);

        $(this).toggle(isMatch);
        if (isMatch) foundMatch = true;
    });

    // Hiển thị thông báo nếu không tìm thấy
    let $productSection = $("#all-products");
    $productSection.find(".no-results").remove();
    if (!foundMatch && searchTerm.length > 0) {
        $productSection.append('<p class="no-results text-center text-muted">Không tìm thấy sản phẩm nào.</p>');
    }
});

// chế độ dark mode
function toggleDarkMode() {
  document.body.classList.toggle('dark-mode');

  // Lưu trạng thái vào localStorage để ghi nhớ
  const isDark = document.body.classList.contains('dark-mode');
  localStorage.setItem('darkMode', isDark ? 'true' : 'false');
}

// Khi tải trang, kiểm tra localStorage
window.onload = function () {
  const savedMode = localStorage.getItem('darkMode');
  if (savedMode === 'true') {
    document.body.classList.add('dark-mode');
  }
};
