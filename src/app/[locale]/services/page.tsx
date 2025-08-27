import Header from '../../../components/Header';

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white" dir="rtl">
      <Header />
      <main className="flex-1 pt-16">
        <section className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#e8f5e9] via-[#f0f7ff] to-[#e3f2fd]">
          {/* Background image with subtle fade */}
          <div
            className="absolute inset-0 bg-center bg-cover opacity-40"
            style={{ backgroundImage: "url('/nav-back.png')" }}
          />
          {/* Edge fade overlays */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-white/40" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white to-transparent" />

          {/* Decorative gradient blobs */}
          <div className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 bg-gradient-to-b from-[#78b62f] to-[#5a8a22] opacity-20 blur-3xl rounded-full" />
          <div className="pointer-events-none absolute -bottom-28 -left-28 h-80 w-80 bg-gradient-to-tr from-[#2563eb] to-[#78b62f] opacity-20 blur-3xl rounded-full" />

          <div className="relative max-w-3xl mx-auto px-4 md:px-6 bg-white/90 backdrop-blur-md shadow-xl border border-white/60 p-6 md:p-8">
            <div className="absolute top-[-1px] left-0 right-0 h-2 bg-[#669c27]" />
            <p className="text-[#353c4a] leading-8 text-justify">
              مدیران این شرکت با اتکا به بیش از ده سال تجربه و دانش تخصصی در زمینه تجهیزات سنجش آلودگی هوا و سامانه‌های پایش پیوسته (CEMS)، این مجموعه را بنیان نهاده‌اند تا با تلفیق دانش فنی و تجربه عملی، افق تازه‌ای در ارائه خدمات به مشتریان خود بگشایند.
            </p>
            <p className="mt-6 font-semibold text-[#353c4a]">
              در همین راستا، شرکت مفتخر است خدمات زیر را ارائه نماید:
            </p>
            <ul className="mt-4 list-disc pr-6 pl-6 space-y-2 text-[#353c4a]">
              <li>مشاوره تخصصی پیش از خرید جهت انتخاب بهینه تجهیزات</li>
              <li>طراحی، نصب و راه‌اندازی انواع آنالایزرها</li>
              <li>تأمین قطعات یدکی و مصرفی انواع آنالایزرها</li>
              <li>ارائه خدمات تعمیر، نگهداری و کالیبراسیون برای:</li>
              <li>آنالایزرهای ایستگاه‌های سنجش آلودگی هوا</li>
              <li>تجهیزات پایش آنلاین صنایع</li>
              <li>آنالایزرهای پایش کیفی آب و پساب</li>
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
}
