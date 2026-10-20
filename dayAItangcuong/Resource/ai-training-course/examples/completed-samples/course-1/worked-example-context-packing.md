# Worked Example - Context Packing

## Goal
Chọn context tối thiểu nhưng đủ để AI hiểu flow đăng ký người dùng.

## Repository context
### Context pack ban đầu
- `src/controllers/userController.js`
- `src/utils/validation.js`
- `src/routes/userRoutes.js`
- `src/middleware/auth.js`
- `src/middleware/errorHandler.js`
- `tests/user.test.js`
- `prisma/schema.prisma`

### Context pack refined
- `src/controllers/userController.js`
- `src/utils/validation.js`
- `src/routes/userRoutes.js`
- `tests/user.test.js`

## Lý do chọn / bỏ
- Giữ `userController.js` vì đây là nơi xử lý business logic.
- Giữ `validation.js` vì chứa rule đầu vào.
- Giữ `userRoutes.js` để thấy đường đi của request.
- Giữ `tests/user.test.js` để hiểu behavior kỳ vọng.
- Bỏ `auth.js` vì flow đăng ký chưa cần auth.
- Bỏ `errorHandler.js` vì không ảnh hưởng trực tiếp tới logic cần giải thích.
- Bỏ `schema.prisma` vì bài này tập trung vào flow, không phải schema.

## Prompt dùng cho AI
```text
Hãy giúp tôi hiểu flow đăng ký người dùng.

Context được cung cấp:
- src/controllers/userController.js
- src/utils/validation.js
- src/routes/userRoutes.js
- tests/user.test.js

Yêu cầu:
1. Mô tả từng bước của flow.
2. Chỉ ra nơi cần thêm validation.
3. Nêu rủi ro nếu input không hợp lệ.
4. Đề xuất context nào cần bổ sung nếu muốn review sâu hơn.
```

## AI output mẫu rút gọn
- Request đi vào `userRoutes.js`.
- Route gọi `userController.js`.
- `validation.js` kiểm tra email và password.
- Nếu validation fail thì trả lỗi sớm.
- `user.test.js` cho thấy behavior kỳ vọng là trả lỗi rõ ràng khi input sai.

## Kết quả học được
- Context nhỏ nhưng đúng thường hiệu quả hơn context lớn nhưng loãng.
- Bỏ file không liên quan giúp AI tập trung đúng flow.
- `tests/user.test.js` là file rất hữu ích để hiểu behavior thực tế.
