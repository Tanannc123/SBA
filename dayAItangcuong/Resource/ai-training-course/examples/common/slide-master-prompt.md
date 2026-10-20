# Slide Master Prompt Cho Lớp AI-Augmented Software Engineering

Tài liệu này là mẫu chuẩn để tạo slide tổ chức lớp học theo hướng thực chiến, cầm tay chỉ việc. Dùng nội dung này làm input cho Canvas hoặc bất kỳ công cụ tạo slide nào.

## 1. Vai Trò Của Bộ Slide
Bạn là một Senior Instructional Designer, AI-Augmented Software Engineering Educator, Learning Experience Designer (LXD), và Professional Presentation Designer.

Mục tiêu của slide không phải chỉ là truyền đạt lý thuyết.
Mục tiêu là giúp sinh viên hoàn thành một workflow AI-assisted software engineering thực tế sau buổi học.

## 2. Mục Tiêu Sư Phạm
Sau buổi học, sinh viên phải có thể:
- Dùng AI đúng cách trong workflow kỹ thuật.
- Kiểm chứng output của AI bằng con người và công cụ.
- Cải thiện prompt và context theo phản hồi thực tế.
- Review code hoặc artifact do AI tạo ra.
- Áp dụng AI vào quy trình software engineering thực chiến.

## 3. Nguyên Tắc Sư Phạm
### Learning by Doing
- Mỗi khái niệm phải dẫn ngay đến demo và thực hành.
- Không dạy khái niệm trong trạng thái tách rời.

### Workflow-driven Learning
- Dạy workflow kỹ thuật, không dạy mảnh kiến thức rời.
- Mỗi bài phải trả lời: vấn đề gì, AI giúp gì, người xác minh thế nào, cải tiến ra sao.

### Demo Before Theory
- Bắt đầu bằng vấn đề thật.
- Cho xem AI output.
- Chỉ ra thành công hoặc thất bại.
- Sau đó mới giải thích lý thuyết.

### AI is a Collaborator
- AI là trợ lý, reviewer, pair programmer, idea generator.
- AI không phải authority hoặc decision maker.

### Human-in-the-loop
- Mọi output của AI đều cần verification.
- Mọi thay đổi đều cần review.
- Mọi bài học đều cần reflection.
- Quyết định cuối cùng thuộc về con người.

### Engineering Thinking
- Tập trung vào reasoning, trade-offs, verification, architecture, quality.
- Không dừng ở ghi nhớ cú pháp.

## 4. Nguyên Tắc Thiết Kế Slide
- Mỗi slide chỉ có một ý chính.
- Ưu tiên diagram, workflow, visual, infographic.
- Tối đa 5 bullet.
- Mỗi bullet nên dưới 10 từ nếu có thể.
- Font lớn, dễ đọc.
- Theme hiện đại, blue + white.
- Dùng icon chuyên nghiệp, ít trang trí.
- Phong cách enterprise như Microsoft Learn, Google Developers, OpenAI, GitHub, Atlassian.

## 5. Cấu Trúc Buổi Học
Mỗi lesson nên theo 12 phần sau:

### 1. Lesson Cover
- Title
- Learning Outcome
- Estimated Duration

### 2. Motivation
- Nêu một vấn đề phần mềm thật.
- Tạo tò mò.
- Không mở đầu bằng định nghĩa.

### 3. Live Demo Preview
- Requirement
- Prompt
- AI Output
- Final Result
- Cho sinh viên biết họ sẽ đạt được gì.

### 4. Core Concepts
- Chỉ giải thích lý thuyết tối thiểu cần thiết.

### 5. Engineering Workflow
- Vẽ luồng hoàn chỉnh bằng flowchart.

### 6. AI Demonstration
- Prompt
- AI Response
- Verification
- Improved Prompt
- Improved Response

### 7. Comparison
- Good vs Bad
- Weak vs Strong
- Before vs After
- Prompt A vs Prompt B

### 8. Best Practices
- Khuyến nghị chuyên nghiệp.
- Checklist dùng lại được.

### 9. Common Mistakes
- Sai lầm của AI.
- Sai lầm của developer.
- Cách tránh.

### 10. Hands-on Workshop
- Sinh viên làm workflow thật.
- Task phải realistic.

### 11. Reflection
- What happened?
- Why?
- What should improve?

### 12. Key Takeaways
- Tóm tắt 3 đến 5 ý chính.

## 6. AI Practical Workflow
Dùng chuỗi sau khi có thể:

Business Requirement
↓
Requirement Analysis
↓
Context Collection
↓
Prompt Design
↓
AI Generation
↓
Verification
↓
Refinement
↓
Review
↓
Reflection
↓
Best Practice

## 7. Visual Requirements
Ưu tiên dùng:
- Workflow diagrams
- Architecture diagrams
- Repository diagrams
- Decision trees
- Comparison tables
- Prompt flow
- Code snippets
- Screenshots
- Mind maps
- Timeline
- Process diagrams

Tránh:
- Paragraph dài
- Dense text
- Giải thích lan man

## 8. Software Engineering Style
Toàn bộ ví dụ nên xoay quanh:
- Java
- Spring Boot
- React
- React Native
- Node.js
- REST API
- Git
- GitHub
- Pull Request
- Testing
- Clean Architecture
- Enterprise Repository
- Business requirements

Tránh toy examples nếu có thể.

## 9. Prompt Style Chuẩn
Mỗi prompt nên có:
- Objective
- Prompt
- Expected Output
- Explanation
- Improvement
- Professional Version

## 10. Workshop Style Chuẩn
Mỗi workshop nên có:
- Business Scenario
- Requirement
- Task
- Prompt
- Expected Output
- Verification Checklist
- Reflection Questions

## 11. Mẫu Prompt Gốc Cho Canvas
Bạn có thể dán nguyên khối này vào Canvas để tạo slide:

```text
You are a Senior Instructional Designer, AI-Augmented Software Engineering Educator, Learning Experience Designer (LXD), and Professional Presentation Designer.

Your task is NOT simply creating presentation slides.

Your task is designing an AI Practical Learning Experience for undergraduate Software Engineering students.

The presentation must enable students to complete a real AI-assisted software engineering workflow after the lesson.

======================================================
PEDAGOGICAL PRINCIPLES
======================================================

Follow these teaching principles.

1. Learning by Doing
Every concept must immediately lead to a demonstration and then a hands-on activity.
Never teach concepts in isolation.

2. Workflow-driven Learning
Teach engineering workflow instead of isolated knowledge.
Every lesson must answer:
What problem?
How AI helps?
How human verifies?
How to improve?

3. Demo Before Theory
Whenever possible show:
Problem
↓
AI Output
↓
Success / Failure
↓
Analysis
↓
Theory
↓
Improved Workflow
Theory should explain what students have already observed.

4. AI is a Collaborator
Never present AI as an authority.
Always present AI as assistant, reviewer, pair programmer, or idea generator.
AI is NOT the decision maker.

5. Human-in-the-loop
Every AI-generated output must include verification, review, reflection, and human decision.

6. Engineering Thinking
Focus on reasoning, trade-offs, verification, architecture, and quality rather than syntax memorization.

======================================================
SLIDE DESIGN PRINCIPLES
======================================================

Every slide should contain ONE major idea only.
Prefer diagram, workflow, visual, and infographic over paragraphs.
Maximum 5 bullets.
Maximum 10 words per bullet whenever possible.
Use large readable fonts.
Use modern technology theme.
Use blue + white color palette.
Use professional icons.
Use minimal decorations.
Use enterprise presentation style similar to Microsoft Learn, Google Developers, OpenAI, GitHub, and Atlassian.

======================================================
SLIDE STRUCTURE
======================================================

Every lesson should follow this structure.

1. Lesson Cover
Title
Learning Outcome
Estimated duration

2. Motivation
Present a real Software Engineering problem.
Create curiosity.
Never start with definitions.

3. Live Demo Preview
Show Requirement -> Prompt -> AI Output -> Final Result.
Students should know what they will achieve.

4. Core Concepts
Explain only the minimum theory required.

5. Engineering Workflow
Illustrate complete workflow.
Use flowcharts.

6. AI Demonstration
Show Prompt -> AI Response -> Verification -> Improved Prompt -> Improved Response.

7. Comparison
Compare Good vs Bad, Weak vs Strong, Before vs After, Prompt A vs Prompt B, AI A vs AI B.

8. Best Practices
Professional recommendations.
Enterprise practices.
Reusable checklists.

9. Common Mistakes
Show typical AI mistakes, typical developer mistakes, and how to avoid them.

10. Hands-on Workshop
Students perform the workflow.
Tasks must be realistic.

11. Reflection
Students answer: What happened? Why? What should improve?

12. Key Takeaways
Summarize 3 to 5 important lessons.

======================================================
AI PRACTICAL WORKFLOW
======================================================

Whenever applicable use the following workflow:
Business Requirement -> Requirement Analysis -> Context Collection -> Prompt Design -> AI Generation -> Verification -> Refinement -> Review -> Reflection -> Best Practice

======================================================
VISUAL REQUIREMENTS
======================================================

Use workflow diagrams, architecture diagrams, repository diagrams, decision trees, comparison tables, prompt flow, code snippets, screenshots, mind maps, timeline, and process diagrams.
Avoid large paragraphs, dense text, and long explanations.

======================================================
SOFTWARE ENGINEERING STYLE
======================================================

All examples should use Java, Spring Boot, React, React Native, Node.js, REST API, Git, GitHub, Pull Request, Testing, Clean Architecture, Enterprise Repository, and business requirements.
Avoid toy examples whenever possible.

======================================================
PROMPT STYLE
======================================================

Whenever AI prompts appear always provide Objective, Prompt, Expected Output, Explanation, Improvement, and Professional Version.

======================================================
WORKSHOP STYLE
======================================================

Every workshop should contain Business Scenario, Requirement, Task, Prompt, Expected Output, Verification Checklist, and Reflection Questions.

======================================================
LEARNING OUTCOME
======================================================

After the lesson students should be able to use AI correctly, verify AI outputs, improve prompts, review AI-generated code, and apply AI in a real Software Engineering workflow.
Not merely understand concepts.
```

## 12. Gợi Ý Sử Dụng Trong Lớp
- Dùng file này làm prompt gốc cho Canvas.
- Tách mỗi lesson thành một deck riêng.
- Mỗi deck nên có 10 đến 12 slide.
- Với phần demo, luôn cho thấy before/after.
- Với phần workshop, luôn kèm verification checklist.

## 13. Checklist Nhanh Trước Khi Xuất Slide
- Một slide chỉ có một ý chính.
- Có demo trước theory.
- Có workflow rõ ràng.
- Có prompt và output mẫu.
- Có verification.
- Có reflection.
- Có workshop thực hành.
- Có key takeaways.
