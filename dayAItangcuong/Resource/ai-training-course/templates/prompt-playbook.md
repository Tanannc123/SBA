# Prompt Playbook - Thư viện Prompt Tái Sử Dụng

## Giới thiệu

Prompt Playbook là tập hợp các prompt đã được kiểm chứng và tối ưu hóa cho các tác vụ Software Engineering phổ biến. Sử dụng lại các prompt này giúp tiết kiệm thời gian và đảm bảo chất lượng kết quả từ AI.

## Cách sử dụng

1. Copy prompt phù hợp với tác vụ của bạn
2. Điều chỉnh context cụ thể (file paths, variable names, etc.)
3. Thêm context bổ sung nếu cần
4. Review và tinh chỉnh kết quả từ AI

---

## 1. Explain Code Prompts

### 1.1 Giải thích function/method cơ bản
```
Hãy giải thích function [function_name] trong file [file_path] cho tôi:

1. Mục đích của function là gì?
2. Các tham số đầu vào và ý nghĩa của chúng
3. Giá trị trả về và ý nghĩa
4. Logic chính bên trong function
5. Các edge cases hoặc điều kiện đặc biệt
6. Dependencies với các functions/modules khác

File context:
[Paste code hoặc cung cấp file path]
```

### 1.2 Giải thích module/package
```
Hãy phân tích module [module_name] trong dự án:

1. Mục đích chính của module
2. Các components/functions chính
3. Mối quan hệ với các module khác
4. Design patterns được sử dụng
5. Cách module được sử dụng trong hệ thống lớn

Files trong module:
[List các file chính]
```

### 1.3 Giải thích architecture pattern
```
Hãy phân tích architecture pattern được sử dụng trong dự án:

1. Architecture pattern chính (MVC, Microservices, etc.)
2. Lợi ích của pattern này cho dự án
3. Trade-offs và hạn chế
4. Cách các components giao tiếp với nhau
5. Data flow trong architecture

Context:
[Provide relevant code snippets or diagrams]
```

---

## 2. Code Review Prompts

### 2.1 Review function/method
```
Hãy review function [function_name] trong file [file_path]:

Kiểm tra:
1. Correctness - Logic có đúng không?
2. Performance - Có vấn đề performance không?
3. Security - Có lỗ hổng security không?
4. Error handling - Error handling có đầy đủ không?
5. Code style - Có tuân thủ best practices không?
6. Readability - Code có dễ hiểu không?
7. Edge cases - Có xử lý edge cases không?

Code:
[Paste code]
```

### 2.2 Review pull request
```
Hãy review pull request với các changes sau:

Files changed:
[List files]

Changes:
[Paste diff hoặc mô tả changes]

Đánh giá:
1. Tính đúng đắn của logic
2. Impact trên các module khác
3. Performance implications
4. Test coverage
5. Documentation updates
6. Breaking changes
7. Suggestions for improvement
```

### 2.3 Review security
```
Hãy review code sau từ góc độ security:

Code:
[Paste code]

Kiểm tra:
1. SQL Injection vulnerabilities
2. XSS vulnerabilities
3. Authentication/Authorization issues
4. Sensitive data exposure
5. Input validation
6. Dependency vulnerabilities
7. Configuration security
```

---

## 3. Generate Test Cases Prompts

### 3.1 Unit test cho function
```
Hãy generate unit tests cho function [function_name]:

Function signature:
[Paste function signature]

Function logic:
[Paste function implementation]

Yêu cầu:
1. Test happy path
2. Test edge cases
3. Test error conditions
4. Test boundary conditions
5. Mock dependencies nếu cần
6. Sử dụng testing framework: [Jest/PyTest/JUnit/etc]

Framework: [Specify testing framework]
```

### 3.2 Integration test cho API
```
Hãy generate integration tests cho API endpoint:

Endpoint: [HTTP Method] [URL]
Request body:
[Paste schema]

Response:
[Paste schema]

Yêu cầu:
1. Test successful scenarios
2. Test validation errors
3. Test authentication/authorization
4. Test error handling
5. Test rate limiting nếu có
6. Use testing framework: [Supertest/Postman/etc]
```

### 3.3 Test cases cho user story
```
Hãy generate test cases cho user story sau:

User Story:
[Paste user story]

Acceptance Criteria:
[Paste acceptance criteria]

Yêu cầu:
1. Functional test cases
2. Edge case scenarios
3. Negative test cases
4. UI/UX test cases nếu applicable
5. Performance test cases nếu cần
```

---

## 4. Generate Documentation Prompts

### 4.1 API Documentation
```
Hãy generate API documentation cho endpoint:

Endpoint: [HTTP Method] [URL]
Description: [Mô tả]
Request:
[Paste request schema/body]

Response:
[Paste response schema]

Yêu cầu:
1. Endpoint description
2. Request parameters with types and descriptions
3. Response schema with types and descriptions
4. Error responses
5. Authentication requirements
6. Rate limits nếu có
7. Example requests/responses
```

### 4.2 Function documentation
```
Hãy generate documentation cho function:

Function:
[Paste function code]

Yêu cầu:
1. Docstring format: [JSDoc/Python docstring/Javadoc]
2. Description of purpose
3. Parameter descriptions with types
4. Return value description
5. Raises/Exceptions if applicable
6. Examples of usage
7. Notes about behavior
```

### 4.3 README for module
```
Hãy generate README documentation cho module:

Module: [module name]
Files:
[List files]

Purpose:
[Mô tả mục đích]

Yêu cầu:
1. Module overview
2. Installation/setup instructions
3. Usage examples
4. API reference
5. Configuration options
6. Troubleshooting
7. Contributing guidelines
```

---

## 5. Refactoring Prompts

### 5.1 Refactor function
```
Hãy refactor function sau để cải thiện:

Code:
[Paste code]

Mục tiêu:
1. Improve readability
2. Reduce complexity
3. Follow SOLID principles
4. Improve performance nếu có
5. Maintain same functionality

Giải thích các changes được thực hiện.
```

### 5.2 Extract method/function
```
Hãy phân tích function sau và đề xuất extract methods/functions:

Code:
[Paste code]

Yêu cầu:
1. Identify sections that can be extracted
2. Suggest meaningful names for extracted functions
3. Maintain same functionality
4. Improve testability
```

### 5.3 Design pattern application
```
Hãy review code và đề xuất design pattern improvements:

Code:
[Paste code]

Yêu cầu:
1. Identify opportunities for design patterns
2. Suggest specific patterns (Factory, Strategy, etc.)
3. Explain benefits of applying patterns
4. Show refactored code with patterns
```

---

## 6. Debugging Prompts

### 6.1 Debug error
```
Tôi đang gặp lỗi sau:

Error message:
[Paste error]

Code context:
[Paste relevant code]

Stack trace:
[Paste stack trace]

Hãy giúp tôi:
1. Identify root cause
2. Explain why error occurs
3. Suggest fixes
4. Prevent similar errors in future
```

### 6.2 Debug performance issue
```
Tôi đang gặp vấn đề performance:

Code:
[Paste code]

Symptoms:
[Mô tả symptoms: slow response, high memory, etc.]

Hãy giúp tôi:
1. Identify performance bottlenecks
2. Suggest optimizations
3. Provide refactored code
4. Suggest monitoring/improvements
```

---

## 7. Architecture Prompts

### 7.1 Design system architecture
```
Hãy design architecture cho system sau:

Requirements:
[Paste requirements]

Constraints:
- Scale: [small/medium/large]
- Users: [estimated]
- Tech stack: [specify]

Yêu cầu:
1. High-level architecture diagram
2. Component breakdown
3. Data flow
4. Technology recommendations
5. Scalability considerations
6. Security considerations
```

### 7.2 Database schema design
```
Hãy design database schema cho:

Entities:
[List entities và relationships]

Requirements:
[Paste requirements]

Yêu cầu:
1. ER diagram description
2. Table schemas with columns and types
3. Indexes strategy
4. Relationships (foreign keys)
5. Normalization level
```

---

## 8. Best Practices Prompts

### 8.1 Code style check
```
Hãy review code sau theo best practices của [language]:

Code:
[Paste code]

Kiểm tra:
1. Naming conventions
2. Code organization
3. Comments and documentation
4. Error handling
5. Code duplication
6. Magic numbers/strings
7. Function length and complexity
```

### 8.2 SOLID principles check
```
Hãy review code sau theo SOLID principles:

Code:
[Paste code]

Đánh giá:
1. Single Responsibility Principle
2. Open/Closed Principle
3. Liskov Substitution Principle
4. Interface Segregation Principle
5. Dependency Inversion Principle

Suggest improvements for violated principles.
```

---

## Notes

- Luôn cung cấp đủ context cho AI để có kết quả tốt nhất
- Review và tinh chỉnh output từ AI trước khi sử dụng
- Thêm prompt mới vào playbook sau khi đã được kiểm chứng
- Customize prompts theo tech stack và project requirements
- Version control playbook của bạn để track improvements

---

**Last updated:** [Date]
**Maintained by:** [Your name]
