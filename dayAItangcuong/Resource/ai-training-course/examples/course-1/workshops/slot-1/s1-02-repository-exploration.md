# Workshop S1-02 - Repository Exploration

## 1. Mục tiêu
- Khám phá repository theo quy trình step-by-step.
- Dựng module map và business workflow.
- Viết onboarding notes cho người mới.

## 2. Yêu cầu
- Đã hoàn thành Workshop S1-01 hoặc nắm được tổng quan Course 1.
- Có sample repository và AI assistant.

## 3. Tài nguyên
- Sample repository E-commerce Backend API.
- [Sample Repository Context Pack](../../common/sample-repository-context.md).
- [Lab Sheet Template](../../common/lab-sheet-template.md).
- [Module 2 example](../../course-1/module-2-codebase-understanding.md).

## 4. Dữ liệu đầu vào
- README.
- Tree structure.
- `userController.js`, `orderController.js`, `productRoutes.js`.

## 5. Hướng dẫn cho giảng viên
1. Chọn một flow trung tâm, ví dụ order creation.
2. Yêu cầu học viên chỉ sử dụng file liên quan trực tiếp.
3. Nhắc học viên trace từ route đến controller và middleware.
4. Gợi ý họ viết module map trước, rồi mới sang report.
5. Đánh giá theo mức độ chính xác và độ rõ ràng của phân tích.

## 6. Hướng dẫn cho sinh viên
### Bước 1: Overview
1. Đọc README.
2. Xác định mục đích dự án.
3. Ghi lại tech stack.

### Bước 2: Module identification
1. Liệt kê module chính.
2. Ghi nhiệm vụ của từng module.
3. Xác định module nào ảnh hưởng trực tiếp đến business flow.

### Bước 3: Business flow mapping
1. Chọn một flow.
2. Trace route → controller → validation → middleware.
3. Ghi dependency và rủi ro.

### Bước 4: Prompt mẫu
```text
Hãy phân tích repository sau theo 4 bước:
1. Overview
2. Module identification
3. Deep dive vào module quan trọng
4. Document findings

Input:
- Tree structure của repository
- README
- Nội dung các file: userController.js, orderController.js, productRoutes.js

Yêu cầu:
- Chỉ ra module chính
- Mô tả luồng nghiệp vụ
- Nêu dependency và rủi ro
- Đề xuất onboarding notes
```

### Bước 5: Tạo deliverable
1. Viết Module Map.
2. Viết Project Understanding Report draft.
3. Viết onboarding notes.

### Bước 6: Kiểm chứng
1. Mở file thật.
2. Xác minh AI nói đúng chưa.
3. Ghi lại phần còn thiếu.

## 7. Expected output
- Project Understanding Report draft.
- Module Map.
- Onboarding Notes.

## 8. Verification checklist
- [ ] Module chính được xác định đúng.
- [ ] Luồng nghiệp vụ khớp với code.
- [ ] Dependency và rủi ro được nêu rõ.
- [ ] Onboarding notes đủ cho người mới.

## 9. Reflection
- File nào quan trọng nhất cho việc hiểu flow?
- AI giúp tiết kiệm bước nào nhiều nhất?

## 10. Rubric chấm điểm
| Tiêu chí | Trọng số | Mô tả |
|----------|----------|-------|
| Phân tích repository overview | 20% | Xác định đúng mục tiêu dự án, stack và entry points |
| Module map | 30% | Chia module hợp lý, mô tả đúng trách nhiệm và quan hệ |
| Business workflow | 30% | Trace đúng flow qua route, controller, middleware hoặc validation |
| Onboarding notes | 20% | Ghi chú rõ, hữu ích cho người mới và có tính thực dụng |

### Mức đánh giá
- **Xuất sắc:** Hiểu đúng hệ thống, flow rõ, module map chặt chẽ.
- **Đạt:** Nắm được phần chính nhưng còn thiếu dependency hoặc risk notes.
- **Chưa đạt:** Flow sai, module map mơ hồ hoặc không bám code thật.
