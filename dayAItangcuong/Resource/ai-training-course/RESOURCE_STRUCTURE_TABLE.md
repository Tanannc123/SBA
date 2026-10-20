# Bang Mo Ta Cau Truc Tai Nguyen - ai-training-course

Muc tieu: Cho AI doc mot bang mo ta duy nhat de hieu nhanh toan bo cau truc, noi dung, muc dich su dung va duong dan cu the trong repo.

## 1) Bang tong quan cap thu muc

| Path | Loai | Chuc nang chinh | Mo ta hien tai nam o file nao |
|---|---|---|---|
| /README.md | Entry doc | Tong quan khoa hoc, 9 module, cach su dung | README.md |
| /GUIDE.md | Usage guide | Huong dan hoc theo tuan, cach dung template, checklist hoc tap | GUIDE.md |
| /modules | Learning content | Noi dung giang day chinh theo 9 module | README.md, GUIDE.md, tung file module |
| /examples | Practical system | Vi du, workshop, completed samples, prompt packs | examples/README.md |
| /templates | Artifact templates | Mau report va log cho hoc vien | GUIDE.md, templates/*.md |
| /sample-repository | Practice codebase | Repo backend de hoc vien thuc hanh xuyen module | sample-repository/README.md, sample-repository/SAMPLE_REPOSITORY_GUIDE.md |
| /resources | Reference assets | Tai nguyen tham khao bo sung (hien it noi dung) | README.md, GUIDE.md |

## 2) Bang chi tiet theo nhom noi dung

### 2.1 Root docs

| Path | Noi dung | Dung de lam gi | Mo ta hien tai nam o |
|---|---|---|---|
| /README.md | Tong quan khoa hoc va module map | Diem vao dau tien cho giang vien va hoc vien | README.md |
| /GUIDE.md | Huong dan hoc, lo trinh, quy trinh su dung templates | Van hanh khoa hoc theo tuan/module | GUIDE.md |
| /RESOURCE_STRUCTURE_TABLE.md | Bang mo ta cau truc toan repo | Cho AI va nguoi dung tra cuu nhanh path + muc dich | File nay |

### 2.2 Modules (Noi dung giang day)

| Path | Noi dung | Dung de lam gi | Mo ta hien tai nam o |
|---|---|---|---|
| /modules/module-1-generative-ai-basics.md | Nen tang AI-Augmented SE | Day tong quan AI trong software workflow | README.md + file module |
| /modules/module-2-codebase-understanding.md | Hieu codebase voi AI | Day kham pha repo va module mapping | README.md + file module |
| /modules/module-3-project-understanding-workshop.md | Workshop hieu du an | Day phan tich, trinh bay, refine report | README.md + file module |
| /modules/module-4-prompt-engineering.md | Prompt engineering | Day ky thuat prompt cho tac vu SE | README.md + file module |
| /modules/module-5-context-engineering.md | Context engineering | Day dong goi context va chon tool | README.md + file module |
| /modules/module-6-prompt-engineering-workshop.md | Workshop prompt | Day tao prompt playbook | README.md + file module |
| /modules/module-7-ai-pair-programming-workflow.md | AI pair programming | Day workflow requirement -> code -> verify | README.md + file module |
| /modules/module-8-ai-assisted-feature-development.md | Feature development | Day phat trien tinh nang voi AI | README.md + file module |
| /modules/module-9-pr-review-ai-reflection.md | PR review va reflection | Day review, quality gate, AI reflection | README.md + file module |

### 2.3 Templates (Mau artifact)

| Path | Noi dung | Dung de lam gi | Mo ta hien tai nam o |
|---|---|---|---|
| /templates/project-understanding-report.md | Mau report hieu du an | Nop bai phan tich he thong | GUIDE.md + workshop docs |
| /templates/prompt-playbook.md | Mau prompt playbook | Tong hop prompt tai su dung | GUIDE.md + workshop docs |
| /templates/ai-decision-log.md | Mau AI decision log | Ghi quyet dinh su dung AI va verification | GUIDE.md + module 9 context |
| /templates/reflection-report.md | Mau reflection report | Tong ket bai hoc va cai tien | GUIDE.md + workshop docs |

### 2.4 Examples system

| Path | Noi dung | Dung de lam gi | Mo ta hien tai nam o |
|---|---|---|---|
| /examples/README.md | Cong vao he thong examples | Dieu huong toi common, course-1, workshops, completed samples | examples/README.md |
| /examples/common/example-template.md | Khuon vi du chuan | Tao vi du moi theo format thong nhat | examples/README.md |
| /examples/common/lab-sheet-template.md | Khuon lab sheet | Tao bai huong dan step-by-step | examples/README.md |
| /examples/common/prompt-pack.md | Thu vien prompt dung chung | Prompt cho explain/review/test/doc/verify | examples/README.md |
| /examples/common/sample-repository-context.md | Context pack cho sample repository | Dong goi context de prompt on dinh hon | examples/README.md |
| /examples/common/workflow-pack.md | Workflow AI tai su dung | Chuan hoa quy trinh prepare -> verify -> reflect | examples/README.md |
| /examples/common/slide-master-prompt.md | Prompt tao slide practical | Tao slide to chuc lop theo huong thuc chien | examples/README.md |
| /examples/common/slide-lecture-master-prompt.md | Prompt tao slide lecture | Tao slide giang giai nen tang cho giang vien | examples/README.md |

### 2.5 Course-1 examples and workshops

| Path | Noi dung | Dung de lam gi | Mo ta hien tai nam o |
|---|---|---|---|
| /examples/course-1/module-1-overview.md -> module-9-pr-review-and-reflection.md | Vi du cho tung module Course 1 | Minh hoa theo bai hoc | examples/README.md |
| /examples/course-1/course-1-3-slot-workshop-outline.md | De cuong 3 slot | Dinh vi overlap va sequencing | examples/course-1/workshops/README.md |
| /examples/course-1/workshops/README.md | Muc luc workshop | Dieu huong slot-1/2/3, rubric, submissions | examples/course-1/workshops/README.md |
| /examples/course-1/workshops/slot-1/*.md | Workshop Slot 1 | M1-M2-M3 thuc chien | workshop README + tung file |
| /examples/course-1/workshops/slot-2/*.md | Workshop Slot 2 | Prompt refinement/context/playbook | workshop README + tung file |
| /examples/course-1/workshops/slot-3/*.md | Workshop Slot 3 | Requirement->feature->PR review | workshop README + tung file |
| /examples/course-1/workshops/course-1-rubric-overview.md | Rubric tong hop | Cham diem toan Course 1 workshop | workshop README |
| /examples/course-1/workshops/submissions/*.md | Mau phieu nop bai | Thu thong tin nop bai theo workshop | workshops/submissions/README.md |
| /examples/course-1/slot-1-canvas-slide-prompt.md | Prompt Canvas cho Slot 1 | Tao deck slide thuc chien M1-M2-M3 | file nay |

### 2.6 Completed samples

| Path | Noi dung | Dung de lam gi | Mo ta hien tai nam o |
|---|---|---|---|
| /examples/completed-samples/README.md | Muc luc completed samples | Diem vao tai lieu da dien day du | examples/completed-samples/README.md |
| /examples/completed-samples/course-1/project-understanding-report-complete.md | Mau report hoan chinh | Cho hoc vien tham khao output tot | completed-samples README |
| /examples/completed-samples/course-1/prompt-playbook-complete.md | Mau prompt playbook hoan chinh | Mau prompt da duoc dien day du | completed-samples README |
| /examples/completed-samples/course-1/ai-decision-log-complete.md | Mau decision log hoan chinh | Mau ghi nhat ky su dung AI | completed-samples README |
| /examples/completed-samples/course-1/reflection-report-complete.md | Mau reflection hoan chinh | Mau tong ket va cai tien | completed-samples README |
| /examples/completed-samples/course-1/pr-description-and-verification-complete.md | Mau PR description + verification | Mau artifact PR/chung cu verify | completed-samples README |
| /examples/completed-samples/course-1/worked-example-*.md | Worked examples theo tac vu | Minh hoa prompt/context/review end-to-end | completed-samples README |

### 2.7 Sample repository (Code de thuc hanh)

| Path | Noi dung | Dung de lam gi | Mo ta hien tai nam o |
|---|---|---|---|
| /sample-repository/README.md | Tong quan he thong backend | Dinh huong doc code va workflow nghiep vu | sample-repository/README.md |
| /sample-repository/SAMPLE_REPOSITORY_GUIDE.md | Huong dan dung repo theo tung module | Noi bai hoc voi file code cu the | SAMPLE_REPOSITORY_GUIDE.md |
| /sample-repository/src/controllers/*.js | Business handlers | Phan tich logic nghiep vu | sample-repository README + workshops |
| /sample-repository/src/routes/*.js | API routing | Trace request flow | sample-repository README + workshops |
| /sample-repository/src/middleware/*.js | Auth/permission/error handling | Verification security va quality gate | sample-repository README + workshops |
| /sample-repository/src/utils/*.js | Validation/logging helpers | Doc helper va cross-check output AI | sample-repository README |
| /sample-repository/prisma/schema.prisma | Data schema | Hieu entities va quan he | sample-repository README + context pack |
| /sample-repository/tests/*.test.js | Test behavior | Verify output AI bang tests | sample-repository README + workshops |
| /sample-repository/package.json | Scripts/dependencies | Chay app va tests | sample-repository README |

## 3) Nguon mo ta hien tai dang bi phan tan o dau

Thong tin mo ta cau truc hien dang nam phan tan chu yeu o:
- /README.md
- /GUIDE.md
- /examples/README.md
- /examples/course-1/workshops/README.md
- /examples/completed-samples/README.md
- /sample-repository/README.md
- /sample-repository/SAMPLE_REPOSITORY_GUIDE.md

File nay duoc tao de hop nhat thong tin tren vao mot bang duy nhat cho AI va giang vien.

## 4) Cach su dung file nay voi AI

1. Dua file nay lam context dau tien.
2. Neu can di sau, lay them file trong cot "Path".
3. Neu can biet mo ta goc, doc cot "Mo ta hien tai nam o file nao".
4. Uu tien workflow: Root docs -> Module docs -> Workshop docs -> Sample repository files.
