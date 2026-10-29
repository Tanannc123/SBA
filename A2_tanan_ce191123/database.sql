-- ==========================================================
-- SCRIPT TẠO DATABASE VÀ DỮ LIỆU MẪU CHO ASSIGNMENT 02
-- Tên hệ thống: FUNewsManagementSystem
-- Tên database: A2_tanan_ce191123
-- ==========================================================

IF NOT EXISTS (SELECT name FROM sys.databases WHERE name = 'A2_tanan_ce191123')
BEGIN
    CREATE DATABASE A2_tanan_ce191123;
END
GO

USE A2_tanan_ce191123;
GO

-- 1. BẢNG SystemAccount (Tài khoản người dùng hệ thống)
-- AccountRole: 1 = Admin, 2 = Staff
IF NOT EXISTS (SELECT * FROM sys.tables WHERE name = 'SystemAccount')
BEGIN
    CREATE TABLE SystemAccount (
        AccountID INT IDENTITY(1,1) PRIMARY KEY,
        AccountName NVARCHAR(100) NOT NULL,
        AccountEmail NVARCHAR(100) NOT NULL UNIQUE,
        AccountRole INT NOT NULL CHECK (AccountRole IN (1, 2)),
        AccountPassword NVARCHAR(100) NOT NULL
    );
END
GO

-- 2. BẢNG Category (Thể loại / Chuyên mục tin tức)
-- Hỗ trợ danh mục đa cấp thông qua ParentCategoryID (tự tham chiếu)
IF NOT EXISTS (SELECT * FROM sys.tables WHERE name = 'Category')
BEGIN
    CREATE TABLE Category (
        CategoryID INT IDENTITY(1,1) PRIMARY KEY,
        CategoryName NVARCHAR(100) NOT NULL,
        CategoryDescription NVARCHAR(250) NULL,
        ParentCategoryID INT NULL,
        IsActive BIT NOT NULL DEFAULT 1,
        CONSTRAINT FK_Category_Parent FOREIGN KEY (ParentCategoryID) REFERENCES Category(CategoryID)
    );
END
GO

-- 3. BẢNG Tag (Thẻ / Nhãn gắn vào bài viết)
IF NOT EXISTS (SELECT * FROM sys.tables WHERE name = 'Tag')
BEGIN
    CREATE TABLE Tag (
        TagID INT IDENTITY(1,1) PRIMARY KEY,
        TagName NVARCHAR(50) NOT NULL,
        Note NVARCHAR(400) NULL
    );
END
GO

-- 4. BẢNG NewsArticle (Bài viết / Tin tức)
-- NewsStatus: 1 = Active (Công khai), 0 = Inactive (Bản nháp / Ẩn)
IF NOT EXISTS (SELECT * FROM sys.tables WHERE name = 'NewsArticle')
BEGIN
    CREATE TABLE NewsArticle (
        NewsArticleID INT IDENTITY(1,1) PRIMARY KEY,
        NewsTitle NVARCHAR(400) NOT NULL,
        Headline NVARCHAR(150) NOT NULL,
        CreatedDate DATETIME NOT NULL DEFAULT GETDATE(),
        NewsContent NVARCHAR(4000) NOT NULL,
        NewsSource NVARCHAR(400) NULL,
        CategoryID INT NOT NULL,
        NewsStatus INT NOT NULL DEFAULT 1 CHECK (NewsStatus IN (0, 1)),
        CreatedByID INT NOT NULL,
        UpdatedByID INT NULL,
        ModifiedDate DATETIME NULL,
        CONSTRAINT FK_News_Category FOREIGN KEY (CategoryID) REFERENCES Category(CategoryID),
        CONSTRAINT FK_News_CreatedBy FOREIGN KEY (CreatedByID) REFERENCES SystemAccount(AccountID),
        CONSTRAINT FK_News_UpdatedBy FOREIGN KEY (UpdatedByID) REFERENCES SystemAccount(AccountID)
    );
END
GO

-- 5. BẢNG NewsTag (Bảng trung gian liên kết n-n giữa NewsArticle và Tag)
IF NOT EXISTS (SELECT * FROM sys.tables WHERE name = 'NewsTag')
BEGIN
    CREATE TABLE NewsTag (
        NewsArticleID INT NOT NULL,
        TagID INT NOT NULL,
        PRIMARY KEY (NewsArticleID, TagID),
        CONSTRAINT FK_NewsTag_News FOREIGN KEY (NewsArticleID) REFERENCES NewsArticle(NewsArticleID) ON DELETE CASCADE,
        CONSTRAINT FK_NewsTag_Tag FOREIGN KEY (TagID) REFERENCES Tag(TagID) ON DELETE CASCADE
    );
END
GO

-- ==========================================================
-- DỮ LIỆU MẪU (SEED DATA)
-- ==========================================================

-- Chèn tài khoản mẫu (Nếu chưa có)
IF NOT EXISTS (SELECT 1 FROM SystemAccount WHERE AccountEmail = 'admin@funews.com')
BEGIN
    INSERT INTO SystemAccount (AccountName, AccountEmail, AccountRole, AccountPassword)
    VALUES 
        (N'Administrator', 'admin@funews.com', 1, 'Admin@123'),
        (N'Staff One', 'staff@funews.com', 2, 'Staff@123'),
        (N'Staff Two', 'staff2@funews.com', 2, 'Staff@123');
END
GO

-- Chèn chuyên mục mẫu (Nếu chưa có)
IF NOT EXISTS (SELECT 1 FROM Category WHERE CategoryName = N'Campus')
BEGIN
    INSERT INTO Category (CategoryName, CategoryDescription, ParentCategoryID, IsActive)
    VALUES 
        (N'Campus', N'Sự kiện và thông báo trong khuôn viên trường', NULL, 1),
        (N'Technology', N'Phần mềm, thiết bị công nghệ và trí tuệ nhân tạo', NULL, 1),
        (N'Archive', N'Các chủ đề cũ đã ngừng hoạt động', NULL, 0);
END
GO

-- Chèn thẻ mẫu (Nếu chưa có)
IF NOT EXISTS (SELECT 1 FROM Tag WHERE TagName = 'ai')
BEGIN
    INSERT INTO Tag (TagName, Note)
    VALUES 
        ('ai', N'Trí tuệ nhân tạo'),
        ('events', N'Các sự kiện sắp diễn ra');
END
GO

-- Chèn bài viết mẫu (Nếu chưa có)
IF NOT EXISTS (SELECT 1 FROM NewsArticle WHERE NewsTitle LIKE N'%AI lab%')
BEGIN
    DECLARE @StaffId INT = (SELECT TOP 1 AccountID FROM SystemAccount WHERE AccountEmail = 'staff@funews.com');
    DECLARE @TechCatId INT = (SELECT TOP 1 CategoryID FROM Category WHERE CategoryName = N'Technology');
    DECLARE @CampusCatId INT = (SELECT TOP 1 CategoryID FROM Category WHERE CategoryName = N'Campus');
    DECLARE @AiTagId INT = (SELECT TOP 1 TagID FROM Tag WHERE TagName = 'ai');
    DECLARE @EventsTagId INT = (SELECT TOP 1 TagID FROM Tag WHERE TagName = 'events');

    -- Bài viết 1: Active
    INSERT INTO NewsArticle (NewsTitle, Headline, CreatedDate, NewsContent, NewsSource, CategoryID, NewsStatus, CreatedByID, ModifiedDate)
    VALUES (
        N'FPT University opens a new AI lab',
        N'New lab for student research',
        GETDATE(),
        N'Phòng lab AI mới sẽ phục vụ nghiên cứu và thực hành của sinh viên từ học kỳ tới.',
        N'FUNews',
        @TechCatId,
        1,
        @StaffId,
        GETDATE()
    );
    DECLARE @News1Id INT = SCOPE_IDENTITY();
    INSERT INTO NewsTag (NewsArticleID, TagID) VALUES (@News1Id, @AiTagId);

    -- Bài viết 2: Active
    INSERT INTO NewsArticle (NewsTitle, Headline, CreatedDate, NewsContent, NewsSource, CategoryID, NewsStatus, CreatedByID, ModifiedDate)
    VALUES (
        N'Inter-faculty football final this Friday',
        N'Kickoff at 5 pm',
        GETDATE(),
        N'Trận chung kết bóng đá giữa các khoa sẽ diễn ra tại sân vận động chính lúc 17h thứ Sáu.',
        N'FUNews',
        @CampusCatId,
        1,
        @StaffId,
        GETDATE()
    );
    DECLARE @News2Id INT = SCOPE_IDENTITY();
    INSERT INTO NewsTag (NewsArticleID, TagID) VALUES (@News2Id, @EventsTagId);

    -- Bài viết 3: Draft (Inactive = 0)
    INSERT INTO NewsArticle (NewsTitle, Headline, CreatedDate, NewsContent, NewsSource, CategoryID, NewsStatus, CreatedByID, ModifiedDate)
    VALUES (
        N'Draft: scholarship deadline',
        N'Not published yet',
        GETDATE(),
        N'Nộp hồ sơ xin học bổng về phòng công tác sinh viên trước thời hạn quy định.',
        N'FUNews',
        @CampusCatId,
        0,
        @StaffId,
        GETDATE()
    );
END
GO

