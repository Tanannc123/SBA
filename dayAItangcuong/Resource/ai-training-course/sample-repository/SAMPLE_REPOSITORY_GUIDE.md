# Sample Repository Guide - AI Training Course

Repository mẫu này được thiết kế để minh họa các khái niệm và kỹ thuật được dạy trong cả 9 modules của khóa học.

## Cách sử dụng Sample Repository cho từng Module

### Module 1: Generative AI & AI-Augmented Software Engineering

**Mục tiêu:** Hiểu vai trò của AI trong Software Engineering và làm quen với AI Coding Assistants

**Thực hành với sample repository:**

1. **Khám phá AI Coding Assistants**
   - Sử dụng ChatGPT/Claude để giải thích code trong `src/controllers/userController.js`
   - Sử dụng GitHub Copilot để autocomplete trong `src/routes/productRoutes.js`
   - So sánh outputs giữa các AI tools

2. **AI trong SDLC**
   - Sử dụng AI để phân tích requirements cho tính năng "Product Search"
   - Sử dụng AI để design database schema cho `Review` module
   - Sử dụng AI để generate test cases cho `userController.js`

**Example Prompts:**
```
Hãy giải thích function register trong userController.js:
- Purpose của function
- Input parameters và ý nghĩa
- Logic step-by-step
- Edge cases được handle
```

---

### Module 2: AI-Assisted Codebase Understanding

**Mục tiêu:** Sử dụng AI để hiểu nhanh một codebase

**Thực hành với sample repository:**

1. **Repository Exploration Strategy**
   - Áp dụng quy trình 4 bước để hiểu repository
   - Tạo Module Map cho hệ thống
   - Xác định Business Workflow cho Order Processing

2. **AI-assisted Code Explanation**
   - Sử dụng AI để giải thích architecture của hệ thống
   - Sử dụng AI để trace data flow từ User → Order → Payment
   - Verify kết quả với documentation

**Example Prompts:**
```
Hãy phân tích cấu trúc repository sau:

Folder structure:
[paste tree output]

Package.json:
[paste package.json content]

Prisma schema:
[paste schema.prisma]

Yêu cầu:
1. Identify project type và tech stack
2. Explain purpose của từng folder chính
3. Identify entry points
4. List main modules và responsibilities
5. Suggest architecture pattern
```

---

### Module 3: Project Understanding Workshop

**Mục tiêu:** Trình bày hiểu biết về hệ thống và nhận phản hồi

**Thực hành với sample repository:**

1. **Repository Analysis**
   - Phân tích repository theo quy trình chuyên nghiệp
   - Tạo Project Understanding Report
   - Chuẩn bị presentation về architecture

2. **Project Presentation**
   - Trình bày Module Map của hệ thống
   - Giải thích Business Workflow cho Order Processing
   - Bảo vệ các nhận định kỹ thuật bằng bằng chứng từ code

3. **Peer Review**
   - Review Project Understanding Report của nhóm khác
   - Đưa ra feedback và suggestions
   - Refine report dựa trên feedback

**Deliverables:**
- Project Understanding Report
- Module Map (visual diagram)
- Business Workflow documentation
- Presentation slides

---

### Module 4: Prompt Engineering for Software Engineering

**Mục tiêu:** Thiết kế prompt hiệu quả cho các tác vụ Software Engineering

**Thực hành với sample repository:**

1. **Zero-shot Prompting**
   - Thiết kế prompt để giải thích code mà không cần ví dụ
   - Thiết kế prompt để generate code cho tính năng mới
   - Evaluate chất lượng output

2. **Few-shot Prompting**
   - Cung cấp ví dụ để AI hiểu coding standards
   - Sử dụng examples để generate consistent code
   - Compare với zero-shot results

3. **System Prompt và Role Prompt**
   - Tạo system prompt cho code review
   - Sử dụng role prompt để AI đóng vai Senior Developer
   - Test different roles (Security Expert, Performance Expert)

**Example Prompts:**
```
Zero-shot:
Hãy implement function để validate email address trong userController.js

Few-shot:
Ví dụ 1: validate phone number
[code example]

Ví dụ 2: validate address
[code example]

Bây giờ implement validate email address theo pattern tương tự:
```

---

### Module 5: Context Engineering & AI Coding Tools

**Mục tiêu:** Quản lý context và chọn AI tool phù hợp

**Thực hành với sample repository:**

1. **File Context**
   - Cung cấp context từ `userController.js` khi hỏi về user authentication
   - Cung cấp context từ `prisma/schema.prisma` khi hỏi về database structure
   - Test với và without context

2. **Module Context**
   - Cung cấp context từ cả User module (controller + routes + validation)
   - Cung cấp context từ Order module với dependencies
   - Compare quality của responses

3. **Repository Context**
   - Cung cấp context từ toàn bộ repository structure
   - Sử dụng AI để understand cross-module dependencies
   - Test context window limits

**AI Tool Comparison:**
- Test cùng prompt trên ChatGPT, Claude, GitHub Copilot
- Compare responses cho code explanation task
- Compare responses for code generation task
- Document strengths và weaknesses của từng tool

---

### Module 6: Prompt Engineering Workshop

**Mục tiêu:** Xây dựng Prompt Playbook có thể tái sử dụng

**Thực hành với sample repository:**

1. **Explain Code Prompts**
   - Tạo prompt template để giải thích bất kỳ function nào
   - Tạo prompt cho module-level explanation
   - Tạo prompt cho architecture-level explanation

2. **Code Review Prompts**
   - Tạo prompt để review code theo best practices
   - Tạo prompt để identify security issues
   - Tạo prompt để suggest refactoring

3. **Generate Test Cases Prompts**
   - Tạo prompt để generate unit tests
   - Tạo prompt để generate integration tests
   - Tạo prompt để generate edge case tests

**Deliverable:**
- Prompt Playbook với các prompt templates tái sử dụng

---

### Module 7: AI Pair Programming Workflow

**Mục tiêu:** Áp dụng quy trình cộng tác với AI

**Thực hành với sample repository:**

1. **Requirement Analysis**
   - Sử dụng AI để analyze requirement cho tính năng "Product Review"
   - Identify edge cases và requirements
   - Create user story với AI assistance

2. **Prompt → Code Workflow**
   - Sử dụng AI để generate code cho review controller
   - Human review và refine code
   - Iterate với AI để improve

3. **Human-in-the-loop Verification**
   - Verify AI-generated code
   - Add error handling
   - Add tests

**Workflow Example:**
```
1. Analyze requirement với AI
2. Design database schema với AI
3. Generate controller code với AI
4. Human review code
5. Refine với AI assistance
6. Add tests với AI
7. Human verify tests
8. Commit code
```

---

### Module 8: AI-assisted Feature Development

**Mục tiêu:** Phát triển tính năng mới với AI theo quy trình hoàn chỉnh

**Feature to Implement: Product Review System**

**Workflow:**

1. **Analyze Requirement**
   - Use AI to understand requirements
   - Identify entities và relationships
   - Design API endpoints

2. **User Story**
   - Create user story với AI assistance
   - Define acceptance criteria
   - Identify edge cases

3. **Generate Test Cases**
   - Use AI to generate unit tests
   - Use AI to generate integration tests
   - Use AI to generate edge case tests

4. **AI Generate Code**
   - Generate controller code
   - Generate routes
   - Generate validation schemas

5. **Code Review**
   - Use AI to review generated code
   - Identify issues và improvements
   - Refactor code

6. **Verification**
   - Run tests
   - Manual testing
   - Fix bugs

7. **Refactoring**
   - Use AI to suggest improvements
   - Refactor code
   - Optimize performance

8. **Commit**
   - Write commit message với AI
   - Create pull request
   - Document changes

**Deliverables:**
- Complete feature implementation
- Test suite
- Documentation
- Pull request

---

### Module 9: Pull Request Review & AI Reflection

**Mục tiêu:** Review PR và reflection về AI usage

**Thực hành với sample repository:**

1. **Pull Request Best Practices**
   - Create PR cho feature đã implement
   - Follow PR template
   - Include documentation

2. **AI-assisted Code Review**
   - Use AI to review PR
   - Identify potential issues
   - Suggest improvements

3. **Refactoring Review**
   - Use AI to review refactoring
   - Ensure no regressions
   - Verify performance improvements

4. **AI Decision Log**
   - Log decisions khi sử dụng AI
   - Document AI prompts used
   - Record outcomes và lessons learned

5. **AI Reflection**
   - Reflect về AI usage trong project
   - Identify areas AI helped
   - Identify areas AI struggled
   - Plan improvements cho future

**Deliverables:**
- Pull request with proper documentation
- AI Decision Log
- Reflection Report

---

## Known Issues & Technical Debt (Intentional)

Repository này intentionally includes technical debt cho learning purposes:

1. **Limited Error Handling**
   - Một số functions thiếu proper error handling
   - Dùng cho debugging practice (Module 7, 8)

2. **Incomplete Test Coverage**
   - Một số modules có limited tests
   - Dùng cho test generation practice (Module 4, 6, 8)

3. **Placeholder Implementations**
   - Payment và Notification modules không được implement đầy đủ
   - Dùng cho feature development practice (Module 8)

4. **Inconsistent Naming**
   - Một số variables/functions có inconsistent naming
   - Dùng cho refactoring practice (Module 8)

5. **Missing Documentation**
   - Một số functions thiếu comments
   - Dùng cho documentation generation practice (Module 4, 6)

## Tips cho Effective Learning

1. **Don't Skip Verification**
   - Luôn verify AI-generated code
   - Run tests trước khi commit
   - Manual testing cho critical paths

2. **Document Your Process**
   - Log prompts used
   - Document decisions
   - Record lessons learned

3. **Iterate và Improve**
   - Don't accept first AI output
   - Refine prompts based on results
   - Build your Prompt Playbook

4. **Collaborate với Peers**
   - Review each other's code
   - Share prompt templates
   - Learn from each other's mistakes

5. **Think Beyond Code**
   - Consider architecture implications
   - Think about scalability
   - Consider security implications

## Next Steps

Sau khi hoàn thành practice với sample repository:
1. Áp dụng vào repository thực tế của team
2. Build Prompt Playbook riêng cho tech stack của bạn
3. Share learnings với team
4. Continuously improve prompts và workflows
