# Course 3 - Design Patterns & Architecture Review

## 1. Mục tiêu
- Nhận diện design pattern và code smell.
- Đề xuất refactor kiến trúc bằng AI.

## 2. Bối cảnh
- **Tình huống:** Repository có controller quá lớn và lặp logic.
- **Repository:** Sample E-commerce Backend API
- **Tool sử dụng:** AI assistant, code editor, refactor checklist

## 3. Dữ liệu đầu vào mẫu
### Prompt mẫu
```text
Hãy review kiến trúc của controller này.

Yêu cầu:
1. Chỉ ra code smell.
2. Đề xuất pattern phù hợp.
3. Đưa ra refactor bước đầu.
4. Nêu rủi ro nếu refactor quá tay.
```

## 4. Các bước thực hiện
1. Chọn file có smell rõ ràng.
2. Hỏi AI review pattern.
3. So sánh với kiến trúc hiện có.
4. Viết refactor proposal.
5. Kiểm chứng lại bằng review thủ công.

## 5. Kiểm chứng kết quả
- Có giữ nguyên behavior không?
- Có pattern nào bị lạm dụng không?
- Refactor có thực sự giảm complexity không?

## 6. Kết quả mong đợi
- Architecture Refactoring Proposal.
