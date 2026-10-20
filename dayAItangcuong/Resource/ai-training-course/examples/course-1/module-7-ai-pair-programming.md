# Module 7 - AI Pair Programming Workflow

## 1. Mục tiêu
- Thực hiện quy trình từ requirement đến PR với AI.
- Có checklist kiểm chứng trước khi merge.
- Hiểu vai trò của human-in-the-loop.

## 2. Bối cảnh
- **Module:** Module 7
- **Use case:** Phát triển một feature nhỏ trên sample repository.
- **Repository:** Sample E-commerce Backend API
- **Feature ví dụ:** thêm validation cho user registration
- **Tools:** AI assistant, VS Code, Git, test runner

## 3. Prerequisites
### 3.1 Setup
- [ ] Có repository và feature branch
- [ ] Có AI assistant
- [ ] Có test runner hoạt động
- [ ] Có PR template hoặc checklist

### 3.2 Sample Input
```text
Người dùng phải đăng ký bằng email hợp lệ. Nếu email đã tồn tại hoặc sai định dạng thì trả về lỗi rõ ràng.
```

## 4. Step-by-step Instructions
### Step 1: Analyze requirement
```text
Phân tích requirement sau và chia thành task:
[Requirement]

Yêu cầu:
1. Viết user story.
2. Đề xuất test cases.
3. Đề xuất các file cần chỉnh sửa.
4. Nêu rủi ro cần verify.
```

### Step 2: Write user story
1. Viết user story.
2. Bổ sung acceptance criteria.
3. Xác định edge cases.

### Step 3: Generate test cases first
1. Tạo test cases trước khi code.
2. Xác định happy path và negative cases.

### Step 4: Generate or refine code
1. Dùng AI tạo code hoặc gợi ý thay đổi.
2. Giới hạn phạm vi sửa.

### Step 5: Review and verify
1. Review code bằng AI và bằng người.
2. Chạy test và kiểm chứng.
3. Refactor nếu cần.

### Step 6: Prepare PR
1. Tạo PR với mô tả rõ ràng.
2. Ghi testing evidence.
3. Ghi rõ những chỗ cần reviewer chú ý.

## 5. Verification Checklist
- [ ] Test pass.
- [ ] Acceptance criteria đạt.
- [ ] Edge cases được xử lý.
- [ ] Security concerns được kiểm tra.
- [ ] PR description đủ rõ.

## 6. Expected Output
- Một feature nhỏ hoàn chỉnh.
- Một PR package đầy đủ context, test và verification.

## 7. Common Mistakes
- Code trước, test sau.
- PR thiếu testing evidence.
- Để AI làm thay toàn bộ verification.

## 8. Reflection Questions
- Bước nào tốn thời gian nhất?
- AI hỗ trợ tốt nhất ở chỗ nào?

## 9. Facilitator Notes
- Dùng ví dụ đăng ký người dùng để sinh viên dễ theo dõi.
