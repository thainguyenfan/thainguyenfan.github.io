(function () {
  'use strict';

  var I18N = {
    vi: {
      _title: 'Nguyen Phan — Kỹ sư phần mềm',
      _description: 'Phan Thái Nguyên — Kỹ sư phần mềm tại TP. Hồ Chí Minh, Việt Nam.',
      themeToggle: 'Chuyển giao diện sáng/tối',
      avatarAlt: 'Ảnh chân dung Nguyen Phan',
      location: 'TP. Hồ Chí Minh, Việt Nam',
      role: 'Kỹ sư phần mềm',
      bio: 'Xây dựng các dịch vụ back-end ổn định và giao diện web gọn gàng với Java, Spring Boot và Angular.',
      contact: 'Liên hệ',
      call: 'Gọi điện',
      personalInfo: 'Thông tin cá nhân',
      fullName: 'Họ và tên',
      mobile: 'Điện thoại',
      address: 'Địa chỉ',
      addressValue: 'Quận 12, TP. Hồ Chí Minh, Việt Nam',
      technologies: 'Công nghệ',
      experience: 'Kinh nghiệm & học vấn',
      t1Time: '08/2018 — Nay',
      t1Role: 'Kỹ sư phần mềm',
      t1Org: 'TMA Solutions, Việt Nam',
      t2Time: '01/2017 — 04/2018',
      t2Role: 'Kỹ sư khí tượng',
      t2Org: 'Đài Khí tượng Thủy văn khu vực Nam Bộ – TP.HCM, Việt Nam',
      t3Time: '07/2014 — 10/2016',
      t3Role: 'Kỹ sư R&D',
      t3Org: 'DFM-Engineering, Việt Nam',
      t4Time: '09/2013',
      t4Role: 'Cử nhân Khoa học',
      t4Org: 'Trường Đại học Khoa học Tự nhiên TP.HCM, Việt Nam'
    },
    en: {
      _title: 'Nguyen Phan — Software Engineer',
      _description: 'Phan Thái Nguyên — Software Engineer based in Ho Chi Minh City, Vietnam.',
      themeToggle: 'Toggle light/dark theme',
      avatarAlt: 'Portrait of Nguyen Phan',
      location: 'Ho Chi Minh City, Vietnam',
      role: 'Software Engineer',
      bio: 'Building reliable back-end services and clean web interfaces with Java, Spring Boot and Angular.',
      contact: 'Contact me',
      call: 'Call',
      personalInfo: 'Personal info',
      fullName: 'Full name',
      mobile: 'Mobile',
      address: 'Address',
      addressValue: 'District 12, Ho Chi Minh City, Vietnam',
      technologies: 'Technologies',
      experience: 'Experience & education',
      t1Time: 'Aug 2018 — Now',
      t1Role: 'Software Engineer',
      t1Org: 'TMA Solutions, Vietnam',
      t2Time: 'Jan 2017 — Apr 2018',
      t2Role: 'Meteorology Engineer',
      t2Org: 'Southern Regional Hydro-meteorological Center – HCMC, Vietnam',
      t3Time: 'Jul 2014 — Oct 2016',
      t3Role: 'R&D Engineer',
      t3Org: 'DFM-Engineering, Vietnam',
      t4Time: 'Sep 2013',
      t4Role: 'Bachelor of Science',
      t4Org: 'University of Science HCMC, Vietnam'
    }
  };

  var root = document.documentElement;

  function store(key, value) {
    try { localStorage.setItem(key, value); } catch (e) {}
  }
  function load(key) {
    try { return localStorage.getItem(key); } catch (e) { return null; }
  }

  /* ---------- Language ---------- */
  function setLang(lang) {
    var dict = I18N[lang] || I18N.vi;
    root.setAttribute('lang', lang);
    document.title = dict._title;
    var meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute('content', dict._description);

    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var v = dict[el.getAttribute('data-i18n')];
      if (v != null) el.textContent = v;
    });
    document.querySelectorAll('[data-i18n-alt]').forEach(function (el) {
      var v = dict[el.getAttribute('data-i18n-alt')];
      if (v != null) el.setAttribute('alt', v);
    });
    document.querySelectorAll('[data-i18n-aria]').forEach(function (el) {
      var v = dict[el.getAttribute('data-i18n-aria')];
      if (v != null) el.setAttribute('aria-label', v);
    });
    document.querySelectorAll('.lang-switch__btn').forEach(function (btn) {
      btn.setAttribute('aria-pressed', String(btn.getAttribute('data-lang') === lang));
    });
  }

  document.querySelectorAll('.lang-switch__btn').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var lang = btn.getAttribute('data-lang');
      setLang(lang);
      store('lang', lang);
    });
  });

  var savedLang = load('lang');
  setLang(savedLang === 'en' ? 'en' : 'vi');

  /* ---------- Theme ---------- */
  var themeMeta = document.querySelector('meta[name="theme-color"]');
  function setTheme(theme) {
    root.setAttribute('data-theme', theme);
    if (themeMeta) themeMeta.setAttribute('content', theme === 'dark' ? '#120c22' : '#6d28d9');
  }
  setTheme(root.getAttribute('data-theme') === 'dark' ? 'dark' : 'light');

  document.getElementById('theme-toggle').addEventListener('click', function () {
    var next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    setTheme(next);
    store('theme', next);
  });

  /* ---------- Footer year ---------- */
  document.getElementById('year').textContent = new Date().getFullYear();
})();
