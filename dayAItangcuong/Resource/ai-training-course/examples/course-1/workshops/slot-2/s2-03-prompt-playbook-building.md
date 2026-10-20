# Workshop S2-03 - Prompt Playbook Building

## 1. Mục tiêu
- Xây được prompt playbook có thể tái sử dụng.
- Chuẩn hóa prompt cho explain code, code review, test generation và documentation.

## 2. Yêu cầu
- Hoàn thành Workshop S2-01 và S2-02.
- Có file Markdown để lưu prompt library.

## 3. Tài nguyên
- [Prompt Pack](../../common/prompt-pack.md).
- [Module 6 example](../../course-1/module-6-prompt-engineering-workshop.md).
- AI assistant và Markdown editor.

## 4. Dữ liệu đầu vào
- Prompt mạnh từ S2-01.
- Context pack từ S2-02.
- Một số tác vụ phổ biến: explain, review, test, document.

## 5. Hướng dẫn cho giảng viên
1. Yêu cầu học viên chọn 4 nhóm tác vụ.
2. Mỗi nhóm viết 1 prompt gốc.
3. Chạy thử trên sample repository.
4. Chốt prompt tốt nhất và chuẩn hóa.
5. Gợi ý nhóm chia sẻ playbook cho nhau.

## 6. Hướng dẫn cho sinh viên
### Bước 1: Chọn nhóm prompt
1. Explain code.
2. Code review.
3. Test generation.
4. Documentation.

### Bước 2: Tạo prompt ban đầu
```text
Giải thích function [function_name] trong file [file_path].

Yêu cầu:
1. Mục đích
2. Input/output
3. Logic chính
4. Edge cases
5. Dependencies
```

### Bước 3: Chạy trên file thật
1. Chọn file trong repository.
2. Chạy prompt.
3. Ghi lại output tốt nhất.

### Bước 4: Chuẩn hóa thành playbook
1. Đặt tên prompt.
2. Ghi mục đích.
3. Ghi context cần có.
4. Ghi format đầu ra.

## 7. Expected output
- Prompt playbook tối thiểu cho 4 tác vụ phổ biến.
- Quy trình cập nhật prompt khi gặp case mới.

## 8. Verification checklist
- [ ] Prompt tái sử dụng được.
- [ ] Output ổn định.
- [ ] Có context rõ.
- [ ] Có tiêu chí đánh giá.

## 9. Reflection
- Prompt nào có giá trị tái sử dụng cao nhất?
- Điểm khác nhau giữa prompt mạnh và prompt yếu là gì?

## 10. Rubric chấm điểm
| Tiêu chí | Trọng số | Mô tả |
|----------|----------|-------|
| Độ đầy đủ của playbook | 30% | Có đủ nhóm prompt chính: explain, review, test, document |
| Cấu trúc prompt | 25% | Mỗi prompt có mục đích, context, output format rõ ràng |
| Khả năng tái sử dụng | 25% | Prompt áp dụng được cho nhiều file hoặc task tương tự |
| Tính thực dụng | 20% | Prompt bám sample repository và dùng được ngay |

### Mức đánh giá
- **Xuất sắc:** Playbook rõ, mạnh, có thể dùng lại ngay trong team.
- **Đạt:** Playbook đủ dùng nhưng chưa đồng đều chất lượng giữa các prompt.
- **Chưa đạt:** Prompt rời rạc, thiếu cấu trúc hoặc không bám task thực tế.
