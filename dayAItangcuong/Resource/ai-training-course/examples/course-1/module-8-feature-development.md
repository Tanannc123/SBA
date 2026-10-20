# Module 8 - AI-assisted Feature Development

## 1. Mục tiêu
- Làm feature end-to-end với AI.
- Kết hợp requirement, user story, test, code, review, verification và commit.

## 2. Bối cảnh
- **Module:** Module 8
- **Use case:** Thêm một tính năng mới vào sample repository.
- **Repository:** Sample E-commerce Backend API
- **Feature ví dụ:** email validation cho user registration
- **Tools:** AI assistant, VS Code, Git, test runner, PR tool

## 3. Prerequisites
### 3.1 Setup
- [ ] Có feature branch
- [ ] Có sample repository đã mở
- [ ] Có test runner hoạt động
- [ ] Có PR template hoặc commit convention

### 3.2 Sample Input
```text
Cần chặn email sai định dạng và email trùng trong quá trình đăng ký.
```

## 4. Step-by-step Instructions
### Step 1: Analyze requirement
1. Xác định mục tiêu business.
2. Viết acceptance criteria.
3. Xác định file liên quan.

### Step 2: Create user story
1. Viết user story.
2. Ghi edge cases.
3. Xác định dependency.

### Step 3: Generate test cases
1. Tạo test cases cho happy path, invalid input và duplicate email.
2. Xác định unit test và manual test.

### Step 4: Generate code with AI
```text
Generate implementation cho email validation.

Context:
- Backend e-commerce API
- Files liên quan: userController.js, validation.js, userRoutes.js
- Cần error handling, testable code và security considerations

Yêu cầu đầu ra:
1. Main implementation
2. Validation logic
3. Suggested tests
4. Notes về verification
```

### Step 5: Review and refine
1. Review code.
2. Sửa lỗi hoặc bổ sung thiếu.
3. Tối ưu prompt nếu output chưa đạt.

### Step 6: Verify
1. Chạy unit test.
2. Chạy manual test.
3. Xác nhận rollback notes nếu thay đổi quan trọng.

### Step 7: Commit and PR
1. Commit theo conventional format.
2. Tạo PR.
3. Ghi testing evidence rõ ràng.

## 5. Verification Checklist
- [ ] Code đúng requirement.
- [ ] Có test cho happy path và edge case.
- [ ] Không phát sinh breaking change.
- [ ] Có rollback notes nếu cần.

## 6. Expected Output
- Feature hoàn chỉnh với test và documentation.
- PR đủ điều kiện review.

## 7. Common Mistakes
- Generate code trước khi có test plan.
- Không refine prompt khi output yếu.
- Bỏ qua manual verification.

## 8. Reflection Questions
- Prompt nào giúp ra code tốt nhất?
- Bước nào giúp giảm rủi ro nhất?

## 9. Facilitator Notes
- Nên cho sinh viên so sánh prompt đầu tiên và prompt refine.
