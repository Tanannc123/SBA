# Module 9: Pull Request Review & AI Reflection

## Mục tiêu học tập

Sau khi hoàn thành module này, bạn sẽ:
- Hiểu Pull Request Best Practices
- Sử dụng AI để assist trong code review
- Review refactoring changes với AI
- Document AI decisions trong AI Decision Log
- Thực hiện AI reflection để cải thiện quy trình
- Áp dụng Responsible AI Usage principles

---

## 9.1 Pull Request Best Practices

### PR Size Guidelines
- **Small PRs:** < 200 lines, 1-2 files - Ideal
- **Medium PRs:** 200-500 lines, 3-5 files - Acceptable
- **Large PRs:** > 500 lines, > 5 files - Avoid if possible

### Why Small PRs?
- Easier to review
- Faster feedback
- Less merge conflicts
- Easier to revert if needed
- Better for CI/CD

### PR Description Best Practices

#### Essential Elements
```markdown
## Description
Clear, concise description of what and why

## Type of Change
- Bug fix / New feature / Breaking change / Documentation

## Related Issue
Closes #123

## Changes Made
Bullet list of changes

## Testing
How tested, test results

## Screenshots (if UI changes)
Screenshots or GIFs

## Checklist
Standard checklist items
```

#### Good Example
```markdown
## Description
Add email validation to user registration flow to prevent invalid emails and duplicates.

## Type of Change
- [x] New feature (non-breaking)

## Related Issue
Closes #456

## Changes Made
### Added
- Email validation function with regex
- Database check for duplicate emails
- Unit tests for validation
- Error messages for invalid emails

### Changed
- User registration endpoint to call validation
- Registration form to show validation errors

### Fixed
- N/A

## Testing
### Unit Tests
- Valid email format: ✅ Pass
- Invalid email format: ✅ Pass
- Duplicate email: ✅ Pass
- International domains: ✅ Pass

### Integration Tests
- Registration with valid email: ✅ Pass
- Registration with invalid email: ✅ Pass
- Registration with duplicate: ✅ Pass

### Manual Testing
- Tested with various email formats
- Tested error messages display correctly

## Screenshots
[Registration form with validation error]

## Checklist
- [x] Code follows style guidelines
- [x] Self-reviewed
- [x] Comments added
- [x] Documentation updated
- [x] No new warnings
- [x] Tests added
- [x] All tests pass
```

---

## 9.2 AI-assisted Code Review

### Review Your Own PR với AI

**Prompt:**
```
Review pull request của tôi:

## PR Description
[Paste PR description]

## Files Changed
[List files with paths]

## Key Changes
[Paste important diffs]

## Context
- Feature: [description]
- Tech stack: [list]
- Related files: [list]

Review as a senior engineer:
1. **Logic Correctness:** Logic có đúng không?
2. **Code Quality:** Code quality assessment
3. **Best Practices:** Follow best practices?
4. **Security:** Security vulnerabilities?
5. **Performance:** Performance concerns?
6. **Test Coverage:** Tests adequate?
7. **Documentation:** Documentation updated?
8. **Breaking Changes:** Any breaking changes?

Provide:
- Overall assessment (Approve/Request Changes/Comment)
- Critical issues (must fix before merge)
- Suggestions (should fix)
- Nice-to-have improvements
- Specific line-by-line feedback if needed
```

### Review Peer's PR với AI

**Prompt:**
```
Help me review peer's pull request:

## PR Information
- Author: [name]
- PR Title: [title]
- PR Description: [description]

## Files Changed
[List files]

## Diff Summary
[Paste summary of changes]

## Context
- Team coding standards: [describe]
- Project architecture: [brief]

Review focus:
1. Code correctness
2. Adherence to team standards
3. Potential bugs
4. Performance issues
5. Security concerns
6. Test coverage
7. Documentation

Provide:
- Constructive feedback
- Specific issues with line numbers
- Suggestions for improvement
- Overall recommendation
```

### Automated PR Review với AI

**Prompt Template cho Automated Review:**
```
Analyze pull request for code quality issues:

## PR Diff
[Paste full diff or key sections]

## Analysis Required
1. **Bugs:** Potential bugs or logic errors
2. **Security:** Security vulnerabilities
3. **Performance:** Performance issues
4. **Code Smells:** Code smells and anti-patterns
5. **Best Practices:** Violations of best practices
6. **Style:** Style inconsistencies
7. **Documentation:** Missing or outdated documentation

Output format:
## Critical Issues (Must Fix)
- [Line X] Issue description
- [Line Y] Issue description

## Suggestions (Should Fix)
- [Line X] Suggestion
- [Line Y] Suggestion

## Nice to Have
- [Improvement 1]
- [Improvement 2]

## Overall Assessment
[Summary and recommendation]
```

---

## 9.3 Refactoring Review

### Review Refactoring Changes

**Prompt:**
```
Review refactoring changes:

## Original Code
[Paste original code]

## Refactored Code
[Paste refactored code]

## Refactoring Goals
- [Goal 1: e.g., improve readability]
- [Goal 2: e.g., reduce complexity]
- [Goal 3: e.g., improve performance]

Review criteria:
1. **Functionality Preserved:** Does it still work the same?
2. **Readability Improved:** Is it more readable?
3. **Complexity Reduced:** Is complexity reduced?
4. **Performance:** Any performance impact?
5. **Test Coverage:** Tests still pass?
6. **Breaking Changes:** Any breaking changes?

Provide:
- Assessment of refactoring quality
- Verification that functionality preserved
- Suggestions for further improvement
- Risks or concerns
```

### AI-assisted Refactoring Suggestions

**Prompt:**
```
Suggest refactoring opportunities cho code sau:

## Code
[Paste code]

## Context
- Language: [language]
- Framework: [framework]
- Performance requirements: [if any]

Suggest:
1. Functions to extract
2. Design patterns to apply
3. Code smells to fix
4. Performance improvements
5. Readability improvements

For each suggestion:
- What to change
- Why change it
- How to change it
- Expected benefit
```

---

## 9.4 AI Decision Log

### Purpose của AI Decision Log
AI Decision Log documents:
- Khi nào AI được sử dụng
- Cách AI được sử dụng
- Kết quả đạt được
- Lessons learned
- Patterns emerge over time

### Creating AI Decision Log Entry

Sử dụng template `templates/ai-decision-log.md`

### Example Entry

```markdown
### Entry: [Date] - Email Validation Feature

#### Context
- **Task:** Implement email validation for user registration
- **Goal:** Add validation to prevent invalid and duplicate emails
- **Complexity:** Medium

#### AI Usage
- **AI Tool:** ChatGPT (GPT-4)
- **Prompt Type:** Code generation, Code review, Test generation
- **Prompt Used:**
  ```
  Generate email validation function with:
  - Format validation using regex
  - Database check for duplicates
  - International domain support
  - Error handling
  ```

#### Context Provided
- **Files:** userController.js, userService.js, validation.js
- **Code snippets:** Existing registration flow
- **Additional context:** Tech stack (Node.js, Express, PostgreSQL)

#### AI Output
- **Output quality:** Good (8/10)
- **Accuracy:** High (9/10)
- **Usefulness:** High (9/10)

#### Human Verification
- **Verification method:** Code review, Unit testing, Manual testing
- **Issues found:** 
  - Regex didn't handle some edge cases
  - Error messages were generic
- **Corrections needed:** 
  - Updated regex for edge cases
  - Improved error messages

#### Decision
- **Accepted as-is:** No
- **Modified:** Yes - regex and error messages
- **Rejected:** No
- **Time saved:** ~2 hours estimated

#### Lessons Learned
- **What worked:** AI generated good initial implementation
- **What didn't work:** Regex needed manual refinement
- **Improvement for next time:** Provide more specific edge cases in prompt
```

### Analyzing AI Decision Log

**Monthly Review Questions:**
1. Which AI tool gives best results for which tasks?
2. Which prompt patterns are most effective?
3. What types of tasks benefit most from AI?
4. Where does AI struggle most?
5. How much time is being saved overall?
6. What patterns emerge in successful AI usage?

---

## 9.5 AI Reflection

### Purpose của Reflection
Reflection giúp:
- Identify what works and what doesn't
- Improve prompt engineering skills
- Build better AI workflows
- Track personal growth
- Share learnings with team

### Reflection Framework

Sử dụng template `templates/reflection-report.md`

### Key Reflection Questions

#### About AI Usage
1. Which AI tools did I use most? Why?
2. Which tasks did AI help with most?
3. Which tasks did AI struggle with?
4. How accurate was AI output?
5. How much time did AI save?

#### About Prompt Engineering
1. Which prompts worked best?
2. Which prompts needed iteration?
3. How did context affect results?
4. What prompt patterns emerged?

#### About Verification
1. How often did AI output need correction?
2. What types of issues were most common?
3. How effective was my verification process?
4. How can I improve verification?

#### About Process
1. What workflow steps worked well?
2. What steps need improvement?
3. Where did I waste time?
4. How can I streamline the process?

#### About Skills Development
1. What new skills did I develop?
2. What areas do I need to improve?
3. How confident am I with AI tools?
4. What should I learn next?

### Example Reflection

```markdown
## Reflection: Email Validation Feature

### What Went Well
- AI generated good initial implementation quickly
- Test generation with AI was very effective
- Code review with AI caught issues I missed
- Overall time saved: ~3 hours

### What Didn't Work Well
- Initial regex from AI needed manual refinement
- AI didn't consider some edge cases
- Had to iterate prompt 3 times for good results
- Verification took longer than expected

### Lessons Learned
- Provide specific edge cases in prompts
- Always verify AI-generated regex patterns
- Use AI for test generation early in process
- Build verification time into estimates

### Improvements for Next Time
- Create better prompt templates for validation
- Add edge case examples to prompts
- Use AI to verify its own output
- Document common AI pitfalls

### Skill Development
- Improved prompt engineering skills
- Better at providing context
- More efficient at verification
- More confident with AI assistance
```

---

## 9.6 Responsible AI Usage

### Security Considerations

#### Never Share with AI
- **API keys** and secrets
- **Passwords** and credentials
- **Personal data** (PII)
- **Proprietary code** (if restricted)
- **Customer data**
- **Financial information**

#### Safe Practices
- Use enterprise versions if data privacy is critical
- Sanitize code before sharing (remove secrets)
- Use placeholder values for sensitive data
- Review AI output for security issues
- Never trust AI with security-critical code without review

### Quality Assurance

#### Always Verify
- **Code correctness:** Review logic
- **Security:** Check for vulnerabilities
- **Performance:** Analyze performance impact
- **Testing:** Run comprehensive tests
- **Edge cases:** Test edge cases

#### Verification Process
```
1. AI generates code
   ↓
2. Human reads and understands
   ↓
3. Human identifies potential issues
   ↓
4. Human tests code
   ↓
5. Human reviews with AI again
   ↓
6. Human approves or requests changes
```

### Ethical Considerations

#### Transparency
- **Document AI usage** in PR descriptions
- **Attribute AI assistance** when appropriate
- **Be honest** about what AI did vs what you did
- **Don't claim AI work** as your own entirely

#### Accountability
- **You are responsible** for code you commit
- **AI is a tool**, not a replacement for judgment
- **Human must make** final decisions
- **Human must verify** all AI output

#### Dependency
- **Don't over-rely** on AI
- **Maintain technical skills**
- **Understand code** before committing
- **Be able to code** without AI if needed

### Team operating model
Để AI được dùng ổn định trong team, cần thống nhất:
- **Allowed use cases:** explain code, generate tests, draft docs, support review
- **Restricted use cases:** secrets, customer data, regulated data, security-sensitive logic
- **Approval path:** task nào cần senior approval, security review, hoặc product approval
- **Audit trail:** lưu AI Decision Log hoặc PR note cho các quyết định quan trọng
- **Escalation path:** ai xử lý khi AI tạo bug, leak, hoặc đề xuất sai nghiêm trọng

### Team norms
- Author phải chịu trách nhiệm cuối cùng với code do mình commit
- Reviewer không chấp nhận PR chỉ vì “AI đã kiểm tra rồi”
- Senior engineer hoặc maintainer nên review các thay đổi có impact lớn
- Team nên review lại prompt playbook và AI usage định kỳ

### AI Usage Guidelines

#### DO
- ✅ Use AI to accelerate development
- ✅ Use AI for learning and exploration
- ✅ Use AI for code review suggestions
- ✅ Use AI for test generation
- ✅ Use AI for documentation
- ✅ Verify all AI output
- ✅ Document AI usage
- ✅ Learn from AI responses

#### DON'T
- ❌ Share sensitive data with AI
- ❌ Trust AI output blindly
- ❌ Commit AI code without review
- ❌ Over-rely on AI for critical decisions
- ❌ Use AI to bypass learning
- ❌ Claim AI work as entirely your own
- ❌ Use AI for malicious purposes
- ❌ Ignore security implications

---

## 9.7 Building AI Workflow Maturity

### Maturity Levels

#### Level 1: Beginner
- Using AI for simple tasks
- Basic prompting
- Limited verification
- Ad-hoc usage

#### Level 2: Intermediate
- Using AI for complex tasks
- Better prompt engineering
- Systematic verification
- Some documentation

#### Level 3: Advanced
- Sophisticated prompting
- Systematic workflows
- Comprehensive verification
- Full documentation
- Team sharing

#### Level 4: Expert
- Optimized workflows
- Custom prompt libraries
- Automated verification
- Team-wide adoption
- Continuous improvement

### Progression Path

```
Level 1 → Level 2
- Learn prompt engineering basics
- Practice systematic verification
- Start documenting AI usage

### Team maturity checklist
Một team dùng AI tốt thường có:
- Prompt playbook chung cho các task lặp lại
- Checklist verification thống nhất trước merge
- Quy trình review rõ cho code, test, và security
- Metrics theo dõi chất lượng output AI và thời gian tiết kiệm
- Cơ chế học từ lỗi AI để cập nhật workflow

Level 2 → Level 3
- Build prompt playbook
- Implement AI workflows
- Share with team

Level 3 → Level 4
- Optimize workflows
- Automate where possible
- Mentor others
```

---

## 9.8 Thực hành

### Exercise 1: Review Your PR với AI
1. Create a PR for recent work
2. Use AI to review your own PR
3. Address feedback from AI
4. Update PR
5. Document in AI Decision Log

### Exercise 2: Peer Review với AI
1. Review peer's PR (or use sample PR)
2. Use AI to assist review
3. Compare AI feedback with your own
4. Combine insights
5. Provide comprehensive review

### Exercise 3: Refactoring Review
1. Refactor a piece of code
2. Use AI to review refactoring
3. Verify functionality preserved
4. Document changes
5. Reflect on process

### Exercise 4: Complete Reflection
1. Complete reflection report for recent work
2. Analyze AI Decision Log entries
3. Identify patterns
4. Set improvement goals
5. Share with mentor/peer

---

## 9.9 Resources

### Tools
- GitHub/GitLab for PRs
- AI tools: ChatGPT, Claude, Copilot
- Code review tools: SonarQube, CodeClimate

### Best Practices
- GitHub Pull Request Best Practices
- "How to Do Code Reviews" - Various sources
- Responsible AI guidelines from AI providers

---

## Quiz

1. Best practices cho PR description?
2. Làm thế nào để use AI để review PR?
3. AI Decision Log phục vụ mục đích gì?
4. Reflection questions quan trọng để ask?
5. Responsible AI usage guidelines?

---

## Course Completion

### Congratulations! 🎉

Bạn đã hoàn thành tất cả 9 modules của khóa học:
1. ✅ Generative AI & AI-Augmented Software Engineering
2. ✅ AI-Assisted Codebase Understanding
3. ✅ Project Understanding Workshop
4. ✅ Prompt Engineering for Software Engineering
5. ✅ Context Engineering & AI Coding Tools
6. ✅ Prompt Engineering Workshop
7. ✅ AI Pair Programming Workflow
8. ✅ AI-assisted Feature Development
9. ✅ Pull Request Review & AI Reflection

### Next Steps

#### Continue Learning
- Practice with real projects
- Explore advanced AI tools
- Stay updated with AI developments
- Share knowledge with team

#### Build Your AI Workflow
- Customize Prompt Playbook for your needs
- Optimize AI workflows for your team
- Document and share best practices
- Mentor others

#### Track Progress
- Maintain AI Decision Log
- Regular reflection
- Continuous improvement
- Measure impact

### Resources for Continued Learning
- AI provider documentation (OpenAI, Anthropic, etc.)
- Community forums and discussions
- Research papers on AI in Software Engineering
- Conferences and workshops

---

**Remember:** AI is a powerful tool, but you are the expert. Use AI to augment your capabilities, not replace your judgment. Always verify, always learn, always improve.
