# Workshop S1-01 - AI-Augmented Software Engineering Overview

## 1. Mục tiêu
- Hiểu AI-Augmented Software Engineering bao gồm những nhóm việc nào.
- Phân biệt rõ task phù hợp vibe coding và task cần verification chặt.
- Nhận diện công cụ và workflow cốt lõi trong phát triển phần mềm có AI.

## 2. Yêu cầu
- Học viên đã đọc Module 1.
- Có access tới sample repository.
- Có AI assistant, VS Code và Git.

## 3. Tài nguyên
- Sample repository E-commerce Backend API.
- `examples/common/prompt-pack.md`.
- `examples/common/sample-repository-context.md`.
- `examples/course-1/module-1-overview.md`.

## 4. Dữ liệu đầu vào
- README hoặc tree structure của repository.
- 1-2 file đại diện như `userController.js`, `orderRoutes.js`, `validation.js`.

## 5. Hướng dẫn cho giảng viên
1. Giới thiệu mục tiêu workshop và output mong đợi.
2. Nhắc học viên chỉ lấy context tối thiểu.
3. Chỉ định một business flow trung tâm, ví dụ user registration.
4. Gợi ý học viên phân biệt exploratory work và production-ready work.
5. Yêu cầu nhóm trình bày kết quả bằng bảng Task / Tool / Verification.

## 6. Hướng dẫn cho sinh viên
### Bước 1: Chuẩn bị context
1. Mở repository trong VS Code.
2. Đọc README và tree structure.
3. Chọn các file đại diện.

### Bước 2: Chạy prompt mẫu
```text
Hãy phân tích repository này theo góc nhìn AI-Augmented Software Engineering.

Yêu cầu:
1. Cho biết AI có thể hỗ trợ những nhóm việc nào trong vòng đời phát triển phần mềm.
2. Liệt kê công cụ cần dùng cho từng nhóm việc.
3. Chỉ ra đâu là tác vụ phù hợp với vibe coding và đâu là tác vụ bắt buộc phải verify kỹ.
4. Trình bày theo bảng: Task / Tool / Verification level / Example.

Context:
- Repository: Sample E-commerce Backend API
- Mục tiêu: hiểu tổng quan workflow AI trong phần mềm
```

### Bước 3: Ghi nhận output
1. Liệt kê task chính.
2. Ghi tool tương ứng.
3. Đánh dấu task nào chỉ dùng cho prototype.
4. Đánh dấu task nào cần test và review.

### Bước 4: Kiểm chứng
1. So sánh output với code thật.
2. Kiểm tra có nhắc verification hay không.
3. Chốt một kết luận ngắn về human-in-the-loop.

## 7. Expected output
- Một bảng tổng quan Task / Tool / Verification.
- Một mô tả ngắn về vibe coding.
- Một kết luận rõ ràng về vai trò của human-in-the-loop.

## 8. Verification checklist
- [ ] AI liệt kê đúng nhóm việc.
- [ ] Công cụ phù hợp task.
- [ ] Phân biệt được exploratory và production work.
- [ ] Có nhắc verification, test và review.

## 9. Reflection
- Task nào phù hợp vibe coding nhất?
- Task nào bắt buộc verify kỹ nhất?
- Bạn sẽ chọn tool nào cho từng task?

## 10. Rubric chấm điểm
| Tiêu chí | Trọng số | Mô tả |
|----------|----------|-------|
| Hiểu đúng nhóm việc AI-Augmented SE | 30% | Liệt kê đúng các nhóm việc chính và không nhầm lẫn giữa exploratory work và production work |
| Chọn công cụ phù hợp | 25% | Ghép đúng task với tool và nêu lý do hợp lý |
| Nhận diện verification level | 25% | Chỉ ra đúng task nào cần test, review hoặc quality gate |
| Trình bày kết quả | 20% | Bảng rõ ràng, có ví dụ và kết luận ngắn gọn |

### Mức đánh giá
- **Xuất sắc:** Phân loại chính xác, có giải thích hợp lý và kết luận rõ.
- **Đạt:** Đủ nhóm việc, đủ công cụ, có nhắc verification nhưng còn thiếu chiều sâu.
- **Chưa đạt:** Liệt kê rời rạc, thiếu verification hoặc nhầm công cụ.
