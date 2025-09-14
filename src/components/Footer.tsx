import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="relative bg-gradient-to-b from-green-800 to-green-900 text-white overflow-hidden">
      {/* Top red bar */}
      <div className="h-12 bg-red-600 w-full"></div>

      {/* Map overlay background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-br from-green-700 to-green-800"></div>
        {/* Map pattern overlay */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M10 10h10v10H10zM30 10h10v10H30zM50 10h10v10H50zM70 10h10v10H70zM90 10h10v10H90zM20 20h10v10H20zM40 20h10v10H40zM60 20h10v10H60zM80 20h10v10H80zM10 30h10v10H10zM30 30h10v10H30zM50 30h10v10H50zM70 30h10v10H70zM90 30h10v10H90zM20 40h10v10H20zM40 40h10v10H40zM60 40h10v10H60zM80 40h10v10H80zM10 50h10v10H10zM30 50h10v10H30zM50 50h10v10H50zM70 50h10v10H70zM90 50h10v10H90zM20 60h10v10H20zM40 60h10v10H40zM60 60h10v10H60zM80 60h10v10H80zM10 70h10v10H10zM30 70h10v10H30zM50 70h10v10H50zM70 70h10v10H70zM90 70h10v10H90zM20 80h10v10H20zM40 80h10v10H40zM60 80h10v10H60zM80 80h10v10H80zM10 90h10v10H10zM30 90h10v10H30zM50 90h10v10H50zM70 90h10v10H70zM90 90h10v10H90z' fill='%23ffffff' fill-opacity='0.1'/%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>

      {/* Main content */}
      <div className="relative z-10 container mx-auto px-4 py-12">
        <div className="flex flex-col items-center justify-center text-center">
          {/* Contact Us Title */}
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white">
            ارتباط با ما
          </h2>

          {/* Contact Information Card */}
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-8 md:p-12 max-w-2xl w-full shadow-2xl">
            <div className="space-y-6 text-lg md:text-xl">
              {/* Phone */}
              <div className="flex items-center justify-center space-x-4 rtl:space-x-reverse">
                <div className="w-12 h-12 bg-green-500 flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <span 
                  className="font-semibold cursor-pointer hover:text-green-300 transition-colors duration-200"
                  onClick={() => window.open('tel:021-22909880', '_self')}
                >
                  تلفن: ۲۲۹۰۹۸۸۰-۰۲۱
                </span>
              </div>

              {/* Fax */}
              <div className="flex items-center justify-center space-x-4 rtl:space-x-reverse">
                <div className="w-12 h-12 bg-green-500 flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                </div>
                <span className="font-semibold">فکس: ۲۲۹۰۹۸۸۱-۰۲۱</span>
              </div>

              {/* Email */}
              <div className="flex items-center justify-center space-x-4 rtl:space-x-reverse">
                <div className="w-12 h-12 bg-green-500 flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <span className="font-semibold">ایمیل: info@padenaco.com</span>
              </div>

              {/* Address */}
              <div className="flex items-start justify-center space-x-4 rtl:space-x-reverse mt-8">
                <div className="w-12 h-12 bg-green-500 flex items-center justify-center flex-shrink-0 mt-1">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div className="text-right rtl:text-right">
                  <span className="font-semibold block mb-2">آدرس:</span>
                  <span className="text-sm md:text-base leading-relaxed">
                    تهران، بلوار میرداماد، انتهای خیابان حصاری، خیابان کوشا پلاک
                    ۶۵ طبقه دوم، واحد ۴
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom decorative elements */}
          <div className="mt-12 flex items-center justify-center space-x-8 rtl:space-x-reverse">
            <div className="w-16 h-1 bg-green-400"></div>
            <div className="w-8 h-8 bg-green-400"></div>
            <div className="w-16 h-1 bg-green-400"></div>
          </div>
        </div>
      </div>

      {/* Bottom border */}
      <div className="h-1 bg-green-600"></div>
    </footer>
  );
};

export default Footer;
