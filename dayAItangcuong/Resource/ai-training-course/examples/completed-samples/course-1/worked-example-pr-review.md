# Worked Example - PR Review

## Bối cảnh
- **Repository:** Sample E-commerce Backend API
- **Task:** Review PR thêm email validation cho user registration
- **Files changed:** `userController.js`, `validation.js`, `userRoutes.js`, `user.test.js`

## PR description mẫu
```text
Add email validation to user registration flow.

Files changed:
- userController.js
- validation.js
- userRoutes.js
- user.test.js

Testing:
- Unit tests pass
- Manual test on invalid email
```

## Prompt review dùng cho AI
```text
Hãy review PR này như một senior engineer.

Focus:
1. Logic correctness
2. Security
3. Test coverage
4. Breaking changes
5. Documentation

Đầu ra theo format:
- Critical issues
- Suggestions
- Nice to have
- Overall assessment
```

## AI review output mẫu
### Critical issues
- Cần xác nhận duplicate email được check ở tầng nào.
- Cần đảm bảo response lỗi không lộ thông tin nhạy cảm.

### Suggestions
- Bổ sung test cho missing required fields.
- Chuẩn hóa error message để nhất quán.
- Tách validation logic thành helper nếu đang nằm quá nhiều trong controller.

### Nice to have
- Thêm comment ngắn cho regex validation.
- Cập nhật PR description với test evidence rõ hơn.

### Overall assessment
- **Approve with minor comments**
- Code đúng hướng và test coverage đủ cho feature nhỏ.

## Kết quả học được
- PR review tốt phải có context, diff và tiêu chí rõ ràng.
- Không nên chấp nhận AI review mà không đối chiếu với code.
- Review output hữu ích nhất khi có line-by-line evidence.
