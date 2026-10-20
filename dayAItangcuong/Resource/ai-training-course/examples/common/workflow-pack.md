# Workflow Pack Cho Thực Hành Step-by-Step

Tài liệu này mô tả workflow chuẩn có thể dùng cho hầu hết ví dụ trong khóa học.

## Workflow chuẩn
1. **Chuẩn bị context**
   - Mở repository hoặc tài liệu.
   - Chọn đúng file, module, log hoặc requirement.
   - Loại bỏ thông tin không cần thiết.

2. **Copy prompt mẫu**
   - Dùng prompt từ `common/prompt-pack.md`.
   - Thay placeholder bằng dữ liệu thật.

3. **Chạy AI**
   - Gửi prompt vào AI assistant.
   - Lưu output ban đầu.

4. **So sánh và refine**
   - Kiểm tra output có đúng yêu cầu không.
   - Bổ sung context nếu cần.
   - Chạy prompt lại sau khi refine.

5. **Thực hiện thay đổi**
   - Sửa code, update tài liệu hoặc tạo test.
   - Giữ phạm vi thay đổi nhỏ.

6. **Kiểm chứng**
   - Chạy test.
   - Review thủ công.
   - Xác nhận quality gate.

7. **Ghi nhận**
   - Viết AI Decision Log hoặc Reflection.
   - Cập nhật Prompt Playbook nếu prompt tốt.

## Mẫu cấu trúc một bài thực hành
- **Goal:** Mục tiêu của bài.
- **Context:** Repository, file, bug report hoặc requirement.
- **Prompt:** Prompt mẫu.
- **Steps:** Các bước thực hiện.
- **Verification:** Cách kiểm tra.
- **Output:** Kết quả mong đợi.
- **Notes:** Sai lầm cần tránh.

## Mẫu mức độ can thiệp của AI
- **Level 1 - Explore:** AI hỗ trợ hiểu bức tranh tổng quan.
- **Level 2 - Assist:** AI hỗ trợ generate hoặc explain từng phần.
- **Level 3 - Collaborate:** AI tham gia cùng người học qua nhiều vòng refine.
- **Level 4 - Verify:** AI hỗ trợ review, nhưng human xác nhận cuối cùng.

## Ghi chú sử dụng sample repository
- Dùng sample repository cho task liên quan codebase.
- Dùng dữ liệu giả lập khi task chỉ cần prompt structure hoặc reflection.
- Không cần mô phỏng quá phức tạp nếu mục tiêu chỉ là học quy trình.
