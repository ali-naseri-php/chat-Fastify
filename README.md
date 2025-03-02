📦 chat-app
┣ 📂 src
┃ ┣ 📂 config              # تنظیمات اصلی مثل محیط و JWT
┃ ┣ 📂 modules
┃ ┃ ┣ 📂 auth              # ماژول احراز هویت
┃ ┃ ┃ ┣ 📂 controllers     # کنترلرهای لاگین و رجیستر
┃ ┃ ┃ ┣ 📂 services        # مدیریت توکن و لاجیک بیزینسی
┃ ┃ ┃ ┣ 📂 repositories    # ارتباط با دیتابیس (Mongoose)
┃ ┃ ┃ ┣ 📂 schemas         # مدل‌های Mongoose
┃ ┃ ┃ ┣ 📜 auth.routes.ts  # مسیرهای مربوط به احراز هویت
┃ ┃ ┣ 📂 users             # ماژول کاربران
┃ ┃ ┃ ┣ 📂 controllers     # مدیریت کاربران
┃ ┃ ┃ ┣ 📂 services        # لاجیک بیزینسی کاربران
┃ ┃ ┃ ┣ 📂 repositories    # کوئری‌های پایگاه داده
┃ ┃ ┃ ┣ 📂 schemas         # مدل کاربر
┃ ┃ ┃ ┣ 📜 user.routes.ts  # مسیرهای API کاربران
┃ ┃ ┣ 📂 chat              # ماژول چت و گروه
┃ ┃ ┃ ┣ 📂 controllers     # مدیریت پیام‌ها و گروه‌ها
┃ ┃ ┃ ┣ 📂 services        # منطق مربوط به ارسال پیام
┃ ┃ ┃ ┣ 📂 repositories    # ارتباط با MongoDB
┃ ┃ ┃ ┣ 📂 schemas         # مدل‌های چت و پیام
┃ ┃ ┃ ┣ 📜 chat.routes.ts  # مسیرهای چت و گروه
┃ ┣ 📂 plugins             # افزونه‌های Fastify مثل JWT, CORS, Swagger
┃ ┣ 📜 app.ts              # پیکربندی اصلی Fastify
┣ 📂 tests                 # تست‌های واحد و یکپارچه
┣ 📜 .env                  # متغیرهای محیطی (مانند کلید JWT)
┣ 📜 package.json          # پکیج‌های پروژه
┣ 📜 tsconfig.json         # تنظیمات TypeScript
┣ 📜 README.md             # مستندات پروژه
