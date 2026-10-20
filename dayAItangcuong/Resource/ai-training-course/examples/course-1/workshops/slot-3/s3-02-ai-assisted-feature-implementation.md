# Workshop S3-02 - AI-assisted Feature Implementation

## 1. Mục tiêu
- Làm feature end-to-end với AI.
- Kết hợp requirement, test, code, review và verification.

## 2. Yêu cầu
- Đã hoàn thành S3-01.
- Có feature branch.
- Có test runner hoạt động.

## 3. Tài nguyên
- [Module 8 example](../../course-1/module-8-feature-development.md).
- [Lab Sheet Template](../../common/lab-sheet-template.md).
- Sample repository E-commerce Backend API.

## 4. Dữ liệu đầu vào
- User story.
- File liên quan trong repository.
- Test cases.

## 5. Hướng dẫn cho giảng viên
1. Yêu cầu học viên bắt đầu bằng test cases.
2. Giới hạn scope thay đổi.
3. Nhấn mạnh việc review và verify sau khi AI generate code.
4. Kiểm tra xem học viên có refactor và ghi lại evidence không.

## 6. Hướng dẫn cho sinh viên
### Bước 1: Chuẩn bị
1. Mở branch.
2. Mở file liên quan.
3. Chuẩn bị test cases.

### Bước 2: Generate code
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

### Bước 3: Review và refine
1. Đọc output.
2. Sửa prompt nếu output chưa đạt.
3. Bổ sung code theo từng vòng nhỏ.

### Bước 4: Chạy test và verify
1. Chạy unit test.
2. Chạy manual test.
3. Ghi nhận rollback notes nếu cần.

### Bước 5: Commit và PR
1. Commit theo conventional format.
2. Tạo PR.
3. Ghi testing evidence rõ ràng.

## 7. Expected output
- Feature hoàn chỉnh.
- Test evidence.
- PR đủ điều kiện review.

## 8. Verification checklist
- [ ] Code đúng requirement.
- [ ] Có test cho happy path và edge case.
- [ ] Không phát sinh breaking change.
- [ ] Có rollback notes nếu cần.

## 9. Reflection
- Bước nào tốn thời gian nhất?
- AI hỗ trợ tốt nhất ở đâu?

## 10. Rubric chấm điểm
| Tiêu chí | Trọng số | Mô tả |
|----------|----------|-------|
| Chất lượng implementation | 30% | Code đúng requirement, phạm vi thay đổi hợp lý |
| Test và verification | 30% | Có test evidence, manual check và quality gate rõ |
| Review và refine | 20% | Có vòng đọc lại, sửa prompt hoặc refactor khi cần |
| PR readiness | 20% | Commit, PR notes và testing evidence đủ rõ |

### Mức đánh giá
- **Xuất sắc:** Feature hoàn chỉnh, test tốt, PR sẵn sàng review.
- **Đạt:** Feature chạy được nhưng verification hoặc PR evidence chưa mạnh.
- **Chưa đạt:** Code chưa ổn, thiếu test hoặc chưa kiểm chứng đủ.
