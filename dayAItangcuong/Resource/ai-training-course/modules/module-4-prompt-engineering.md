# Module 4: Prompt Engineering for Software Engineering

## Mục tiêu học tập

Sau khi hoàn thành module này, bạn sẽ:
- Hiểu các kỹ thuật prompting cơ bản (zero-shot, few-shot)
- Biết cách sử dụng system prompts và role prompts
- Có thể thiết kế prompt hiệu quả cho tác vụ Software Engineering
- Áp dụng best practices trong prompt design
- Tối ưu hóa prompt để có kết quả tốt hơn từ AI

---

## 4.1 Zero-shot Prompting

### Định nghĩa
Zero-shot prompting là hỏi AI câu hỏi hoặc yêu cầu task mà không cung cấp ví dụ trước đó. AI dựa vào knowledge đã có để trả lời.

### Ví dụ cơ bản
```
"Giải thích function calculateTotal trong file order.js"
```

### Ưu điểm
- Đơn giản và nhanh
- Không cần chuẩn bị examples
- Tốt cho tasks phổ biến

### Nhược điểm
- Có thể không chính xác cho tasks phức tạp
- Output có thể không consistent
- Khó control format

### Best Practices cho Zero-shot
1. **Be specific:** Cụ thể về yêu cầu
2. **Provide context:** Share relevant information
3. **Set constraints:** Specify format, length, etc.
4. **Ask for reasoning:** Request step-by-step explanation

**Ví dụ tốt:**
```
"Giải thích function calculateTotal trong file order.js:
1. Mục đích của function
2. Các parameters và ý nghĩa
3. Logic calculation
4. Return value
5. Edge cases được xử lý

Context: Đây là e-commerce system với support cho discounts và taxes."
```

---

## 4.2 Few-shot Prompting

### Định nghĩa
Few-shot prompting cung cấp một vài ví dụ (examples) trước khi yêu cầu AI thực hiện task. AI học từ examples để trả lời tương tự.

### Ví dụ cơ bản
```
Ví dụ 1:
Input: "validateEmail('test@example.com')"
Output: "Returns true if email format is valid"

Ví dụ 2:
Input: "validateEmail('invalid-email')"
Output: "Returns false - missing @ symbol"

Bây giờ giải thích:
Input: "validateEmail('user@domain')"
Output:
```

### Ưu điểm
- Output consistent hơn
- Tốt cho tasks cụ thể
- Có thể control format

### Nhược điểm
- Cần thời gian chuẩn bị examples
- Examples phải chất lượng
- Tốn tokens hơn

### Best Practices cho Few-shot
1. **Use diverse examples:** Cover different scenarios
2. **Clear input-output format:** Consistent structure
3. **Include edge cases:** Show how to handle them
4. **Label examples:** Clear what is input vs output

**Ví dụ tốt:**
```
Ví dụ code review:

Example 1:
Code: function add(a, b) { return a + b; }
Review: ✅ Simple and correct, but lacks input validation

Example 2:
Code: function divide(a, b) { return a / b; }
Review: ⚠️ Needs to handle division by zero

Example 3:
Code: function process(data) { return data.map(x => x * 2); }
Review: ✅ Good use of map, consider null check for data

Bây giờ review code này:
Code: function calculateDiscount(price, percentage) { return price * percentage / 100; }
Review:
```

---

## 4.3 System Prompt

### Định nghĩa
System prompt là instructions được đặt ở đầu conversation để định hướng behavior của AI. Nó sets context, role, và guidelines cho toàn bộ conversation.

### Ví dụ System Prompt
```
Bạn là một senior software engineer với 10 năm kinh nghiệm trong backend development.
Bạn chuyên về Node.js, PostgreSQL, và microservices architecture.
Khi giải thích code, hãy:
1. Sử dụng ngôn ngữ kỹ thuật chính xác
2. Giải thích cả "what" và "why"
3. Cung cấp examples khi appropriate
4. Mention best practices và trade-offs
5. Suggest improvements khi applicable
```

### Components của System Prompt hiệu quả

#### 1. Role Definition
```
Bạn là [role] với [expertise] trong [domain]
```

#### 2. Task Guidelines
```
Khi thực hiện [task], hãy:
- [guideline 1]
- [guideline 2]
- [guideline 3]
```

#### 3. Output Format
```
Format output của bạn như sau:
## [Section 1]
[Content]

## [Section 2]
[Content]
```

#### 4. Constraints
```
Constraints:
- Không giả định thông tin không được cung cấp
- Luôn verify assumptions
- Mention khi không chắc chắn
```

### Best Practices cho System Prompt
1. **Set clear role:** Define expertise and perspective
2. **Specify behavior:** How should AI respond
3. **Set boundaries:** What AI should and shouldn't do
4. **Define format:** Consistent output structure
5. **Iterate and refine:** Test and improve

---

## 4.4 Role Prompt

### Định nghĩa
Role prompt yêu cầu AI assume một specific role hoặc persona để cung cấp perspective phù hợp với task.

### Common Roles cho Software Engineering

#### 1. Senior Engineer
```
Act as a senior software engineer reviewing code for a production system.
Focus on: maintainability, scalability, security, and best practices.
```

#### 2. Security Expert
```
Act as a security consultant reviewing code for vulnerabilities.
Focus on: injection attacks, authentication, authorization, data exposure.
```

#### 3. Performance Engineer
```
Act as a performance optimization specialist.
Focus on: algorithmic complexity, memory usage, database queries, caching.
```

#### 4. QA Engineer
```
Act as a QA engineer designing test cases.
Focus on: edge cases, error conditions, integration scenarios, user flows.
```

#### 5. Technical Writer
```
Act as a technical writer creating documentation.
Focus on: clarity, completeness, examples, and user-friendliness.
```

### Ví dụ Role Prompt
```
Bạn là một software architect với expertise trong distributed systems.
Review architecture design sau và provide feedback:
- Scalability concerns
- Potential bottlenecks
- Suggested improvements
- Technology recommendations

Architecture:
[Paste architecture description]
```

### Best Practices cho Role Prompt
1. **Choose appropriate role:** Match role to task
2. **Define expertise:** Specify domain knowledge
3. **Set focus areas:** What should role prioritize
4. **Provide context:** Background information
5. **Ask for specific output:** What you want from that role

---

## 4.5 Prompt Design Best Practices

### 1. Be Specific and Clear
**Bad:**
```
"Fix this code"
```

**Good:**
```
"Fix the bug in function calculateTotal where it doesn't apply discount correctly when percentage is 0"
```

### 2. Provide Sufficient Context
**Bad:**
```
"Optimize this function"
```

**Good:**
```
"Optimize function processOrders for performance.
Context: This function processes 10,000 orders daily and currently takes 5 seconds per batch.
Goal: Reduce to under 2 seconds per batch.
Constraints: Must maintain data consistency and error handling."
```

### 3. Use Structured Format
**Bad:**
```
"Explain this code and tell me if it's good"
```

**Good:**
```
Analyze the following code:

## Code Analysis
1. Purpose of the code
2. Correctness assessment
3. Performance considerations
4. Security concerns
5. Suggestions for improvement

Code:
[Paste code]
```

### 4. Set Clear Constraints
**Bad:**
```
"Write tests for this"
```

**Good:**
```
"Write unit tests for function validateUser using Jest framework.
Requirements:
- Test happy path with valid input
- Test invalid email format
- Test missing required fields
- Test edge cases (empty string, null, undefined)
- Keep each test focused and independent"
```

### 5. Ask for Reasoning
**Bad:**
```
"Is this code correct?"
```

**Good:**
```
"Is this code correct? Explain your reasoning step-by-step:
1. What does the code intend to do?
2. Does it achieve that intent?
3. Are there any bugs or edge cases?
4. What improvements would you suggest?

Code:
[Paste code]
```

### 6. Iterate and Refine
**First attempt:**
```
"Explain this code"
```

**Refined:**
```
"Explain function authenticateUser in auth.js:
1. Authentication flow step-by-step
2. Security measures in place
3. Potential vulnerabilities
4. How tokens are generated and validated"
```

---

## 4.6 Prompt Patterns cho Software Engineering

### Pattern 1: Code Explanation
```
Explain [component] in [context]:

Structure:
1. Overview
2. Key components
3. Data flow
4. Important logic
5. Edge cases
6. Dependencies

Code/Context:
[Paste code]
```

### Pattern 2: Code Generation
```
Generate [component] for [purpose]:

Requirements:
- [requirement 1]
- [requirement 2]
- [requirement 3]

Constraints:
- [constraint 1]
- [constraint 2]

Context:
[Paste relevant context]
```

### Pattern 3: Code Review
```
Review the following code as a [role]:

Focus areas:
- [area 1]
- [area 2]
- [area 3]

Output format:
- Summary
- Issues found (with severity)
- Suggestions
- Overall assessment

Code:
[Paste code]
```

### Pattern 4: Debugging
```
Help debug this issue:

Error:
[Paste error message]

Code context:
[Paste relevant code]

Expected behavior:
[Describe expected]

Actual behavior:
[Describe actual]

Provide:
1. Root cause analysis
2. Explanation of why it fails
3. Suggested fix
4. Prevention strategies
```

### Pattern 5: Refactoring
```
Refactor this code to improve [goal]:

Current code:
[Paste code]

Goals:
- [goal 1: e.g., readability]
- [goal 2: e.g., performance]
- [goal 3: e.g., maintainability]

Constraints:
- Must preserve functionality
- Must pass existing tests
- Follow [style guide]

Provide:
1. Refactored code
2. Explanation of changes
3. Benefits of refactoring
```

---

## 4.7 Common Mistakes và How to Avoid

### Mistake 1: Too Vague
**Problem:**
```
"Make this better"
```

**Solution:**
```
"Refactor this function to improve readability by:
1. Extracting complex logic into helper functions
2. Adding meaningful variable names
3. Adding comments for non-obvious logic"
```

### Mistake 2: Insufficient Context
**Problem:**
```
"Fix the bug in this function"
```

**Solution:**
```
"Fix the bug in function processPayment where it fails when card expires today.
Context: Function checks card expiry but uses wrong date comparison.
Current behavior: Rejects valid cards expiring today
Expected behavior: Accept cards expiring today"
```

### Mistake 3: No Verification
**Problem:**
```
Accept AI output without checking
```

**Solution:**
```
Always:
1. Review AI-generated code
2. Run tests
3. Verify logic
4. Check edge cases
```

### Mistake 4: One-shot Prompting
**Problem:**
```
Expecting perfect result from single prompt
```

**Solution:**
```
Iterate:
1. Start with initial prompt
2. Review output
3. Ask follow-up questions
4. Refine prompt
5. Repeat until satisfied
```

---

## 4.8 Ví dụ Thực tế với Sample Repository

Trong phần này, chúng ta sẽ áp dụng các kỹ thuật Prompt Engineering vào **Sample Repository E-commerce Backend API**.

### Ví dụ 1: Zero-shot Prompting cho Code Explanation

**Task:** Giải thích function `createOrder` trong sample repository

**Zero-shot Prompt:**
```
Hãy giải thích function createOrder trong file src/controllers/orderController.js:

Yêu cầu:
1. Purpose của function
2. Input parameters
3. Logic step-by-step
4. Error handling
5. Return value
6. Edge cases được xử lý
```

**Kết quả AI:**
- Function tạo đơn hàng mới từ cart items
- Input: req.body với items array và shippingAddress
- Logic: Validate → Check stock → Calculate total → Create order → Update stock → Clear cart
- Error handling: Try-catch với specific error messages
- Return: Order object với orderItems
- Edge cases: Insufficient stock, invalid product IDs

**Đánh giá:**
- ✅ Giải thích tổng quan tốt
- ⚠️ Missed transaction logic details
- ⚠️ Không mention race condition handling

### Ví dụ 2: Few-shot Prompting cho Code Review

**Task:** Review code theo pattern từ sample repository

**Few-shot Prompt:**
```
Hãy review code sau theo pattern từ các ví dụ:

Example 1:
Code:
```javascript
const register = async (req, res) => {
  const { email, password } = req.body;
  const user = await prisma.user.create({ data: { email, password } });
  res.json(user);
};
```
Review:
❌ Missing password hashing
❌ No input validation
❌ No error handling
✅ Basic structure correct
Suggestion: Add bcrypt.hash, Joi validation, try-catch

Example 2:
Code:
```javascript
const getProducts = async (req, res) => {
  const products = await prisma.product.findMany();
  res.json(products);
};
```
Review:
⚠️ No pagination (performance issue)
⚠️ No filtering
✅ Error handling present
Suggestion: Add pagination, filtering, search

Bây giờ review code này:
Code:
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
Review:
```

**Kết quả AI:**
```
Review:
❌ No authorization check (anyone can update)
❌ No input validation (price could be negative)
❌ No error handling (if product not found)
⚠️ No stock update consideration
✅ Uses Prisma update correctly
Suggestion: Add auth middleware, Joi validation, try-catch, admin check
```

**Đánh giá:**
- ✅ Consistent với examples
- ✅ Identified security issue (no auth)
- ✅ Followed review format

### Ví dụ 3: System Prompt cho Sample Repository

**System Prompt Design:**
```
You are a Senior Backend Engineer specializing in Node.js, Express, and Prisma ORM.

Context:
- Working on E-commerce Backend API sample repository
- Tech stack: Node.js, Express, PostgreSQL, Prisma
- Architecture: MVC pattern
- Authentication: JWT with bcrypt
- Validation: Joi

Coding Standards:
1. Always use async/await for database operations
2. Use Prisma transactions for multi-step operations
3. Validate input with Joi before processing
4. Hash passwords with bcrypt before storing
5. Use JWT for authentication
6. Handle errors with try-catch blocks
7. Return consistent JSON responses
8. Log errors with console.error

Output Format:
- Provide code in JavaScript/Node.js
- Include comments for complex logic
- Follow existing code patterns in repository
- Suggest error handling
- Consider edge cases

When reviewing code:
1. Check for security vulnerabilities
2. Validate input handling
3. Check error handling
4. Consider performance implications
5. Follow coding standards above
```

**Sử dụng System Prompt:**
```
[Apply system prompt above]

Task: Implement function to cancel order in sample repository

Requirements:
- User can only cancel their own orders
- Only orders in PENDING or CONFIRMED status can be cancelled
- Restore product stock when order cancelled
- Use transaction for consistency
- Return success/error message
```

**Kết quả AI:**
```javascript
const cancelOrder = async (req, res) => {
  try {
    const userId = req.user.userId;
    const { id } = req.params;

    // Verify order belongs to user
    const order = await prisma.order.findFirst({
      where: { id, userId }
    });

    if (!order) {
      return res.status(404).json({ error: 'Order not found' });
    }

    // Check if order can be cancelled
    if (order.status !== 'PENDING' && order.status !== 'CONFIRMED') {
      return res.status(400).json({ 
        error: 'Cannot cancel order in current status' 
      });
    }

    // Use transaction to restore stock and update status
    await prisma.$transaction(async (tx) => {
      // Restore stock for each item
      for (const item of order.orderItems) {
        await tx.product.update({
          where: { id: item.productId },
          data: { stock: { increment: item.quantity } }
        });
      }

      // Update order status
      await tx.order.update({
        where: { id },
        data: { status: 'CANCELLED' }
      });
    });

    res.json({ message: 'Order cancelled successfully' });
  } catch (error) {
    console.error('Cancel order error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
```

**Đánh giá:**
- ✅ Followed coding standards
- ✅ Used transaction correctly
- ✅ Proper error handling
- ✅ Security check (user ownership)
- ✅ Business logic validation

### Ví dụ 4: Role Prompting cho Different Perspectives

**Task:** Review `createOrder` function từ different perspectives

**Role 1: Security Expert**
```
You are a Security Expert specializing in web application security.

Review the createOrder function for security vulnerabilities:
- SQL injection risks
- Authentication/authorization issues
- Input validation
- Race conditions
- Data exposure

Focus on security best practices and OWASP Top 10.
```

**Kết quả AI (Security Perspective):**
```
Security Review:
✅ Uses parameterized queries (Prisma ORM) - No SQL injection risk
✅ JWT authentication required
⚠️ No rate limiting on order creation (DoS risk)
⚠️ No input validation on quantity (could be negative)
⚠️ Race condition in stock check (concurrent orders could oversell)
❌ No CSRF protection (if used in web app)
Recommendations:
1. Add rate limiting middleware
2. Validate quantity > 0
3. Use SELECT FOR UPDATE or optimistic locking
4. Add CSRF tokens for web clients
```

**Role 2: Performance Expert**
```
You are a Performance Expert specializing in database optimization.

Review the createOrder function for performance issues:
- Database query efficiency
- N+1 query problems
- Index usage
- Transaction overhead
- Scalability concerns

Focus on optimization and scalability.
```

**Kết quả AI (Performance Perspective):**
```
Performance Review:
✅ Uses transaction for consistency
⚠️ Multiple database queries in loop (N+1 problem)
⚠️ No caching for product lookups
⚠️ Transaction holds locks too long
✅ Proper indexes on foreign keys
Recommendations:
1. Batch product stock updates instead of loop
2. Add Redis cache for product data
3. Minimize transaction duration
4. Consider queue for order processing
5. Add database connection pooling
```

**Role 3: Business Logic Expert**
```
You are a Business Logic Expert specializing in e-commerce systems.

Review the createOrder function for business logic correctness:
- Order processing rules
- Inventory management
- Pricing accuracy
- Edge cases
- User experience

Focus on business requirements and customer experience.
```

**Kết quả AI (Business Logic Perspective):**
```
Business Logic Review:
✅ Validates stock before order creation
✅ Calculates total correctly
✅ Clears cart after order
⚠️ No discount/coupon support
⚠️ No tax calculation
⚠️ No shipping cost calculation
❌ No order history limit (could grow indefinitely)
Recommendations:
1. Add discount/coupon logic
2. Implement tax calculation based on location
3. Add shipping cost calculation
4. Implement order archiving for old orders
5. Add order confirmation email
```

### Ví dụ 5: Prompt Iteration cho Complex Task

**Task:** Implement Product Review feature

**Iteration 1 - Basic Prompt:**
```
Implement product review feature for sample repository.
Users should be able to review products they purchased.
```

**Kết quả AI:** Basic implementation missing validation and business rules

**Iteration 2 - Add Context:**
```
Implement product review feature for sample repository.

Context:
- Tech stack: Node.js, Express, Prisma
- Existing modules: User, Product, Order
- Database schema in prisma/schema.prisma

Requirements:
- Users can review products they purchased
- Review includes rating (1-5) and comment
- Only users who purchased can review
- Admin can moderate reviews
```

**Kết quả AI:** Better but missing edge cases

**Iteration 3 - Add Specifics:**
```
Implement product review feature for sample repository.

Context:
- Tech stack: Node.js, Express, Prisma
- Existing modules: User, Product, Order
- Database schema in prisma/schema.prisma

Requirements:
- Users can review products they purchased
- Review includes rating (1-5) and comment
- Only users who purchased can review
- Only delivered orders qualify
- Admin can moderate reviews (soft delete)
- Reviews display on product page

Follow pattern from userController.js and orderController.js.
Include proper error handling and validation.
```

**Kết quả AI:** Complete implementation with all requirements

**Iteration 4 - Add Edge Cases:**
```
[Previous prompt]

Additional considerations:
- Handle duplicate reviews (user reviewing same product twice)
- Validate rating range (1-5)
- Sanitize comment input
- Add indexes for performance
- Consider review aggregation (average rating)
```

**Kết quả AI:** Production-ready implementation

### Ví dụ 6: Prompt Pattern cho Sample Repository

**Pattern 1: Explain Code Pattern**
```
Explain [function name] in [file path]:

Context:
- Project: E-commerce Backend API
- Tech stack: Node.js, Express, Prisma
- Related files: [list related files]

Yêu cầu:
1. Purpose của function
2. Input parameters và validation
3. Logic step-by-step
4. Error handling
5. Return value
6. Integration points
7. Edge cases handled
```

**Pattern 2: Generate Code Pattern**
```
Implement [feature name] cho sample repository:

Context:
- Tech stack: Node.js, Express, Prisma
- Existing modules: [list modules]
- Database schema: [schema info]
- Similar implementation: [reference file]

Requirements:
- [detailed requirements]
- Follow pattern from [reference file]
- Include validation với Joi
- Add error handling
- Use transactions where appropriate

Yêu cầu:
1. Controller implementation
2. Route definitions
3. Validation schemas
4. Error handling
5. Integration points
```

**Pattern 3: Code Review Pattern**
```
Review [file/function] in sample repository:

Context:
- Project: E-commerce Backend API
- Tech stack: Node.js, Express, Prisma
- Coding standards: JWT auth, Joi validation, error handling

Review criteria:
1. Security vulnerabilities
2. Input validation
3. Error handling
4. Performance issues
5. Code quality
6. Best practices

Format:
- ✅ Strengths
- ⚠️ Warnings
- ❌ Issues
- 💡 Suggestions
```

---

## 4.9 Thực hành

### Exercise 1: Zero-shot vs Few-shot
1. Task: Giải thích một function phức tạp
2. Try zero-shot prompt
3. Create few-shot examples
4. Compare outputs
5. Document differences

### Exercise 2: System Prompt Design
1. Design system prompt cho role "Senior Backend Engineer"
2. Test với 3 different tasks
3. Refine based on results
4. Document final system prompt

### Exercise 3: Role Prompting
1. Pick a code review task
2. Try with different roles (Senior, Security, Performance)
3. Compare perspectives
4. Document insights

### Exercise 4: Prompt Iteration
1. Pick a complex task (e.g., generate API)
2. Start with basic prompt
3. Iterate 3-5 times
4. Document each iteration and improvement
5. Reflect on process

---

## 4.10 Resources

### Prompt Engineering Guides
- OpenAI Prompt Engineering Guide
- Anthropic Prompt Library
- "Prompt Engineering for Developers" - Various sources

### Examples
- Prompt libraries (OpenAI, Anthropic)
- Community-shared prompts
- Case studies

---

## Quiz

1. Zero-shot và few-shot prompting khác nhau như thế nào?
2. System prompt nên chứa哪些 components?
3. Tại sao role prompting hữu ích?
4. Nêu 5 best practices trong prompt design?
5. Describe một scenario nơi few-shot prompting tốt hơn zero-shot.

---

## Next Steps

Sau khi hoàn thành Module 4, tiếp tục với:
- **Module 5:** Context Engineering & AI Coding Tools
- Áp dụng prompt engineering vào thực tế
