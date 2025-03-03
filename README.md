📦 chat-app
┣ 📂 src
┃ ┣ 📂 config              # تنظیمات اصلی مانند JWT، پایگاه داده و ...
┃ ┃ ┣ 📜 database.ts       # تنظیمات و اتصال به MongoDB
┃ ┃ ┣ 📜 jwt.ts            # تنظیمات JWT
┃ ┃ ┣ 📜 env.ts            # مدیریت متغیرهای محیطی
┃ ┣ 📂 modules
┃ ┃ ┣ 📂 auth              # ماژول احراز هویت
┃ ┃ ┃ ┣ 📂 controllers     # کنترلرهای مربوط به احراز هویت
┃ ┃ ┃ ┣ 📂 services        # لاجیک تجاری (تولید توکن، هش پسورد و ...)
┃ ┃ ┃ ┣ 📂 repositories    # ارتباط با دیتابیس (Mongoose Queries)
┃ ┃ ┃ ┣ 📂 schemas         # مدل‌های Mongoose (کاربر)
┃ ┃ ┃ ┣ 📂 dto             # مدیریت داده‌های ورودی (Data Transfer Objects)
┃ ┃ ┃ ┣ 📂 interfaces      # تعریف انواع داده‌ای
┃ ┃ ┃ ┣ 📜 auth.routes.ts  # مسیرهای مربوط به احراز هویت
┃ ┃ ┣ 📂 users             # ماژول کاربران
┃ ┃ ┃ ┣ 📂 controllers     # مدیریت کاربران
┃ ┃ ┃ ┣ 📂 services        # لاجیک بیزینسی کاربران
┃ ┃ ┃ ┣ 📂 repositories    # کوئری‌های پایگاه داده کاربران
┃ ┃ ┃ ┣ 📂 schemas         # مدل کاربر
┃ ┃ ┃ ┣ 📂 dto             # مدیریت داده‌های ورودی
┃ ┃ ┃ ┣ 📂 interfaces      # تعریف اینترفیس‌های کاربر
┃ ┃ ┃ ┣ 📜 user.routes.ts  # مسیرهای API کاربران
┃ ┃ ┣ 📂 chat              # ماژول چت و گروه
┃ ┃ ┃ ┣ 📂 controllers     # مدیریت پیام‌ها و گروه‌ها
┃ ┃ ┃ ┣ 📂 services        # منطق مربوط به ارسال پیام
┃ ┃ ┃ ┣ 📂 repositories    # ارتباط با MongoDB
┃ ┃ ┃ ┣ 📂 schemas         # مدل‌های چت و پیام
┃ ┃ ┃ ┣ 📂 dto             # مدیریت داده‌های ورودی چت
┃ ┃ ┃ ┣ 📂 interfaces      # تعریف انواع داده‌ای مربوط به چت
┃ ┃ ┃ ┣ 📜 chat.routes.ts  # مسیرهای چت و گروه
┃ ┣ 📂 plugins             # پلاگین‌های Fastify (مثل JWT، CORS، Swagger)
┃ ┣ 📂 utils               # ابزارهای کمکی (هش کردن پسورد، validation و ...)
┃ ┣ 📜 app.ts              # راه‌اندازی Fastify و اتصال به ماژول‌ها
┣ 📂 tests                 # تست‌های واحد و یکپارچه
┣ 📜 .env                  # متغیرهای محیطی (مثل کلید JWT و URL پایگاه داده)
┣ 📜 package.json          # پکیج‌های پروژه
┣ 📜 tsconfig.json         # تنظیمات TypeScript
┣ 📜 README.md             # مستندات پروژه
