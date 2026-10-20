# Module 5 - Context Engineering với Sample Repository

## 1. Mục tiêu
- Biết chọn đúng file và mức context.
- Biết khi nào nên đưa code, tree, log hoặc request mẫu.
- Giảm nhiễu trong context window.

## 2. Bối cảnh
- **Module:** Module 5
- **Use case:** Giải thích hoặc sửa một luồng trong repository mà không đưa quá nhiều context.
- **Repository:** Sample E-commerce Backend API
- **Tools:** AI assistant, VS Code

## 3. Prerequisites
### 3.1 Setup
- [ ] Có repository đã mở trong VS Code
- [ ] Xác định 1 luồng nghiệp vụ cần phân tích
- [ ] Chuẩn bị file liên quan tối thiểu

### 3.2 Sample Input
- `userController.js`
- `validation.js`
- `userRoutes.js`
- Một đoạn request/response mẫu

## 4. Step-by-step Instructions
### Step 1: Define the task type
1. Xác định task là explain, review hay sửa lỗi.
2. Quyết định cần file nào là đủ.

### Step 2: Build a minimal context pack
1. Chỉ chọn file liên quan trực tiếp.
2. Không đưa toàn bộ repository nếu chưa cần.
3. Thêm request/response mẫu nếu cần.

### Step 3: Run the context prompt
```text
Hãy giúp tôi hiểu flow đăng ký người dùng.

Context được cung cấp:
- userController.js
- validation.js
- userRoutes.js

Yêu cầu:
1. Mô tả từng bước của flow.
2. Chỉ ra nơi cần thêm validation.
3. Nêu rủi ro nếu input không hợp lệ.
4. Đề xuất context nào cần bổ sung nếu muốn review sâu hơn.
```

### Step 4: Evaluate the answer
1. Kiểm tra output có bám đúng file không.
2. Xem AI có trả lời quá chung chung không.
3. Quyết định có cần thêm route, service hoặc test không.

### Step 5: Refine context
1. Bổ sung file thiếu.
2. Rút bớt file không cần thiết.
3. Chạy lại prompt để so sánh.

## 5. Verification Checklist
- [ ] Output bám đúng file.
- [ ] Không quá chung chung.
- [ ] Context vừa đủ, không quá rộng.
- [ ] Có thể giải thích lại bằng code thực tế.

## 6. Expected Output
- Context pack gọn mà đủ.
- Biết giảm lỗi do context quá rộng hoặc quá hẹp.

## 7. Common Mistakes
- Đưa quá nhiều file không liên quan.
- Thiếu một file then chốt như validation.
- Không kiểm tra output với code thật.

## 8. Reflection Questions
- File nào thật sự cần thiết cho flow này?
- File nào có thể bỏ đi mà output vẫn tốt?

## 9. Facilitator Notes
- Dùng ví dụ đăng ký người dùng vì dễ theo dõi step by step.
