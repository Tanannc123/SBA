# Course 3 - Serialization & Configuration-Driven Development

## 1. Mục tiêu
- Dùng AI để thiết kế cấu hình JSON, XML hoặc YAML.
- Phân tích serialization và deserialization.

## 2. Bối cảnh
- **Tình huống:** Cần cấu hình môi trường Dev/Test/Prod cho hệ thống.
- **Repository:** Sample E-commerce Backend API
- **Tool sử dụng:** AI assistant, config file editor

## 3. Dữ liệu đầu vào mẫu
### Prompt mẫu
```text
Thiết kế cấu hình YAML cho 3 môi trường Dev/Test/Prod.

Yêu cầu:
1. Phân biệt thông số theo môi trường.
2. Nêu các giá trị mẫu.
3. Chỉ ra biến nào không được hardcode.
```

## 4. Các bước thực hiện
1. Xác định biến môi trường cần thiết.
2. Tạo cấu hình mẫu bằng AI.
3. Kiểm tra khả năng deserialize/serialize.
4. Xác minh cấu hình hoạt động cho từng môi trường.

## 5. Kiểm chứng kết quả
- Có phân tách config theo môi trường không?
- Có hardcode secrets không?
- Có dễ bảo trì không?

## 6. Kết quả mong đợi
- Configuration Design Package.
