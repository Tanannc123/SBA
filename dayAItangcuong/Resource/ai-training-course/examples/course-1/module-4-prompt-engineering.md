# Module 4 - Prompt Engineering với Sample Repository

## 1. Mục tiêu
- Biết sửa prompt để AI trả lời đúng và có cấu trúc.
- Phân biệt zero-shot, few-shot, system prompt và role prompt.
- Tạo prompt library cho các tác vụ dev phổ biến.

## 2. Bối cảnh
- **Module:** Module 4
- **Use case:** Tạo prompt dùng lại cho repository thật.
- **Repository:** Sample E-commerce Backend API
- **Tools:** ChatGPT, Claude, Cursor hoặc Copilot

## 3. Prerequisites
### 3.1 Setup
- [ ] Có access tới sample repository
- [ ] Có editor để lưu prompt
- [ ] Có ít nhất một file chức năng để test prompt

### 3.2 Sample Input
- Prompt gốc chưa tốt
- Prompt cải tiến
- File `orderController.js`

## 4. Step-by-step Instructions
### Step 1: Start with a weak prompt
```text
Hãy review code này.
```

### Step 2: Observe the weakness
1. Chạy prompt gốc.
2. Ghi lại điểm yếu: quá chung, thiếu context, thiếu format.

### Step 3: Improve the prompt
```text
Hãy review function createOrder trong file orderController.js.

Yêu cầu:
1. Kiểm tra correctness.
2. Chỉ ra edge cases.
3. Phát hiện security issues.
4. Đề xuất refactor nếu cần.
5. Kết quả trả về theo format: Issues / Suggestions / Verification.

Context:
- Đây là backend API cho e-commerce.
- Đầu vào là request từ user.
- Phải lưu ý validation, auth và error handling.
```

### Step 4: Run and compare
1. Chạy prompt cải tiến.
2. So sánh output trước và sau.
3. Xác định prompt nào có thể lưu vào playbook.

### Step 5: Build a mini library
1. Tạo prompt cho explain code.
2. Tạo prompt cho review.
3. Tạo prompt cho test generation.
4. Lưu vào prompt playbook.

## 5. Verification Checklist
- [ ] Output cụ thể hơn.
- [ ] AI hiểu đúng phạm vi.
- [ ] Output đúng format.
- [ ] Prompt dùng lại được.

## 6. Expected Output
- Một prompt library tối thiểu cho explain code, review và test generation.
- Biết cách sửa prompt theo context thực tế.

## 7. Common Mistakes
- Chỉ sửa một câu thay vì thêm context.
- Không chỉ rõ format đầu ra.
- Không kiểm thử prompt trên file thật.

## 8. Reflection Questions
- Prompt nào hiệu quả nhất và vì sao?
- Thay đổi nhỏ nào giúp output cải thiện rõ nhất?

## 9. Facilitator Notes
- Dùng ví dụ review function để học viên thấy ngay giá trị của prompt tốt.
