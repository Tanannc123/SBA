# Module 1 - Tổng Quan AI-Augmented Software Engineering

## 1. Mục tiêu
- Nhìn thấy toàn cảnh AI-Augmented Software Engineering trong phần mềm.
- Phân biệt task nào phù hợp vibe coding và task nào cần kiểm chứng chặt.
- Nhận diện nhóm việc, công cụ và workflow cốt lõi của cả khóa.

## 2. Bối cảnh
- **Module:** Module 1
- **Use case:** Giới thiệu tổng quan cho sinh viên mới trước khi vào các lab kỹ thuật.
- **Repository:** Sample E-commerce Backend API
- **Tools:** ChatGPT hoặc Claude, VS Code, Git, test runner

## 3. Prerequisites
### 3.1 Setup
- [ ] Mở repository trong VS Code
- [ ] Đọc README chính
- [ ] Xác định tree structure và các file đại diện
- [ ] Chuẩn bị AI assistant có thể truy cập

### 3.2 Sample Input
- README của sample repository
- Tree structure của project
- `userController.js`
- `orderRoutes.js`
- `validation.js`

## 4. Step-by-step Instructions
### Step 1: Prepare context
1. Mở repository và đọc README.
2. Xác định mục tiêu của hệ thống.
3. Chọn 3 file đại diện: controller, route, utility.

### Step 2: Run the overview prompt
```text
Hãy phân tích repository này theo góc nhìn AI-Augmented Software Engineering.

Yêu cầu:
1. Cho biết AI có thể hỗ trợ những nhóm việc nào trong vòng đời phát triển phần mềm.
2. Liệt kê công cụ cần dùng cho từng nhóm việc.
3. Chỉ ra đâu là tác vụ phù hợp với vibe coding và đâu là tác vụ bắt buộc phải verify kỹ.
4. Trình bày theo bảng: Task / Tool / Verification level / Example.

Context:
- Repository: Sample E-commerce Backend API
- Mục tiêu: hiểu tổng quan workflow AI trong phần mềm
```

### Step 3: Inspect the output
1. Đọc câu trả lời của AI và gạch chân các nhóm việc.
2. So sánh với repository thật.
3. Đánh dấu nhóm nào là exploratory, nhóm nào là production-ready.

### Step 4: Refine if needed
1. Nếu output còn chung chung, bổ sung file cụ thể hơn.
2. Nếu thiếu công cụ, thêm tên tool hoặc môi trường.
3. Chạy lại prompt với context đã refine.

### Step 5: Record a summary table
| Task | Tool | Verification |
|------|------|--------------|
| Codebase understanding | AI assistant + VS Code | Manual review + repo check |
| Prompt design | AI assistant | Prompt compare |
| Generate code | AI assistant + IDE | Test + review |
| Testing | AI + test runner | Test pass |
| PR prep | AI + Git tool | PR checklist |

## 5. Verification Checklist
- [ ] AI liệt kê đúng các nhóm việc cốt lõi.
- [ ] Công cụ phù hợp với từng nhóm việc.
- [ ] Phân biệt rõ vibe coding và verification.
- [ ] Có nhắc human-in-the-loop.

## 6. Expected Output
- Bảng task / tool / verification.
- Tóm tắt vai trò của vibe coding.
- Kết luận về vai trò của human-in-the-loop.

## 7. Common Mistakes
- Dùng AI để “summary” thay vì phân tích.
- Bỏ qua kiểm chứng.
- Trộn lẫn prototype với production.

## 8. Reflection Questions
- Task nào phù hợp vibe coding nhất?
- Task nào bắt buộc verify kỹ nhất?
- Bạn sẽ dùng tool nào cho từng nhóm việc?

## 9. Facilitator Notes
- Dùng lab này để mở đầu toàn khóa.
- Có thể yêu cầu sinh viên bổ sung cột “risk”.
