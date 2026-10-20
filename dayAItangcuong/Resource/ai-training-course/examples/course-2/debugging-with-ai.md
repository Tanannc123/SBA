# Course 2 - Debugging with AI

## 1. Mục tiêu
- Phân tích bug report, logs và stack trace.
- Dùng AI để đề xuất root cause và hướng fix.

## 2. Bối cảnh
- **Tình huống:** Một API trả lỗi 500 khi tạo đơn hàng.
- **Repository:** Sample E-commerce Backend API
- **Tool sử dụng:** AI assistant, log file, debugger, test runner

## 3. Dữ liệu đầu vào mẫu
```text
Bug report:
- Error: 500 Internal Server Error
- Steps: Create order with valid payload
- Observed: Request fails at order creation
- Logs: [paste stack trace]
```

### Prompt mẫu
```text
Phân tích bug report và stack trace sau.

Yêu cầu:
1. Xác định khả năng root cause.
2. Đề xuất file/module cần xem.
3. Nêu cách verify giả thuyết.
4. Đề xuất fix ngắn gọn.
```

## 4. Các bước thực hiện
1. Đọc bug report.
2. Gắn log vào prompt.
3. Hỏi AI xác định vùng lỗi.
4. Mở file liên quan và kiểm tra code.
5. Tạo test tái hiện bug.
6. Sửa lỗi và chạy lại test.

## 5. Kiểm chứng kết quả
- Bug có tái hiện được không?
- Fix có làm hỏng luồng khác không?
- Test mới đã pass chưa?

## 6. Kết quả mong đợi
- Incident Analysis Report.
- Một fix có kiểm chứng.
