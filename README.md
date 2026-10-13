// ساخت عنصر فوتر
const footer = document.createElement('footer');

// تنظیم استایل‌های پایه برای قرارگیری زیبا و مرتب در پایین صفحه
footer.style.textAlign = 'center';
footer.style.padding = '20px 10px';
footer.style.fontSize = '14px';
footer.style.lineHeight = '1.6';
footer.style.color = '#555555';

// تزریق کدهای HTML فوتر
footer.innerHTML = `
  <p style="margin: 0 0 6px 0;">
    Made with <span style="color: #e25555;">♥</span> by Canadian building design & construction professionals. Powered by OpenAI.
  </p>
  <p style="margin: 0;">
    © 2026 Codely.ca by Luttec BIM & Design Inc. All rights reserved.
  </p>
`;

// افزودن فوتر به انتهای بدنه (body) صفحه
document.body.appendChild(footer);
