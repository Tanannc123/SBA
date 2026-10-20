# AI Decision Log

## Giới thiệu
AI Decision Log ghi lại các quyết định sử dụng AI trong quá trình phát triển phần mềm. Tài liệu này cho thấy AI đã được dùng vào việc gì, kết quả ra sao và cần cải thiện gì.

## Thông tin dự án
- **Tên dự án:** Sample E-commerce Backend API
- **Sprint/Iteration:** Sprint 3
- **Người maintain:** Nguyen Van A
- **Period:** 01/07/2026 - 15/07/2026

---

## Decision Entries

### Entry 1: 02/07/2026 - Add email validation to user registration

#### Context
- **Task:** Thêm validation cho email khi user đăng ký.
- **Goal:** Chặn email sai định dạng và email trùng.
- **Complexity:** Medium

#### AI Usage
- **AI Tool:** ChatGPT
- **Prompt Type:** Code generation + Test generation
- **Prompt Used:**
```text
Generate implementation cho email validation.

Context:
- Backend e-commerce API
- Files liên quan: userController.js, validation.js, userRoutes.js
- Cần error handling, testable code và security considerations

Yêu cầu đầu ra:
1. Main implementation
2. Validation logic
3. Suggested tests
4. Notes về verification
```

#### Context Provided
- **Files:** src/controllers/userController.js, src/utils/validation.js, src/routes/userRoutes.js, tests/user.test.js
- **Code snippets:** User registration flow và validation helper
- **Additional context:** Đây là backend Node.js/Express cho e-commerce

#### AI Output
- **Output quality:** Good
- **Accuracy:** 9/10
- **Usefulness:** 9/10

#### Human Verification
- **Verification method:** Code review + unit testing + manual test
- **Issues found:** Regex ban đầu chưa xử lý đầy đủ một số email edge cases
- **Corrections needed:** Cập nhật regex và cải thiện error message

#### Decision
- **Accepted as-is:** No
- **Modified:** Yes - chỉnh regex và error messages
- **Rejected:** No
- **Time saved:** ~2 hours

#### Lessons Learned
- **What worked:** AI tạo được bản nháp tốt và test cases hợp lý.
- **What didn't work:** Regex cần manual refinement.
- **Improvement for next time:** Cung cấp thêm edge cases cụ thể ngay từ prompt.

---

### Entry 2: 06/07/2026 - Review order creation function

#### Context
- **Task:** Review hàm createOrder.
- **Goal:** Kiểm tra correctness và security trước khi merge.
- **Complexity:** Medium

#### AI Usage
- **AI Tool:** Claude
- **Prompt Type:** Code review
- **Prompt Used:**
```text
Hãy review function createOrder trong file src/controllers/orderController.js.

Context:
- Đây là backend e-commerce.
- Flow liên quan tới auth, validation và persistence.
- Mục tiêu: đảm bảo logic đúng, an toàn và dễ test.

Yêu cầu:
1. Kiểm tra correctness.
2. Chỉ ra edge cases.
3. Phát hiện security issues.
4. Đề xuất refactor nếu cần.
5. Đầu ra: Issues / Suggestions / Verification.
```

#### Context Provided
- **Files:** src/controllers/orderController.js, src/routes/orderRoutes.js, src/middleware/auth.js
- **Code snippets:** createOrder function và route middleware
- **Additional context:** Order flow có liên quan tới user authentication

#### AI Output
- **Output quality:** Excellent
- **Accuracy:** 10/10
- **Usefulness:** 9/10

#### Human Verification
- **Verification method:** Code review + manual trace + test run
- **Issues found:** Thiếu check cho order items rỗng
- **Corrections needed:** Thêm guard clause trước khi create order

#### Decision
- **Accepted as-is:** No
- **Modified:** Yes - thêm guard clause
- **Rejected:** No
- **Time saved:** ~1.5 hours

#### Lessons Learned
- **What worked:** Prompt review có context rõ ràng, output rất sát.
- **What didn't work:** AI chưa biết các rule nội bộ nếu không nói rõ.
- **Improvement for next time:** Nêu rõ business rules ngay từ đầu.

---

## Summary Statistics

### AI Usage by Tool
| Tool | Usage Count | Success Rate | Avg Quality |
|------|-------------|--------------|-------------|
| ChatGPT | 1 | 100% | 9 |
| Claude | 1 | 100% | 10 |
| Copilot | 0 | - | - |
| Other | 0 | - | - |

### AI Usage by Task Type
| Task Type | Usage Count | Success Rate | Avg Time Saved |
|-----------|-------------|--------------|----------------|
| Code Generation | 1 | 100% | 2 hours |
| Debugging | 0 | - | - |
| Refactoring | 0 | - | - |
| Code Review | 1 | 100% | 1.5 hours |
| Documentation | 0 | - | - |
| Testing | 1 | 100% | 1 hour |

### Overall Metrics
- **Total AI-assisted tasks:** 2
- **Total time saved:** ~3.5 hours
- **Acceptance rate:** 100%
- **Avg output quality:** 9.5/10

## Patterns and Insights

### What Works Well
- Prompt có context rõ ràng về file, mục tiêu và format đầu ra.
- AI review tốt khi có code snippet thực tế.
- Test generation hiệu quả nhất khi có acceptance criteria cụ thể.

### What Doesn't Work Well
- Prompt quá chung chung dẫn đến output lan man.
- Thiếu edge cases cụ thể làm AI bỏ sót một số kiểm tra.

### Best Practices Identified
- Luôn cung cấp file path và mục tiêu task.
- Ghi rõ output format.
- Bổ sung business rules và edge cases quan trọng.

### Areas for Improvement
- Chuẩn hóa prompt library theo task.
- Tạo checklist verification riêng cho từng loại thay đổi.

## Responsible AI Usage Notes

### Security Considerations
- Không share secret, token hoặc dữ liệu thật của khách hàng.
- Review AI-generated code trước khi commit.

### Quality Assurance
- Luôn chạy test sau khi áp dụng code AI tạo ra.
- Không chấp nhận output AI nếu chưa verify với code thật.

### Ethical Considerations
- Ghi rõ phần nào do AI hỗ trợ.
- Không phụ thuộc hoàn toàn vào AI trong quyết định kỹ thuật.

## Recommendations

### For Team
- Dùng prompt playbook chung cho task phổ biến.
- Gắn AI Decision Log vào quy trình review.

### For Individuals
- Bắt đầu bằng prompt có context rõ ràng.
- Luôn verify output bằng test hoặc code review.

### For Process
- Cập nhật prompt khi gặp case mới.
- Review định kỳ các decision log để tìm pattern.

**Last updated:** 15/07/2026
**Next review:** 30/07/2026
