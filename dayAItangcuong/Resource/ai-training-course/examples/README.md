# Hệ Thống Ví Dụ Minh Họa Cho Course

Tài liệu này là cổng vào cho toàn bộ ví dụ minh họa của khóa học. Mỗi ví dụ được thiết kế theo cùng một khuôn:

1. Mục tiêu của ví dụ
2. Bối cảnh và dữ liệu mẫu
3. Chuẩn bị môi trường hoặc công cụ
4. Các bước thực hiện chi tiết
5. Prompt mẫu hoặc thao tác mẫu
6. Cách kiểm chứng kết quả
7. Kết quả mong đợi
8. Sai lầm thường gặp và cách tránh

## Nguyên tắc thiết kế ví dụ
- Bám theo workflow thực chiến, không chỉ mô tả lý thuyết.
- Ưu tiên sample repository khi bài học liên quan đến codebase, workflow, prompt, review và verification.
- Chỉ dùng ví dụ riêng biệt khi nội dung không gắn trực tiếp với sample repository, ví dụ như prompt template, reflection, hoặc quản trị AI.
- Mỗi ví dụ phải có dữ liệu đầu vào mẫu, prompt hoặc thao tác mẫu, và cách kiểm chứng đầu ra.
- Có thể dùng lại ví dụ như một bài lab độc lập hoặc gắn vào bài giảng chính.

## Cấu trúc thư mục khuyến nghị
- `common/`: mẫu format dùng chung cho mọi ví dụ
- `course-1/`: ví dụ cho nền tảng AI-Augmented Software Engineering
- `course-2/`: ví dụ cho debugging, testing, documentation
- `course-3/`: ví dụ cho design, configuration, architecture
- `final-project/`: ví dụ tích hợp end-to-end

## Cách sử dụng
- Bắt đầu với `common/example-template.md` để hiểu format chuẩn.
- Dùng `common/lab-sheet-template.md` nếu cần triển khai bài tập step-by-step chi tiết hơn.
- Dùng `common/slide-master-prompt.md` nếu cần tạo slide lớp học trên Canvas.
- Dùng `common/slide-lecture-master-prompt.md` nếu cần tạo deck PPTX giảng giải lý thuyết cho giảng viên.
- Mở file ví dụ theo module trước khi học phần tương ứng.
- Với bài có sample repository, dùng repository đó làm bối cảnh chính.
- Với bài về prompt, copy prompt mẫu và thay phần placeholder bằng context thực tế.
- Sau khi thực hành, so sánh kết quả với mục “Verification” trong từng ví dụ.

## Completed Samples
- [Completed Samples Home](completed-samples/README.md)
- [Project Understanding Report - Complete](completed-samples/course-1/project-understanding-report-complete.md)
- [Prompt Playbook - Complete](completed-samples/course-1/prompt-playbook-complete.md)
- [AI Decision Log - Complete](completed-samples/course-1/ai-decision-log-complete.md)
- [Reflection Report - Complete](completed-samples/course-1/reflection-report-complete.md)
- [PR Description & Verification - Complete](completed-samples/course-1/pr-description-and-verification-complete.md)
- [Worked Example - Prompt Refinement](completed-samples/course-1/worked-example-prompt-refinement.md)
- [Worked Example - Context Packing](completed-samples/course-1/worked-example-context-packing.md)
- [Worked Example - PR Review](completed-samples/course-1/worked-example-pr-review.md)

## Danh mục ví dụ

### Course 1
- [Lab sheet template](common/lab-sheet-template.md)
- [Slot 1 Canvas Slide Prompt (Modules 1-2-3)](course-1/slot-1-canvas-slide-prompt.md)
- [Slot 2 Canvas Slide Prompt (Modules 4-5-6)](course-1/slot-2-canvas-slide-prompt.md)
- [Slot 3 Canvas Slide Prompt (Modules 6-7-8)](course-1/slot-3-canvas-slide-prompt.md)
- [3 Slot Workshop Outline](course-1/course-1-3-slot-workshop-outline.md)
- [Course 1 Workshop System](course-1/workshops/README.md)
- [Mẫu ví dụ chuẩn](common/example-template.md)
- [Module 1 - Tổng quan AI-Augmented Software Engineering](course-1/module-1-overview.md)
- [Module 2 - Codebase Understanding](course-1/module-2-codebase-understanding.md)
- [Module 3 - Project Understanding Workshop](course-1/module-3-project-understanding-workshop.md)
- [Module 4 - Prompt Engineering](course-1/module-4-prompt-engineering.md)
- [Module 5 - Context Engineering](course-1/module-5-context-engineering.md)
- [Module 6 - Prompt Engineering Workshop](course-1/module-6-prompt-engineering-workshop.md)
- [Module 7 - AI Pair Programming Workflow](course-1/module-7-ai-pair-programming.md)
- [Module 8 - AI-assisted Feature Development](course-1/module-8-feature-development.md)
- [Module 9 - PR Review & AI Reflection](course-1/module-9-pr-review-and-reflection.md)

### Course 2
- [Debugging with AI](course-2/debugging-with-ai.md)
- [Testing with AI](course-2/testing-with-ai.md)
- [Documentation & Dependency Management](course-2/documentation-and-dependency-management.md)

### Course 3
- [Serialization & Configuration-Driven Development](course-3/serialization-and-configuration.md)
- [Database Design with AI](course-3/database-design-with-ai.md)
- [Design Patterns & Architecture Review](course-3/design-patterns-and-architecture-review.md)

### Final Project
- [AI-Assisted Software Engineering Project](final-project/ai-assisted-software-engineering-project.md)

## Ghi chú quan trọng
- Khi nội dung liên quan trực tiếp đến source code, ưu tiên sample repository.
- Khi nội dung liên quan đến prompt, template, review hoặc reflection, có thể dùng ví dụ tổng quát hoặc giả lập.
- Không đưa secret, dữ liệu nhạy cảm hoặc thông tin riêng tư vào ví dụ.
