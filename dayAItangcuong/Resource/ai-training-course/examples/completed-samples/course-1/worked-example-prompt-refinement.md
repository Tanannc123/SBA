# Worked Example - Prompt Refinement

## Goal
Chuyển một prompt quá chung chung thành một prompt cụ thể, có context và có output format rõ ràng.

## Bối cảnh
- **Module:** Prompt Engineering
- **Repository:** Sample E-commerce Backend API
- **File mục tiêu:** `src/controllers/orderController.js`
- **Task:** Review hàm `createOrder`

## Prompt ban đầu
```text
Hãy review code này.
```

## Vấn đề của prompt ban đầu
- Không nói rõ file nào.
- Không nói rõ function nào.
- Không nói rõ tiêu chí review.
- Không nói rõ output format.

## Prompt cải tiến hoàn chỉnh
```text
Hãy review function createOrder trong file src/controllers/orderController.js.

## Context
- Đây là backend API cho e-commerce.
- Function này nhận request từ user đã đăng nhập.
- Flow này liên quan tới validation, auth và lưu order vào database.

## Review criteria
1. Correctness: Logic có đúng không?
2. Edge cases: Có xử lý trường hợp item rỗng, payload thiếu hoặc dữ liệu sai không?
3. Security: Có vấn đề với input validation, authorization hoặc sensitive data không?
4. Maintainability: Code có dễ đọc và dễ sửa không?
5. Testability: Có dễ viết test cho function này không?

## Output format
- Critical issues
- Suggestions
- Nice to have
- Verification notes

## Expected depth
- Trả lời theo góc nhìn của senior engineer.
- Ưu tiên issue có thể ảnh hưởng production.
```

## AI output mẫu rút gọn
### Critical issues
- Chưa kiểm tra order items rỗng trước khi xử lý.
- Chưa có guard clause rõ ràng cho payload thiếu trường bắt buộc.

### Suggestions
- Thêm validate trước khi vào business logic.
- Tách logic kiểm tra input ra helper riêng.

### Nice to have
- Thêm comment ngắn cho phần xử lý payment/order mapping.
- Chuẩn hóa message lỗi.

### Verification notes
- Cần test happy path, empty items, missing fields và duplicate request.

## Kết quả học được
- Prompt mạnh hơn sẽ cho output cụ thể hơn.
- File path, function name và review criteria là 3 thành phần rất quan trọng.
- Output có format rõ ràng giúp dễ áp dụng vào công việc thực tế.
