# Module 7: AI Pair Programming Workflow

## Mục tiêu học tập

Sau khi hoàn thành module này, bạn sẽ:
- Hiểu AI Pair Programming Workflow end-to-end
- Biết cách phân tích yêu cầu với AI
- Áp dụng Prompt → Code workflow hiệu quả
- Thực hiện Human-in-the-loop verification
- Sử dụng AI Verification Checklist
- Áp dụng Pull Request Workflow với AI

---

## 7.1 AI Pair Programming Workflow Overview

### Workflow Diagram
```
1. Requirement Analysis
   ↓
2. User Story Creation
   ↓
3. Test Case Generation
   ↓
4. AI Code Generation
   ↓
5. Code Review (Human + AI)
   ↓
6. Verification & Testing
   ↓
7. Refactoring (nếu cần)
   ↓
8. Commit & Pull Request
   ↓
9. PR Review (Human + AI)
   ↓
10. Reflection & Documentation
```

### Key Principles
1. **Human-in-the-loop:** Luôn có human verification
2. **Iterative:** Không expect perfect output từ lần đầu
3. **Context-driven:** Cung cấp đủ context cho AI
4. **Verification:** Luôn verify AI output
5. **Documentation:** Document decisions và learnings

---

## 7.2 Requirement Analysis với AI

### Step 1: Understand Requirements
**Prompt:**
```
Phân tích requirement sau:

## Requirement
[Paste requirement text]

## Analysis Yêu cầu
1. **Purpose:** Mục đích của requirement
2. **Scope:** Scope của work
3. **Acceptance Criteria:** Clear acceptance criteria
4. **Dependencies:** Dependencies với các features khác
5. **Risks:** Potential risks và challenges
6. **Questions:** Clarifying questions

## Context
- Current system: [brief description]
- Related features: [list]
- Tech stack: [list]
```

### Step 2: Clarify Ambiguities
**Prompt:**
```
Có những ambiguities trong requirement sau:

Requirement: [Paste requirement]

Identify:
1. Ambiguous terms/phrases
2. Missing information
3. Assumptions cần verify
4. Edge cases không rõ
5. Questions cho stakeholder
```

### Step 3: Break Down into Tasks
**Prompt:**
```
Break down requirement thành actionable tasks:

Requirement: [Paste requirement]

Output format:
- Task 1: [Description] - [Estimated complexity]
- Task 2: [Description] - [Estimated complexity]
- ...

Consider:
- Technical tasks
- Testing tasks
- Documentation tasks
- Deployment tasks
```

---

## 7.3 User Story Creation

### User Story Template
```
As a [type of user],
I want [to perform an action],
So that [I can achieve a goal].

Acceptance Criteria:
- Given [context]
- When [action]
- Then [outcome]
```

### AI-assisted User Story Creation
**Prompt:**
```
Tạo user stories cho requirement sau:

Requirement: [Paste requirement]

Yêu cầu:
1. Create user stories following INVEST criteria
2. Include acceptance criteria for each story
3. Estimate story points (if applicable)
4. Identify dependencies between stories
5. Prioritize stories

Format:
## User Story [N]
**Title:** [Title]
**As a:** [user type]
**I want:** [action]
**So that:** [goal]

**Acceptance Criteria:**
- [ ] Given... When... Then...
- [ ] Given... When... Then...

**Story Points:** [estimate]
**Dependencies:** [list]
```

---

## 7.4 Test Case Generation

### Generate Test Cases Before Coding
**Prompt:**
```
Generate test cases cho user story sau:

User Story: [Paste user story]

Acceptance Criteria: [Paste acceptance criteria]

Test Requirements:
1. Functional test cases
2. Edge case scenarios
3. Negative test cases
4. Integration test cases (if applicable)
5. Performance test cases (if needed)

Output Format:
## Test Case [ID]
- **Description:** [description]
- **Pre-conditions:** [conditions]
- **Test Steps:** [steps]
- **Expected Result:** [result]
- **Priority:** [High/Medium/Low]
```

### Generate Unit Tests
**Prompt:**
```
Generate unit tests cho function:

Function: [Paste function]

Testing Framework: [Jest/PyTest/etc]

Requirements:
1. Test happy path
2. Test edge cases
3. Test error conditions
4. Mock dependencies if needed
5. Clear test names
6. Arrange-Act-Assert pattern

Provide complete test file.
```

---

## 7.5 Prompt → Code Workflow

### Step 1: Initial Code Generation
**Prompt:**
```
Generate code cho [feature/function]:

## Requirements
[Paste requirements]

## Context
- Tech stack: [list]
- Existing code: [paste relevant code]
- Dependencies: [list]
- Constraints: [list]

## Output Requirements
1. Follow [style guide]
2. Include error handling
3. Add comments for complex logic
4. Make it testable
5. Handle edge cases

Provide complete implementation.
```

### Step 2: Review and Refine
**Prompt:**
```
Review code bạn vừa generated:

Original request: [Paste original prompt]
Generated code: [Paste code]

Review criteria:
1. Correctness
2. Edge cases
3. Error handling
4. Code style
5. Performance
6. Security

Provide:
- Issues found
- Suggested improvements
- Refined code
```

### Step 3: Iterate
- Review output
- Identify issues
- Ask for specific fixes
- Repeat until satisfied

---

## 7.6 Human-in-the-Loop Verification

### Verification Checklist

#### Before Using AI-Generated Code
- [ ] **Understand the code:** Đọc và hiểu logic
- [ ] **Check requirements:** Có meet requirements không?
- [ ] **Review edge cases:** Edge cases được handle?
- [ ] **Security check:** Có security vulnerabilities?
- [ ] **Performance check:** Có performance issues?
- [ ] **Style check:** Match team coding standards?
- [ ] **Testability:** Dễ test không?

#### Testing
- [ ] **Run tests:** Unit tests pass?
- [ ] **Manual testing:** Test manually nếu cần
- [ ] **Integration test:** Test với system?
- [ ] **Edge case testing:** Test edge cases?

#### Code Review
- [ ] **Self-review:** Review code yourself
- [ ] **Peer review:** Get peer review
- [ ] **AI review:** Use AI to review again

### Verification Process
```
1. AI generates code
   ↓
2. Human reads and understands
   ↓
3. Human identifies issues
   ↓
4. Human asks AI for fixes
   ↓
5. AI provides refined code
   ↓
6. Human verifies fixes
   ↓
7. Repeat if needed
   ↓
8. Final human approval
```

---

## 7.7 AI Verification Checklist

### Pre-Generation Checklist
- [ ] **Clear requirements:** Requirements rõ ràng?
- [ ] **Sufficient context:** Cung cấp đủ context?
- [ ] **Appropriate tool:** Chọn đúng AI tool?
- [ ] **Right prompt:** Prompt hiệu quả?

### Post-Generation Checklist
- [ ] **Code correctness:** Code logic đúng?
- [ ] **Requirements met:** Meet tất cả requirements?
- [ ] **Edge cases:** Edge cases được handle?
- [ ] **Error handling:** Error handling appropriate?
- [ ] **Security:** Không có security issues?
- [ ] **Performance:** Không có performance issues?
- [ ] **Style:** Follow coding standards?
- [ ] **Documentation:** Có comments/docs?
- [ ] **Testable:** Dễ test?
- [ ] **Tests pass:** Tests pass?

### Integration Checklist
- [ ] **No breaking changes:** Không break existing code?
- [ ] **Dependencies:** Dependencies correct?
- [ ] **Configuration:** Config changes needed?
- [ ] **Migration:** Data migration needed?
- [ ] **Deployment:** Deployment considerations?

---

## 7.8 Code Review với AI

### Self-Review với AI
**Prompt:**
```
Review code tôi vừa viết:

Code:
[Paste your code]

Review as a [senior engineer/security expert/performance expert]

Focus on:
1. Correctness
2. Best practices
3. Potential bugs
4. Improvements

Provide specific, actionable feedback.
```

### Peer Review với AI Assistance
**Prompt:**
```
Help me review peer's PR:

PR Description: [Paste description]
Files changed: [List files]
Diff: [Paste diff]

Review checklist:
- Logic correctness
- Code style
- Performance
- Security
- Test coverage
- Documentation

Provide:
- Overall assessment
- Specific issues
- Suggestions
```

### AI-assisted Code Review
**Prompt:**
```
Review this PR for potential issues:

Files changed:
[List files with paths]

Key changes:
[Paste important changes]

Review focus:
- Bugs
- Security vulnerabilities
- Performance issues
- Code quality
- Test coverage

Provide:
- Critical issues (must fix)
- Suggestions (should fix)
- Nice to have improvements
```

### Quality Gate trước khi merge
Trước khi PR được merge, cần pass các gate tối thiểu sau:
- **Requirement coverage:** Mọi acceptance criteria đã được map vào code hoặc test
- **Test coverage:** Có unit test hoặc integration test cho luồng chính và edge cases quan trọng
- **Manual verification:** Đã chạy kiểm tra thủ công với input thực tế hoặc gần thực tế
- **Security check:** Không có secrets, PII, hoặc logic nhạy cảm bị lộ trong prompt hoặc code
- **Review readiness:** Code đủ rõ để self-review hoặc peer review mà không cần đoán ý

### Failure handling
Nếu một gate không pass:
1. Dừng việc commit hoặc tạo PR
2. Ghi rõ issue trong checklist hoặc AI Decision Log
3. Hỏi AI refine theo từng issue cụ thể
4. Re-run test và verification trước khi tiếp tục

### Team workflow considerations
Trong team thực tế, workflow nên có rõ trách nhiệm:
- **Author:** Tạo thay đổi, tự verify, và chuẩn bị PR context
- **Reviewer:** Kiểm tra logic, edge cases, security, và test coverage
- **Approver:** Chịu trách nhiệm cuối cùng trước khi merge
- **Team lead/maintainer:** Can thiệp khi thay đổi ảnh hưởng kiến trúc, release, hoặc rủi ro cao

### AI usage trong team
- Dùng AI để draft, review, và đề xuất test, nhưng không dùng AI làm người quyết định cuối
- Ghi rõ khi AI đã tham gia vào prompt, review, hoặc verification
- Với task nhạy cảm, ưu tiên pair review hoặc senior review trước khi merge

---

## 7.9 Pull Request Workflow với AI

### PR Description Template
```
## Description
[Brief description of changes]

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Breaking change
- [ ] Documentation update

## Related Issue
Fixes #[issue number]

## Changes Made
- [Change 1]
- [Change 2]
- [Change 3]

## Testing
- [ ] Unit tests added
- [ ] Integration tests added
- [ ] Manual testing performed
- [ ] All tests pass

## AI Assistance
This PR was developed with AI assistance:
- AI Tool: [ChatGPT/Claude/etc]
- Prompts used: [Brief description]
- Verification: [How verified]

## Checklist
- [ ] Code follows style guidelines
- [ ] Self-reviewed code
- [ ] Commented complex code
- [ ] Updated documentation
- [ ] No new warnings
- [ ] Added tests
- [ ] All tests pass
```

### AI-assisted PR Review
**Prompt:**
```
Review pull request:

PR Title: [title]
PR Description: [description]
Files changed: [list]
Diff: [paste diff]

Review criteria:
1. Logic correctness
2. Code quality
3. Test coverage
4. Documentation
5. Breaking changes
6. Security concerns

Provide:
- Approval status (Approve/Request Changes/Comment)
- Specific feedback
- Suggestions for improvement
```

---

## 7.10 Thực hành

### Exercise 1: End-to-End Workflow
1. Chọn một small feature (ví dụ: add validation)
2. Apply full AI Pair Programming Workflow:
   - Requirement analysis
   - User story creation
   - Test case generation
   - Code generation
   - Code review
   - Verification
   - Refactoring
3. Document整个过程
4. Reflect về effectiveness

### Exercise 2: Verification Practice
1. Generate code với AI
2. Apply verification checklist
3. Document issues found
4. Fix issues (with or without AI)
5. Re-verify

### Exercise 3: PR Workflow
1. Create a feature branch
2. Implement feature với AI assistance
3. Create PR với proper description
4. Use AI to review own PR
5. Address feedback
6. Document process

---

## 7.11 Resources

### Tools
- Git for version control
- GitHub/GitLab for PRs
- AI tools: ChatGPT, Claude, Copilot

### Best Practices
- "How to do Code Reviews" - Various sources
- "Pull Request Best Practices" - GitHub guides
- AI-assisted development workflows

---

## Quiz

1. Describe AI Pair Programming Workflow?
2. Tại sao Human-in-the-loop quan trọng?
3. Checklist items để verify AI-generated code?
4. Làm thế nào để use AI trong code review?
5. Components của good PR description?

---

## Next Steps

Sau khi hoàn thành Module 7, tiếp tục với:
- **Module 8:** AI-assisted Feature Development
- Áp dụng workflow vào feature thực tế
