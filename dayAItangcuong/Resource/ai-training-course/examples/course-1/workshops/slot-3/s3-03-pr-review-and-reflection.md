# Workshop S3-03 - PR Review and Reflection

## 1. Mục tiêu
- Review PR bằng AI nhưng vẫn giữ trách nhiệm của con người.
- Ghi nhận quyết định AI và phản tư sau task.

## 2. Yêu cầu
- Có PR hoặc diff để review.
- Có AI assistant.
- Có template cho AI Decision Log hoặc reflection.

## 3. Tài nguyên
- [Module 9 example](../../course-1/module-9-pr-review-and-reflection.md).
- [Prompt Pack](../../common/prompt-pack.md).
- [Reflection template](../../../../templates/reflection-report.md).

## 4. Dữ liệu đầu vào
- PR description.
- Diff summary.
- Test results.

## 5. Hướng dẫn cho giảng viên
1. Cho học viên đọc PR description và diff.
2. Yêu cầu họ review theo 4 nhóm: correctness, security, test coverage, breaking change.
3. Nhắc học viên tách feedback thành must fix, should fix, nice to have.
4. Yêu cầu viết reflection ngắn và rõ bài học.

## 6. Hướng dẫn cho sinh viên
### Bước 1: Đọc PR
1. Đọc PR description.
2. Xem file thay đổi.
3. Xác định mục tiêu thay đổi.

### Bước 2: Chạy AI review
```text
Hãy review PR này như một senior engineer.

Focus:
1. Logic correctness
2. Security
3. Test coverage
4. Breaking changes
5. Documentation

Đầu ra theo format:
- Critical issues
- Suggestions
- Nice to have
- Overall assessment
```

### Bước 3: So sánh với review người thật
1. Đối chiếu feedback của AI với code.
2. Chốt issue cần sửa.

### Bước 4: Ghi log và reflection
1. Ghi AI Decision Log.
2. Viết reflection report ngắn.
3. Rút ra bài học cho lần sau.

## 7. Expected output
- PR review có chất lượng.
- Reflection note rõ ràng.

## 8. Verification checklist
- [ ] AI chỉ đúng issue quan trọng.
- [ ] Không bỏ sót security hoặc test coverage.
- [ ] PR có đủ evidence để merge.
- [ ] Reflection có bài học cụ thể.

## 9. Reflection
- AI đúng ở đâu và sai ở đâu?
- Lần sau bạn sẽ chỉnh prompt review thế nào?

## 10. Rubric chấm điểm
| Tiêu chí | Trọng số | Mô tả |
|----------|----------|-------|
| Chất lượng PR review | 35% | Chỉ ra đúng critical issues, suggestions và risks |
| Dùng AI có kiểm soát | 20% | Không phụ thuộc mù quáng vào AI, có đối chiếu với code |
| AI Decision Log | 20% | Ghi rõ AI đã được dùng thế nào và kết quả ra sao |
| Reflection | 25% | Bài học cụ thể, có hành động cải thiện cho lần sau |

### Mức đánh giá
- **Xuất sắc:** Review sắc nét, reflection sâu và decision log rõ ràng.
- **Đạt:** Có review và reflection nhưng còn chung chung ở một vài phần.
- **Chưa đạt:** Review hời hợt hoặc reflection không rút ra bài học cụ thể.
