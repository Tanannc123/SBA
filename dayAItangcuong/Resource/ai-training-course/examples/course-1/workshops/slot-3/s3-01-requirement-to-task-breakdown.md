# Workshop S3-01 - Requirement to Task Breakdown

## 1. Mục tiêu
- Phân tích requirement và chia task với AI.
- Viết user story và test strategy.
- Chuẩn bị đầu vào cho feature implementation.

## 2. Yêu cầu
- Đã hoàn thành Slot 1 và Slot 2.
- Có sample repository.
- Có AI assistant.

## 3. Tài nguyên
- [Module 7 example](../../course-1/module-7-ai-pair-programming.md).
- [Sample Repository Context Pack](../../common/sample-repository-context.md).
- [Prompt Pack](../../common/prompt-pack.md).

## 4. Dữ liệu đầu vào
- Requirement thực tế.
- Một flow trung tâm, ví dụ user registration.

## 5. Hướng dẫn cho giảng viên
1. Chọn requirement không quá lớn.
2. Nhắc học viên xác định scope và acceptance criteria.
3. Yêu cầu họ sinh user story trước khi code.
4. Gợi ý dùng test cases để kiểm soát phạm vi.

## 6. Hướng dẫn cho sinh viên
### Bước 1: Phân tích requirement
1. Đọc requirement.
2. Xác định mục tiêu business.
3. Ghi scope và rủi ro.

### Bước 2: Viết prompt chia task
```text
Phân tích requirement sau và chia thành task:
[Requirement]

Yêu cầu:
1. Viết user story.
2. Đề xuất test cases.
3. Đề xuất các file cần chỉnh sửa.
4. Nêu rủi ro cần verify.
```

### Bước 3: Tạo user story
1. Viết user story.
2. Thêm acceptance criteria.
3. Ghi edge cases.

### Bước 4: Tạo test strategy
1. Xác định test cases.
2. Chọn test nào cần viết thành code.
3. Ghi những điểm phải verify thủ công.

## 7. Expected output
- User story.
- Task breakdown.
- Test strategy.

## 8. Verification checklist
- [ ] Requirement được hiểu đúng.
- [ ] Task không quá rộng.
- [ ] Có acceptance criteria.
- [ ] Có test strategy.

## 9. Reflection
- Phần nào của requirement dễ sai nhất?
- Task breakdown có đủ chi tiết chưa?

## 10. Rubric chấm điểm
| Tiêu chí | Trọng số | Mô tả |
|----------|----------|-------|
| Hiểu requirement | 25% | Xác định đúng mục tiêu, scope và risk |
| User story và acceptance criteria | 30% | Viết rõ, testable và đúng business goal |
| Task breakdown | 25% | Task đủ chi tiết, có thể thực hiện và không quá rộng |
| Test strategy | 20% | Có test cases hợp lý cho happy path và edge cases |

### Mức đánh giá
- **Xuất sắc:** Requirement được phân rã tốt, user story và test strategy chặt chẽ.
- **Đạt:** Có đủ thành phần nhưng còn thiếu chi tiết ở scope hoặc edge cases.
- **Chưa đạt:** Requirement hiểu sai hoặc task breakdown quá mơ hồ.
