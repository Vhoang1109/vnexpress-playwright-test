# VNexpress Website Automation Testing With Playwright
- Mục đích của dự án: tự động hoá quá trình kiểm thử các chức năng chính của VNExpress, qua đó giảm thời gian kiểm thử thủ công, phát hiện lỗi và kiểm tra tính ổn định của web

## Test Function
- Sử dụng playwright - typescript để build framework automation-testing cho các chức năng trong website https://vnexpress.net/
   + Đăng nhập 
   + Mục Thời sự 
   + Mục Thư giãn - Trò chơi
   + Mục Xe - Thi lý thuyết
   + Báo quốc tế  
   + Mục Giáo dục - Tuyển sinh - Điểm thi
   + Liên hệ Toà soạn
  

- Sử dụng selector để locator phần tử của page
   + Xpath tương đối (10%) dùng trong Education
   + Css selector (10%) (mix trong Contact) 
   + Playwrightselector(80%) ( khuyến khích nên dùng để dễ maintain sau này)

- file test-case: https://docs.google.com/spreadsheets/d/1_JePvM_SjExN8SWNdLyT7hu5_OXLKgiiodgQAdlIt6s/edit?gid=293831918#gid=293831918

- Structure tổ chức thư mục cho dự án
  + POM: Tách riêng locator và các thao tác trên giao diện thành các class, giúp code dễ đọc, dễ bảo trì và tái sử dụng.
  
  + Test: Chứa kịch bản kiểm thử (Test Script), mô tả luồng test và gọi các hàm từ Page Object để thực hiện kiểm thử.
  
  + Data-Driven Testing: Tách dữ liệu kiểm thử ra khỏi code (ví dụ: dữ liệu hợp lệ, không hợp lệ, dữ liệu biên...), giúp dễ mở rộng test case và không cần sửa logic khi thay đổi dữ liệu.

```
VNEXPRESS-PLAYWRIGHT/
│
├── pages/                 # Page Object Model
│   ├── login/
│   ├── news/
│   ├── game/
│   ├── car/
│   ├── education/
│   ├── international/
│   └── contact/
│
├── tests/                 # Test Scripts
│   ├── login/
│   ├── news/
│   ├── game/
│   ├── car/
│   ├── education/
│   ├── international/
│   └── contact/
│
├── test-data/             # Test Data
│
├── playwright-report/     # HTML Report
│
├── test-results/          # Screenshot, Video, Trace
│
├── package.json
├── playwright.config.ts
└── .gitignore
```

- Biểu diễn luồng của 1 file test
```

                    login.spec.ts
                          │
        ┌─────────────────┴─────────────────┐
        │                                   │
        ▼                                   ▼
 login.data.ts                    LoginPage.ts
        │                                   │
        │                            extends
        │                                   ▼
        └──────────────► BasePage.ts ◄──────┘
                                │
                                ▼
                        Playwright API
                                │
                                ▼
                           VNExpress
```

- Sử dụng lệnh terminal để thực thi test

```ts
npm init playwright@latest // khởi tạo chương trình playwright

npx playwright test // test full chức năng trong file test

npx playwright test -g "test-name-text" // test chức năng bằng cách search text

npx playwright test <path-file> // test chức năng của 1 file

npx playwright show-report // sau khi thực hiện test xong, sử dụng lệnh này để show-report (trace-view-UI)

npx playwright test --ui // thực hiện run test trong ui của playwright

```
---
> *Lấy dự án về chỉ việc sử dụng " git clone + copy URL " nhé ạ*

> *Dự án có thể được update thêm nên sau khi clone repository git về thì hãy sử dụng " git pull " để update file code mới nhất nhé ^^*
