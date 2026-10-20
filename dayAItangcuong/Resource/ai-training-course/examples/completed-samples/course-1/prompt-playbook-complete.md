# Prompt Playbook

## Giới thiệu
Prompt Playbook là tập hợp các prompt đã được kiểm chứng cho các tác vụ Software Engineering phổ biến trên repository mẫu E-commerce Backend API.

## 1. Explain Code

### 1.1 Function Explanation
```text
Giải thích function [function_name] trong file [file_path]:

## Structure
1. Purpose
2. Parameters
3. Return
4. Logic
5. Edge Cases
6. Dependencies
7. Example

## Code
[Paste function code]

## Context
- File: [file_path]
- Module: [module name]
- Related functions: [list]
```

### 1.2 Module Explanation
```text
Phân tích module [module_name]:

## Overview
1. Purpose
2. Responsibilities
3. Key Components
4. Architecture
5. Dependencies
6. Usage

## Files
- [file1]: [purpose]
- [file2]: [purpose]
- [file3]: [purpose]

## Key Code Snippets
[Paste important snippets]
```

## 2. Code Review

### 2.1 Function Review
```text
Review function [function_name] trong file [file_path]:

## Review Criteria
1. Correctness
2. Performance
3. Security
4. Error Handling
5. Code Style
6. Readability
7. Maintainability
8. Testability

## Code
[Paste function code]

## Context
- Language: JavaScript
- Framework: Node.js + Express
- Style guide: Clean controller/service separation
```

### 2.2 Security Review
```text
Security review cho code sau:

## Security Checklist
- SQL Injection
- XSS vulnerabilities
- CSRF vulnerabilities
- Authentication/Authorization issues
- Sensitive data exposure
- Input validation
- Output encoding
- Dependency vulnerabilities
- Configuration security

## Code
[Paste code]

## Context
- Framework: Express
- Authentication method: JWT
- Data sensitivity: Medium
```

## 3. Test Generation

### 3.1 Unit Test Generation
```text
Generate unit tests cho function [function_name]:

## Function Details
**Signature:** [function signature]
**Purpose:** [description]
**Logic:** [brief logic description]

## Test Requirements
1. Happy Path
2. Edge Cases
3. Error Cases
4. Null/Undefined
5. Type Checking

## Testing Framework
- Framework: Jest
- Language: JavaScript
- Mocking: use mocks for database or external services

## Code
[Paste function code]

## Output Format
Provide complete test file with:
- Test setup/teardown if needed
- Multiple test cases
- Clear test names
- Assertions
```

## 4. Documentation

### 4.1 API Documentation
```text
Viết tài liệu cho endpoint [endpoint]:

## Context
- File: [file_path]
- Purpose: [purpose]
- Audience: [new developer / QA / stakeholder]

## Output
1. Endpoint purpose
2. Request parameters
3. Response examples
4. Error codes
5. Notes for usage
```

## 5. Refactoring

### 5.1 Refactor Suggestion
```text
Hãy đề xuất refactor cho code sau:

## Code
[Paste code]

## Goals
1. Reduce complexity
2. Improve readability
3. Separate responsibilities
4. Improve testability

## Output
- Problems found
- Suggested refactor steps
- Refactored version if possible
- Verification notes
```

## 6. Prompt cho Vibe Coding có kiểm soát
```text
Hãy hỗ trợ tôi thử nhanh một ý tưởng theo kiểu vibe coding nhưng vẫn giữ an toàn kỹ thuật.

## Idea
[Paste idea]

## Context
- Goal: prototype / proof of concept / exploration
- Allowed scope: [what can be changed]
- Not allowed: security, secrets, production data
- Files: [file paths if any]

## Yêu cầu
1. Đề xuất cách làm nhanh nhất.
2. Chỉ rõ phần nào là prototype.
3. Chỉ rõ phần nào cần verify kỹ.
4. Nêu bước kiểm chứng tối thiểu.
5. Nêu rủi ro nếu đưa vào production.
```

## 7. Cách dùng
1. Copy prompt phù hợp.
2. Thay placeholder bằng context thật.
3. Chạy với AI assistant.
4. Lưu lại phiên bản hiệu quả nhất.
5. Cập nhật playbook theo feedback thực tế.

## 8. Prompt đã kiểm chứng tốt nhất cho repository mẫu
### Explain user registration flow
```text
Hãy giải thích flow đăng ký người dùng trong repository này.

Files:
- src/controllers/userController.js
- src/routes/userRoutes.js
- src/utils/validation.js
- tests/user.test.js

Yêu cầu:
1. Mô tả flow step-by-step.
2. Chỉ rõ role của validation, controller và routes.
3. Chỉ ra security checks đang có.
4. Đề xuất điểm nào cần bổ sung test.
5. Kết quả trả về theo format: Overview / Flow / Risks / Recommendations.
```

### Review order creation
```text
Hãy review function createOrder trong file src/controllers/orderController.js.

Context:
- Đây là backend e-commerce.
- Flow liên quan tới auth, validation và persistence.
- Mục tiêu: đảm bảo logic đúng, an toàn và dễ test.

Yêu cầu:
1. Kiểm tra correctness.
2. Chỉ ra edge cases.
3. Phát hiện security issues.
4. Đề xuất refactor nếu cần.
5. Đầu ra: Issues / Suggestions / Verification.
```

### Generate tests for product controller
```text
Generate unit tests cho src/controllers/productController.js.

Yêu cầu:
1. Happy path.
2. Invalid input.
3. Permission edge cases.
4. Mock dependencies nếu cần.
5. Dùng Jest.
6. Trả về test file hoàn chỉnh.
```
