# Sample Repository Input Pack

Tài liệu này cung cấp bộ dữ liệu đầu vào mẫu cụ thể cho sample repository E-commerce Backend API. Học viên có thể copy nguyên khối hoặc chọn từng phần để dùng làm context cho AI.

## 1. Thông tin tổng quan
- **Repository name:** Sample E-commerce Backend API
- **Domain:** E-commerce backend
- **Purpose:** Xử lý product, user, order, notification, payment
- **Style:** Backend API theo module rõ ràng
- **Primary language:** JavaScript
- **Runtime:** Node.js
- **Framework / stack:** Express, PostgreSQL, Prisma

## 2. Cấu trúc thư mục mẫu
```text
src/
├── index.js
├── controllers/
│   ├── orderController.js
│   ├── productController.js
│   └── userController.js
├── middleware/
│   ├── admin.js
│   ├── auth.js
│   └── errorHandler.js
├── routes/
│   ├── notificationRoutes.js
│   ├── orderRoutes.js
│   ├── paymentRoutes.js
│   ├── productRoutes.js
│   └── userRoutes.js
└── utils/
    ├── logger.js
    └── validation.js

prisma/
└── schema.prisma

tests/
├── product.test.js
└── user.test.js
```

## 3. Entity và business concepts mẫu
### Core entities
- **User:** tài khoản người dùng, có thể là customer hoặc admin
- **Product:** sản phẩm trong catalog
- **Order:** đơn hàng do người dùng tạo
- **Payment:** trạng thái thanh toán
- **Notification:** thông báo hệ thống
- **Review:** đánh giá sản phẩm nếu có mở rộng

### Business rules mẫu
- Người dùng phải đăng ký hoặc đăng nhập trước khi tạo order.
- Product cần có thông tin hợp lệ trước khi lưu.
- Order chỉ được tạo khi dữ liệu đầu vào hợp lệ.
- Auth middleware bảo vệ endpoint nhạy cảm.
- Admin middleware giới hạn quyền cho một số thao tác.
- Validation phải chặn input sai định dạng.

## 4. Luồng nghiệp vụ mẫu
### Flow 1: User registration
1. Client gửi request đăng ký.
2. Validation kiểm tra email, password và các trường bắt buộc.
3. Controller xử lý business logic.
4. System trả response thành công hoặc lỗi rõ ràng.

### Flow 2: Order creation
1. User gửi request tạo order.
2. Auth middleware xác thực người dùng.
3. Validation kiểm tra payload.
4. Order controller tạo đơn hàng.
5. System ghi nhận và trả response.

### Flow 3: Product management
1. Admin đăng nhập.
2. Admin middleware kiểm tra quyền.
3. Product controller xử lý create/update/delete.
4. Validation đảm bảo dữ liệu sản phẩm hợp lệ.

## 5. File context mẫu để đưa vào AI
### A. User registration context
```text
Files:
- src/controllers/userController.js
- src/routes/userRoutes.js
- src/utils/validation.js
- tests/user.test.js

Mục tiêu:
- Hiểu luồng đăng ký
- Thêm validation cho email
- Kiểm chứng bằng test
```

### B. Order creation context
```text
Files:
- src/controllers/orderController.js
- src/routes/orderRoutes.js
- src/middleware/auth.js
- src/utils/validation.js
- tests/order.test.js

Mục tiêu:
- Phân tích luồng tạo đơn hàng
- Xác định điểm cần auth và validation
- Sinh test cases và fix bug
```

### C. Product management context
```text
Files:
- src/controllers/productController.js
- src/routes/productRoutes.js
- src/middleware/admin.js
- src/utils/validation.js
- tests/product.test.js

Mục tiêu:
- Review quyền admin
- Kiểm tra input validation
- Tạo test cho CRUD
```

## 6. Dữ liệu đầu vào mẫu cho prompt
### Requirement mẫu 1: đăng ký người dùng
```text
Cho phép user đăng ký bằng email hợp lệ.
Nếu email đã tồn tại hoặc sai định dạng thì trả về lỗi rõ ràng.

Acceptance criteria:
- Email phải đúng định dạng.
- Email không được trùng.
- Error message phải dễ hiểu.
```

### Requirement mẫu 2: tạo đơn hàng
```text
User đã đăng nhập có thể tạo order từ danh sách product hợp lệ.

Acceptance criteria:
- Request phải có auth token.
- Dữ liệu order phải hợp lệ.
- Order tạo thành công phải trả về order id.
```

### Requirement mẫu 3: quản lý product
```text
Admin có thể tạo product mới với tên, giá và mô tả hợp lệ.

Acceptance criteria:
- Chỉ admin được phép.
- Trường bắt buộc phải đầy đủ.
- Giá phải là số hợp lệ.
```

## 7. Bug report mẫu
```text
Title: Order creation trả lỗi 500

Steps to reproduce:
1. Đăng nhập user.
2. Gửi request tạo order với payload hợp lệ.
3. Server trả lỗi 500.

Expected:
- Order được tạo thành công.

Observed:
- API trả 500 Internal Server Error.

Logs:
[Paste stack trace]

Suspected area:
- orderController.js
- validation.js
- auth middleware
```

## 8. PR diff summary mẫu
```text
Title: Add email validation to user registration

Files changed:
- src/controllers/userController.js
- src/utils/validation.js
- src/routes/userRoutes.js
- tests/user.test.js

Summary:
- Thêm validation cho email format.
- Chặn email trùng.
- Cập nhật error message.
- Thêm test cho happy path và invalid cases.
```

## 9. Test request mẫu
```text
Hãy tạo test cases cho luồng đăng ký user.

Yêu cầu:
1. Happy path.
2. Invalid email.
3. Duplicate email.
4. Missing required fields.
5. Security / edge cases.
```

## 10. Prompt context mẫu ngắn gọn theo mục tiêu
### Explain code
```text
Hãy giải thích luồng đăng ký user dựa trên các file sau:
- src/controllers/userController.js
- src/routes/userRoutes.js
- src/utils/validation.js
```

### Review code
```text
Review code tạo order với trọng tâm correctness, security và test coverage.
Files:
- src/controllers/orderController.js
- src/routes/orderRoutes.js
```

### Generate tests
```text
Tạo test cho product controller.
Files:
- src/controllers/productController.js
- tests/product.test.js
```

### Refactor
```text
Đề xuất refactor cho user controller nếu file đang chứa quá nhiều logic.
Files:
- src/controllers/userController.js
```

## 11. Verification checklist mẫu
- [ ] Requirement rõ ràng.
- [ ] File context đầy đủ.
- [ ] Prompt chỉ rõ đầu ra mong muốn.
- [ ] Có test hoặc manual verification.
- [ ] Không có secret hoặc dữ liệu nhạy cảm.
- [ ] Có human review trước khi merge.
