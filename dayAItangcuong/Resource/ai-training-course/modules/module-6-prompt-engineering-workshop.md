# Module 6: Prompt Engineering Workshop

## Mục tiêu học tập

Sau khi hoàn thành module này, bạn sẽ:
- Xây dựng Prompt Playbook cá nhân với các prompt tái sử dụng
- Có prompt templates cho Explain Code, Code Review, Generate Test Cases, Generate Documentation
- Biết cách customize và refine prompts theo nhu cầu
- Có thể share và maintain Prompt Playbook

---

## 6.1 Prompt Playbook Overview

### Prompt Playbook là gì?
Prompt Playbook là collection của các prompt đã được tested và refined cho các tasks phổ biến trong Software Engineering. Nó acts như một "knowledge base" cho prompts hiệu quả.

### Benefits của Prompt Playbook
- **Consistency:** Same quality outputs across team
- **Efficiency:** Don't reinvent prompts each time
- **Quality:** Use proven, tested prompts
- **Learning:** Learn from effective prompt patterns
- **Collaboration:** Share with team

### Structure của Prompt Playbook
```
Prompt Playbook/
├── Explain Code Prompts
├── Code Review Prompts
├── Test Generation Prompts
├── Documentation Prompts
├── Debugging Prompts
├── Refactoring Prompts
└── Custom Prompts
```

---

## 6.2 Explain Code Prompts

### Prompt 1: Function Explanation
```
Giải thích function [function_name] trong file [file_path]:

## Structure
1. **Purpose:** Mục đích của function
2. **Parameters:** Input parameters và types
3. **Return:** Return value và type
4. **Logic:** Step-by-step logic
5. **Edge Cases:** Các edge cases được xử lý
6. **Dependencies:** Functions/modules được gọi
7. **Example:** Usage example nếu applicable

## Code
[Paste function code]

## Context
- File: [file_path]
- Module: [module name]
- Related functions: [list]
```

### Prompt 2: Module Explanation
```
Phân tích module [module_name]:

## Overview
1. **Purpose:** Mục đích chính của module
2. **Responsibilities:** Các responsibilities
3. **Key Components:** Main components/functions
4. **Architecture:** Design patterns được sử dụng
5. **Dependencies:** External dependencies
6. **Usage:** Cách module được sử dụng

## Files
- [file1]: [purpose]
- [file2]: [purpose]
- [file3]: [purpose]

## Key Code Snippets
[Paste important snippets]
```

### Prompt 3: Architecture Explanation
```
Giải thích architecture của system:

## System Overview
- **Type:** [Monolithic/Microservices/etc]
- **Tech Stack:** [List]
- **Scale:** [Small/Medium/Large]

## Architecture Analysis
1. **Pattern:** Architecture pattern được sử dụng
2. **Components:** Main components và roles
3. **Communication:** Components communicate như thế nào
4. **Data Flow:** Data flows trong system
5. **Trade-offs:** Pros và cons của architecture này

## Diagram
[Paste hoặc mô tả diagram]

## Context
[Paste relevant code/config]
```

---

## 6.3 Code Review Prompts

### Prompt 1: Function Review
```
Review function [function_name] trong file [file_path]:

## Review Criteria
1. **Correctness:** Logic có đúng không?
2. **Performance:** Có performance issues không?
3. **Security:** Có security vulnerabilities không?
4. **Error Handling:** Error handling có đầy đủ không?
5. **Code Style:** Có tuân thủ best practices không?
6. **Readability:** Code có dễ đọc không?
7. **Maintainability:** Dễ maintain không?
8. **Testability:** Dễ test không?

## Code
[Paste function code]

## Context
- Language: [language]
- Framework: [framework]
- Style guide: [if any]
```

### Prompt 2: Security Review
```
Security review cho code sau:

## Security Checklist
- [ ] SQL Injection
- [ ] XSS vulnerabilities
- [ ] CSRF vulnerabilities
- [ ] Authentication/Authorization issues
- [ ] Sensitive data exposure
- [ ] Input validation
- [ ] Output encoding
- [ ] Dependency vulnerabilities
- [ ] Configuration security

## Code
[Paste code]

## Context
- Framework: [framework]
- Authentication method: [method]
- Data sensitivity: [level]
```

### Prompt 3: Performance Review
```
Performance review cho code sau:

## Performance Analysis
1. **Time Complexity:** Big O notation
2. **Space Complexity:** Memory usage
3. **Bottlenecks:** Potential bottlenecks
4. **Optimizations:** Suggested optimizations
5. **Caching:** Caching opportunities
6. **Database:** Query efficiency nếu có DB calls

## Code
[Paste code]

## Context
- Expected load: [description]
- Performance requirements: [requirements]
- Current performance: [if known]
```

---

## 6.4 Generate Test Cases Prompts

### Prompt 1: Unit Test Generation
```
Generate unit tests cho function [function_name]:

## Function Details
**Signature:** [function signature]
**Purpose:** [description]
**Logic:** [brief logic description]

## Test Requirements
1. **Happy Path:** Normal successful cases
2. **Edge Cases:** Boundary conditions
3. **Error Cases:** Invalid inputs, errors
4. **Null/Undefined:** Handle null/undefined
5. **Type Checking:** Different input types

## Testing Framework
- Framework: [Jest/PyTest/JUnit/Mocha/etc]
- Language: [language]
- Mocking: [if needed]

## Code
[Paste function code]

## Output Format
Provide complete test file with:
- Test setup/teardown if needed
- Multiple test cases
- Clear test names
- Assertions
```

### Prompt 2: Integration Test Generation
```
Generate integration tests cho [feature/API]:

## API/Feature Details
**Endpoint:** [URL]
**Method:** [GET/POST/PUT/DELETE]
**Purpose:** [description]

## Request/Response
**Request Schema:**
[Paste schema]

**Response Schema:**
[Paste schema]

## Test Scenarios
1. **Successful Request:** Valid request
2. **Validation Errors:** Invalid data
3. **Authentication:** Auth failures
4. **Authorization:** Permission issues
5. **Error Handling:** Server errors
6. **Edge Cases:** Unusual but valid cases

## Testing Framework
- Framework: [Supertest/Postman/Rest Assured/etc]
- Dependencies: [list]

## Context
- Related endpoints: [list]
- Database: [if applicable]
```

### Prompt 3: Test Case Design for User Story
```
Design test cases cho user story:

## User Story
[Paste user story]

## Acceptance Criteria
[Paste acceptance criteria]

## Test Case Categories
1. **Functional Tests:** Business logic
2. **UI/UX Tests:** User interface (if applicable)
3. **Integration Tests:** Component integration
4. **Edge Cases:** Boundary conditions
5. **Negative Tests:** Error scenarios
6. **Performance Tests:** Load/stress (if needed)

## Output Format
For each test case:
- Test Case ID
- Description
- Pre-conditions
- Test Steps
- Expected Result
- Priority
```

---

## 6.5 Generate Documentation Prompts

### Prompt 1: API Documentation
```
Generate API documentation cho endpoint:

## Endpoint Details
**URL:** [endpoint URL]
**Method:** [HTTP method]
**Description:** [brief description]

## Request
**Headers:**
[Paste headers]

**Body:**
[Paste request body schema]

**Query Parameters:**
[Paste parameters]

## Response
**Success Response:**
[Paste success schema]

**Error Responses:**
[Paste error schemas]

## Documentation Requirements
1. **Description:** Clear description
2. **Parameters:** All parameters with types and descriptions
3. **Request Examples:** Example requests
4. **Response Examples:** Example responses
5. **Error Codes:** All possible error codes
6. **Authentication:** Auth requirements
7. **Rate Limits:** If applicable

## Format
[OpenAPI/Swagger/Markdown/etc]
```

### Prompt 2: Function Documentation
```
Generate documentation cho function:

## Function
[Paste function code]

## Documentation Requirements
1. **Summary:** Brief summary
2. **Description:** Detailed description
3. **Parameters:** All parameters with types and descriptions
4. **Returns:** Return value with type and description
5. **Throws/Raises:** Exceptions with conditions
6. **Examples:** Usage examples
7. **Notes:** Important notes
8. **See Also:** Related functions

## Format
[JSDoc/Python docstring/Javadoc/etc]
```

### Prompt 3: README Documentation
```
Generate README cho module/project:

## Project/Module Details
**Name:** [name]
**Purpose:** [purpose]
**Tech Stack:** [list]

## README Structure
1. **Title:** Project name and tagline
2. **Description:** What it does
3. **Features:** Key features
4. **Installation:** How to install
5. **Usage:** How to use
6. **Configuration:** Configuration options
7. **API Reference:** If applicable
8. **Examples:** Usage examples
9. **Contributing:** How to contribute
10. **License:** License information

## Additional Context
[Paste any relevant context]
```

---

## 6.6 Building Your Prompt Playbook

### Step 1: Collect Prompts
- Start với prompts từ templates
- Add prompts bạn đã dùng thành công
- Collect prompts từ team/community

### Step 2: Test and Refine
- Test mỗi prompt với real scenarios
- Refine based on results
- Document what works/doesn't work

### Step 3: Categorize and Organize
- Group by task type
- Add tags/labels
- Create index/table of contents

### Step 4: Document Context
- Note when to use each prompt
- Document required context
- Add examples of usage

### Step 5: Maintain and Update
- Regular review and update
- Add new prompts as needed
- Remove ineffective prompts
- Version control your playbook

---

## 6.7 Customizing Prompts

### Customization Factors

#### 1. Tech Stack
```
Base prompt: "Generate unit tests"
Customized: "Generate unit tests using Jest for React components"
```

#### 2. Team Standards
```
Base prompt: "Review code"
Customized: "Review code following Airbnb JavaScript style guide"
```

#### 3. Project Context
```
Base prompt: "Explain function"
Customized: "Explain function in context of payment processing system"
```

#### 4. Security Requirements
```
Base prompt: "Generate API"
Customized: "Generate API with OWASP security best practices"
```

### Customization Template
```
## Base Prompt
[Paste base prompt]

## Customizations
- Tech stack: [add]
- Framework: [add]
- Standards: [add]
- Context: [add]
- Constraints: [add]

## Customized Prompt
[Paste customized prompt]

## Notes
[Notes about effectiveness]
```

---

## 6.8 Sharing Prompt Playbook

### Team Sharing Strategies

#### 1. Central_repository
```
- Git repository for prompts
- Shared document (Google Docs, Notion)
- Internal wiki
```

#### 2. Version Control
```
- Track changes over time
- Allow contributions from team
- Maintain history of improvements
```

#### 3. Documentation
```
- Document when to use each prompt
- Add examples of good outputs
- Note limitations and edge cases
```

#### 4. Review Process
```
- Peer review new prompts
- Test before adding to shared playbook
- Regular team reviews
```

---

## 6.9 Ví dụ Thực tế với Sample Repository

Trong phần này, chúng ta sẽ xây dựng Prompt Playbook cho **Sample Repository E-commerce Backend API**.

### Ví dụ 1: Explain Code Prompts cho Sample Repository

**Prompt Template - Function Explanation:**
```
Giải thích function [function_name] trong sample repository:

## Structure
1. **Purpose:** Mục đích của function
2. **Parameters:** Input parameters và types
3. **Return:** Return value và type
4. **Logic:** Step-by-step logic
5. **Error Handling:** Error handling strategy
6. **Edge Cases:** Các edge cases được xử lý
7. **Integration Points:** Integration với modules khác

## Code
[Paste function code]

## Context
- Project: E-commerce Backend API
- Tech Stack: Node.js, Express, Prisma ORM
- File: [file_path]
- Module: [module name]
```

**Applied Example - createOrder:**
```
Giải thích function createOrder trong sample repository:

## Structure
1. **Purpose:** Mục đích của function
2. **Parameters:** Input parameters và types
3. **Return:** Return value và type
4. **Logic:** Step-by-step logic
5. **Error Handling:** Error handling strategy
6. **Edge Cases:** Các edge cases được xử lý
7. **Integration Points:** Integration với modules khác

## Code
[Paste createOrder function from src/controllers/orderController.js]

## Context
- Project: E-commerce Backend API
- Tech Stack: Node.js, Express, Prisma ORM
- File: src/controllers/orderController.js
- Module: Order Module
```

**Kết quả AI:**
- Detailed explanation với project context
- Understood Prisma transaction pattern
- Identified integration với Product và User modules
- Explained error handling strategy

### Ví dụ 2: Code Review Prompts cho Sample Repository

**Prompt Template - Code Review:**
```
Review code trong sample repository:

## Code
[Paste code to review]

## Context
- Project: E-commerce Backend API
- Tech Stack: Node.js, Express, Prisma ORM
- Coding Standards:
  * Use async/await for database operations
  * Validate input với Joi
  * Use Prisma transactions for multi-step operations
  * Handle errors với try-catch
  * Return consistent JSON responses
  * Log errors với console.error

## Review Criteria
1. **Security:** Authentication, authorization, input validation
2. **Error Handling:** Try-catch, error messages, status codes
3. **Code Quality:** Naming, structure, readability
4. **Best Practices:** Prisma patterns, Express conventions
5. **Performance:** Database queries, N+1 problems
6. **Business Logic:** Correctness, edge cases

## Output Format
- ✅ Strengths
- ⚠️ Warnings
- ❌ Issues
- 💡 Suggestions
```

**Applied Example - updateProduct without auth:**
```
Review code trong sample repository:

## Code
```javascript
const updateProduct = async (req, res) => {
  const { id } = req.params;
  const { name, price } = req.body;
  const product = await prisma.product.update({
    where: { id },
    data: { name, price }
  });
  res.json(product);
};
```

## Context
- Project: E-commerce Backend API
- Tech Stack: Node.js, Express, Prisma ORM
- Coding Standards:
  * Use async/await for database operations
  * Validate input với Joi
  * Use Prisma transactions for multi-step operations
  * Handle errors với try-catch
  * Return consistent JSON responses
  * Log errors với console.error

## Review Criteria
1. **Security:** Authentication, authorization, input validation
2. **Error Handling:** Try-catch, error messages, status codes
3. **Code Quality:** Naming, structure, readability
4. **Best Practices:** Prisma patterns, Express conventions
5. **Performance:** Database queries, N+1 problems
6. **Business Logic:** Correctness, edge cases

## Output Format
- ✅ Strengths
- ⚠️ Warnings
- ❌ Issues
- 💡 Suggestions
```

**Kết quả AI:**
```
Review:
❌ No authentication check (anyone can update)
❌ No authorization check (admin only should update)
❌ No input validation (price could be negative)
❌ No error handling (if product not found)
⚠️ No stock update consideration
✅ Uses Prisma update correctly
✅ Simple and readable

Suggestions:
1. Add authMiddleware to route
2. Add adminMiddleware to route
3. Add Joi validation for name and price
4. Wrap in try-catch block
5. Add check if product exists before update
6. Consider stock implications
```

### Ví dụ 3: Test Generation Prompts cho Sample Repository

**Prompt Template - Generate Unit Tests:**
```
Generate unit tests cho [function_name] trong sample repository:

## Function Code
[Paste function code]

## Context
- Testing Framework: Jest
- Test Pattern: tests/user.test.js
- Database: PostgreSQL với Prisma
- Authentication: JWT tokens

## Test Requirements
1. **Happy Path:** Test successful execution
2. **Error Cases:** Test error handling
3. **Edge Cases:** Test boundary conditions
4. **Validation:** Test input validation
5. **Authentication:** Test auth requirements

## Test Structure
```javascript
describe('[function_name]', () => {
  describe('success cases', () => {
    // happy path tests
  });
  
  describe('error cases', () => {
    // error handling tests
  });
  
  describe('edge cases', () => {
    // boundary tests
  });
});
```
```

**Applied Example - createOrder:**
```
Generate unit tests cho createOrder trong sample repository:

## Function Code
[Paste createOrder function]

## Context
- Testing Framework: Jest
- Test Pattern: tests/user.test.js
- Database: PostgreSQL với Prisma
- Authentication: JWT tokens

## Test Requirements
1. **Happy Path:** Test successful order creation
2. **Error Cases:** Test insufficient stock, invalid product
3. **Edge Cases:** Test empty cart, single item
4. **Validation:** Test input validation
5. **Authentication:** Test auth requirements

## Test Structure
```javascript
describe('createOrder', () => {
  describe('success cases', () => {
    // happy path tests
  });
  
  describe('error cases', () => {
    // error handling tests
  });
  
  describe('edge cases', () => {
    // boundary tests
  });
});
```
```

**Kết quả AI:**
```javascript
describe('createOrder', () => {
  describe('success cases', () => {
    it('should create order successfully', async () => {
      const res = await request(app)
        .post('/api/orders')
        .set('Authorization', `Bearer ${authToken}`)
        .send({
          items: [{ productId: product.id, quantity: 2 }],
          shippingAddress: '123 Test St'
        });

      expect(res.statusCode).toBe(201);
      expect(res.body).toHaveProperty('order');
      expect(res.body.order.status).toBe('PENDING');
    });

    it('should clear cart after order creation', async () => {
      // Test cart clearing logic
    });
  });

  describe('error cases', () => {
    it('should reject order with insufficient stock', async () => {
      const res = await request(app)
        .post('/api/orders')
        .set('Authorization', `Bearer ${authToken}`)
        .send({
          items: [{ productId: product.id, quantity: 1000 }],
          shippingAddress: '123 Test St'
        });

      expect(res.statusCode).toBe(400);
      expect(res.body.error).toContain('Insufficient stock');
    });

    it('should reject order with invalid product', async () => {
      const res = await request(app)
        .post('/api/orders')
        .set('Authorization', `Bearer ${authToken}`)
        .send({
          items: [{ productId: 'invalid-id', quantity: 1 }],
          shippingAddress: '123 Test St'
        });

      expect(res.statusCode).toBe(400);
    });
  });

  describe('edge cases', () => {
    it('should handle single item order', async () => {
      // Test single item
    });

    it('should handle multiple items', async () => {
      // Test multiple items
    });
  });
});
```

### Ví dụ 4: Documentation Prompts cho Sample Repository

**Prompt Template - Generate API Documentation:**
```
Generate API documentation cho [endpoint] trong sample repository:

## Route Definition
[Paste route definition]

## Controller Code
[Paste controller function]

## Context
- Project: E-commerce Backend API
- API Style: RESTful
- Authentication: JWT required
- Response Format: JSON

## Documentation Requirements
1. **Endpoint:** HTTP method và path
2. **Description:** Purpose của endpoint
3. **Authentication:** Auth requirements
4. **Request Body:** Request body schema
5. **Response:** Response schema
6. **Error Responses:** Possible error responses
7. **Example:** Example request/response

## Format
```markdown
### [Endpoint Name]

**Endpoint:** `METHOD /path`

**Description:** [description]

**Authentication:** [auth requirements]

**Request Body:**
```json
{
  "field": "type",
  "description": "description"
}
```

**Response:**
```json
{
  "field": "type"
}
```

**Error Responses:**
- `400`: [error description]
- `401`: [error description]
- `404`: [error description]

**Example:**
```bash
curl -X METHOD http://localhost:3000/path \
  -H "Authorization: Bearer TOKEN" \
  -d '{"field": "value"}'
```
```
```

**Applied Example - POST /api/orders:**
```
Generate API documentation cho POST /api/orders trong sample repository:

## Route Definition
```javascript
router.post('/', authMiddleware, createOrder);
```

## Controller Code
[Paste createOrder function]

## Context
- Project: E-commerce Backend API
- API Style: RESTful
- Authentication: JWT required
- Response Format: JSON

## Documentation Requirements
1. **Endpoint:** HTTP method và path
2. **Description:** Purpose của endpoint
3. **Authentication:** Auth requirements
4. **Request Body:** Request body schema
5. **Response:** Response schema
6. **Error Responses:** Possible error responses
7. **Example:** Example request/response
```

**Kết quả AI:**
```markdown
### Create Order

**Endpoint:** `POST /api/orders`

**Description:** Creates a new order from user's cart items

**Authentication:** Required (JWT token)

**Request Body:**
```json
{
  "items": [
    {
      "productId": "string (UUID)",
      "quantity": "number (integer, min: 1)"
    }
  ],
  "shippingAddress": "string"
}
```

**Response:**
```json
{
  "message": "Order created successfully",
  "order": {
    "id": "string (UUID)",
    "userId": "string (UUID)",
    "totalAmount": "number (decimal)",
    "status": "PENDING|CONFIRMED|PROCESSING|SHIPPED|DELIVERED|CANCELLED",
    "shippingAddress": "string",
    "orderItems": [
      {
        "id": "string",
        "productId": "string",
        "quantity": "number",
        "price": "number",
        "product": {
          "id": "string",
          "name": "string",
          "price": "number"
        }
      }
    ],
    "createdAt": "string (ISO date)"
  }
}
```

**Error Responses:**
- `400`: Invalid input or insufficient stock
- `401`: Unauthorized (missing or invalid token)
- `500`: Internal server error

**Example:**
```bash
curl -X POST http://localhost:3000/api/orders \
  -H "Authorization: Bearer YOUR_JWT_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "items": [
      {
        "productId": "550e8400-e29b-41d4-a716-446655440000",
        "quantity": 2
      }
    ],
    "shippingAddress": "123 Main St, City, Country"
  }'
```
```

### Ví dụ 5: Custom Prompt cho Sample Repository - Debugging

**Prompt Template - Debug Issue:**
```
Help debug issue trong sample repository:

## Issue Description
[Describe the issue]

## Relevant Code
[Paste relevant code sections]

## Context
- Project: E-commerce Backend API
- Tech Stack: Node.js, Express, Prisma ORM
- Error: [Error message if any]

## Debugging Requirements
1. **Root Cause:** Identify root cause of issue
2. **Explanation:** Explain why issue occurs
3. **Solution:** Provide fix
4. **Prevention:** Suggest how to prevent similar issues
5. **Testing:** Suggest tests to verify fix
```

**Applied Example - Order creation fails with insufficient stock:**
```
Help debug issue trong sample repository:

## Issue Description
Order creation fails with "Insufficient stock" error even though product has sufficient stock in database.

## Relevant Code
[Paste createOrder function - stock check logic]

## Context
- Project: E-commerce Backend API
- Tech Stack: Node.js, Express, Prisma ORM
- Error: "Insufficient stock for product [name]"
- Database: PostgreSQL with Prisma

## Debugging Requirements
1. **Root Cause:** Identify root cause of issue
2. **Explanation:** Explain why issue occurs
3. **Solution:** Provide fix
4. **Prevention:** Suggest how to prevent similar issues
5. **Testing:** Suggest tests to verify fix
```

**Kết quả AI:**
```
Root Cause Analysis:
The issue is likely a race condition in the stock check. Multiple concurrent orders can pass the stock check before the stock is actually decremented, leading to overselling.

Explanation:
1. Order A checks stock (10 available)
2. Order B checks stock (still 10 available)
3. Order A decrements stock to 9
4. Order B decrements stock to 8
5. Both orders succeed but only 2 items were available

Solution:
Use SELECT FOR UPDATE or optimistic locking to prevent race conditions:

```javascript
const order = await prisma.$transaction(async (tx) => {
  // Use FOR UPDATE to lock the row
  const product = await tx.$queryRaw`
    SELECT * FROM "Product" 
    WHERE id = ${item.productId} 
    FOR UPDATE
  `;

  if (product.stock < item.quantity) {
    throw new Error(`Insufficient stock for ${product.name}`);
  }

  // Rest of logic...
});
```

Prevention:
1. Always use transactions for stock operations
2. Use row locking for critical operations
3. Add retry logic for concurrent operations
4. Monitor for race conditions in production

Testing:
```javascript
it('should handle concurrent orders correctly', async () => {
  // Test concurrent order creation
  const promises = Array(10).fill(null).map(() => 
    request(app)
      .post('/api/orders')
      .set('Authorization', `Bearer ${authToken}`)
      .send({ items: [{ productId, quantity: 1 }] })
  );
  
  const results = await Promise.all(promises);
  const successfulOrders = results.filter(r => r.statusCode === 201);
  
  expect(successfulOrders.length).toBeLessThanOrEqual(product.stock);
});
```
```

### Ví dụ 6: Prompt Playbook Structure cho Sample Repository

```markdown
# Prompt Playbook - E-commerce Backend API

## Explain Code Prompts

### Function Explanation
[Template from Ví dụ 1]

### Module Explanation
[Template from Ví dụ 2]

### Architecture Explanation
[Template from Ví dụ 3]

## Code Review Prompts

### Controller Review
[Template from Ví dụ 2]

### Security Review
[Custom prompt for security-focused review]

### Performance Review
[Custom prompt for performance-focused review]

## Test Generation Prompts

### Unit Test Generation
[Template from Ví dụ 3]

### Integration Test Generation
[Custom prompt for integration tests]

### Edge Case Test Generation
[Custom prompt for edge cases]

## Documentation Prompts

### API Documentation
[Template from Ví dụ 4]

### Code Documentation
[Custom prompt for inline comments]

### Architecture Documentation
[Custom prompt for architecture docs]

## Debugging Prompts

### Issue Debugging
[Template from Ví dụ 5]

### Log Analysis
[Custom prompt for log analysis]

## Custom Prompts

### Feature Implementation
[Custom prompt for implementing new features]

### Refactoring
[Custom prompt for refactoring tasks]

### Migration
[Custom prompt for database migrations]
```

---

## 6.10 Thực hành

### Exercise 1: Build Prompt Playbook Section
1. Chọn một category (Explain Code, Code Review, etc.)
2. Create 3-5 prompts cho category đó
3. Test mỗi prompt với real code
4. Refine based on results
5. Document in Prompt Playbook

### Exercise 2: Customize Existing Prompts
1. Take prompts from template
2. Customize cho tech stack của bạn
3. Test with real scenarios
4. Compare with original prompts
5. Document improvements

### Exercise 3: Prompt Iteration
1. Pick a complex task
2. Create initial prompt
3. Test and evaluate
4. Iterate 3-5 times
5. Document each iteration
6. Add final prompt to playbook

### Exercise 4: Team Sharing (if applicable)
1. Share your Prompt Playbook with peer
2. Get feedback
3. Incorporate feedback
4. Discuss best practices
5. Create shared team playbook

---

## 6.10 Resources

### Prompt Libraries
- OpenAI Prompt Library
- Anthropic Prompt Library
- Community-shared prompts (GitHub, etc.)

### Tools
- Notion, Obsidian for prompt management
- Git for version control
- Custom prompt management tools

---

## Quiz

1. Prompt Playbook là gì và tại sao quan trọng?
2. Nêu 4 categories chính của prompts trong Prompt Playbook?
3. Làm thế nào để customize prompts cho project của bạn?
4. Strategies để share Prompt Playbook với team?
5. Describe process để build và maintain Prompt Playbook?

---

## Next Steps

Sau khi hoàn thành Module 6, tiếp tục với:
- **Module 7:** AI Pair Programming Workflow
- Áp dụng Prompt Playbook vào thực tế
