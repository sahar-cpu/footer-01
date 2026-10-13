document.addEventListener("DOMContentLoaded", function() {
    const footer = document.createElement('footer');
    footer.style.textAlign = 'center';
    footer.style.padding = '20px 10px';
    footer.style.fontSize = '14px';
    footer.style.lineHeight = '1.6';
    footer.style.color = '#555555';

    footer.innerHTML = `
      Made with ♥ by Canadian building design & construction professionals. Powered by OpenAI.<br>
      © 2026 Codely.ca by Luttec BIM & Design Inc. All rights reserved. Hi sahar a ddd
    `;

    document.body.appendChild(footer);
});
