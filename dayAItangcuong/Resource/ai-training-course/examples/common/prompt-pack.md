# Prompt Pack Chuẩn Cho Course

Tài liệu này là bộ prompt mẫu hoàn chỉnh, dùng lại được cho các bài học trong toàn khóa. Mỗi prompt đều được thiết kế để người học chỉ cần thay phần trong ngoặc vuông là có thể dùng ngay.

## Cách dùng chung
1. Chọn đúng loại task.
2. Copy prompt mẫu.
3. Thay phần `[placeholder]` bằng dữ liệu thật từ repository hoặc bài toán.
4. Chạy prompt trên AI assistant.
5. Kiểm chứng output bằng code, test, log, hoặc review thủ công.

## 1. Prompt cho hiểu codebase
```text
Hãy phân tích repository sau theo góc nhìn kỹ sư phần mềm.

## Mục tiêu
- Hiểu mục đích của dự án.
- Xác định các module chính.
- Mô tả luồng nghiệp vụ.
- Chỉ ra dependency và rủi ro.

## Context
- Repository: [repository_name]
- Tree structure: [paste tree]
- Files quan trọng: [list file paths]
- Mục tiêu phân tích: [ví dụ: onboarding, debug, feature development]

## Đầu ra mong muốn
1. Tổng quan dự án.
2. Danh sách module chính.
3. Mối quan hệ giữa module.
4. Business workflow.
5. Rủi ro và điểm cần xác minh.
6. Gợi ý tài liệu onboarding.
```

## 2. Prompt cho phân tích requirement và chia task
```text
Hãy phân tích requirement sau và chia thành các task có thể thực hiện được.

## Requirement
[Paste requirement]

## Context
- Project: [project_name]
- Current state: [brief current state]
- Related files: [list file paths]
- Constraints: [tech, time, business]

## Đầu ra mong muốn
1. Purpose.
2. Scope.
3. Acceptance criteria.
4. Dependencies.
5. Risks.
6. Technical tasks.
7. Testing tasks.
8. Questions cần hỏi stakeholder.
```

## 3. Prompt cho prompt engineering / code generation
```text
Hãy generate implementation cho [feature_or_function].

## Requirements
[Paste detailed requirements]

## Context
- Tech stack: [stack]
- Files liên quan: [file paths]
- Existing code: [paste relevant snippets]
- Constraints: [security, performance, style]

## Output Requirements
1. Main implementation.
2. Error handling.
3. Input validation.
4. Notes về edge cases.
5. Gợi ý test cases.
```

## 4. Prompt cho explain code
```text
Hãy giải thích đoạn code sau như một senior engineer đang onboarding cho một thành viên mới.

## Code
[Paste code]

## Context
- File: [file_path]
- Module: [module_name]
- Mục tiêu: [understand, debug, modify]

## Đầu ra mong muốn
1. Mục đích của code.
2. Input/output.
3. Logic từng bước.
4. Dependencies.
5. Edge cases.
6. Điểm cần chú ý khi sửa.
```

## 5. Prompt cho code review
```text
Hãy review code sau từ góc nhìn senior software engineer.

## Code / Diff
[Paste code or diff]

## Context
- File(s): [file paths]
- Feature: [feature name]
- Risk level: [low/medium/high]

## Review checklist
1. Correctness.
2. Security.
3. Performance.
4. Maintainability.
5. Test coverage.
6. Breaking changes.
7. Readability.

## Output format
- Critical issues.
- Suggestions.
- Nice to have.
- Verification needed.
```

## 6. Prompt cho test generation
```text
Hãy tạo test cases và unit tests cho feature sau.

## Feature / Requirement
[Paste feature or requirement]

## Context
- File(s): [file paths]
- Acceptance criteria: [paste criteria]
- Test framework: [Jest/PyTest/JUnit/etc]

## Output mong muốn
1. Functional test cases.
2. Edge cases.
3. Negative cases.
4. Unit test skeleton hoặc code hoàn chỉnh.
5. Notes về mock / fixture / sample data.
```

## 7. Prompt cho documentation
```text
Hãy viết tài liệu cho module / feature sau.

## Context
- Repository: [repository_name]
- Module: [module_name]
- Audience: [new developer / QA / stakeholder]
- Purpose: [onboarding / handoff / API docs]

## Output mong muốn
1. Mục đích.
2. Cách sử dụng.
3. Dependency.
4. Setup / run instructions.
5. Known issues.
6. Changelog hoặc notes quan trọng.
```

## 8. Prompt cho PR description
```text
Hãy viết PR description cho thay đổi sau.

## Changes
[Paste summary of changes]

## Context
- Branch: [branch_name]
- Issue: [issue_id]
- Files changed: [list]
- Test results: [paste results]

## Output mong muốn
1. Description.
2. Type of change.
3. What changed.
4. Testing.
5. Risks.
6. Rollback notes.
7. Checklist.
```

## 9. Prompt cho verification và quality gate
```text
Hãy kiểm chứng xem implementation này đã đạt quality gate chưa.

## Requirements
[Paste requirements]

## Implementation
[Paste code or summary]

## Test / Review evidence
[Paste test results, screenshots, logs, review comments]

## Verify
1. Acceptance criteria đã đạt chưa?
2. Test coverage đủ chưa?
3. Security issues còn không?
4. Có breaking change không?
5. Có cần refactor không?
6. Có thể merge / release chưa?

## Output format
- Pass / Partial / Fail.
- Gaps.
- Recommendations.
- Next action.
```

## 10. Prompt cho reflection
```text
Hãy giúp tôi viết reflection sau khi hoàn thành task này.

## Task
[Paste task]

## AI Usage
- Tool used: [tool]
- Prompt used: [prompt]
- What AI did well: [notes]
- What AI missed: [notes]

## Human verification
- Checks performed: [tests / review / manual]
- Issues found: [notes]

## Output mong muốn
1. What went well.
2. What did not go well.
3. Lessons learned.
4. What to improve next time.
5. How to update prompt playbook.
```

## 11. Mẫu prompt về vibe coding
```text
Hãy hỗ trợ tôi thử nhanh một ý tưởng theo kiểu vibe coding nhưng vẫn giữ an toàn kỹ thuật.

## Idea
[Paste idea]

## Context
- Goal: [prototype / proof of concept / exploration]
- Allowed scope: [what can be changed]
- Not allowed: [security, secrets, production data]
- Files: [file paths if any]

## Yêu cầu
1. Đề xuất cách làm nhanh nhất.
2. Chỉ rõ phần nào là prototype.
3. Chỉ rõ phần nào cần verify kỹ.
4. Nêu bước kiểm chứng tối thiểu.
5. Nêu rủi ro nếu đưa vào production.
```
