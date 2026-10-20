# E-Commerce Backend API - Sample Repository

## Overview

Đây là một repository mẫu E-commerce Backend API được thiết kế để minh họa các khái niệm và kỹ thuật được dạy trong khóa học "Introduction to Generative AI for Software Development".

Repository này được sử dụng xuyên suốt 9 modules:
- **Module 1:** Generative AI & AI-Augmented Software Engineering
- **Module 2:** AI-Assisted Codebase Understanding
- **Module 3:** Project Understanding Workshop
- **Module 4:** Prompt Engineering for Software Engineering
- **Module 5:** Context Engineering & AI Coding Tools
- **Module 6:** Prompt Engineering Workshop
- **Module 7:** AI Pair Programming Workflow
- **Module 8:** AI-assisted Feature Development
- **Module 9:** Pull Request Review & AI Reflection

## Tech Stack

- **Runtime:** Node.js 18+
- **Framework:** Express.js
- **Database:** PostgreSQL (via Prisma ORM)
- **Authentication:** JWT
- **Validation:** Joi
- **Testing:** Jest
- **API Documentation:** Swagger/OpenAPI

## Project Structure

```
sample-repository/
├── src/
│   ├── controllers/       # Request handlers
│   ├── models/           # Database models (Prisma)
│   ├── services/         # Business logic
│   ├── middleware/       # Express middleware
│   ├── routes/           # API routes
│   ├── utils/            # Utility functions
│   └── config/           # Configuration
├── tests/                # Test files
├── docs/                 # Documentation
├── prisma/               # Database schema
└── scripts/              # Utility scripts
```

## Core Modules

### 1. User Module
- User registration and authentication
- Profile management
- Role-based access control (RBAC)

### 2. Product Module
- Product catalog management
- Category management
- Search and filtering
- Inventory tracking

### 3. Order Module
- Order creation and processing
- Order status tracking
- Order history
- Cart management

### 4. Payment Module
- Payment processing integration
- Payment status tracking
- Refund handling

### 5. Notification Module
- Email notifications
- Order status updates
- System alerts

## Getting Started

### Prerequisites
- Node.js 18+
- PostgreSQL 14+
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Setup database
npm run db:setup

# Run migrations
npm run db:migrate

# Seed database
npm run db:seed

# Start development server
npm run dev
```

### Running Tests

```bash
# Run all tests
npm test

# Run with coverage
npm run test:coverage

# Run specific test file
npm test -- user.test.js
```

## API Documentation

API documentation is available at:
- **Swagger UI:** http://localhost:3000/api-docs
- **OpenAPI Spec:** `/api-docs/swagger.json`

## Key Features for Learning

### Module 2: Codebase Understanding
- Clear module boundaries
- Well-defined business workflows
- Multiple integration points
- Legacy code examples (for refactoring practice)

### Module 4: Prompt Engineering
- Complex business logic for prompt design
- Multiple code patterns to explain
- Test cases for verification

### Module 7: AI Pair Programming
- Feature development workflow
- Code review examples
- Pull request templates

### Module 8: Feature Development
- User stories and requirements
- Test-driven development examples
- Refactoring opportunities

## Business Workflows

### Order Processing Flow
1. User browses products
2. User adds items to cart
3. User proceeds to checkout
4. System validates inventory
5. User enters payment info
6. System processes payment
7. Order confirmed
8. Notification sent
9. Order fulfillment starts

### User Registration Flow
1. User submits registration form
2. System validates input
3. System checks for existing user
4. System hashes password
5. System creates user record
6. System generates JWT token
7. System sends welcome email

## Known Issues & Technical Debt

This repository intentionally includes some technical debt for learning purposes:
- Some functions lack proper error handling (for debugging practice)
- Limited test coverage in some modules (for test generation practice)
- Outdated comments in legacy code (for documentation practice)
- Inconsistent naming conventions (for refactoring practice)

## Security Considerations

⚠️ **Important:** This is a sample repository for educational purposes. Do not use in production without:
- Implementing proper rate limiting
- Adding comprehensive input validation
- Implementing CSRF protection
- Setting up proper CORS configuration
- Using environment variables for sensitive data
- Implementing proper logging and monitoring

## Contributing

This repository is designed for learning. Feel free to:
- Add new features using AI assistance
- Refactor existing code
- Improve test coverage
- Add documentation
- Fix bugs

## License

MIT License - Educational Use Only

## Support

For questions related to this sample repository and how it relates to the course modules, please refer to the course documentation.
