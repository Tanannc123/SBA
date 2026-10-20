# Module 8: AI-assisted Feature Development

## Mục tiêu học tập

Sau khi hoàn thành module này, bạn sẽ:
- Áp dụng AI Pair Programming Workflow vào phát triển feature thực tế
- Biết cách phân tích requirement và tạo user story với AI
- Có thể generate test cases với AI
- Sử dụng AI để generate và review code
- Thực hiện verification và refactoring
- Commit và tạo pull request theo best practices

---

## 8.1 Workflow Overview

### Complete Feature Development Workflow
```
1. Analyze Requirement
   ↓
2. Create User Story
   ↓
3. Generate Test Cases
   ↓
4. AI Generate Code
   ↓
5. Code Review (Self + AI)
   ↓
6. Verification & Testing
   ↓
7. Refactoring (nếu cần)
   ↓
8. Commit Changes
   ↓
9. Create Pull Request
   ↓
10. Document & Reflect
```

### Estimated Time
- Small feature: 2-4 hours
- Medium feature: 4-8 hours
- Large feature: 8-16 hours

---

## 8.2 Step 1: Analyze Requirement

### Understanding the Requirement
**Prompt:**
```
Phân tích requirement sau cho feature development:

## Requirement
[Paste requirement text from ticket/spec]

## Context
- Project: [project name]
- Current system: [brief description]
- Related features: [list]
- Tech stack: [list]

## Analysis Required
1. **Purpose:** Mục đích của feature này?
2. **Scope:** Scope của work (in-scope và out-scope)
3. **Acceptance Criteria:** Clear acceptance criteria
4. **Dependencies:** Dependencies với features/modules khác
5. **Risks:** Potential risks và challenges
6. **Questions:** Questions cần clarify với stakeholder
7. **Complexity Assessment:** Low/Medium/High complexity
```

### Break Down into Technical Tasks
**Prompt:**
```
Break down requirement thành technical tasks:

Requirement: [Paste analyzed requirement]

Output format:
## Technical Tasks
### Task 1: [Title]
- **Description:** [description]
- **Complexity:** [Low/Medium/High]
- **Dependencies:** [list]
- **Estimated time:** [hours]

### Task 2: [Title]
...

Consider:
- Backend tasks (API, database, business logic)
- Frontend tasks (UI, components, state management)
- Testing tasks (unit, integration, E2E)
- Documentation tasks
- Configuration tasks
```

---

## 8.3 Step 2: Create User Story

### User Story Template
**Prompt:**
```
Tạo user story cho requirement sau:

Requirement: [Paste requirement]
Acceptance Criteria: [Paste criteria]

Yêu cầu:
1. Follow INVEST criteria (Independent, Negotiable, Valuable, Estimable, Small, Testable)
2. Include detailed acceptance criteria
3. Add edge cases
4. Identify dependencies
5. Estimate complexity

Format:
## User Story
**Title:** [Clear title]

**As a** [type of user],
**I want** [to perform an action],
**So that** [I can achieve a goal].

**Acceptance Criteria:**
- **Given** [precondition], **when** [action], **then** [outcome]
- **Given** [precondition], **when** [action], **then** [outcome]

**Edge Cases:**
- [Edge case 1]
- [Edge case 2]

**Dependencies:**
- [Dependency 1]
- [Dependency 2]

**Complexity:** [Story points or hours]

**Notes:**
[Any additional notes]
```

---

## 8.4 Step 3: Generate Test Cases

### Test Case Generation
**Prompt:**
```
Generate comprehensive test cases cho user story sau:

User Story: [Paste user story]
Acceptance Criteria: [Paste acceptance criteria]

Test Requirements:
1. **Functional Tests:** Happy path và business logic
2. **Edge Cases:** Boundary conditions, unusual inputs
3. **Negative Tests:** Error conditions, invalid inputs
4. **Integration Tests:** Integration với các modules khác
5. **Security Tests:** Nếu applicable (auth, authorization, input validation)
6. **Performance Tests:** Nếu applicable (load, response time)

Output Format:
## Test Case [TC-001]
- **Title:** [Descriptive title]
- **Type:** [Functional/Edge/Negative/Integration/Security/Performance]
- **Priority:** [High/Medium/Low]
- **Pre-conditions:** [Conditions before test]
- **Test Steps:**
  1. [Step 1]
  2. [Step 2]
- **Expected Result:** [What should happen]
- **Test Data:** [Sample data if needed]
```

### Generate Unit Test Code
**Prompt:**
```
Generate unit tests cho [component/function]:

## Component/Function Details
**Name:** [name]
**Purpose:** [description]
**Code:** [Paste code]

## Test Requirements
- Framework: [Jest/PyTest/JUnit/Mocha/etc]
- Language: [language]
- Mocking: [specify if mocking needed]

## Test Cases to Cover
[Paste test cases from previous step]

## Output Requirements
1. Complete test file
2. Clear test names
3. Arrange-Act-Assert pattern
4. Mock external dependencies
5. Test happy path
6. Test edge cases
7. Test error conditions
8. Descriptive assertions
```

---

## 8.5 Step 4: AI Generate Code

### Initial Code Generation
**Prompt:**
```
Generate implementation cho [feature]:

## Requirements
[Paste detailed requirements]

## User Story
[Paste user story]

## Acceptance Criteria
[Paste acceptance criteria]

## Context
- **Tech Stack:** [list]
- **Existing Code:** [paste relevant existing code]
- **Database Schema:** [if applicable]
- **API Contracts:** [if applicable]
- **Dependencies:** [list]

## Implementation Requirements
1. Follow [style guide/coding standards]
2. Include comprehensive error handling
3. Add comments for complex logic
4. Make code testable
5. Handle all edge cases from test cases
6. Follow SOLID principles
7. Consider performance
8. Include security best practices

## Output
Provide complete implementation with:
- Main implementation code
- Any necessary types/interfaces
- Error handling
- Input validation
- Comments where needed
```

### Iterative Refinement
Sau khi AI generate code:
1. Review code manually
2. Identify issues
3. Ask for specific fixes

**Example refinement prompt:**
```
Refine code bạn vừa generated:

Issues found:
1. [Issue 1] - [description]
2. [Issue 2] - [description]
3. [Issue 3] - [description]

Please provide:
- Fixed code
- Explanation of changes
```

---

## 8.6 Step 5: Code Review

### Self-Review với AI
**Prompt:**
```
Review code tôi vừa generated (with AI assistance):

## Code
[Paste generated code]

## Original Requirements
[Paste requirements]

## Review Criteria
Review as a senior software engineer:

1. **Correctness:** Logic có đúng không?
2. **Completeness:** Có cover tất cả requirements?
3. **Edge Cases:** Edge cases được handle?
4. **Error Handling:** Error handling appropriate?
5. **Code Style:** Follow best practices?
6. **Performance:** Có performance issues?
7. **Security:** Có security vulnerabilities?
8. **Maintainability:** Dễ maintain không?
9. **Testability:** Dễ test không?

Provide:
- Overall assessment (1-10)
- Critical issues (must fix)
- Suggestions (should fix)
- Nice-to-have improvements
- Refined code if major issues
```

### Security Review
**Prompt:**
```
Security review cho code sau:

## Code
[Paste code]

## Context
- Handles user input: [yes/no]
- Authentication: [method if any]
- Authorization: [method if any]
- Data sensitivity: [level]

## Security Checklist
- SQL Injection
- XSS vulnerabilities
- CSRF vulnerabilities
- Authentication bypass
- Authorization bypass
- Input validation
- Output encoding
- Sensitive data exposure
- Dependency vulnerabilities
- Configuration security

Provide:
- Security assessment
- Vulnerabilities found (with severity)
- Remediation steps
- Secure code alternatives
```

---

## 8.7 Step 6: Verification & Testing

### Run Tests
```bash
# Run unit tests
npm test
# hoặc
pytest
# hoặc
mvn test
```

### Manual Testing Checklist
- [ ] Test happy path
- [ ] Test edge cases
- [ ] Test error conditions
- [ ] Test with invalid inputs
- [ ] Test integration points
- [ ] Test performance (if applicable)
- [ ] Test security (if applicable)

### AI-assisted Verification
**Prompt:**
```
Verify implementation meets requirements:

## Requirements
[Paste requirements]

## Implementation
[Paste code]

## Test Results
[Paste test results]

Verify:
1. All acceptance criteria met?
2. All test cases pass?
3. Edge cases handled?
4. Error handling works?
5. Performance acceptable?
6. Security adequate?

Provide:
- Verification status (Pass/Fail/Partial)
- Gaps identified
- Recommendations
```

### Quality Gate for feature delivery
Chỉ move sang bước refactoring, commit, hoặc PR khi các điều kiện sau đạt:
- **Acceptance criteria pass:** Toàn bộ criteria quan trọng đã được xác nhận
- **Tests pass:** Unit/integration tests liên quan đã pass
- **Manual smoke test pass:** Luồng chính chạy được end-to-end
- **No blocking review comments:** Không còn issue blocker từ self-review hoặc peer review
- **Deployment awareness:** Biết rõ có cần migration, config, hoặc rollback plan hay không

### Team release alignment
Trong team thực tế, cần align trước khi ship:
- Ai chịu trách nhiệm xác nhận feature complete
- Ai review nếu thay đổi chạm vào module owner khác
- Có cần QA, security, hoặc product sign-off không
- PR phải mô tả rõ impact, test evidence, và rollback considerations

---

## 8.8 Step 7: Refactoring

### Identify Refactoring Opportunities
**Prompt:**
```
Identify refactoring opportunities cho code sau:

## Code
[Paste code]

## Refactoring Goals
- Improve readability
- Reduce complexity
- Follow SOLID principles
- Improve maintainability
- Improve performance (if applicable)

Provide:
1. Functions/methods to extract
2. Design patterns to apply
3. Code smells to fix
4. Refactored code
5. Explanation of changes
```

### Apply Refactoring
**Prompt:**
```
Refactor code following suggestions:

## Original Code
[Paste code]

## Refactoring Suggestions
[Paste suggestions from previous step]

Provide:
- Refactored code
- Explanation of each change
- Benefits of refactoring
- Verification that functionality preserved
```

---

## 8.9 Step 8: Commit Changes

### Commit Message Best Practices
```
feat: add user email validation

- Add email validation function
- Update user registration flow
- Add unit tests for validation
- Update documentation

Closes #123
```

### Commit Checklist
- [ ] Code compiles/builds
- [ ] All tests pass
- [ ] Linting passes
- [ ] Documentation updated
- [ ] No sensitive data committed
- [ ] Commit message follows conventions

### AI-assisted Commit Message
**Prompt:**
```
Generate commit message cho changes sau:

## Files Changed
[List files changed]

## Changes Summary
[Paste git diff summary]

## Context
- Feature: [feature name]
- Related issue: #[issue number]

Generate commit message following conventional commits format:
- type(scope): description
- Body with details
- Footer with issue reference
```

---

## 8.10 Step 9: Create Pull Request

### PR Description Template
```markdown
## Description
[Brief description of changes]

## Type of Change
- [ ] Bug fix (non-breaking change which fixes an issue)
- [ ] New feature (non-breaking change which adds functionality)
- [ ] Breaking change (fix or feature that would cause existing functionality to not work as expected)
- [ ] Documentation update

## Related Issue
Closes #[issue number]
Fixes #[issue number]
Related to #[issue number]

## Changes Made
### Added
- [Feature 1]
- [Feature 2]

### Changed
- [Change 1]
- [Change 2]

### Fixed
- [Bug 1]
- [Bug 2]

### Removed
- [Removed item]

## Testing
### Test Cases
- [ ] Test case 1
- [ ] Test case 2
- [ ] Test case 3

### Test Results
- Unit tests: ✅ Pass
- Integration tests: ✅ Pass
- Manual testing: ✅ Pass

## AI Assistance
This PR was developed with AI assistance:
- **AI Tool:** [ChatGPT/Claude/Copilot/etc]
- **AI Usage:**
  - Requirement analysis
  - Test case generation
  - Code generation
  - Code review
- **Verification:**
  - Manual review performed
  - Tests executed
  - Security review conducted

## Screenshots (if applicable)
[Paste screenshots]

## Checklist
- [ ] My code follows the style guidelines of this project
- [ ] I have performed a self-review of my code
- [ ] I have commented my code, particularly in hard-to-understand areas
- [ ] I have made corresponding changes to the documentation
- [ ] My changes generate no new warnings
- [ ] I have added tests that prove my fix is effective or that my feature works
- [ ] New and existing unit tests pass locally with my changes
- [ ] Any dependent changes have been merged and published in downstream modules

## Additional Notes
[Any additional context or notes]
```

### AI-assisted PR Description
**Prompt:**
```
Generate PR description cho changes sau:

## Changes
[Paste git diff or summary]

## Context
- Feature: [description]
- Issue: #[number]
- Type: [feature/bugfix/refactor]

Generate PR description including:
- Description
- Type of change
- Changes made (Added/Changed/Fixed/Removed)
- Testing information
- Checklist items
```

---

## 8.11 Step 10: Document & Reflect

### Update Documentation
- Update README if needed
- Update API documentation
- Update architecture docs
- Add/update inline comments

### Create AI Decision Log Entry
Sử dụng template `templates/ai-decision-log.md` để document:
- Tasks AI assisted with
- Prompts used
- AI output quality
- Verification performed
- Time saved
- Lessons learned

### Reflection
Sử dụng template `templates/reflection-report.md` để reflect:
- What worked well
- What didn't work
- Improvements for next time
- Skills developed

---

## 8.12 Complete Example

### Example: Add Email Validation Feature

#### Step 1: Analyze Requirement
```
Requirement: Add email validation to user registration
- Validate email format
- Check if email already exists
- Support international domains
```

#### Step 2: Create User Story
```
As a user,
I want my email to be validated during registration,
So that I can be sure my email is correct and unique.

Acceptance Criteria:
- Given valid email format, when user registers, then registration succeeds
- Given invalid email format, when user registers, then show error
- Given existing email, when user registers, then show error
```

#### Step 3: Generate Test Cases
```
TC-001: Valid email registration
TC-002: Invalid email format
TC-003: Duplicate email
TC-004: International domain
TC-005: Edge cases (null, empty, too long)
```

#### Step 4: AI Generate Code
```
Generate email validation function with:
- Format validation using regex
- Database check for duplicates
- International domain support
- Error handling
```

#### Step 5: Code Review
```
Review with AI for:
- Correctness
- Security
- Performance
- Best practices
```

#### Step 6: Verification
```
- Run unit tests
- Manual testing
- Integration testing
```

#### Step 7: Refactoring
```
Extract validation logic into separate module
Add reusable validation utilities
```

#### Step 8: Commit
```
feat: add email validation
```

#### Step 9: Create PR
```
PR with full description and testing info
```

#### Step 10: Document
```
Update AI Decision Log
Update Reflection Report
```

---

## 8.13 Thực hành

### Exercise 1: Small Feature
1. Choose a small feature (1-2 hours)
2. Apply complete workflow
3. Document each step
4. Reflect on process

### Exercise 2: Medium Feature
1. Choose a medium feature (4-8 hours)
2. Apply complete workflow
3. Use AI for multiple steps
4. Document AI usage
5. Create comprehensive PR

### Exercise 3: Bug Fix
1. Choose a bug to fix
2. Use AI to debug
3. Implement fix
4. Add regression tests
5. Document process

---

## 8.14 Resources

### Tools
- Git for version control
- GitHub/GitLab for PRs
- Testing frameworks (Jest, PyTest, etc.)
- AI tools (ChatGPT, Claude, Copilot)

### Best Practices
- Conventional Commits
- Pull Request Best Practices
- Test-Driven Development
- Clean Code principles

---

## Quiz

1. Describe complete AI-assisted feature development workflow?
2. Tại sao important để generate test cases trước code?
3. Checklist items cho code review?
4. Components của good PR description?
5. Làm thế nào để document AI usage?

---

## Next Steps

Sau khi hoàn thành Module 8, tiếp tục với:
- **Module 9:** Pull Request Review & AI Reflection
- Hoàn thiện quy trình với review và reflection
