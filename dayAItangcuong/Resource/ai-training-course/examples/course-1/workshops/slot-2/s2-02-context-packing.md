# Workshop S2-02 - Context Packing

## 1. Mục tiêu
- Biết chọn đúng file và mức context.
- Giảm nhiễu trong context window.
- Tạo context pack gọn mà đủ.

## 2. Yêu cầu
- Đã làm Workshop S2-01.
- Có sample repository và AI assistant.

## 3. Tài nguyên
- [Sample Repository Context Pack](../../common/sample-repository-context.md).
- [Module 5 example](../../course-1/module-5-context-engineering.md).
- Các file trong `controllers/`, `routes/`, `utils/`.

## 4. Dữ liệu đầu vào
- `userController.js`
- `validation.js`
- `userRoutes.js`
- Một đoạn request/response mẫu

## 5. Hướng dẫn cho giảng viên
1. Chọn một flow, ví dụ user registration.
2. Yêu cầu học viên chỉ dùng file liên quan trực tiếp.
3. Cho học viên so sánh output khi context nhỏ và khi context quá rộng.
4. Nhấn mạnh ranh giới giữa đủ context và thừa context.

## 6. Hướng dẫn cho sinh viên
### Bước 1: Chọn task
1. Xác định task là explain, review hay sửa lỗi.
2. Liệt kê file tối thiểu cần dùng.

### Bước 2: Tạo context pack
1. Không đưa toàn bộ repository.
2. Chỉ chọn file liên quan trực tiếp.
3. Bổ sung request/response nếu cần.

### Bước 3: Chạy prompt
```text
Hãy giúp tôi hiểu flow đăng ký người dùng.

Context được cung cấp:
- userController.js
- validation.js
- userRoutes.js

Yêu cầu:
1. Mô tả từng bước của flow.
2. Chỉ ra nơi cần thêm validation.
3. Nêu rủi ro nếu input không hợp lệ.
4. Đề xuất context nào cần bổ sung nếu muốn review sâu hơn.
```

### Bước 4: So sánh output
1. Kiểm tra output có bám đúng file không.
2. Xem có trả lời quá chung chung không.
3. Quyết định có cần thêm file khác không.

### Bước 5: Refine context
1. Bổ sung file thiếu.
2. Loại file thừa.
3. Chạy lại prompt.

## 7. Expected output
- Context pack gọn mà đủ.
- So sánh được output trước/sau.

## 8. Verification checklist
- [ ] Output bám đúng file.
- [ ] Không quá chung chung.
- [ ] Context vừa đủ.
- [ ] Có thể giải thích lại bằng code.

## 9. Reflection
- File nào thật sự cần thiết?
- File nào có thể bỏ đi mà output vẫn tốt?

## 10. Rubric chấm điểm
| Tiêu chí | Trọng số | Mô tả |
|----------|----------|-------|
| Chọn file liên quan | 30% | Chọn đúng file cốt lõi, không thiếu file then chốt |
| Giảm nhiễu context | 25% | Loại bỏ file thừa và giữ context gọn |
| Chất lượng output sau refine | 25% | Output cải thiện khi context được chỉnh đúng |
| Lý giải quyết định | 20% | Giải thích được vì sao thêm/bớt từng file |

### Mức đánh giá
- **Xuất sắc:** Context pack gọn, đủ và cải thiện output rõ rệt.
- **Đạt:** Context đủ dùng nhưng vẫn hơi rộng hoặc hơi thiếu.
- **Chưa đạt:** Context thiếu trọng tâm hoặc không giải thích được quyết định chọn file.
