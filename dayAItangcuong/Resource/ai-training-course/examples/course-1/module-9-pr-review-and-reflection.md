# Module 9 - PR Review & AI Reflection

## 1. Mục tiêu
- Review PR bằng AI nhưng vẫn giữ trách nhiệm của con người.
- Ghi nhận quyết định AI và phản tư sau mỗi task.

## 2. Bối cảnh
- **Module:** Module 9
- **Use case:** Review một PR đã làm trên sample repository.
- **Repository:** Sample E-commerce Backend API
- **Tools:** GitHub/GitLab PR, AI assistant, Markdown template

## 3. Prerequisites
### 3.1 Setup
- [ ] Có PR hoặc diff để review
- [ ] Có AI assistant
- [ ] Có template cho AI Decision Log hoặc reflection

### 3.2 Sample Input
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

## 4. Step-by-step Instructions
### Step 1: Read the PR
1. Đọc PR description.
2. Xem diff hoặc file thay đổi.
3. Xác định mục tiêu thay đổi.

### Step 2: Run AI review
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

### Step 3: Compare with human review
1. So sánh feedback của AI với review của người thật.
2. Chốt issue cần sửa.

### Step 4: Record and reflect
1. Ghi AI Decision Log.
2. Viết reflection report ngắn.
3. Xác định điều cần làm tốt hơn ở lần sau.

## 5. Verification Checklist
- [ ] AI chỉ đúng issue quan trọng.
- [ ] Không bỏ sót security hoặc test coverage.
- [ ] PR có đủ evidence để merge.
- [ ] Reflection có bài học cụ thể.

## 6. Expected Output
- Một PR review có chất lượng.
- Một reflection note giúp cải thiện workflow cho lần sau.

## 7. Common Mistakes
- Chấp nhận review của AI mà không so sánh với code.
- Ghi reflection quá chung chung.
- Bỏ qua decision log.

## 8. Reflection Questions
- AI đúng ở đâu và sai ở đâu?
- Lần sau bạn sẽ thay đổi prompt review thế nào?

## 9. Facilitator Notes
- Có thể dùng đây làm bài tổng kết cuối Course 1.
