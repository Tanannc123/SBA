# Module 3: Project Understanding Workshop

## Mục tiêu học tập

Sau khi hoàn thành module này, bạn sẽ:
- Tổng hợp kết quả phân tích repository thành Project Understanding Report
- Biết cách trình bày hiểu biết về hệ thống
- Có thể nhận và phản hồi feedback
- Hoàn thiện report dựa trên peer review
- Reflect về quá trình học tập

---

## 3.1 Repository Analysis

### Tổng hợp findings từ Module 2

Sử dụng kết quả từ:
- Repository structure analysis
- Module map
- Business workflow analysis
- Code explanations
- Onboarding notes

### Template: Project Understanding Report

Sử dụng template trong `templates/project-understanding-report.md`

### Sections quan trọng

#### 1. Tổng quan dự án
- Mục đích và scope
- Tech stack
- Stakeholders

#### 2. Cấu trúc và modules
- Folder structure
- Module map
- Dependencies

#### 3. Business workflows
- Key workflows
- User flows
- Data flows

#### 4. Technical details
- Architecture patterns
- Database schema
- API endpoints

#### 5. Development setup
- Installation
- Configuration
- Running tests

---

## 3.2 Project Presentation

### Cấu trúc presentation

#### Slide 1: Title
- Project name
- Your name
- Date

#### Slide 2: Executive Summary
- What is this project?
- Why does it exist?
- Who uses it?
- Key technologies

#### Slide 3: Architecture Overview
- High-level architecture diagram
- Main components
- Technology choices

#### Slide 4: Module Map
- Visual module map
- Module responsibilities
- Inter-module relationships

#### Slide 5: Key Workflows
- 2-3 most important workflows
- Step-by-step flow
- Code mapping

#### Slide 6: Technical Deep Dive
- Chọn 1-2 interesting technical aspects
- Design patterns used
- Notable implementations

#### Slide 7: Development Process
- How to set up
- How to run
- How to test
- How to deploy

#### Slide 8: Challenges & Learnings
- Difficulties encountered
- How AI helped
- Key learnings

#### Slide 9: Recommendations
- Improvements for project
- Improvements for documentation
- Suggestions for new team members

#### Slide 10: Q&A

### Tips cho effective presentation
- **Keep it visual:** Use diagrams, not just text
- **Focus on key points:** Don't try to cover everything
- **Tell a story:** Connect technical details to business value
- **Be honest:** Admit what you don't know
- **Time management:** Aim for 10-15 minutes

---

## 3.3 Technical Review

### Self-review checklist

#### Content completeness
- [ ] All sections filled in Project Understanding Report
- [ ] Architecture accurately described
- [ ] Module map comprehensive
- [ ] Workflows correctly traced
- [ ] Technical details accurate

#### Quality of analysis
- [ ] Deep understanding demonstrated
- [ ] Key insights identified
- [ ] Relationships correctly mapped
- [ ] Edge cases considered
- [ ] Assumptions stated

#### Documentation quality
- [ ] Clear and concise
- [ ] Well-organized
- [ ] Visual aids included
- [ ] Examples provided
- [ ] Actionable information

### AI-assisted review

**Prompt template:**
```
Hãy review Project Understanding Report của tôi:

Report content:
[Paste report]

Yêu cầu:
1. Check completeness của các sections
2. Identify missing information
3. Suggest improvements
4. Check accuracy của technical descriptions
5. Recommend additions
```

---

## 3.4 Peer Review

### Cách nhận feedback hiệu quả

#### During presentation
- **Listen actively:** Don't interrupt
- **Take notes:** Write down feedback
- **Ask clarifying questions:** If unclear
- **Stay open:** Don't get defensive

#### After presentation
- **Thank reviewers:** Appreciate their time
- **Categorize feedback:**
  - Must fix (critical errors)
  - Should fix (important improvements)
  - Nice to have (enhancements)
- **Create action plan:** How to address feedback

### Feedback template cho reviewers

```
Project Understanding Review

Reviewer: [Name]
Date: [Date]
Project: [Project name]

Strengths:
- [Strength 1]
- [Strength 2]
- [Strength 3]

Areas for Improvement:
- [Area 1] - [Suggestion]
- [Area 2] - [Suggestion]
- [Area 3] - [Suggestion]

Questions:
- [Question 1]
- [Question 2]

Additional Notes:
[Any other feedback]
```

### Sử dụng AI để simulate peer review

**Prompt template:**
```
Hãy act như một senior engineer reviewing Project Understanding Report:

Report:
[Paste report]

Yêu cầu:
1. Provide constructive feedback
2. Identify gaps in understanding
3. Suggest areas for deeper investigation
4. Ask probing questions
5. Recommend improvements
```

---

## 3.5 Reflection

### Reflection questions

#### About the project
1. What surprised you most about this codebase?
2. What was most difficult to understand?
3. What patterns did you learn?
4. What would you do differently?

#### About the process
1. How did AI help/hinder your understanding?
2. What strategies worked best?
3. What would you improve next time?
4. How long did it take? Was it efficient?

#### About yourself
1. What are your strengths in codebase understanding?
2. What areas do you need to improve?
3. What new skills did you develop?
4. How confident do you feel about this project?

### Document reflection

Sử dụng template `templates/reflection-report.md`

---

## 3.6 Workshop Agenda

### Day 1: Analysis
- **Morning:** Repository exploration with AI
- **Afternoon:** Module mapping and workflow analysis
- **Evening:** Draft Project Understanding Report

### Day 2: Deep Dive
- **Morning:** Technical deep dive into key modules
- **Afternoon:** Complete report and create presentation
- **Evening:** Self-review and refinement

### Day 3: Presentation & Feedback
- **Morning:** Presentations (each person 15 min)
- **Afternoon:** Peer review and feedback
- **Evening:** Reflection and final report

---

## 3.7 Ví dụ Thực tế với Sample Repository

Trong phần này, chúng ta sẽ áp dụng Project Understanding Workshop vào **Sample Repository E-commerce Backend API**.

### Ví dụ 1: Project Understanding Report cho Sample Repository

**Section 1: Project Overview**

```markdown
# Project Understanding Report - E-commerce Backend API

## 1. Project Overview

### 1.1 Project Information
- **Project Name:** E-commerce Backend API
- **Purpose:** Sample repository cho AI Training Course
- **Type:** RESTful API Backend
- **Tech Stack:** Node.js, Express, PostgreSQL (Prisma ORM)
- **Complexity:** Medium (~2000 LOC, 5 modules)

### 1.2 Business Context
E-commerce backend API supporting core e-commerce functionality:
- User management và authentication
- Product catalog và inventory
- Order processing và tracking
- Payment integration (placeholder)
- Notification system (placeholder)

### 1.3 Target Audience
- Developers learning AI-augmented software engineering
- Students practicing codebase understanding
- Teams needing reference implementation
```

**Section 2: Architecture Overview**

```markdown
## 2. Architecture Overview

### 2.1 Architecture Pattern
- **Pattern:** MVC (Model-View-Controller)
- **Style:** RESTful API
- **Database:** PostgreSQL với Prisma ORM
- **Authentication:** JWT with bcrypt

### 2.2 System Architecture Diagram
```
┌─────────────────────────────────────────┐
│         Client Applications              │
│  (Mobile App, Web App, Admin Panel)     │
└─────────────────┬───────────────────────┘
                  │ HTTP/REST
                  ↓
┌─────────────────────────────────────────┐
│         API Gateway / Express Server     │
│  (Authentication, Rate Limiting, CORS)  │
└─────────────────┬───────────────────────┘
                  │
        ┌─────────┼─────────┐
        │         │         │
    ┌───▼───┐ ┌───▼───┐ ┌───▼───┐
    │ User  │ │Product│ │ Order │
    │Module │ │Module │ │Module │
    └───┬───┘ └───┬───┘ └───┬───┘
        │         │         │
        └─────────┼─────────┘
                  │
        ┌─────────▼─────────┐
        │   PostgreSQL DB   │
        │  (Prisma ORM)     │
        └───────────────────┘
```

### 2.3 Technology Stack
- **Runtime:** Node.js 18+
- **Framework:** Express.js 4.18.2
- **Database:** PostgreSQL 14+
- **ORM:** Prisma 5.7.0
- **Authentication:** JWT (jsonwebtoken 9.0.2)
- **Validation:** Joi 17.11.0
- **Testing:** Jest 29.7.0
```

**Section 3: Module Map**

```markdown
## 3. Module Map

### 3.1 User Module
**Purpose:** User authentication và profile management
**Components:**
- Controllers: userController.js
- Routes: userRoutes.js
- Middleware: auth.js
**Responsibilities:**
- User registration và login
- JWT token generation
- Profile management
**Dependencies:** None (base module)
**Data Models:** User, Cart, CartItem

### 3.2 Product Module
**Purpose:** Product catalog và inventory management
**Components:**
- Controllers: productController.js
- Routes: productRoutes.js
**Responsibilities:**
- Product CRUD operations
- Search và filtering
- Inventory tracking
**Dependencies:** None
**Data Models:** Product, Category, Review

### 3.3 Order Module
**Purpose:** Order processing và tracking
**Components:**
- Controllers: orderController.js
- Routes: orderRoutes.js
**Responsibilities:**
- Order creation
- Order status tracking
- Cart management
**Dependencies:** User, Product
**Data Models:** Order, OrderItem

### 3.4 Payment Module
**Purpose:** Payment processing (placeholder)
**Components:**
- Controllers: paymentController.js (not implemented)
- Routes: paymentRoutes.js (placeholder)
**Responsibilities:**
- Payment processing (TO BE IMPLEMENTED)
**Dependencies:** Order
**Data Models:** Payment

### 3.5 Notification Module
**Purpose:** Email notifications (placeholder)
**Components:**
- Controllers: notificationController.js (not implemented)
- Routes: notificationRoutes.js (placeholder)
**Responsibilities:**
- Order status notifications (TO BE IMPLEMENTED)
**Dependencies:** User, Order
**Data Models:** Notification
```

**Section 4: Business Workflows**

```markdown
## 4. Business Workflows

### 4.1 User Registration Flow
```
User submits registration form
  ↓
Server validates input (email format, password strength)
  ↓
Check if user already exists
  ↓
Hash password với bcrypt
  ↓
Create user record in database
  ↓
Generate JWT token
  ↓
Return user info và token
  ↓
Send welcome email (placeholder)
```

### 4.2 Order Creation Flow
```
User adds items to cart
  ↓
User proceeds to checkout
  ↓
System validates inventory for each item
  ↓
Calculate total amount
  ↓
User enters payment info
  ↓
System processes payment (placeholder)
  ↓
Create order trong transaction
  ↓
Update product stock
  ↓
Clear user cart
  ↓
Return order confirmation
  ↓
Send notification (placeholder)
```

### 4.3 Product Search Flow
```
User searches products
  ↓
Apply filters (category, price range, search term)
  ↓
Query database với filters
  ↓
Paginate results
  ↓
Return products với metadata
```
```

### Ví dụ 2: Presentation Structure cho Sample Repository

**Slide 1: Title Slide**
```
E-commerce Backend API
Project Understanding Report
Presented by: [Your Name]
Date: [Date]
```

**Slide 2: Project Overview**
```
Project Overview
- Purpose: Sample repository cho AI Training Course
- Type: RESTful API Backend
- Tech Stack: Node.js, Express, PostgreSQL
- Complexity: Medium (~2000 LOC)
- Modules: 5 (User, Product, Order, Payment, Notification)
```

**Slide 3: Architecture**
```
System Architecture
- MVC Pattern
- RESTful API Design
- JWT Authentication
- Prisma ORM
- PostgreSQL Database
[Architecture Diagram]
```

**Slide 4: Module Map**
```
Module Map
- User Module: Authentication & Profile
- Product Module: Catalog & Inventory
- Order Module: Order Processing
- Payment Module: Payment Integration (placeholder)
- Notification Module: Notifications (placeholder)
[Module Dependency Diagram]
```

**Slide 5: Business Workflows**
```
Key Business Workflows
- User Registration & Authentication
- Order Creation & Processing
- Product Search & Filtering
[Workflow Diagrams]
```

**Slide 6: Technical Deep Dive - Order Module**
```
Order Module Deep Dive
- Transaction-based order creation
- Stock validation logic
- Cart management
- Status tracking
- Integration points
```

**Slide 7: Technical Debt & Improvements**
```
Technical Debt & Improvements
- Payment module not implemented
- Notification module not implemented
- Limited error handling
- Missing test coverage
- Suggested improvements
```

**Slide 8: Integration Points**
```
Integration Points
- User ↔ Order (User creates orders)
- Order ↔ Product (Order contains products)
- Order ↔ Payment (Order needs payment)
- Order ↔ Notification (Order status updates)
[Integration Diagram]
```

**Slide 9: Key Insights**
```
Key Insights
- Well-structured MVC architecture
- Proper use of transactions for consistency
- JWT authentication implemented correctly
- Placeholder modules for future implementation
- Good separation of concerns
```

**Slide 10: Q&A**
```
Questions & Discussion
Thank you!
```

### Ví dụ 3: Peer Review cho Sample Repository Report

**Reviewer Feedback:**

```markdown
# Peer Review Feedback - E-commerce API Report

## Strengths
✅ Comprehensive module mapping
✅ Clear architecture diagrams
✅ Well-documented business workflows
✅ Good technical depth on Order module
✅ Identified technical debt accurately

## Areas for Improvement
🔸 Add more details on authentication flow
🔸 Include API endpoint documentation
🔸 Add performance considerations
🔸 Expand on security measures
🔸 Include deployment considerations

## Specific Comments
1. **Section 2.2:** Consider adding API versioning strategy
2. **Section 4.2:** Add error handling details in order flow
3. **Section 3.4:** Explain why Payment module is placeholder
4. **Overall:** Add more code examples to support claims

## Action Items
- [ ] Add authentication flow details
- [ ] Document API endpoints
- [ ] Add security considerations section
- [ ] Include code snippets for key functions
- [ ] Add deployment architecture
```

**Categorized Feedback:**

```markdown
# Categorized Feedback

## Must Fix (Critical)
- Add authentication flow security details
- Document error handling strategies
- Explain placeholder modules rationale

## Should Fix (Important)
- Add API endpoint documentation
- Include performance considerations
- Add deployment architecture

## Nice to Have (Enhancement)
- Add more code examples
- Include testing strategy
- Add monitoring/logging details
```

### Ví dụ 4: Reflection cho Sample Repository Analysis

```markdown
# Reflection Report - Sample Repository Analysis

## What Went Well
- Successfully applied Repository Exploration Strategy
- AI assistance accelerated understanding significantly
- Module mapping was accurate và comprehensive
- Business workflows clearly documented
- Technical debt identified correctly

## Challenges Faced
- Initial confusion about Payment module status
- Difficulty understanding transaction logic
- Limited documentation in some areas
- Time management during deep dive

## AI Usage Analysis
### Prompts Used
1. Repository overview analysis
2. Module identification
3. Order module deep dive
4. Documentation generation

### AI Performance
- **Strengths:** Quick overview, good module mapping
- **Weaknesses:** Missed some implementation details
- **Verification:** Cross-checked with actual code

### Lessons Learned
- Always verify AI claims with code
- Provide more context for better AI responses
- Use AI for initial draft, then refine manually
- AI is great for documentation but needs human review

## Key Learnings
1. Systematic approach saves time
2. AI accelerates but doesn't replace understanding
3. Verification is critical
4. Documentation is as important as code
5. Module mapping reveals system design

## Areas for Improvement
1. Improve understanding of database transactions
2. Learn more about API design patterns
3. Practice creating architecture diagrams
4. Improve technical writing skills
5. Learn more about security best practices

## Next Steps
1. Apply same approach to real-world repository
2. Build Prompt Playbook for codebase understanding
3. Learn more about system architecture
4. Practice technical presentations
5. Share learnings with team
```

---

## 3.8 Thực hành

### Exercise 1: Complete Project Understanding Report
1. Chọn một repository (có thể là từ Exercise Module 2)
2. Apply tất cả techniques từ Module 2
3. Complete Project Understanding Report
4. Use AI to review and improve

### Exercise 2: Create Presentation
1. Create 10-slide presentation dựa trên report
2. Focus on visual elements (diagrams, maps)
3. Practice presentation (time yourself)
4. Get feedback từ peer hoặc AI

### Exercise 3: Peer Review
1. Review report của peer (hoặc use AI to simulate)
2. Provide constructive feedback
3. Categorize feedback into action items
4. Update report based on feedback

### Exercise 4: Reflection
1. Complete reflection report
2. Identify key learnings
3. Set goals for improvement
4. Plan next steps

---

## 3.8 Evaluation Criteria

### Project Understanding Report
| Criteria | Excellent | Good | Needs Improvement |
|----------|-----------|------|-------------------|
| Completeness | All sections comprehensive | Most sections complete | Many sections missing |
| Accuracy | Technical details correct | Minor inaccuracies | Major errors |
| Depth | Deep insights demonstrated | Adequate understanding | Surface-level only |
| Clarity | Clear and well-organized | Generally clear | Confusing or disorganized |
| Visuals | Effective diagrams included | Some visuals | No visuals |

### Presentation
| Criteria | Excellent | Good | Needs Improvement |
|----------|-----------|------|-------------------|
| Content | Comprehensive and accurate | Good coverage | Missing key points |
| Clarity | Very clear explanations | Generally clear | Hard to follow |
| Visuals | Effective use of diagrams | Some visuals | Text-heavy |
| Time | Well within time limit | Slightly over/under | Major time issues |
| Q&A | Handled questions well | Adequate responses | Struggled with questions |

---

## 3.9 Resources

### Presentation Tools
- PowerPoint, Google Slides, Keynote
- Canva for design
- Mermaid for diagrams
- Draw.io for architecture diagrams

### Examples
- Sample Project Understanding Reports (có thể tạo sau)
- Presentation templates
- Peer review examples

---

## Quiz

1. Tại sao Project Understanding Report quan trọng?
2. Cấu trúc presentation hiệu quả nên bao gồm哪些 phần?
3. Làm thế nào để nhận feedback constructively?
4. Categorize feedback vào 3 loại chính là gì?
5. Reflection giúp gì cho quá trình học?

---

## Next Steps

Sau khi hoàn thành Module 3, tiếp tục với:
- **Module 4:** Prompt Engineering for Software Engineering
- Áp dụng hiểu biết project vào prompt design
