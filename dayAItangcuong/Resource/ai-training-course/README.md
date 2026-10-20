# Khóa Đào Tạo: Ứng Dụng AI Tăng Cường Vào Lập Trình

## Tổng quan khóa học

Khóa học này được thiết kế để đào tạo nhân viên mới và sinh viên học việc về cách áp dụng Generative AI và AI-Augmented Software Engineering vào quy trình phát triển phần mềm.

## Mục tiêu khóa học

Sau khi hoàn thành khóa học, học viên có thể:
- Hiểu vai trò của Generative AI trong Software Engineering hiện đại
- Sử dụng AI Coding Assistants để khám phá và hiểu codebase
- Thiết kế và cải tiến prompt hiệu quả cho các tác vụ lập trình
- Áp dụng AI Pair Programming Workflow trong phát triển tính năng
- Đánh giá và xác minh kết quả do AI sinh ra
- Xây dựng các engineering artifacts chuyên nghiệp
- Sử dụng AI một cách có trách nhiệm và an toàn

## Tổng quan toàn chương trình AI-Augmented SE

Chương trình gồm 4 học phần chính theo lộ trình từ nền tảng đến tích hợp thực chiến:

### Course 1 - Foundations & Core Workflow (Nội dung chính hiện tại)
- Trọng tâm: xây nền tảng AI-Augmented Software Engineering end-to-end.
- Phạm vi: 9 modules từ hiểu AI, hiểu codebase, prompt/context engineering, đến feature development và PR review.
- Trạng thái tài nguyên: đầy đủ nhất trong repository hiện tại.

### Course 2 - Engineering Productivity with AI
- Trọng tâm: tăng năng suất kỹ thuật với AI cho kiểm thử, tài liệu và quản lý phụ thuộc.
- Syllabus đề xuất:
	- Testing with AI
		- Functional Testing
		- Exploratory Testing
		- Automated Testing
		- Performance & Security Testing (mức mở rộng)
		- Hoạt động: sinh test cases, boundary tests, edge cases, unit tests, integration tests cho bài toán enrollment/payment
		- Deliverable: Test Strategy Document
	- Documentation & Dependency Management
		- Code Documentation
		- API Documentation
		- Dependency Analysis
		- Knowledge Transfer
		- Hoạt động: dùng AI tạo README, API Docs, Developer Guide, Dependency Report, Module Dependency Overview
		- Deliverable: Developer Handbook
- Trạng thái tài nguyên: có phần examples theo chủ đề.
- Đường dẫn hiện có:
	- `examples/course-2/debugging-with-ai.md`
	- `examples/course-2/testing-with-ai.md`
	- `examples/course-2/documentation-and-dependency-management.md`

### Course 3 - Advanced Engineering Design with AI
- Trọng tâm: thiết kế hệ thống nâng cao với AI, tập trung vào configuration, database và architecture review.
- Syllabus đề xuất:
	- Serialization & Configuration-Driven Development
		- JSON, XML, YAML
		- Serialization/Deserialization
		- Configuration Design
		- Hoạt động: thiết kế cấu hình cho LMS (JSON -> YAML, schema validation, cấu hình theo môi trường Dev/Test/Prod)
		- Deliverable: Configuration Design Package
		- Phạm vi: không triển khai Config Loader để đảm bảo tiến độ phiên học
	- Database Design with AI
		- Data Modeling
		- Schema Design
		- Query Design
		- Sample Data Generation
		- Hoạt động: case study Online Learning Platform (thiết kế ERD, chuẩn hóa dữ liệu, sinh SQL scripts, tối ưu truy vấn)
		- Deliverable: Database Design Document
	- Design Patterns & Architecture Review
		- Factory Pattern
		- Strategy Pattern
		- Code Smells
		- Architecture Review
		- Hoạt động: phân tích codebase có code smell, đề xuất pattern phù hợp, refactor theo khuyến nghị
		- Deliverable: Architecture Refactoring Proposal
		- Phạm vi: ưu tiên Factory và Strategy, tránh dàn trải quá nhiều pattern
- Trạng thái tài nguyên: có phần examples theo chủ đề.
- Đường dẫn hiện có:
	- `examples/course-3/serialization-and-configuration.md`
	- `examples/course-3/database-design-with-ai.md`
	- `examples/course-3/design-patterns-and-architecture-review.md`

### Final Project - Capstone Integration
- Trọng tâm: tích hợp toàn bộ kỹ năng của 3 course vào một dự án AI-Assisted Software Engineering hoàn chỉnh.
- Hình thức triển khai:
	- Nhóm 3-4 sinh viên làm việc trên cùng một codebase
	- Thực hiện trọn chuỗi: hiểu hệ thống -> thiết kế feature -> coding với AI -> testing -> documentation -> architecture review
	- Bắt buộc ghi nhận quá trình dùng AI và verification
- Deliverable:
	- Final Presentation
	- Project Package
	- Prompt Log
	- Reflection Report về việc sử dụng AI
- Trạng thái tài nguyên: có đề mục final project để triển khai tổng hợp.
- Đường dẫn hiện có:
	- `examples/final-project/ai-assisted-software-engineering-project.md`

## Course 1 - Cấu trúc chi tiết (Nội dung chính trong tài nguyên)

### Module 1: Generative AI & AI-Augmented Software Engineering
- Giới thiệu về Generative AI
- LLM cho Software Engineers
- AI Pair Programmer concept
- AI trong Software Development Life Cycle (SDLC)
- Các AI Coding Assistants phổ biến

### Module 2: AI-Assisted Codebase Understanding
- Chiến lược khám phá Repository
- Phân tích cấu trúc Repository
- Module Map
- Business Workflow
- Giải thích code với AI
- Xác minh kết quả AI
- Onboarding Notes

### Module 3: Project Understanding Workshop
- Phân tích Repository
- Trình bày dự án
- Review kỹ thuật
- Peer Review
- Reflection

### Module 4: Prompt Engineering for Software Engineering
- Zero-shot Prompting
- Few-shot Prompting
- System Prompt
- Role Prompt
- Best Practices thiết kế Prompt

### Module 5: Context Engineering & AI Coding Tools
- File Context
- Module Context
- Repository Context
- Quản lý Context Window
- Lựa chọn AI Coding Assistant
- So sánh và xác minh output AI

### Module 6: Prompt Engineering Workshop
- Xây dựng Prompt Playbook
- Prompt cho Explain Code
- Prompt cho Code Review
- Prompt cho Generate Test Cases
- Prompt cho Generate Documentation

### Module 7: AI Pair Programming Workflow
- Phân tích yêu cầu
- Workflow Prompt → Code
- Human-in-the-loop
- AI Verification Checklist
- Pull Request Workflow

### Module 8: AI-assisted Feature Development
- Phân tích yêu cầu
- User Story
- Generate Test Cases
- AI Generate Code
- Code Review
- Verification
- Refactoring
- Commit

### Module 9: Pull Request Review & AI Reflection
- Pull Request Best Practices
- AI-assisted Code Review
- Refactoring Review
- AI Decision Log
- AI Reflection
- Responsible AI Usage

## Cấu trúc thư mục

```
ai-training-course/
├── modules/           # Tài liệu chi tiết từng module
├── templates/         # Các template tài liệu
├── examples/          # Ví dụ thực hành
├── resources/         # Tài liệu tham khảo
└── README.md         # File này
```

## Bảng mô tả cấu trúc tài nguyên

Để AI hoặc giảng viên đọc một nơi và hiểu đầy đủ path + mục đích + vị trí mô tả hiện tại, dùng file:

- `RESOURCE_STRUCTURE_TABLE.md`

## Cách sử dụng

1. Bắt đầu với Module 1 để hiểu cơ bản về Generative AI
2. Thực hành từng module theo thứ tự
3. Sử dụng các template trong thư mục `templates/` để tạo artifacts
4. Tham khảo các ví dụ trong thư mục `examples/`
5. Xây dựng Prompt Playbook cá nhân của bạn

## Người hướng dẫn

Khóa học được thiết kế bởi chuyên gia AI và Software Engineering với mục tiêu đào tạo thế hệ kỹ sư phần mềm mới làm chủ công nghệ AI tăng cường.

## License

Nội dung khóa học dành cho mục đích đào tạo nội bộ.
