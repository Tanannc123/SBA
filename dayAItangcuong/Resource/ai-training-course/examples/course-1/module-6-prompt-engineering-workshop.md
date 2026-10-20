# Module 6 - Prompt Engineering Workshop

## 1. Mục tiêu
- Xây được prompt playbook có thể tái sử dụng.
- Có bộ prompt mẫu cho explain code, code review, test generation và documentation.

## 2. Bối cảnh
- **Module:** Module 6
- **Use case:** Tạo thư viện prompt dùng cho dự án thật.
- **Repository:** Sample E-commerce Backend API
- **Tools:** AI assistant, Markdown editor

## 3. Prerequisites
### 3.1 Setup
- [ ] Có một file Markdown để lưu prompt library
- [ ] Có sample repository để test prompt
- [ ] Có ít nhất 4 tác vụ cần prompt

### 3.2 Sample Input
- Prompt explain code
- Prompt code review
- Prompt test generation
- Prompt documentation

## 4. Step-by-step Instructions
### Step 1: Choose prompt categories
1. Explain code.
2. Code review.
3. Test generation.
4. Documentation.

### Step 2: Draft weak prompts
```text
Giải thích function [function_name] trong file [file_path].

Yêu cầu:
1. Mục đích
2. Input/output
3. Logic chính
4. Edge cases
5. Dependencies
```

```text
Review code sau từ góc nhìn correctness, security và maintainability.

Context:
- Đây là backend cho e-commerce.
- Chú ý validation, auth và error handling.
```

### Step 3: Run on sample repository
1. Chạy từng prompt trên file thật.
2. Lưu output tốt nhất.
3. Ghi chú prompt nào cần refinement.

### Step 4: Build prompt library
1. Chuẩn hóa thành tên, mục đích, context và output format.
2. Viết thành Markdown library.
3. Chia sẻ với team hoặc nhóm học.

## 5. Verification Checklist
- [ ] Prompt tái sử dụng được.
- [ ] Output ổn định.
- [ ] Có context rõ.
- [ ] Có tiêu chí đánh giá.

## 6. Expected Output
- Prompt playbook tối thiểu cho 4 tác vụ phổ biến.
- Quy trình cập nhật prompt khi gặp case mới.

## 7. Common Mistakes
- Viết prompt quá ngắn.
- Không ghi output format.
- Không lưu phiên bản tốt nhất.

## 8. Reflection Questions
- Prompt nào có giá trị tái sử dụng cao nhất?
- Điểm khác nhau giữa prompt mạnh và prompt yếu là gì?

## 9. Facilitator Notes
- Có thể cho học viên so sánh prompt mạnh và prompt yếu.
