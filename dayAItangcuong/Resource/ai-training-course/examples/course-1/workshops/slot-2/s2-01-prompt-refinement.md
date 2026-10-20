# Workshop S2-01 - Prompt Refinement

## 1. Mục tiêu
- Biết sửa prompt để AI trả lời đúng và có cấu trúc.
- Phân biệt prompt yếu và prompt mạnh.
- Gắn prompt với mục tiêu thực tế của repository.

## 2. Yêu cầu
- Đã hiểu repository ở Slot 1.
- Có AI assistant và một file code cụ thể để test prompt.

## 3. Tài nguyên
- [Prompt Pack](../../common/prompt-pack.md).
- [Module 4 example](../../course-1/module-4-prompt-engineering.md).
- Sample repository E-commerce Backend API.

## 4. Dữ liệu đầu vào
- Prompt gốc chưa tốt.
- Prompt cải tiến.
- File `orderController.js` hoặc `userController.js`.

## 5. Hướng dẫn cho giảng viên
1. Bắt đầu bằng một prompt quá chung chung.
2. Cho học viên thấy output yếu.
3. Yêu cầu học viên sửa prompt bằng cách thêm file, mục tiêu, tiêu chí và format.
4. So sánh output trước và sau.
5. Chốt prompt tốt nhất vào playbook.

## 6. Hướng dẫn cho sinh viên
### Bước 1: Chạy prompt yếu
```text
Hãy review code này.
```

### Bước 2: Ghi nhận vấn đề
1. Output có chung chung không?
2. AI có hiểu đúng phạm vi không?
3. Có nhắc security, test hoặc edge cases không?

### Bước 3: Viết prompt mạnh hơn
```text
Hãy review function createOrder trong file orderController.js.

Yêu cầu:
1. Kiểm tra correctness.
2. Chỉ ra edge cases.
3. Phát hiện security issues.
4. Đề xuất refactor nếu cần.
5. Kết quả trả về theo format: Issues / Suggestions / Verification.

Context:
- Đây là backend API cho e-commerce.
- Đầu vào là request từ user.
- Phải lưu ý validation, auth và error handling.
```

### Bước 4: So sánh output
1. Chạy prompt mới.
2. So sánh trước/sau.
3. Ghi lại cải thiện chính.

### Bước 5: Chốt vào prompt library
1. Lưu prompt tốt nhất.
2. Ghi mục đích và context.
3. Đánh dấu task nào dùng lại được.

## 7. Expected output
- Prompt mạnh hơn prompt gốc.
- Một entry có thể đưa vào Prompt Playbook.

## 8. Verification checklist
- [ ] Output cụ thể hơn.
- [ ] AI hiểu đúng phạm vi.
- [ ] Output đúng format.
- [ ] Prompt dùng lại được.

## 9. Reflection
- Tại sao prompt mới tốt hơn?
- Thay đổi nào tạo hiệu quả lớn nhất?

## 10. Rubric chấm điểm
| Tiêu chí | Trọng số | Mô tả |
|----------|----------|-------|
| Xác định điểm yếu của prompt gốc | 25% | Chỉ ra đúng chỗ mơ hồ, thiếu context, thiếu format |
| Chất lượng prompt cải tiến | 35% | Prompt mới rõ ràng hơn về file, mục tiêu, tiêu chí và output |
| So sánh output trước/sau | 20% | Có đối chiếu cụ thể và rút ra điểm cải thiện |
| Khả năng tái sử dụng | 20% | Prompt có thể đưa vào playbook và dùng lại |

### Mức đánh giá
- **Xuất sắc:** Prompt cải tiến mạnh, output rõ ràng hơn rõ rệt.
- **Đạt:** Prompt tốt hơn prompt gốc nhưng còn thiếu một vài thành phần.
- **Chưa đạt:** Prompt mới chưa cải thiện đáng kể hoặc không tái sử dụng được.
