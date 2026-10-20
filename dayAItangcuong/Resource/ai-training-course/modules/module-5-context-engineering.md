# Module 5: Context Engineering & AI Coding Tools

## Mục tiêu học tập

Sau khi hoàn thành module này, bạn sẽ:
- Hiểu tầm quan trọng của context trong AI Coding Assistants
- Biết cách cung cấp context ở các cấp độ khác nhau (file, module, repository)
- Quản lý context window hiệu quả
- Lựa chọn AI Coding Tool phù hợp với task
- So sánh và verify output từ các AI tools khác nhau

---

## 5.1 Context là gì?

### Định nghĩa
Context là thông tin bạn cung cấp cho AI để giúp nó hiểu task và environment. Context bao gồm: code, documentation, requirements, constraints, và bất kỳ thông tin nào liên quan.

### Tại sao context quan trọng?
- **Accuracy:** Context đúng → output đúng
- **Relevance:** Context phù hợp → output phù hợp
- **Efficiency:** Context đủ → không cần iterate nhiều
- **Consistency:** Context consistent → output consistent

### Types của Context

#### 1. Code Context
```javascript
// Function cần giải thích
function calculateTotal(items, discount) {
  // ...
}
```

#### 2. File Context
```javascript
// Toàn bộ file order.js
const calculateTotal = require('./calculateTotal');
const validateOrder = require('./validateOrder');

// ... rest of file
```

#### 3. Module Context
```
// Các files trong module orders/
orders/
├── index.js
├── calculateTotal.js
├── validateOrder.js
└── processOrder.js
```

#### 4. Repository Context
```
// Cấu trúc toàn bộ repository
project/
├── src/
│   ├── orders/
│   ├── users/
│   └── products/
├── tests/
└── package.json
```

#### 5. Business Context
```
// Business requirements
"E-commerce system với support cho:
- Multiple payment methods
- Discount codes
- Tax calculation by region
- Inventory management"
```

---

## 5.2 File Context

### Khi nào dùng File Context?
- Giải thích một function cụ thể
- Review một file
- Refactor một file
- Generate tests cho một file

### Cách cung cấp File Context

#### Method 1: Paste toàn bộ file
```
Hãy review file orderService.js:

[Paste toàn bộ nội dung file]
```

**Ưu điểm:** Đầy đủ context
**Nhược điểm:** Tốn nhiều tokens, có thể vượt limit

#### Method 2: Paste relevant sections
```
Hãy review function processOrder trong orderService.js:

Relevant code:
[Paste function processOrder]
[Paste các functions được gọi bởi processOrder]
```

**Ưu điểm:** Tốn ít tokens, focused
**Nhược điểm:** Có thể miss dependencies

#### Method 3: Describe structure
```
Hãy review function processOrder trong orderService.js:

File structure:
- processOrder function (lines 10-50)
- Calls: validateOrder (lines 5-9), calculateTotal (lines 55-70)
- Uses: Order model (models/Order.js)

Function code:
[Paste chỉ processOrder]
```

**Ưu điểm:** Balanced context và tokens
**Nhược điểm:** Cần effort để describe

### Best Practices cho File Context
1. **Include imports:** Dependencies quan trọng
2. **Include related functions:** Functions được gọi
3. **Include types/interfaces:** Nếu có TypeScript
4. **Include comments:** Documentation trong code
5. **Exclude boilerplate:** Code không liên quan

---

## 5.3 Module Context

### Khi nào dùng Module Context?
- Hiểu một module hoàn chỉnh
- Refactor module
- Design module architecture
- Generate documentation cho module

### Cách cung cấp Module Context

#### Method 1: List files và descriptions
```
Module: orders/

Files:
- index.js: Entry point, exports main functions
- calculateTotal.js: Calculates order total with discounts
- validateOrder.js: Validates order data
- processOrder.js: Main order processing logic
- types.ts: TypeScript interfaces for orders

Key functions:
- createOrder()
- updateOrder()
- cancelOrder()
- getOrderStatus()
```

#### Method 2: Paste key files
```
Module: orders/

index.js:
[Paste index.js]

types.ts:
[Paste types.ts]

Key function (processOrder):
[Paste processOrder]
```

#### Method 3: Module map + key code
```
Module: orders/

Module Map:
├── Validation (validateOrder.js)
├── Calculation (calculateTotal.js)
├── Processing (processOrder.js)
└── Types (types.ts)

Flow: validateOrder → calculateTotal → processOrder

Key code:
[Paste code từ các files quan trọng]
```

### Best Practices cho Module Context
1. **Start with overview:** Module structure trước
2. **Focus on entry points:** Files chính
3. **Show relationships:** Dependencies giữa files
4. **Include interfaces:** Types/contracts
5. **Use diagrams:** Visual nếu có thể

---

## 5.4 Repository Context

### Khi nào dùng Repository Context?
- Onboarding vào project mới
- Architecture review
- Cross-module refactoring
- System-level changes

### Cách cung cấp Repository Context

#### Method 1: High-level overview
```
Repository: ecommerce-api

Tech stack:
- Backend: Node.js, Express
- Database: PostgreSQL
- ORM: Prisma
- Auth: JWT

Structure:
src/
├── modules/
│   ├── users/
│   ├── orders/
│   ├── products/
│   └── payments/
├── shared/
│   ├── middleware/
│   ├── utils/
│   └── types/
├── config/
└── index.js

Key patterns:
- Module-based architecture
- Shared middleware for auth
- Centralized error handling
```

#### Method 2: Module-by-module breakdown
```
Repository: ecommerce-api

Module: users/
- Purpose: User management and authentication
- Key files: auth.js, users.js
- Dependencies: shared/utils

Module: orders/
- Purpose: Order processing
- Key files: orders.js, orderService.js
- Dependencies: users/, products/, payments/

Module: products/
- Purpose: Product catalog
- Key files: products.js, inventory.js
- Dependencies: shared/utils

[Continue cho các modules khác]
```

#### Method 3: Architecture diagram + key code
```
Repository: ecommerce-api

Architecture:
[Mermaid diagram hoặc mô tả]

Key entry point:
[Paste src/index.js]

Example module:
[Paste code từ một module làm ví dụ]
```

### Best Practices cho Repository Context
1. **Start with big picture:** Architecture trước
2. **Module-level detail:** Không quá deep vào từng file
3. **Show relationships:** Modules interact như thế nào
4. **Include configuration:** Environment, database, etc.
5. **Use visual aids:** Diagrams rất hữu ích

---

## 5.5 Context Window Management

### Context Window là gì?
Context window là số lượng tối đa tokens AI có thể xử lý trong một request. Vượt quá limit sẽ bị truncate hoặc error.

### Context Limits (ước tính)
- **GPT-3.5:** ~4K tokens
- **GPT-4:** ~8K-32K tokens (tùy version)
- **Claude:** ~100K-200K tokens
- **Local models:** Varies widely

### Strategies để quản lý Context

#### 1. Prioritize Information
```
Context hierarchy (quan trọng → ít quan trọng):
1. Code cần analyze/generate
2. Related functions/classes
3. Types/interfaces
4. Imports/dependencies
5. Comments/documentation
6. Boilerplate code
```

#### 2. Summarize thay vì Paste
**Thay vì paste toàn bộ file:**
```
[Paste 500 lines code]
```

**Summarize:**
```
File: userService.js (200 lines)
Purpose: User CRUD operations
Key functions:
- createUser() (lines 10-30): Creates user with validation
- getUser() (lines 35-50): Fetches user by ID
- updateUser() (lines 55-80): Updates user data
- deleteUser() (lines 85-100): Soft deletes user

[Paste chỉ key functions]
```

#### 3. Use References
```
Thay vì paste dependency:
[Paste entire validate.js file]

Dùng reference:
Uses validate.js which contains:
- validateEmail()
- validatePhone()
- validatePassword()
(See validate.js for implementation)
```

#### 4. Chunk Large Context
```
Nếu context quá lớn, chia thành multiple requests:

Request 1: "Analyze structure của module orders"
Request 2: "Review function processOrder trong module orders"
Request 3: "Review function calculateTotal trong module orders"
```

#### 5. Iterative Refinement
```
Start với minimal context:
"Generate function để validate email"

Add context nếu cần:
"Generate function để validate email cho system với requirements:
- Must support international domains
- Must check MX records
- Must be case-insensitive"
```

### Tools để estimate tokens
- **Token counter:** Nhiều AI tools có built-in counter
- **Rule of thumb:** ~1 token ≈ 4 characters (English)
- **Code:** Code thường dense hơn, estimate 1 token ≈ 3 characters

---

## 5.6 AI Coding Assistant Selection

### Comparison Matrix

| Tool | Context Window | Strengths | Weaknesses | Best For |
|------|----------------|-----------|------------|----------|
| **ChatGPT (GPT-4)** | 8K-32K | Powerful reasoning, versatile | Limited context, paid | Complex reasoning, architecture |
| **Claude** | 100K-200K | Large context, safety | Slower, sometimes verbose | Large codebase analysis |
| **GitHub Copilot** | IDE-dependent | Deep IDE integration, autocomplete | Limited conversation | Day-to-day coding, autocomplete |
| **Cursor** | Large | AI-native IDE, powerful features | New tool, learning curve | AI-first development |
| **CodeWhisperer** | Medium | AWS integration, security | AWS-focused | AWS projects |

### Selection Criteria

#### 1. Task Type
- **Quick autocomplete:** Copilot, Cursor
- **Complex reasoning:** GPT-4, Claude
- **Large codebase analysis:** Claude
- **AWS-specific:** CodeWhisperer

#### 2. Context Size
- **Small (<5K tokens):** Any tool
- **Medium (5K-20K):** GPT-4, Claude
- **Large (>20K):** Claude

#### 3. Integration Needs
- **IDE integration:** Copilot, Cursor
- **Web-based:** ChatGPT, Claude
- **API integration:** OpenAI, Anthropic APIs

#### 4. Team Requirements
- **Data privacy:** Enterprise versions
- **Cost:** Free tiers available
- **Collaboration:** Some tools support sharing

### Decision Framework

```
Step 1: Define task
- What are you trying to do?
- How much context needed?
- What output format?

Step 2: Evaluate constraints
- Context window size
- Integration requirements
- Budget
- Privacy requirements

Step 3: Select tool
- Match task to tool strengths
- Consider team preferences
- Start with 1-2 tools

Step 4: Iterate
- Evaluate results
- Try alternative tools
- Refine selection
```

---

## 5.7 AI Output Comparison

### Tại sao compare outputs?
- **Quality:** Tool nào cho kết quả tốt hơn?
- **Accuracy:** Tool nào chính xác hơn?
- **Style:** Tool nào match style của bạn?
- **Efficiency:** Tool nào nhanh hơn?

### Comparison Framework

#### 1. Same Prompt, Different Tools
```
Prompt: "Generate function để validate email address"

Test với: ChatGPT, Claude, Copilot

Compare:
- Code quality
- Edge case handling
- Documentation
- Testability
```

#### 2. Metrics để Compare
| Metric | Description | How to Measure |
|--------|-------------|----------------|
| **Accuracy** | Code có đúng không? | Manual review, testing |
| **Completeness** | Có handle edge cases? | Review against requirements |
| **Style** | Match coding standards? | Linting, manual review |
| **Documentation** | Có docs/comments? | Check for comments |
| **Testability** | Dễ test không? | Can write tests? |
| **Performance** | Efficient không? | Code review, profiling |

#### 3. Comparison Template
```
Task: [Task description]
Prompt: [Prompt used]

Tool: ChatGPT
Output: [Paste output]
Accuracy: [1-10]
Completeness: [1-10]
Style: [1-10]
Notes: [Observations]

Tool: Claude
Output: [Paste output]
Accuracy: [1-10]
Completeness: [1-10]
Style: [1-10]
Notes: [Observations]

Winner: [Tool name]
Reason: [Why it won]
```

---

## 5.8 AI Output Verification

### Verification Checklist

#### 1. Correctness Verification
- [ ] Logic có đúng không?
- [ ] Có handle edge cases?
- [ ] Input validation có đầy đủ?
- [ ] Error handling có appropriate?

#### 2. Testing Verification
- [ ] Run unit tests nếu có
- [ ] Test với sample inputs
- [ ] Test edge cases
- [ ] Test error conditions

#### 3. Code Review Verification
- [ ] Review code manually
- [ ] Check for bugs
- [ ] Check for security issues
- [ ] Check for performance issues

#### 4. Cross-Reference Verification
- [ ] Compare với documentation
- [ ] Check với similar code in codebase
- [ ] Verify against requirements
- [ ] Ask AI to verify its own output

### Verification Strategies

#### Strategy 1: Ask AI to Self-Verify
```
Hãy verify code bạn vừa generated:

Original request: [Paste original prompt]
Your output: [Paste AI output]

Yêu cầu:
1. Check for bugs
2. Check for edge cases
3. Suggest improvements
4. Confirm if meets requirements
```

#### Strategy 2: Cross-Tool Verification
```
Use Tool A để generate code
Use Tool B để review code từ Tool A

Example:
- Generate with ChatGPT
- Review with Claude
- Compare findings
```

#### Strategy 3: Incremental Verification
```
Step 1: Generate small piece
Step 2: Verify piece
Step 3: Generate next piece
Step 4: Verify piece
...
```

#### Strategy 4: Test-Driven Verification
```
Step 1: Write tests first
Step 2: Generate code
Step 3: Run tests
Step 4: Fix if fails
```

---

## 5.9 Ví dụ Thực tế với Sample Repository

Trong phần này, chúng ta sẽ áp dụng Context Engineering vào **Sample Repository E-commerce Backend API**.

### Ví dụ 1: File Context cho Code Explanation

**Task:** Giải thích `createOrder` function với và without file context

**Without File Context:**
```
Giải thích function createOrder trong sample repository.
```

**Kết quả AI:**
- Generic explanation về order creation
- Missed implementation details
- Không hiểu transaction logic
- Không biết error handling pattern

**With File Context:**
```
Giải thích function createOrder trong sample repository:

File: src/controllers/orderController.js
```javascript
const createOrder = async (req, res) => {
  try {
    const userId = req.user.userId;
    const { items, shippingAddress } = req.body;

    // Validate input
    const { error } = orderValidation.create.validate(req.body);
    if (error) {
      return res.status(400).json({ error: error.details[0].message });
    }

    // Start transaction
    const order = await prisma.$transaction(async (tx) => {
      let totalAmount = 0;
      const orderItems = [];

      for (const item of items) {
        const product = await tx.product.findUnique({
          where: { id: item.productId }
        });

        if (!product) {
          throw new Error(`Product ${item.productId} not found`);
        }

        if (product.stock < item.quantity) {
          throw new Error(`Insufficient stock for product ${product.name}`);
        }

        const itemTotal = parseFloat(product.price) * item.quantity;
        totalAmount += itemTotal;

        orderItems.push({
          productId: item.productId,
          quantity: item.quantity,
          price: product.price
        });

        await tx.product.update({
          where: { id: item.productId },
          data: { stock: { decrement: item.quantity } }
        });
      }

      const newOrder = await tx.order.create({
        data: {
          userId,
          totalAmount,
          shippingAddress,
          status: 'PENDING',
          orderItems: {
            create: orderItems
          }
        },
        include: {
          orderItems: {
            include: {
              product: true
            }
          }
        }
      });

      return newOrder;
    });

    await prisma.cartItem.deleteMany({
      where: {
        cart: { userId }
      }
    });

    res.status(201).json({
      message: 'Order created successfully',
      order
    });
  } catch (error) {
    console.error('Create order error:', error);
    if (error.message.includes('not found') || error.message.includes('Insufficient stock')) {
      return res.status(400).json({ error: error.message });
    }
    res.status(500).json({ error: 'Internal server error' });
  }
};
```

Yêu cầu:
1. Purpose của function
2. Input validation
3. Transaction logic
4. Error handling
5. Edge cases
```

**Kết quả AI:**
- Detailed explanation của transaction logic
- Understood validation pattern với Joi
- Explained stock check mechanism
- Identified error handling strategy
- Noted cart clearing logic

**Đánh giá:**
- ✅ Much more accurate với file context
- ✅ Understood implementation details
- ✅ Identified specific patterns used

### Ví dụ 2: Module Context cho Feature Development

**Task:** Implement cancel order feature

**Without Module Context:**
```
Implement function to cancel order.
```

**Kết quả AI:** Generic implementation không follow project patterns

**With Module Context:**
```
Implement function to cancel order trong sample repository.

Module Context - Order Module:

Files:
1. src/controllers/orderController.js (existing functions)
2. src/routes/orderRoutes.js (existing routes)
3. prisma/schema.prisma (Order model)

Existing Pattern from orderController.js:
```javascript
const createOrder = async (req, res) => {
  try {
    const userId = req.user.userId;
    // ... validation
    const order = await prisma.$transaction(async (tx) => {
      // ... transaction logic
    });
    res.status(201).json({ message: 'Order created successfully', order });
  } catch (error) {
    console.error('Create order error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
```

Existing Pattern from orderRoutes.js:
```javascript
router.post('/', authMiddleware, createOrder);
router.get('/', authMiddleware, getUserOrders);
router.get('/:id', authMiddleware, getOrderById);
```

Database Schema:
```prisma
model Order {
  id            String       @id @default(uuid())
  userId        String
  status        OrderStatus  @default(PENDING)
  // ... other fields
}
```

Requirements:
- User can only cancel their own orders
- Only PENDING or CONFIRMED orders can be cancelled
- Restore product stock when cancelled
- Use transaction for consistency
- Follow existing patterns
```

**Kết quả AI:**
```javascript
const cancelOrder = async (req, res) => {
  try {
    const userId = req.user.userId;
    const { id } = req.params;

    const order = await prisma.order.findFirst({
      where: { id, userId },
      include: { orderItems: true }
    });

    if (!order) {
      return res.status(404).json({ error: 'Order not found' });
    }

    if (order.status !== 'PENDING' && order.status !== 'CONFIRMED') {
      return res.status(400).json({ 
        error: 'Cannot cancel order in current status' 
      });
    }

    await prisma.$transaction(async (tx) => {
      for (const item of order.orderItems) {
        await tx.product.update({
          where: { id: item.productId },
          data: { stock: { increment: item.quantity } }
        });
      }

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
- ✅ Followed existing patterns exactly
- ✅ Used same error handling style
- ✅ Used transaction pattern correctly
- ✅ Consistent with module structure

### Ví dụ 3: Repository Context cho Architecture Decision

**Task:** Design notification system architecture

**Without Repository Context:**
```
Design notification system for e-commerce.
```

**Kết quả AI:** Generic architecture không fit existing system

**With Repository Context:**
```
Design notification system architecture cho sample repository.

Repository Context:

Tech Stack:
- Node.js, Express, PostgreSQL (Prisma ORM)
- JWT authentication
- Joi validation

Existing Architecture:
```
sample-repository/
├── src/
│   ├── controllers/     # Request handlers
│   ├── routes/         # API routes
│   ├── middleware/     # Auth, error handling
│   └── utils/          # Validation, logging
├── prisma/
│   └── schema.prisma   # Database schema
└── tests/
```

Existing Modules:
- User Module: Authentication, profile
- Product Module: Catalog, inventory
- Order Module: Order processing
- Payment Module: (placeholder)
- Notification Module: (placeholder - to be designed)

Database Schema Pattern:
```prisma
model User {
  id        String   @id @default(uuid())
  email     String   @unique
  // ... other fields
}

model Order {
  id        String   @id @default(uuid())
  userId    String
  status    OrderStatus
  // ... other fields
}
```

API Pattern:
- RESTful endpoints
- JWT authentication required
- Consistent JSON responses
- Error handling with try-catch

Requirements:
- Email notifications for order status updates
- User notifications in-app
- Admin notifications for critical events
- Follow existing architecture patterns
- Integrate with existing modules
```

**Kết quả AI:**
```
Notification System Architecture:

1. Database Schema:
```prisma
model Notification {
  id        String   @id @default(uuid())
  userId    String
  type      String   // ORDER_STATUS, SYSTEM, etc.
  title     String
  message   String
  isRead    Boolean  @default(false)
  createdAt DateTime @default(now())
  
  @@index([userId])
  @@index([isRead])
}
```

2. Controller Structure:
```javascript
// src/controllers/notificationController.js
const createNotification = async (req, res) => {
  try {
    const { userId, type, title, message } = req.body;
    // ... validation
    const notification = await prisma.notification.create({
      data: { userId, type, title, message }
    });
    res.status(201).json({ notification });
  } catch (error) {
    console.error('Create notification error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
```

3. Integration Points:
- Order module triggers notifications on status change
- User module triggers welcome notification
- Email service integration for order confirmations

4. API Endpoints:
- GET /api/notifications (user's notifications)
- PUT /api/notifications/:id/read (mark as read)
- POST /api/notifications (admin create)
```

**Đánh giá:**
- ✅ Consistent với existing architecture
- ✅ Followed database schema pattern
- ✅ Matched API design patterns
- ✅ Identified integration points correctly

### Ví dụ 4: Context Window Management

**Scenario:** Large file exceeds context window

**File:** `src/controllers/orderController.js` (~200 lines)

**Strategy 1: Summarize**
```
I need to review orderController.js but it's too large.

Summary of file:
- Functions: createOrder, getUserOrders, getOrderById, updateOrderStatus, cancelOrder
- Pattern: All functions use try-catch, Prisma transactions for multi-step operations
- Validation: Uses Joi schemas from utils/validation.js
- Authentication: Requires authMiddleware for all routes

Focus on createOrder function for detailed review:
[paste createOrder function only]
```

**Strategy 2: Chunk by Function**
```
Review orderController.js chunk by chunk:

Chunk 1 - createOrder function:
[paste createOrder]

Chunk 2 - getUserOrders function:
[paste getUserOrders]

Chunk 3 - updateOrderStatus function:
[paste updateOrderStatus]
```

**Strategy 3: Focus on Relevant Parts**
```
I need to understand the transaction logic in orderController.js.

Relevant parts only:
```javascript
const order = await prisma.$transaction(async (tx) => {
  let totalAmount = 0;
  const orderItems = [];

  for (const item of items) {
    const product = await tx.product.findUnique({
      where: { id: item.productId }
    });

    if (product.stock < item.quantity) {
      throw new Error(`Insufficient stock for product ${product.name}`);
    }

    await tx.product.update({
      where: { id: item.productId },
      data: { stock: { decrement: item.quantity } }
    });
  }

  return await tx.order.create({ ... });
});
```

Explain:
1. Why transaction is used
2. How stock check works
3. What happens on error
```

### Ví dụ 5: AI Tool Comparison với Sample Repository

**Task:** Explain `createOrder` function

**Test với ChatGPT (GPT-4):**
```
Explain createOrder function in sample repository:
[paste function]
```
- **Strength:** Detailed explanation, good at understanding complex logic
- **Weakness:** May miss project-specific patterns
- **Context Window:** 8K tokens (sufficient for single function)

**Test với Claude (Claude 3 Sonnet):**
```
Explain createOrder function in sample repository:
[paste function]
```
- **Strength:** Excellent at understanding workflows, longer context (200K tokens)
- **Weakness:** Slightly slower response
- **Context Window:** 200K tokens (can handle entire module)

**Test với GitHub Copilot:**
```
// Inline comment in IDE
// Explain this function
```
- **Strength:** Instant inline suggestions, IDE integration
- **Weakness:** Limited explanation capability
- **Context Window:** Limited to current file

**Comparison Table:**

| Tool | Context Window | Explanation Quality | Speed | Best For |
|------|---------------|---------------------|-------|----------|
| ChatGPT | 8K | High | Fast | Single function explanation |
| Claude | 200K | Very High | Medium | Module/Repository analysis |
| Copilot | Limited | Low | Instant | Inline autocomplete |

**Recommendation:** Use Claude for module-level analysis, ChatGPT for function-level explanation, Copilot for daily coding.

### Ví dụ 6: Verification Checklist cho Sample Repository

**Task:** Verify AI-generated code for cancel order

**Verification Checklist:**

```markdown
## Code Verification Checklist

### 1. Syntax Check
- [ ] No syntax errors
- [ ] Follows JavaScript/Node.js syntax
- [ ] Uses correct Prisma syntax
- [ ] Proper async/await usage

### 2. Pattern Consistency
- [ ] Follows existing controller pattern
- [ ] Uses same error handling style
- [ ] Matches validation approach
- [ ] Consistent with route definitions

### 3. Security Check
- [ ] Authentication required (authMiddleware)
- [ ] Authorization check (user ownership)
- [ ] Input validation present
- [ ] No SQL injection risk (Prisma ORM)

### 4. Business Logic
- [ ] Correct status validation
- [ ] Stock restoration logic correct
- [ ] Transaction used appropriately
- [ ] Edge cases handled

### 5. Error Handling
- [ ] Try-catch blocks present
- [ ] Error logging present
- [ ] Appropriate error messages
- [ ] Correct HTTP status codes

### 6. Integration
- [ ] Integrates with existing modules
- [ ] Uses correct database models
- [ ] Follows API conventions
- [ ] Compatible with existing routes

### 7. Testing Considerations
- [ ] Testable code structure
- [ ] Clear test scenarios
- [ ] Edge cases identified
- [ ] Mock dependencies clear
```

**Verification Result:**
```
✅ Syntax: No errors
✅ Pattern: Follows existing style
✅ Security: Auth and authz checks present
✅ Business Logic: Correct implementation
⚠️ Error Handling: Could add more specific error messages
✅ Integration: Proper integration
✅ Testing: Clear test scenarios
```

---

## 5.10 Thực hành

### Exercise 1: Context Levels
1. Chọn một function trong codebase
2. Try với 3 levels context:
   - File context only
   - Module context
   - Repository context
3. Compare outputs
4. Document differences

### Exercise 2: Context Window Management
1. Chọn một large file/module
2. Estimate token count
3. Try different strategies:
   - Paste all
   - Summarize
   - Chunk
4. Compare effectiveness

### Exercise 3: Tool Comparison
1. Pick a task (e.g., generate API endpoint)
2. Use same prompt với 2-3 different tools
3. Compare outputs using framework
4. Document findings

### Exercise 4: Verification Practice
1. Generate code với AI
2. Apply verification checklist
3. Document issues found
4. Fix and re-verify

---

## 5.11 Resources

### Tools
- Token counters: OpenAI tokenizer, various online tools
- AI Coding Assistants: ChatGPT, Claude, Copilot, Cursor
- Code visualization: Various IDE plugins

### Documentation
- OpenAI API documentation
- Anthropic API documentation
- Tool-specific documentation

---

## Quiz

1. Tại sao context quan trọng trong AI Coding Assistants?
2. Describe 4 types của context?
3. Làm thế nào để manage context window limits?
4. Criteria để chọn AI Coding Tool?
5. Tại sao cần verify AI output?

---

## Next Steps

Sau khi hoàn thành Module 5, tiếp tục với:
- **Module 6:** Prompt Engineering Workshop
- Xây dựng Prompt Playbook cá nhân
