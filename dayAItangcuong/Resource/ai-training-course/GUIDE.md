# Hướng Dẫn Sử Dụng Khóa Học

## Cách bắt đầu

### Bước 1: Khám phá cấu trúc khóa học
```
ai-training-course/
├── README.md                    # Tổng quan khóa học
├── GUIDE.md                     # File này - hướng dẫn sử dụng
├── modules/                     # Tài liệu chi tiết 9 modules
│   ├── module-1-generative-ai-basics.md
│   ├── module-2-codebase-understanding.md
│   ├── module-3-project-understanding-workshop.md
│   ├── module-4-prompt-engineering.md
│   ├── module-5-context-engineering.md
│   ├── module-6-prompt-engineering-workshop.md
│   ├── module-7-ai-pair-programming-workflow.md
│   ├── module-8-ai-assisted-feature-development.md
│   └── module-9-pr-review-ai-reflection.md
├── templates/                   # Templates tài liệu
│   ├── project-understanding-report.md
│   ├── prompt-playbook.md
│   ├── ai-decision-log.md
│   └── reflection-report.md
├── examples/                    # Ví dụ thực hành (sẽ thêm sau)
└── resources/                   # Tài liệu tham khảo (sẽ thêm sau)
```

### Bước 2: Đọc README.md
Bắt đầu bằng việc đọc `README.md` để hiểu tổng quan về khóa học, mục tiêu và cấu trúc.

### Bước 2.1: Đọc bảng mô tả cấu trúc
Để tra nhanh toàn bộ path, nội dung và mục đích từng phần, đọc `RESOURCE_STRUCTURE_TABLE.md`.

### Bước 3: Làm theo từng module
Khóa học được thiết kế để học theo thứ tự từ Module 1 đến Module 9. Mỗi module xây dựng trên kiến thức từ module trước.

---

## Lộ trình học tập đề xuất

### Tuần 1: Foundations (Module 1-2)
- **Module 1:** Generative AI & AI-Augmented Software Engineering
  - Thời gian: 2-3 giờ
  - Output: Hiểu cơ bản về AI Coding Assistants
  
- **Module 2:** AI-Assisted Codebase Understanding
  - Thời gian: 4-6 giờ
  - Output: Khả năng hiểu codebase với AI

### Tuần 2: Application (Module 3-4)
- **Module 3:** Project Understanding Workshop
  - Thời gian: 4-6 giờ
  - Output: Project Understanding Report hoàn chỉnh
  
- **Module 4:** Prompt Engineering for Software Engineering
  - Thời gian: 3-4 giờ
  - Output: Kỹ năng prompt engineering

### Tuần 3: Advanced (Module 5-6)
- **Module 5:** Context Engineering & AI Coding Tools
  - Thời gian: 3-4 giờ
  - Output: Hiểu context và chọn tool phù hợp
  
- **Module 6:** Prompt Engineering Workshop
  - Thời gian: 4-6 giờ
  - Output: Prompt Playbook cá nhân

### Tuần 4: Practice (Module 7-8)
- **Module 7:** AI Pair Programming Workflow
  - Thời gian: 3-4 giờ
  - Output: Hiểu workflow end-to-end
  
- **Module 8:** AI-assisted Feature Development
  - Thời gian: 8-12 giờ
  - Output: Feature hoàn chỉnh với AI

### Tuần 5: Mastery (Module 9)
- **Module 9:** Pull Request Review & AI Reflection
  - Thời gian: 4-6 giờ
  - Output: Quy trình hoàn thiện và reflection

---

## Cách sử dụng từng module

### 1. Đọc tài liệu module
Mỗi module có cấu trúc:
- Mục tiêu học tập
- Nội dung chi tiết
- Ví dụ và prompt templates
- Thực hành (Exercises)
- Quiz
- Resources

### 2. Thực hành exercises
Mỗi module có exercises để thực hành:
- Làm exercises theo thứ tự
- Document kết quả
- Reflect về quá trình

### 3. Sử dụng templates
Sử dụng templates trong thư mục `templates/`:
- Copy template
- Fill với thông tin của bạn
- Lưu vào workspace của bạn

### 4. Quiz
Làm quiz cuối mỗi module để:
- Kiểm tra hiểu biết
- Identify gaps
- Review lại nếu cần

---

## Cách sử dụng templates

### Project Understanding Report
1. Copy `templates/project-understanding-report.md`
2. Fill với thông tin về project bạn đang phân tích
3. Sử dụng AI để help fill các sections
4. Review và refine

### Prompt Playbook
1. Copy `templates/prompt-playbook.md`
2. Add prompts bạn đã test và refined
3. Categorize theo task types
4. Update regularly với new prompts

### AI Decision Log
1. Copy `templates/ai-decision-log.md`
2. Create entry mỗi khi bạn sử dụng AI cho task quan trọng
3. Document: task, prompt, context, output, verification
4. Review định kỳ để identify patterns

### Reflection Report
1. Copy `templates/reflection-report.md`
2. Complete sau mỗi module hoặc sau mỗi feature
3. Answer reflection questions honestly
4. Set goals cho improvement

---

## Công cụ cần thiết

### Bắt buộc
- **AI Coding Assistant:** Ít nhất 1 tool (ChatGPT, Claude, hoặc Copilot)
- **Code Editor:** VS Code, JetBrains, hoặc tương đương
- **Git:** Để version control
- **Repository:** Một project để thực hành (có thể là open-source)

### Khuyến nghị
- **Nhiều AI tools:** So sánh và chọn tool phù hợp
- **Testing framework:** Jest, PyTest, hoặc tương đương
- **Diagram tools:** Draw.io, Mermaid, hoặc tương đương

---

## Tips để học hiệu quả

### 1. Learn by doing
- Đừng chỉ đọc - hãy thực hành
- Áp dụng vào project thực tế
- Experiment với different approaches

### 2. Iterate và refine
- Prompt đầu tiên thường không perfect
- Iterate và refine dựa trên results
- Document what works và what doesn't

### 3. Verify luôn
- Không trust AI output blindly
- Luôn verify correctness
- Test thoroughly

### 4. Document
- Document AI usage
- Document learnings
- Document patterns

### 5. Share và learn
- Share với team/peers
- Get feedback
- Learn từ others

---

## Common pitfalls và cách tránh

### Pitfall 1: Over-relying on AI
**Problem:** Trust AI output without verification
**Solution:** Luôn verify, test, và review

### Pitfall 2: Insufficient context
**Problem:** Không cung cấp đủ context cho AI
**Solution:** Cung cấp context đầy đủ: code, requirements, constraints

### Pitfall 3: Poor prompts
**Problem:** Prompts quá vague hoặc unclear
**Solution:** Sử dụng prompt engineering techniques từ Module 4

### Pitfall 4: Not documenting
**Problem:** Không document AI usage và learnings
**Solution:** Sử dụng AI Decision Log và Reflection Report

### Pitfall 5: Skipping verification
**Problem:** Skip verification để save time
**Solution:** Verification là critical step, không skip

---

## Đánh giá tiến độ

### Self-assessment checklist
Sau mỗi module, đánh giá:
- [ ] Hiểu concepts được dạy
- [ ] Hoàn thành exercises
- [ ] Áp dụng vào thực tế
- [ ] Document learnings
- [ ] Pass quiz

### Skill progression
Track skills development:
- **Module 1-2:** Foundations - Understanding AI và codebase
- **Module 3-4:** Application - Prompt engineering và analysis
- **Module 5-6:** Advanced - Context và prompt optimization
- **Module 7-8:** Practice - Workflow và feature development
- **Module 9:** Mastery - Review và reflection

---

## Getting help

### Nếu stuck
1. Review module content lại
2. Try different approaches
3. Ask AI for clarification
4. Discuss với peers/mentor

### Resources
- Module documentation
- AI tool documentation
- Online communities
- Team members

---

## Tùy chỉnh cho team

### Customize cho tech stack
- Adjust examples cho tech stack của team
- Add team-specific prompts
- Customize templates cho team standards

### Customize cho experience level
- Beginners: Spend more time trên foundations
- Intermediate: Focus trên advanced techniques
- Advanced: Focus trên optimization và mentoring

### Customize cho project type
- Backend: Focus trên API, database, services
- Frontend: Focus trên UI, components, state
- Full-stack: Balance cả hai

---

## Next steps sau khóa học

1. **Apply vào daily work:** Sử dụng AI workflows hàng ngày
2. **Build team playbook:** Create team-wide Prompt Playbook
3. **Mentor others:** Share knowledge với team
4. **Stay updated:** Theo dõi AI developments
5. **Continuous improvement:** Regularly refine workflows

---

## Support

Nếu có questions hoặc feedback:
- Review module documentation
- Check examples và resources
- Discuss với team
- Provide feedback để improve khóa học

---

**Chúc bạn học tập hiệu quả!**

Remember: AI là công cụ powerful, nhưng bạn là expert. Sử dụng AI để augment capabilities của bạn, không replace judgment của bạn.
