# Course 2 - Testing with AI

## 1. Mục tiêu
- Tạo test cases và test code với AI.
- Phân biệt functional, edge, integration và performance tests.

## 2. Bối cảnh
- **Tình huống:** Cần tạo test cho tính năng đăng ký người dùng.
- **Repository:** Sample E-commerce Backend API
- **Tool sử dụng:** AI assistant, Jest hoặc framework tương đương

## 3. Dữ liệu đầu vào mẫu
### Requirement mẫu
```text
Email đăng ký phải hợp lệ và không được trùng.
```

### Prompt mẫu
```text
Tạo test cases và unit tests cho requirement này.

Yêu cầu:
1. Happy path
2. Invalid input
3. Duplicate email
4. Edge cases
5. Output theo AAA pattern
```

## 4. Các bước thực hiện
1. Viết acceptance criteria.
2. Yêu cầu AI tạo test cases.
3. Chọn test case quan trọng để chuyển thành code.
4. Chạy test và xem coverage.
5. Bổ sung test nếu thiếu.

## 5. Kiểm chứng kết quả
- Test có cover đúng requirement không?
- Có edge case nào còn thiếu không?
- Test có ổn định và dễ hiểu không?

## 6. Kết quả mong đợi
- Test Strategy Document.
- Bộ test code có thể chạy lại.
