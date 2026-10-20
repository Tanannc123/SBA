# Module 1: Generative AI & AI-Augmented Software Engineering

Module 1 là học phần mở đầu của Course 1. Nội dung được thiết kế để xây nền tảng tư duy, công cụ và workflow cho toàn bộ chương trình học, đồng thời tạo cầu nối sang Course 2, Course 3 và Final Project.

## Mục tiêu học tập

Sau khi hoàn thành module này, sinh viên có thể:
- Hiểu bản chất của Generative AI và Large Language Models (LLMs)
- Phân biệt AI truyền thống và Generative AI
- Giải thích được vì sao AI đang thay đổi ngành Software Engineering
- Hiểu khái niệm AI-Augmented Software Engineering và AI Pair Programming
- Mô tả được vai trò của AI trong từng giai đoạn của Software Development Lifecycle (SDLC)
- Phân biệt các mức độ tích hợp AI (AI Integration Levels 0–5)
- Hiểu nguyên lý hoạt động cơ bản của LLM và các giới hạn của AI
- Nhận biết các xu hướng AI trong phát triển phần mềm đến năm 2026

---

## 1.1 Course Overview

### Tại sao học phần này được xây dựng?

Trong khoảng hơn một thập kỷ qua, ngành Công nghệ Phần mềm đã trải qua nhiều bước chuyển mình quan trọng. Ban đầu, lập trình viên chủ yếu làm việc với các công cụ hỗ trợ như IDE, hệ thống quản lý phiên bản (Git), framework và thư viện mã nguồn mở. Những công cụ này giúp tăng năng suất nhưng không trực tiếp tham gia vào quá trình tư duy và ra quyết định kỹ thuật.

Sự xuất hiện của các mô hình ngôn ngữ lớn (Large Language Models - LLMs) và các AI Coding Assistants như ChatGPT, Claude Code, GitHub Copilot hay Cursor đã tạo ra một bước ngoặt mới. AI không còn chỉ là công cụ hỗ trợ tìm kiếm thông tin mà đã trở thành một đối tác kỹ thuật (AI Pair Programmer) có khả năng tham gia vào nhiều hoạt động trong vòng đời phát triển phần mềm.

Ngày nay, một kỹ sư phần mềm không chỉ cần biết lập trình mà còn cần biết cách cộng tác hiệu quả với AI để nâng cao năng suất, chất lượng và khả năng giải quyết vấn đề.

Chính vì vậy, học phần này được xây dựng nhằm trang bị cho sinh viên tư duy và kỹ năng làm việc trong môi trường AI-Augmented Software Engineering.

### Từ Software Engineer đến AI-Augmented Software Engineer

Có thể hình dung sự phát triển của nghề lập trình viên qua ba giai đoạn:

| Giai đoạn | Đặc điểm |
|-----------|----------|
| **Traditional Software Engineer** | Lập trình, kiểm thử và thiết kế chủ yếu dựa trên kinh nghiệm cá nhân và tài liệu kỹ thuật. |
| **AI-Assisted Software Engineer** | Sử dụng AI như một công cụ hỗ trợ để tra cứu, sinh mã nguồn hoặc giải thích mã. |
| **AI-Augmented Software Engineer** | Chủ động phối hợp với AI trong toàn bộ quy trình phát triển phần mềm, đồng thời chịu trách nhiệm kiểm chứng và ra quyết định kỹ thuật. |

**Điểm khác biệt quan trọng nhất** nằm ở vai trò của con người. AI-Augmented Software Engineer không giao toàn bộ công việc cho AI mà biết cách:
- Lựa chọn công cụ AI phù hợp
- Thiết kế prompt hiệu quả
- Cung cấp ngữ cảnh đầy đủ
- Kiểm chứng kết quả
- Tích hợp đầu ra của AI vào quy trình phát triển phần mềm một cách an toàn và có trách nhiệm

### Mục tiêu của Module 1

Module 1 tập trung vào ba năng lực nền tảng trước khi sinh viên bắt đầu phát triển phần mềm với AI:

1. **Hiểu hệ thống (Codebase Understanding)**
   Sinh viên học cách sử dụng AI để khám phá repository, phân tích cấu trúc dự án, xác định các module và mô tả quy trình nghiệp vụ.

2. **Giao tiếp với AI (Prompt & Context Engineering)**
   Sinh viên học cách xây dựng prompt và cung cấp ngữ cảnh phù hợp để AI hiểu đúng bài toán kỹ thuật.

3. **Cộng tác với AI (AI Pair Programming)**
   Sinh viên thực hành quy trình làm việc giữa lập trình viên và AI, từ phân tích yêu cầu đến tạo Pull Request.

Ba năng lực này là nền tảng để tiếp tục các nội dung nâng cao ở Course 2 (Debugging, Testing, Documentation) và Course 3 (System Design, Database Design, Architecture Review).

### Kết quả học tập mong đợi

Sau khi hoàn thành Module 1, sinh viên có thể:
- Phân tích và hiểu một codebase với sự hỗ trợ của AI
- Thiết kế prompt chuyên nghiệp cho các tác vụ Software Engineering
- Áp dụng Context Engineering để cải thiện chất lượng phản hồi của AI
- Làm việc theo quy trình AI Pair Programming có sự kiểm chứng của con người
- Xây dựng các engineering artifacts như Project Understanding Report, Prompt Playbook và AI Decision Log

### Tổng quan toàn bộ chương trình Course 1, 2, 3 và Final Project

Module 1 không chỉ giới thiệu nền tảng cho Course 1 mà còn giúp người học nhìn thấy bức tranh toàn bộ của chương trình đào tạo. Sau khi hoàn thành Course 1, sinh viên sẽ tiếp tục sang Course 2 và Course 3 để mở rộng năng lực AI-Augmented Software Engineering từ hiểu hệ thống sang debug, testing, documentation, design và architecture review. Cuối chương trình là Final Project, nơi người học tổng hợp toàn bộ kỹ năng đã học để làm việc trên một project thực tế với AI.

#### Course 2: AI for Debugging, Testing & Documentation
Course 2 tập trung vào các tác vụ hỗ trợ chất lượng phần mềm và xử lý vấn đề trong môi trường thực tế.

**Mục tiêu:**
- Sử dụng AI để phân tích bug, log và stack trace
- Tự động hóa một phần quá trình testing và kiểm thử chất lượng
- Tạo tài liệu kỹ thuật và phân tích dependency một cách có hệ thống

**Topics / subtopics:**
- Debugging & Incident Investigation with AI
  - Root Cause Analysis
  - Stack Trace Analysis
  - Log Analysis
  - AI Reliability
- Testing with AI
  - Functional Testing
  - Exploratory Testing
  - Automated Testing
  - Performance & Security Testing
- Documentation & Dependency Management
  - Code Documentation
  - API Documentation
  - Dependency Analysis
  - Knowledge Transfer

**Kết quả sau học:**
- Có thể dùng AI để điều tra incident và xác định nguyên nhân gốc
- Có thể tạo test strategy và test case cho nhiều loại hệ thống
- Có thể tạo bộ tài liệu bàn giao, onboarding và dependency report

#### Course 3: AI for Design, Configuration & Architecture
Course 3 đưa người học lên mức cao hơn, tập trung vào thiết kế dữ liệu, cấu hình hệ thống và đánh giá kiến trúc.

**Mục tiêu:**
- Sử dụng AI để hỗ trợ thiết kế cấu hình và dữ liệu
- Tạo schema, query và data model phù hợp với bài toán
- Phân tích design pattern và architecture smell để đề xuất refactoring

**Topics / subtopics:**
- Serialization & Configuration-Driven Development
  - JSON
  - XML
  - YAML
  - Serialization / Deserialization
  - Configuration Design
- Database Design with AI
  - Data Model
  - Schema Design
  - Query Design
  - Sample Data Generation
- Design Patterns & Architecture Review
  - Factory Pattern
  - Strategy Pattern
  - Code Smells
  - Architecture Review

**Kết quả sau học:**
- Có thể thiết kế cấu hình và serialization một cách bài bản với AI hỗ trợ
- Có thể hỗ trợ tạo và review database design cho một ứng dụng
- Có thể nhận diện pattern phù hợp và đề xuất refactor kiến trúc ở mức cơ bản

#### Final Project: AI-Assisted Software Engineering Project
Đây là phần tổng hợp cuối cùng của toàn bộ chương trình.

**Mục tiêu:**
- Áp dụng toàn bộ kỹ năng từ Course 1, 2 và 3 vào một project thực tế
- Tự lên kế hoạch, coding, testing, documentation và architecture review với AI
- Thể hiện khả năng làm việc độc lập nhưng có kiểm chứng khi dùng AI trong phát triển phần mềm

**Nội dung chính:**
- Hiểu hệ thống và chọn feature cần làm
- Thiết kế feature và coding với AI
- Testing, documentation và architecture review
- Hoàn thiện project package và trình bày kết quả

**Deliverables:**
- Final Presentation
- Project Package
- Prompt Log
- Reflection Report

**Kết quả sau học:**
- Hoàn thành một sản phẩm tích hợp năng lực AI-Augmented Software Engineering
- Có portfolio thể hiện quy trình làm việc, chất lượng kỹ thuật và khả năng phản tư
- Sẵn sàng áp dụng AI vào dự án thực tế với tư duy chuyên nghiệp và có trách nhiệm

### AI-Augmented Software Engineering bao gồm những gì?

Ở mức tổng quát, AI-Augmented Software Engineering là cách dùng AI để tăng tốc và tăng chất lượng cho các hoạt động kỹ thuật trong toàn bộ vòng đời phát triển phần mềm. Người học cần hiểu rằng AI không chỉ dùng để viết code, mà còn hỗ trợ nhiều nhóm việc khác nhau trong team.

#### Các nhóm việc cốt lõi
- **Hiểu và phân tích codebase:** đọc repository, map module, trace luồng nghiệp vụ, xác định dependency
- **Phân tích requirement và chia task:** làm rõ scope, tách user story, ước lượng công việc
- **Viết prompt hiệu quả:** thiết kế prompt rõ mục tiêu, ràng buộc và đầu ra mong muốn
- **Cung cấp context đúng mức:** chọn file, module, diagram, snippet và metadata phù hợp
- **Generate code:** sinh function, class, service, API, component hoặc script
- **Generate test case và unit test:** tạo test scenario, edge case, integration test và unit test
- **Code review và security review:** rà logic, bug, performance, security và best practices
- **Refactor:** làm sạch cấu trúc, giảm độ phức tạp, tách hàm, cải thiện maintainability
- **Viết tài liệu:** README, API docs, onboarding notes, technical summary
- **PR description và release prep:** viết mô tả PR, checklist, changelog, rollback notes
- **Verification, quality gate, reflection:** kiểm chứng kết quả, pass checklist, ghi nhận bài học và cải tiến workflow

#### Công cụ và công nghệ thường dùng
- **AI coding assistants:** GitHub Copilot, ChatGPT, Claude, Cursor, Claude Code và các tool tương đương
- **IDE / Editor:** VS Code, JetBrains IDEs
- **Version control và collaboration:** Git, GitHub, GitLab, Pull Request / Merge Request
- **Testing tools:** Jest, PyTest, JUnit, Mocha, Cypress, Playwright
- **Code quality và security tools:** linters, formatters, static analysis, dependency scanning, secret scanning
- **Documentation và workflow tools:** Markdown, Mermaid, prompt playbook, AI Decision Log, issue tracker

#### Phương pháp làm việc nhanh như vibe coding
- Dùng AI để **khám phá ý tưởng nhanh**, dựng prototype và thử nhiều hướng giải quyết trong thời gian ngắn
- Ưu tiên **iteration nhanh**: prompt → output → review → refine
- Chỉ dùng vibe coding cho giai đoạn khám phá hoặc tạo bản nháp ban đầu, **không thay thế** verification, testing và review
- Luôn có **human-in-the-loop**, đặc biệt với code chạm vào security, data, release hoặc logic nghiệp vụ quan trọng

#### Kết luận thực hành
Muốn làm việc hiệu quả trong AI-Augmented Software Engineering, người học cần phối hợp đồng thời 4 năng lực: hiểu hệ thống, giao tiếp với AI, kiểm chứng output, và vận hành workflow theo chuẩn team.

---

## 1.2 Generative AI là gì?

### Định nghĩa
Generative AI là loại AI có khả năng tạo ra nội dung mới (text, code, images, etc.) dựa trên dữ liệu training và prompt từ người dùng.

### Cách hoạt động
1. **Training:** Model học từ lượng lớn dữ liệu (code, documentation, etc.)
2. **Inference:** Model sinh ra output dựa trên input (prompt) và knowledge đã học
3. **Context awareness:** Model hiểu context từ conversation và files được cung cấp

### Các loại Generative AI
- **Text generation:** ChatGPT, Claude, Gemini
- **Code generation:** GitHub Copilot, CodeWhisperer
- **Multimodal:** GPT-4V, Gemini Pro (text + image + code)

---

## 1.3 Phân biệt AI Truyền thống và Generative AI

### AI Truyền thống (Traditional AI)

**Đặc điểm:**
- Tập trung vào phân tích và phân loại dữ liệu
- Sử dụng rules được định nghĩa trước hoặc machine learning models
- Output thường là prediction, classification, hoặc recommendation
- Không tạo ra nội dung mới
- Ví dụ: Recommendation systems, Spam filters, Image classification

**Ứng dụng trong Software Engineering:**
- Static code analysis (SonarQube, ESLint)
- Bug detection patterns
- Code quality metrics
- Automated testing frameworks

### Generative AI

**Đặc điểm:**
- Tập trung vào tạo ra nội dung mới
- Sử dụng Large Language Models (LLMs) hoặc generative models
- Output là text, code, images, hoặc content mới
- Có thể sinh ra creative solutions
- Ví dụ: ChatGPT, Claude, DALL-E, GitHub Copilot

**Ứng dụng trong Software Engineering:**
- Code generation và completion
- Code explanation và documentation
- Debugging assistance
- Architecture suggestions
- Test generation

### Bảng so sánh

| Đặc điểm | AI Truyền thống | Generative AI |
|----------|----------------|---------------|
| **Mục tiêu** | Phân tích, phân loại, dự đoán | Tạo ra nội dung mới |
| **Output** | Label, score, prediction | Text, code, content |
| **Creativity** | Thấp (dựa trên patterns đã học) | Cao (có thể sinh ra mới) |
| **Flexibility** | Cứng (fixed rules/models) | Linh hoạt (adaptive) |
| **Context** | Giới hạn | Hiểu context rộng |
| **Use case trong SE** | Static analysis, testing | Code generation, assistance |

### Tại sao sự khác biệt này quan trọng?

Hiểu sự khác biệt giữa AI truyền thống và Generative AI giúp:
- Chọn đúng công cụ cho đúng task
- Hiểu limitations của từng loại AI
- Kết hợp cả hai loại AI để tối ưu workflow
- Đặt kỳ vọng realistic cho từng loại

---

## 1.4 Tại sao AI đang thay đổi ngành Software Engineering?

### 1. Tăng năng suất đáng kể

**Trước AI:**
- Viết code từ đầu
- Tìm kiếm documentation thủ công
- Debug bằng trial-and-error
- Viết tests thủ công

**Với AI:**
- AI generate boilerplate code
- AI explain và suggest solutions
- AI help identify bugs nhanh hơn
- AI generate test cases

**Kết quả:** Năng suất tăng 30-50% theo nhiều nghiên cứu

### 2. Giảm barrier to entry

- New developers học nhanh hơn với AI assistance
- Complex technologies trở nên accessible hơn
- Less experienced developers có thể contribute more
- Knowledge sharing democratized

### 3. Thay đổi nature của công việc

**Từ:** Writing code manually
**Đến:** Orchestrating AI to write code

**Từ:** Memorizing syntax và APIs
**Đến:** Understanding concepts và patterns

**Từ:** Individual contributor
**Đến:** AI-augmented team player

### 4. New capabilities emerge

- Codebase understanding nhanh hơn
- Cross-language translation dễ dàng
- Automated documentation generation
- Legacy code modernization
- Architecture suggestions

### 5. Shift trong required skills

**Skills trở nên less critical:**
- Memorizing syntax
- Writing boilerplate
- Manual debugging

**Skills trở nên more critical:**
- Prompt engineering
- AI output verification
- System design
- Problem decomposition
- Technical judgment

### 6. Impact on career development

- Junior developers: Learn faster, contribute sooner
- Mid-level developers: Focus on architecture và design
- Senior developers: Mentor, review, orchestrate AI
- All levels: Continuous learning về AI tools

---

## 1.5 LLM cho Software Engineers

### LLM là gì?
Large Language Model là neural network với hàng tỷ parameters, trained trên lượng lớn text và code.

### Tại sao LLM quan trọng cho Software Engineers?
- **Code generation:** Sinh code nhanh hơn
- **Code explanation:** Giải thích code phức tạp
- **Debugging:** Giúp tìm và fix bugs
- **Refactoring:** Gợi ý cải thiện code
- **Documentation:** Tạo docs tự động
- **Learning:** Học công nghệ mới nhanh hơn

### Limitations của LLM
- **Hallucination:** Có thể sinh ra thông tin sai
- **Context limits:** Giới hạn số tokens có thể xử lý
- **Knowledge cutoff:** Không biết thông tin mới sau training
- **Consistency:** Có thể không consistent giữa các lần hỏi
- **Security risks:** Có thể expose sensitive data

### Nguyên lý hoạt động cơ bản của LLM

#### Training Phase
1. **Data Collection:** Thu thập lượng lớn text và code từ internet
2. **Tokenization:** Chia text thành các tokens (words, subwords)
3. **Pre-training:** Model học patterns, syntax, semantics
4. **Fine-tuning:** Model được tinh chỉnh cho specific tasks

#### Inference Phase
1. **Input Processing:** Tokenize input prompt
2. **Context Understanding:** Model hiểu context từ conversation history
3. **Prediction:** Model dự đoán token tiếp theo dựa trên probability
4. **Generation:** Model sinh ra output token-by-token
5. **Decoding:** Chọn sampling strategy (greedy, beam search, etc.)

#### Key Concepts
- **Parameters:** Số lượng connections trong neural network (billions)
- **Attention Mechanism:** Model focus vào relevant parts of input
- **Transformer Architecture:** Architecture behind modern LLMs
- **Temperature:** Control randomness of output
- **Top-k/Top-p Sampling:** Control diversity of output

---

## 1.6 AI Integration Levels 0–5

### Level 0: No AI Integration
**Đặc điểm:**
- Không sử dụng AI trong development process
- Hoàn toàn manual coding
- Traditional tools only (IDE, Git, etc.)

**Ví dụ:**
- Viết code hoàn toàn thủ công
- Debug bằng print statements và manual inspection
- Tìm kiếm documentation qua Google

### Level 1: AI as Search Engine
**Đặc điểm:**
- Sử dụng AI để tìm kiếm thông tin
- AI như một advanced search tool
- Không tích hợp sâu vào workflow

**Ví dụ:**
- Sử dụng ChatGPT để tìm syntax
- Ask AI để giải thích concepts
- Copy-paste code snippets từ AI

### Level 2: AI as Assistant
**Đặc điểm:**
- AI hỗ trợ trong specific tasks
- Sử dụng AI coding assistants (Copilot, etc.)
- AI suggestions được review bởi human

**Ví dụ:**
- GitHub Copilot autocomplete
- AI generate boilerplate code
- AI suggest fixes cho errors

### Level 3: AI as Collaborator
**Đặc điểm:**
- AI là active partner trong development
- Human và AI work together iteratively
- AI involved trong multiple phases

**Ví dụ:**
- Pair programming với AI
- AI help design architecture
- AI generate và review code
- Human verify và refine AI output

### Level 4: AI-Augmented Workflow
**Đặc điểm:**
- AI tích hợp sâu vào toàn bộ SDLC
- Workflow được thiết kế around AI
- AI orchestration becomes key skill

**Ví dụ:**
- AI-assisted requirements analysis
- AI-driven design decisions
- AI-generated code với human verification
- AI-powered testing và deployment
- AI documentation generation

### Level 5: AI-Native Development
**Đặc điểm:**
- AI-first approach to development
- AI orchestration và automation
- Human focuses trên high-level decisions

**Ví dụ:**
- AI generates entire features
- AI manages dependencies
- AI handles most coding tasks
- Human focuses trên architecture và strategy
- AI tự optimize và refactor

### Maturity Assessment

| Level | Description | Current State | Target State |
|-------|-------------|---------------|--------------|
| 0 | No AI | Traditional teams | - |
| 1 | AI as Search | Beginners | - |
| 2 | AI as Assistant | Most teams today | - |
| 3 | AI as Collaborator | Early adopters | **Module 1 Target** |
| 4 | AI-Augmented | Advanced teams | **Course 2 Target** |
| 5 | AI-Native | Future state | **Course 3 Target** |

### Progression Path

**Module 1:** Reach Level 3 (AI as Collaborator)
- Learn to work with AI as partner
- Understand AI capabilities và limitations
- Build verification skills

**Course 2:** Reach Level 4 (AI-Augmented Workflow)
- Integrate AI into entire workflow
- Advanced AI techniques
- Team collaboration với AI

**Course 3:** Explore Level 5 (AI-Native)
- AI-first development approaches
- System design với AI
- Architecture decisions với AI

---

## 1.7 Xu hướng AI trong Phát triển Phần mềm đến 2026

### 1. Multimodal AI Development

**Xu hướng:**
- AI có thể understand và generate không chỉ text/code mà còn images, diagrams, audio
- UI/UX design với AI
- Architecture diagrams từ text descriptions

**Impact:**
- Faster prototyping
- Better visualization
- Cross-modal development

### 2. AI Agents và Autonomous Development

**Xu hướng:**
- AI agents có thể perform complex tasks autonomously
- Multi-agent systems cho complex development
- AI có thể plan và execute multi-step tasks

**Impact:**
- More automation
- Higher-level orchestration
- Complex task decomposition

### 3. Specialized AI cho Specific Domains

**Xu hướng:**
- AI models trained specifically cho certain languages/frameworks
- Domain-specific AI cho fintech, healthcare, etc.
- Industry-tuned AI coding assistants

**Impact:**
- Better accuracy trong specific domains
- Industry-specific best practices
- Specialized knowledge

### 4. Real-time AI Integration

**Xu hướng:**
- AI integration trực tiếp vào IDEs và development tools
- Real-time suggestions và feedback
- Continuous AI assistance throughout coding

**Impact:**
- Seamless workflow
- Immediate feedback
- Reduced context switching

### 5. AI-Powered Testing và Quality Assurance

**Xu hướng:**
- AI generate comprehensive test suites
- Automated test maintenance
- AI-powered bug detection và fixing

**Impact:**
- Higher test coverage
- Faster bug detection
- Improved code quality

### 6. AI cho Legacy Code Modernization

**Xu hướng:**
- AI understand và refactor legacy codebases
- Automated migration between technologies
- AI suggest modernization strategies

**Impact:**
- Easier legacy maintenance
- Faster modernization
- Reduced technical debt

### 7. Collaborative AI Platforms

**Xu hướng:**
- Team-wide AI collaboration platforms
- Shared AI contexts và knowledge bases
- AI-assisted code reviews và discussions

**Impact:**
- Better team collaboration
- Knowledge sharing
- Consistent AI usage across team

### 8. AI Security và Compliance

**Xu hướng:**
- AI-powered security scanning
- Automated compliance checking
- AI detect vulnerabilities và suggest fixes

**Impact:**
- More secure code
- Faster compliance
- Proactive security

### 9. Personalized AI Assistants

**Xu hướng:**
- AI learns individual coding styles và preferences
- Personalized suggestions based on history
- Custom AI models for teams/organizations

**Impact:**
- More relevant suggestions
- Better alignment với team standards
- Improved productivity

### 10. Explainable AI cho Development

**Xu hướng:**
- AI explain its reasoning và decisions
- Transparent AI suggestions
- Better understanding của AI capabilities

**Impact:**
- Increased trust in AI
- Better debugging
- Improved learning

### Preparing cho 2026

**Skills cần phát triển:**
- AI orchestration và automation
- Multi-modal development
- AI agent management
- System design với AI
- AI security và ethics

**Tools cần theo dõi:**
- New AI coding assistants
- AI agent frameworks
- Multimodal AI tools
- AI collaboration platforms

**Mindset cần:**
- Continuous learning
- Adaptability
- Technical judgment
- Responsible AI usage

---

## 1.8 AI Pair Programmer Concept

### AI Pair Programmer là gì?
AI Pair Programmer là AI assistant hoạt động như một pair programmer ảo, hỗ trợ developer trong quá trình coding.

### Vai trò của AI Pair Programmer
- **Assistant:** Hỗ trợ, không thay thế developer
- **Accelerator:** Tăng tốc độ development
- **Teacher:** Giải thích và dạy các concepts
- **Reviewer:** Review code và gợi ý improvements
- **Debugger:** Giúp identify và fix bugs

### Human vẫn là chủ đạo
- **Decision making:** Con người quyết định technical decisions
- **Verification:** Con người verify output của AI
- **Responsibility:** Con người chịu trách nhiệm về code
- **Creativity:** Con người đưa ra creative solutions
- **Context understanding:** Con người hiểu business context tốt hơn

---

## 1.9 AI trong Software Development Life Cycle (SDLC)

### Phân tích yêu cầu (Requirements Analysis)
- **AI hỗ trợ:** Phân tích requirements, clarify ambiguities
- **Prompt example:** "Hãy phân tích requirement này và identify các edge cases"

### Thiết kế (Design)
- **AI hỗ trợ:** Design architecture, database schema, API design
- **Prompt example:** "Design RESTful API cho user management system"

### Coding (Implementation)
- **AI hỗ trợ:** Generate code, complete functions, refactor
- **Prompt example:** "Implement function để validate email address"

### Testing
- **AI hỗ trợ:** Generate test cases, write unit tests, integration tests
- **Prompt example:** "Generate unit tests cho function calculateTotal"

### Code Review
- **AI hỗ trợ:** Review code, identify issues, suggest improvements
- **Prompt example:** "Review function này theo best practices"

### Deployment
- **AI hỗ trợ:** Generate deployment scripts, CI/CD configuration
- **Prompt example:** "Tạo Dockerfile cho Node.js application"

### Maintenance
- **AI hỗ trợ:** Debug issues, analyze logs, suggest fixes
- **Prompt example:** "Analyze error log và suggest fixes"

---

## 1.10 AI Coding Assistants Phổ biến

### GitHub Copilot
- **Developer:** GitHub (Microsoft)
- **Integration:** VS Code, JetBrains, Neovim
- **Strengths:** Deep IDE integration, context-aware
- **Pricing:** Paid subscription
- **Best for:** Day-to-day coding, autocompletion

### ChatGPT (GPT-4)
- **Developer:** OpenAI
- **Integration:** Web interface, API, plugins
- **Strengths:** Powerful reasoning, versatile
- **Pricing:** Free (GPT-3.5), Paid (GPT-4)
- **Best for:** Complex reasoning, explanations, architecture

### Claude (Anthropic)
- **Developer:** Anthropic
- **Integration:** Web interface, API
- **Strengths:** Long context window, safety-focused
- **Pricing:** Free (Claude Haiku), Paid (Claude Sonnet/Opus)
- **Best for:** Large codebase analysis, long conversations

### CodeWhisperer
- **Developer:** AWS
- **Integration:** VS Code, JetBrains, AWS console
- **Strengths:** AWS integration, security scanning
- **Pricing:** Free tier available
- **Best for:** AWS projects, security-conscious teams

### Cursor
- **Developer:** Cursor Inc.
- **Integration:** Custom IDE based on VS Code
- **Strengths:** AI-native IDE, powerful features
- **Pricing:** Free tier available
- **Best for:** Teams wanting AI-first experience

---

## 1.11 Best Practices khi sử dụng AI Coding Assistants

### Security
- **KHÔNG** share sensitive data (API keys, passwords, secrets)
- **KHÔNG** paste proprietary code vào public AI tools
- **Review** AI-generated code cho security vulnerabilities
- **Use** enterprise versions nếu cần data privacy

### Quality
- **LUÔN** review và test AI-generated code
- **Verify** logic và correctness
- **Understand** code trước khi commit
- **Add** tests cho AI-generated code

### Efficiency
- **Provide** sufficient context cho AI
- **Use** specific, clear prompts
- **Iterate** và refine prompts
- **Learn** từ AI responses

### Ethics
- **Be transparent** về AI usage
- **Don't** over-rely on AI
- **Maintain** technical judgment
- **Attribute** AI assistance khi appropriate

---

## 1.12 Ví dụ Thực tế với Sample Repository

Trong phần này, chúng ta sẽ sử dụng **Sample Repository E-commerce Backend API** để minh họa các khái niệm đã học.

### Sample Repository Overview

Sample repository là một E-commerce Backend API với:
- **Tech Stack:** Node.js, Express, PostgreSQL (Prisma ORM)
- **Core Modules:** User, Product, Order, Payment, Notification
- **Location:** `sample-repository/` trong khóa học

### Ví dụ 1: AI trong SDLC với Sample Repository

#### Phân tích yêu cầu (Requirements Analysis)

**Yêu cầu:** Thêm tính năng Product Review cho hệ thống

**Prompt với AI:**
```
Hãy phân tích requirement sau cho tính năng Product Review:

Requirement:
- Users có thể review products đã mua
- Review bao gồm rating (1-5 stars) và comment
- Admin có thể moderate reviews
- Reviews hiển thị trên product page

Context:
- Current tech stack: Node.js, Express, Prisma ORM
- Existing modules: User, Product, Order
- Database schema: prisma/schema.prisma

Yêu cầu:
1. Identify entities và relationships cần thiết
2. Suggest database schema changes
3. List API endpoints cần thiết
4. Identify edge cases và validation rules
5. Suggest integration points với existing modules
```

**Kết quả AI:**
- Entity mới: Review (id, productId, userId, rating, comment)
- Relationships: Review belongs to Product và User
- API endpoints: GET/POST /api/products/:id/reviews, DELETE /api/reviews/:id
- Validation: Rating 1-5, chỉ users đã mua product mới được review
- Integration: Update Product model để include reviews

#### Thiết kế (Design)

**Prompt với AI:**
```
Hãy design database schema cho Review module:

Context:
- Prisma schema hiện tại trong sample-repository/prisma/schema.prisma
- Requirement: Users review products với rating và comment

Yêu cầu:
1. Design Review model trong Prisma schema
2. Define relationships với User và Product models
3. Add indexes cho performance
4. Consider soft delete cho moderation
```

**Kết quả AI:**
```prisma
model Review {
  id        String   @id @default(uuid())
  productId String
  product   Product  @relation(fields: [productId], references: [id])
  userId    String
  user      User     @relation(fields: [userId], references: [id])
  rating    Int
  comment   String?
  isDeleted Boolean  @default(false)
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt

  @@index([productId])
  @@index([userId])
  @@index([isDeleted])
}
```

#### Coding (Implementation)

**Prompt với AI:**
```
Hãy implement review controller cho sample repository:

Context:
- Express.js framework
- Prisma ORM
- Existing controller pattern trong src/controllers/userController.js
- Review model đã được thêm vào schema

Yêu cầu:
1. Implement createReview function
2. Implement getReviewsByProduct function
3. Implement deleteReview function (admin only)
4. Follow pattern từ userController.js
5. Add validation với Joi
6. Include error handling
```

**Kết quả AI:**
```javascript
// src/controllers/reviewController.js
const { PrismaClient } = require('@prisma/client');
const { reviewValidation } = require('../utils/validation');

const prisma = new PrismaClient();

const createReview = async (req, res) => {
  try {
    const { error } = reviewValidation.create.validate(req.body);
    if (error) {
      return res.status(400).json({ error: error.details[0].message });
    }

    const userId = req.user.userId;
    const { productId, rating, comment } = req.body;

    // Verify user purchased the product
    const order = await prisma.order.findFirst({
      where: {
        userId,
        orderItems: {
          some: { productId }
        },
        status: { in: ['DELIVERED', 'SHIPPED'] }
      }
    });

    if (!order) {
      return res.status(403).json({ 
        error: 'You can only review purchased products' 
      });
    }

    const review = await prisma.review.create({
      data: {
        productId,
        userId,
        rating,
        comment
      },
      include: {
        user: {
          select: {
            id: true,
            name: true
          }
        }
      }
    });

    res.status(201).json({ review });
  } catch (error) {
    console.error('Create review error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// ... other functions
```

#### Testing

**Prompt với AI:**
```
Hãy generate unit tests cho review controller:

Context:
- Testing framework: Jest
- Test pattern trong tests/user.test.js
- Controller: src/controllers/reviewController.js

Yêu cầu:
1. Test createReview với valid data
2. Test createReview khi user chưa mua product
3. Test createReview với invalid rating
4. Test getReviewsByProduct
5. Test deleteReview với authorization
```

**Kết quả AI:**
```javascript
describe('Review API', () => {
  describe('POST /api/reviews', () => {
    it('should create review for purchased product', async () => {
      const res = await request(app)
        .post('/api/reviews')
        .set('Authorization', `Bearer ${authToken}`)
        .send({
          productId: 'product-id',
          rating: 5,
          comment: 'Great product!'
        });

      expect(res.statusCode).toBe(201);
      expect(res.body).toHaveProperty('review');
    });

    it('should reject review for non-purchased product', async () => {
      const res = await request(app)
        .post('/api/reviews')
        .set('Authorization', `Bearer ${authToken}`)
        .send({
          productId: 'non-purchased-product-id',
          rating: 5,
          comment: 'Test'
        });

      expect(res.statusCode).toBe(403);
      expect(res.body.error).toContain('purchased');
    });
  });
});
```

### Ví dụ 2: AI Pair Programmer với Sample Repository

#### Scenario: Debug Order Creation Bug

**Problem:** Order creation fails khi user có nhiều items trong cart

**Prompt với AI:**
```
Hãy giúp tôi debug order creation trong sample repository:

Context:
- File: src/controllers/orderController.js
- Function: createOrder
- Issue: Order creation fails với error "Insufficient stock" ngay cả khi stock đủ
- Database: PostgreSQL với Prisma

Code:
[paste createOrder function]

Yêu cầu:
1. Analyze logic trong createOrder function
2. Identify potential bug
3. Explain why bug occurs
4. Suggest fix
5. Explain edge cases cần consider
```

**AI Analysis:**
- Bug: Stock check và update không atomic trong transaction
- Race condition: Multiple concurrent orders có thể pass stock check
- Fix: Use Prisma transaction với proper locking
- Edge cases: Concurrent orders, stock updates, transaction rollback

**Suggested Fix:**
```javascript
const order = await prisma.$transaction(async (tx) => {
  // Use FOR UPDATE to lock rows
  const product = await tx.product.findUnique({
    where: { id: item.productId }
  });

  if (product.stock < item.quantity) {
    throw new Error(`Insufficient stock for ${product.name}`);
  }

  // Update stock within transaction
  await tx.product.update({
    where: { id: item.productId },
    data: { stock: { decrement: item.quantity } }
  });
});
```

### Ví dụ 3: Code Explanation với Sample Repository

**Prompt với AI:**
```
Hãy giải thích authentication flow trong sample repository:

Files:
- src/middleware/auth.js
- src/controllers/userController.js (register và login functions)
- src/routes/userRoutes.js

Yêu cầu:
1. Explain authentication flow step-by-step
2. How JWT token is generated và validated
3. How middleware protects routes
4. Security considerations
5. Potential improvements
```

**AI Explanation:**
1. **Registration Flow:**
   - User submits email/password
   - Server validates input
   - Password hashed với bcrypt
   - User record created in database
   - JWT token generated với user info
   - Token returned to client

2. **Login Flow:**
   - User submits credentials
   - Server finds user by email
   - Password verified với bcrypt.compare
   - JWT token generated
   - Token returned to client

3. **Middleware Protection:**
   - authMiddleware extracts token from Authorization header
   - Token verified với jwt.verify
   - Decoded user info attached to req.user
   - Protected routes check req.user

4. **Security Considerations:**
   - Password hashing prevents plaintext storage
   - JWT expiration prevents indefinite access
   - HTTPS required for token transmission
   - Token should be stored securely (httpOnly cookie)

### Ví dụ 4: AI Tool Comparison với Sample Repository

**Task:** Giải thích orderController.js với different AI tools

**Test với ChatGPT:**
```
Explain the createOrder function in orderController.js:
[paste code]
```
- **Strength:** Detailed explanation, good context understanding
- **Weakness:** May miss business-specific logic

**Test với Claude:**
```
Analyze the order creation workflow in this code:
[paste code]
```
- **Strength:** Better at understanding complex workflows
- **Weakness:** Longer response time

**Test với GitHub Copilot:**
- **Strength:** Inline code suggestions while reading
- **Weakness:** Limited explanation capability

**Conclusion:** Use ChatGPT/Claude for explanation, Copilot for autocomplete

---

## 1.13 Thực hành

### Exercise 1: Khám phá AI Coding Assistant
1. Sign up cho ít nhất 2 AI tools (ví dụ: ChatGPT và GitHub Copilot)
2. Explore interface và features
3. Thử generate simple code snippet
4. Compare outputs giữa các tools

### Exercise 2: AI trong SDLC
1. Chọn một feature nhỏ bạn muốn build
2. Sử dụng AI để hỗ trợ qua các phase: requirements → design → code → test
3. Document cách AI hỗ trợ ở mỗi phase
4. Reflect về pros và cons

### Exercise 3: Security check
1. Tạo list các sensitive data types (API keys, passwords, etc.)
2. Research mỗi AI tool's privacy policy
3. Tạo guidelines cho team về an toàn khi sử dụng AI

---

## 1.14 Resources

### Documentation
- [OpenAI Documentation](https://platform.openai.com/docs)
- [GitHub Copilot Documentation](https://docs.github.com/en/copilot)
- [Anthropic Documentation](https://docs.anthropic.com)

### Articles
- "Introduction to Large Language Models" - OpenAI
- "AI-Augmented Software Engineering" - Various sources

### Tools
- ChatGPT: https://chat.openai.com
- Claude: https://claude.ai
- GitHub Copilot: https://github.com/features/copilot

---

## Quiz

1. Generative AI là gì và nó khác với AI truyền thống như thế nào?
2. Tại sao AI đang thay đổi ngành Software Engineering?
3. Mô tả 5 mức độ tích hợp AI (AI Integration Levels 0–5)?
4. Nguyên lý hoạt động cơ bản của LLM là gì?
5. AI Pair Programmer có vai trò gì trong development?
6. AI có thể hỗ trợ ở những phase nào trong SDLC?
7. Nêu 3 xu hướng AI trong phát triển phần mềm đến năm 2026?
8. Limitations của LLM là gì?
9. Nêu 3 AI Coding Assistants phổ biến và use case của từng cái.
10. Làm thế nào để trở thành AI-Augmented Software Engineer?

---

## Next Steps

Sau khi hoàn thành Module 1, tiếp tục với:
- **Module 2:** AI-Assisted Codebase Understanding
- Áp dụng kiến thức vào thực tế với repository của bạn
