/**
 * PORTAL PENGELOLA ADMIN - SOTO KUDUS KEDAI TAMAN
 * Full Dynamic Content, Menu, Hero, Gallery, Location, Contact, and Promo Management
 */

// Fallback Default Data
const DEFAULT_DATA = {
  brand: {
    name: "Soto Kudus Kedai Taman",
    shortName: "SODUS Kedai Taman",
    logo: "images/branding/logo.jpg",
    phone: "(031) 8298832",
    hotlineWa: "6285158515332",
    hotlineDisplay: "0851-5851-5332",
    instagram: "sotokudus_kedaitaman",
    instagramUrl: "https://www.instagram.com/sotokudus_kedaitaman/?hl=en",
    address: "Jl. Gayungsari Timur No. 7, Menanggal, Kec. Gayungan, Kota Surabaya, Jawa Timur 60234 (Kawasan Masjid Agung Al-Akbar Surabaya)",
    gmapsUrl: "https://maps.google.com/?q=Soto+Kudus+Kedai+Taman+Jl.+Gayungsari+Timur+No.+7+Surabaya",
    gmapsEmbed: "https://maps.google.com/maps?q=Jl.+Gayungsari+Timur+No.+7,+Menanggal,+Surabaya&t=&z=16&ie=UTF8&iwloc=&output=embed",
    openHoursText: "Setiap Hari: 06.00 – 22.00 WIB",
    openHourStart: 6,
    openHourEnd: 22,
    facilities: "Area Parkir Luas, Suasana Taman Rindang & Semi-Outdoor, Area Indoor, Musholla, Toilet Bersih, Meja Santai Keluarga, Pembayaran QRIS & Tunai.",
    paymentMethods: "Tunai (Cash), QRIS (BCA, Mandiri, GoPay, OVO, ShopeePay, Dana), Transfer Bank",
    announcementText: "🌿 Buka Setiap Hari 06.00 – 22.00 WIB • Jl. Gayungsari Timur No. 7, Menanggal, Surabaya (Dekat Masjid Agung Al-Akbar)",
    gofoodUrl: "https://gofood.link",
    grabfoodUrl: "https://food.grab.com",
    shopeefoodUrl: "https://shopee.co.id/shopeefood"
  },
  hero: {
    badge1: "🌿 Suasana Kedai Taman Asri",
    badge2: "⭐ Resep Warisan Asli Kudus",
    scriptTag: "Selamat Datang di SODUS",
    headline: "Kehangatan Soto Kudus Asli di Tengah Sejuknya Taman",
    desc: "Soto Kudus Kedai Taman (SODUS) menghadirkan kenikmatan soto kudus otentik dengan racikan kuah kaldu rempah gurih kekuningan, ayam kampung pilihan, dan taburan bawang putih goreng yang harum semerbak. Disajikan dalam mangkuk porselen khas dengan suasana santap hijau, asri, dan teduh di kawasan Gayungsari, Surabaya.",
    highlights: [
      {
        icon: "🥣",
        title: "Mangkok Tradisional",
        desc: "Penyajian mangkok porselen khas penikmat soto sejati"
      },
      {
        icon: "🐓",
        title: "Ayam Kampung Segar",
        desc: "Daging empuk gurih dengan kaldu alami yang kaya rasa"
      },
      {
        icon: "🌅",
        title: "Buka Pagi Jam 06.00",
        desc: "Pilihan sarapan pagi hangat hingga santap malam santai"
      }
    ],
    floatingPills: [
      "🌿 100% Halal & Segar",
      "🍢 Sate Puyuh Bacem Juara",
      "✨ Kuah Kaldu Rempah Otentik",
      "⭐ Rating Favorit Warga Gayungsari"
    ],
    ctaMenuText: "Buka Daftar Menu",
    ctaWaText: "Pesan via WhatsApp",
    ctaMapsText: "📍 Petunjuk Lokasi"
  },
  promo: {
    enabled: true,
    autoPopup: true,
    title: "Promo Sarapan & Santap Nikmat Kedai Taman! 🌿",
    badge: "DISKON 15%",
    discountPercent: 15,
    discountMax: 20000,
    minOrder: 40000,
    code: "SODUS15",
    validUntil: "31 Desember 2026",
    desc: "Nikmati diskon 15% untuk setiap pemesanan via website Soto Kudus Kedai Taman dengan minimal belanja Rp 40.000!",
    bannerText: "🎁 Promo Diskon 15% Menu Favorit dengan Kode: SODUS15",
    bannerBtnText: "Klaim Voucher Diskon",
    popupImage: "images/menu/soto-kudus-campur.jpg"
  },
  menus: [],
  gallery: [],
  settings: {
    adminPassword: "sodus123"
  }
};

let siteData = JSON.parse(JSON.stringify(DEFAULT_DATA));
let currentMenuFilter = '';

// ==========================================
// 1. AUTHENTICATION & SESSION
// ==========================================
function checkAuth() {
  const isLoggedIn = sessionStorage.getItem('sodus_admin_logged_in') === 'true';
  const loginScreen = document.getElementById('loginScreen');
  const dashboard = document.getElementById('adminDashboard');

  if (isLoggedIn) {
    if (loginScreen) loginScreen.style.display = 'none';
    if (dashboard) dashboard.style.display = 'flex';
    loadAdminData();
  } else {
    if (loginScreen) loginScreen.style.display = 'flex';
    if (dashboard) dashboard.style.display = 'none';
  }
}

function initLoginForm() {
  const form = document.getElementById('loginForm');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const user = document.getElementById('loginUser').value.trim();
    const pass = document.getElementById('loginPass').value.trim();

    const expectedPass = (siteData.settings && siteData.settings.adminPassword) || 'sodus123';

    if (user === 'admin' && pass === expectedPass) {
      sessionStorage.setItem('sodus_admin_logged_in', 'true');
      showToast('Login berhasil! Selamat datang Admin Kedai Taman. 🌿');
      checkAuth();
    } else {
      alert('Username atau password salah! Silakan coba lagi.');
    }
  });

  const logoutBtn = document.getElementById('btnLogout');
  if (logoutBtn) {
    logoutBtn.addEventListener('click', () => {
      if (confirm('Apakah Anda yakin ingin keluar dari panel admin?')) {
        sessionStorage.removeItem('sodus_admin_logged_in');
        checkAuth();
      }
    });
  }
}

// ==========================================
// 2. DATA PERSISTENCE & SYNC
// ==========================================
async function loadAdminData() {
  // Check localStorage
  const cached = localStorage.getItem('sodus_website_data');
  if (cached) {
    try {
      siteData = JSON.parse(cached);
    } catch (e) {
      console.warn('Error reading localStorage:', e);
    }
  }

  // Fetch from server / data.json
  try {
    const res = await fetch('/api/data');
    if (res.ok) {
      const serverData = await res.json();
      if (serverData && (serverData.menus || serverData.brand)) {
        siteData = serverData;
        localStorage.setItem('sodus_website_data', JSON.stringify(siteData));
      }
    }
  } catch (err) {
    try {
      const fallback = await fetch('./data.json');
      if (fallback.ok) {
        siteData = await fallback.json();
        localStorage.setItem('sodus_website_data', JSON.stringify(siteData));
      }
    } catch (e) {
      console.warn('Using existing siteData:', e);
    }
  }

  // Populate UI
  updateDashboardStats();
  renderAdminMenuTable();
  populateHeroForm();
  renderAdminGalleryTable();
  populateLocationForm();
  populateContactForm();
  populatePromoForm();

  // Top nav logo
  const navLogo = document.getElementById('topNavLogo');
  if (navLogo && siteData.brand && siteData.brand.logo) {
    navLogo.src = siteData.brand.logo;
  }
}

async function saveAdminData(msg = 'Perubahan data berhasil disimpan!') {
  // Save to localStorage
  localStorage.setItem('sodus_website_data', JSON.stringify(siteData));

  // Sync to server /api/data
  try {
    const res = await fetch('/api/data', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(siteData)
    });
    if (res.ok) {
      showToast(`${msg} (Tersinkron ke server & browser) 🌿`);
    } else {
      showToast(`${msg} (Tersimpan di browser) 🌿`);
    }
  } catch (err) {
    showToast(`${msg} (Tersimpan di browser) 🌿`);
  }

  updateDashboardStats();
}

function updateDashboardStats() {
  const menus = siteData.menus || [];
  const gallery = siteData.gallery || [];
  const promo = siteData.promo || {};

  const totalMenuEl = document.getElementById('statTotalMenu');
  if (totalMenuEl) totalMenuEl.textContent = menus.length;

  const availMenuEl = document.getElementById('statAvailableMenu');
  if (availMenuEl) {
    const availCount = menus.filter(m => m.isAvailable !== false).length;
    availMenuEl.textContent = `${availCount} / ${menus.length}`;
  }

  const totalGalEl = document.getElementById('statTotalGallery');
  if (totalGalEl) totalGalEl.textContent = gallery.length;

  const promoStatusEl = document.getElementById('statPromoStatus');
  if (promoStatusEl) {
    if (promo.enabled) {
      promoStatusEl.textContent = 'AKTIF';
      promoStatusEl.style.color = '#15803d';
    } else {
      promoStatusEl.textContent = 'NONAKTIF';
      promoStatusEl.style.color = '#dc2626';
    }
  }
}

// ==========================================
// 3. TAB NAVIGATION
// ==========================================
function initTabs() {
  const tabBtns = document.querySelectorAll('.admin-tab-btn');
  const panes = document.querySelectorAll('.admin-tab-pane');

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      tabBtns.forEach(b => b.classList.remove('active'));
      panes.forEach(p => p.classList.remove('active'));

      btn.classList.add('active');
      const targetId = btn.getAttribute('data-tab');
      const targetPane = document.getElementById(targetId);
      if (targetPane) targetPane.classList.add('active');
    });
  });
}

// ==========================================
// 4. TAB 1: KELOLA MENU
// ==========================================
function renderAdminMenuTable() {
  const tbody = document.getElementById('adminMenuTableBody');
  if (!tbody) return;

  const menus = siteData.menus || [];
  const query = currentMenuFilter.toLowerCase().trim();

  const filtered = menus.filter(m => {
    return !query || 
      m.name.toLowerCase().includes(query) || 
      (m.category && m.category.toLowerCase().includes(query)) ||
      (m.tag && m.tag.toLowerCase().includes(query));
  });

  if (filtered.length === 0) {
    tbody.innerHTML = `
      <tr>
        <td colspan="7" style="text-align: center; padding: 36px; color: var(--color-text-muted);">
          Tidak ada menu yang ditemukan.
        </td>
      </tr>
    `;
    return;
  }

  tbody.innerHTML = filtered.map(item => {
    const isAvail = (item.isAvailable !== false);
    return `
      <tr>
        <td>
          <img src="${item.image || 'images/menu/soto-kudus-campur.jpg'}" alt="${item.name}" class="table-thumb" />
        </td>
        <td>
          <div style="font-weight: 700; color: var(--color-green-dark);">${item.name}</div>
          <div style="font-size: 0.8rem; color: var(--color-text-muted); max-width: 320px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">
            ${item.desc || '-'}
          </div>
        </td>
        <td>
          <span style="font-size: 0.82rem; font-weight: 700; color: var(--color-text-muted); text-transform: uppercase;">
            ${item.category}
          </span>
        </td>
        <td style="font-weight: 700; color: #15803d;">
          ${formatRupiah(item.price)}
        </td>
        <td>
          ${item.tag ? `<span class="badge-status" style="background:#fef3c7; color:#b45309;">${item.tag}</span>` : '-'}
        </td>
        <td>
          <label class="switch-label">
            <input type="checkbox" ${isAvail ? 'checked' : ''} onchange="toggleMenuAvailability('${item.id}', this.checked)" />
            <span class="switch-slider"></span>
          </label>
          <span style="font-size: 0.8rem; font-weight: 700; margin-left: 6px; color: ${isAvail ? '#15803d' : '#dc2626'};">
            ${isAvail ? 'Tersedia' : 'Habis'}
          </span>
        </td>
        <td style="text-align: right; white-space: nowrap;">
          <button class="btn-admin btn-secondary" onclick="openEditMenuModal('${item.id}')" style="padding: 6px 12px; font-size: 0.8rem;">
            ✏️ Edit
          </button>
          <button class="btn-admin btn-danger" onclick="deleteMenu('${item.id}')" style="padding: 6px 12px; font-size: 0.8rem; margin-left: 6px;">
            🗑️ Hapus
          </button>
        </td>
      </tr>
    `;
  }).join('');
}

function initMenuEvents() {
  const search = document.getElementById('adminMenuSearch');
  if (search) {
    search.addEventListener('input', (e) => {
      currentMenuFilter = e.target.value;
      renderAdminMenuTable();
    });
  }

  const addBtn = document.getElementById('btnOpenAddMenu');
  if (addBtn) {
    addBtn.addEventListener('click', () => openAddMenuModal());
  }

  // Menu Modal Form Submit
  const menuForm = document.getElementById('menuForm');
  if (menuForm) {
    menuForm.addEventListener('submit', (e) => {
      e.preventDefault();
      saveMenuFromModal();
    });
  }

  // Image input preview
  const imgInput = document.getElementById('menuImageInput');
  const imgPreview = document.getElementById('menuImagePreview');
  const imgFile = document.getElementById('menuImageFile');

  if (imgInput && imgPreview) {
    imgInput.addEventListener('input', () => {
      imgPreview.src = imgInput.value.trim() || 'images/menu/soto-kudus-campur.jpg';
    });
  }

  if (imgFile && imgInput && imgPreview) {
    imgFile.addEventListener('change', () => {
      const file = imgFile.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          imgInput.value = e.target.result;
          imgPreview.src = e.target.result;
        };
        reader.readAsDataURL(file);
      }
    });
  }
}

function toggleMenuAvailability(menuId, isAvail) {
  const menu = siteData.menus.find(m => m.id === menuId);
  if (menu) {
    menu.isAvailable = isAvail;
    saveAdminData(`Status ketersediaan ${menu.name} diubah menjadi ${isAvail ? 'Tersedia' : 'Habis'}`);
    renderAdminMenuTable();
  }
}

function openAddMenuModal() {
  const modal = document.getElementById('menuModal');
  const title = document.getElementById('menuModalTitle');
  const editId = document.getElementById('menuEditId');

  if (title) title.textContent = 'Tambah Menu Baru';
  if (editId) editId.value = '';

  document.getElementById('menuNameInput').value = '';
  document.getElementById('menuCategoryInput').value = 'soto';
  document.getElementById('menuPriceInput').value = '';
  document.getElementById('menuAvailableCheck').checked = true;
  document.getElementById('menuTagInput').value = '';
  document.getElementById('menuDescInput').value = '';
  document.getElementById('menuImageInput').value = 'images/menu/soto-kudus-campur.jpg';
  document.getElementById('menuImagePreview').src = 'images/menu/soto-kudus-campur.jpg';

  if (modal) modal.classList.add('active');
}

function openEditMenuModal(menuId) {
  const menu = siteData.menus.find(m => m.id === menuId);
  if (!menu) return;

  const modal = document.getElementById('menuModal');
  const title = document.getElementById('menuModalTitle');
  const editId = document.getElementById('menuEditId');

  if (title) title.textContent = `Edit Menu: ${menu.name}`;
  if (editId) editId.value = menu.id;

  document.getElementById('menuNameInput').value = menu.name || '';
  document.getElementById('menuCategoryInput').value = menu.category || 'soto';
  document.getElementById('menuPriceInput').value = menu.price || 0;
  document.getElementById('menuAvailableCheck').checked = (menu.isAvailable !== false);
  document.getElementById('menuTagInput').value = menu.tag || '';
  document.getElementById('menuDescInput').value = menu.desc || '';
  document.getElementById('menuImageInput').value = menu.image || '';
  document.getElementById('menuImagePreview').src = menu.image || 'images/menu/soto-kudus-campur.jpg';

  if (modal) modal.classList.add('active');
}

function closeMenuModal() {
  const modal = document.getElementById('menuModal');
  if (modal) modal.classList.remove('active');
}

function saveMenuFromModal() {
  const editId = document.getElementById('menuEditId').value.trim();
  const name = document.getElementById('menuNameInput').value.trim();
  const category = document.getElementById('menuCategoryInput').value;
  const price = Number(document.getElementById('menuPriceInput').value);
  const isAvailable = document.getElementById('menuAvailableCheck').checked;
  const tag = document.getElementById('menuTagInput').value.trim();
  const desc = document.getElementById('menuDescInput').value.trim();
  const image = document.getElementById('menuImageInput').value.trim() || 'images/menu/soto-kudus-campur.jpg';

  if (!name || isNaN(price)) {
    alert('Nama menu dan harga harus diisi dengan benar!');
    return;
  }

  if (editId) {
    // Update existing
    const idx = siteData.menus.findIndex(m => m.id === editId);
    if (idx !== -1) {
      siteData.menus[idx] = {
        ...siteData.menus[idx],
        name,
        category,
        price,
        isAvailable,
        tag,
        desc,
        image
      };
    }
  } else {
    // Add new
    const newId = 'menu-' + Date.now();
    siteData.menus.unshift({
      id: newId,
      name,
      category,
      price,
      isAvailable,
      tag,
      tagClass: 'tag-favorit',
      desc,
      image
    });
  }

  saveAdminData('Menu hidangan berhasil disimpan!');
  closeMenuModal();
  renderAdminMenuTable();
}

function deleteMenu(menuId) {
  const menu = siteData.menus.find(m => m.id === menuId);
  if (!menu) return;

  if (confirm(`Apakah Anda yakin ingin menghapus menu "${menu.name}"?`)) {
    siteData.menus = siteData.menus.filter(m => m.id !== menuId);
    saveAdminData(`Menu "${menu.name}" berhasil dihapus.`);
    renderAdminMenuTable();
  }
}

// ==========================================
// 5. TAB 2: EDIT COVER (HERO SECTION)
// ==========================================
function populateHeroForm() {
  const brand = siteData.brand || {};
  const hero = siteData.hero || {};

  const logoIn = document.getElementById('heroLogoInput');
  const logoPrev = document.getElementById('heroLogoPreview');
  if (logoIn && brand.logo) logoIn.value = brand.logo;
  if (logoPrev && brand.logo) logoPrev.src = brand.logo;

  document.getElementById('heroBadge1Input').value = hero.badge1 || '';
  document.getElementById('heroBadge2Input').value = hero.badge2 || '';
  document.getElementById('heroScriptTagInput').value = hero.scriptTag || '';
  document.getElementById('heroHeadlineInput').value = hero.headline || '';
  document.getElementById('heroDescInput').value = hero.desc || '';

  // Highlights
  if (hero.highlights && hero.highlights.length >= 3) {
    document.getElementById('hl1Icon').value = hero.highlights[0].icon || '🥣';
    document.getElementById('hl1Title').value = hero.highlights[0].title || '';
    document.getElementById('hl1Desc').value = hero.highlights[0].desc || '';

    document.getElementById('hl2Icon').value = hero.highlights[1].icon || '🐓';
    document.getElementById('hl2Title').value = hero.highlights[1].title || '';
    document.getElementById('hl2Desc').value = hero.highlights[1].desc || '';

    document.getElementById('hl3Icon').value = hero.highlights[2].icon || '🌅';
    document.getElementById('hl3Title').value = hero.highlights[2].title || '';
    document.getElementById('hl3Desc').value = hero.highlights[2].desc || '';
  }

  // Floating pills
  if (hero.floatingPills && hero.floatingPills.length >= 2) {
    document.getElementById('heroPill1Input').value = hero.floatingPills[0] || '';
    document.getElementById('heroPill2Input').value = hero.floatingPills[1] || '';
  }
}

function initHeroEvents() {
  const logoIn = document.getElementById('heroLogoInput');
  const logoPrev = document.getElementById('heroLogoPreview');
  const logoFile = document.getElementById('heroLogoFile');

  if (logoIn && logoPrev) {
    logoIn.addEventListener('input', () => { logoPrev.src = logoIn.value.trim(); });
  }

  if (logoFile && logoIn && logoPrev) {
    logoFile.addEventListener('change', () => {
      const file = logoFile.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          logoIn.value = e.target.result;
          logoPrev.src = e.target.result;
        };
        reader.readAsDataURL(file);
      }
    });
  }

  const saveBtn = document.getElementById('btnSaveHero');
  if (saveBtn) {
    saveBtn.addEventListener('click', () => {
      if (!siteData.brand) siteData.brand = {};
      if (!siteData.hero) siteData.hero = {};

      siteData.brand.logo = document.getElementById('heroLogoInput').value.trim();
      siteData.hero.badge1 = document.getElementById('heroBadge1Input').value.trim();
      siteData.hero.badge2 = document.getElementById('heroBadge2Input').value.trim();
      siteData.hero.scriptTag = document.getElementById('heroScriptTagInput').value.trim();
      siteData.hero.headline = document.getElementById('heroHeadlineInput').value.trim();
      siteData.hero.desc = document.getElementById('heroDescInput').value.trim();

      siteData.hero.highlights = [
        {
          icon: document.getElementById('hl1Icon').value.trim(),
          title: document.getElementById('hl1Title').value.trim(),
          desc: document.getElementById('hl1Desc').value.trim()
        },
        {
          icon: document.getElementById('hl2Icon').value.trim(),
          title: document.getElementById('hl2Title').value.trim(),
          desc: document.getElementById('hl2Desc').value.trim()
        },
        {
          icon: document.getElementById('hl3Icon').value.trim(),
          title: document.getElementById('hl3Title').value.trim(),
          desc: document.getElementById('hl3Desc').value.trim()
        }
      ];

      siteData.hero.floatingPills = [
        document.getElementById('heroPill1Input').value.trim(),
        document.getElementById('heroPill2Input').value.trim(),
        siteData.hero.floatingPills?.[2] || "✨ Kuah Kaldu Rempah Otentik",
        siteData.hero.floatingPills?.[3] || "⭐ Rating Favorit Warga Gayungsari"
      ];

      saveAdminData('Pengaturan Cover & Hero Section berhasil disimpan!');
    });
  }
}

// ==========================================
// 6. TAB 3: KELOLA GALERI
// ==========================================
function renderAdminGalleryTable() {
  const tbody = document.getElementById('adminGalleryTableBody');
  if (!tbody) return;

  const gallery = siteData.gallery || [];
  if (gallery.length === 0) {
    tbody.innerHTML = `
      <tr>
        <td colspan="5" style="text-align: center; padding: 36px; color: var(--color-text-muted);">
          Belum ada foto galeri.
        </td>
      </tr>
    `;
    return;
  }

  tbody.innerHTML = gallery.map(item => `
    <tr>
      <td>
        <img src="${item.image}" alt="${item.title}" class="table-thumb" style="width: 72px; height: 50px;" />
      </td>
      <td style="font-weight: 700; color: var(--color-green-dark);">
        ${item.title}
      </td>
      <td>
        <span class="badge-status" style="background:#dcfce7; color:#15803d;">
          ${item.badge || item.category || 'Galeri'}
        </span>
      </td>
      <td style="font-size: 0.82rem; color: var(--color-text-muted); max-width: 300px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">
        ${item.desc || '-'}
      </td>
      <td style="text-align: right; white-space: nowrap;">
        <button class="btn-admin btn-secondary" onclick="openEditGalleryModal('${item.id}')" style="padding: 6px 12px; font-size: 0.8rem;">
          ✏️ Edit
        </button>
        <button class="btn-admin btn-danger" onclick="deleteGallery('${item.id}')" style="padding: 6px 12px; font-size: 0.8rem; margin-left: 6px;">
          🗑️ Hapus
        </button>
      </td>
    </tr>
  `).join('');
}

function initGalleryEvents() {
  const addBtn = document.getElementById('btnOpenAddGallery');
  if (addBtn) {
    addBtn.addEventListener('click', () => openAddGalleryModal());
  }

  const galForm = document.getElementById('galleryForm');
  if (galForm) {
    galForm.addEventListener('submit', (e) => {
      e.preventDefault();
      saveGalleryFromModal();
    });
  }

  const galInput = document.getElementById('galleryImageInput');
  const galPrev = document.getElementById('galleryImagePreview');
  const galFile = document.getElementById('galleryImageFile');

  if (galInput && galPrev) {
    galInput.addEventListener('input', () => { galPrev.src = galInput.value.trim(); });
  }

  if (galFile && galInput && galPrev) {
    galFile.addEventListener('change', () => {
      const file = galFile.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          galInput.value = e.target.result;
          galPrev.src = e.target.result;
        };
        reader.readAsDataURL(file);
      }
    });
  }
}

function openAddGalleryModal() {
  const modal = document.getElementById('galleryModal');
  const title = document.getElementById('galleryModalTitle');
  const editId = document.getElementById('galleryEditId');

  if (title) title.textContent = 'Tambah Foto Galeri Baru';
  if (editId) editId.value = '';

  document.getElementById('galleryTitleInput').value = '';
  document.getElementById('galleryBadgeInput').value = 'Suasana Taman';
  document.getElementById('galleryDescInput').value = '';
  document.getElementById('galleryImageInput').value = 'images/galeri/galeri-1-soto-kudus-hangat.jpg';
  document.getElementById('galleryImagePreview').src = 'images/galeri/galeri-1-soto-kudus-hangat.jpg';

  if (modal) modal.classList.add('active');
}

function openEditGalleryModal(galId) {
  const item = siteData.gallery.find(g => g.id === galId);
  if (!item) return;

  const modal = document.getElementById('galleryModal');
  const title = document.getElementById('galleryModalTitle');
  const editId = document.getElementById('galleryEditId');

  if (title) title.textContent = `Edit Foto: ${item.title}`;
  if (editId) editId.value = item.id;

  document.getElementById('galleryTitleInput').value = item.title || '';
  document.getElementById('galleryBadgeInput').value = item.badge || item.category || '';
  document.getElementById('galleryDescInput').value = item.desc || '';
  document.getElementById('galleryImageInput').value = item.image || '';
  document.getElementById('galleryImagePreview').src = item.image || 'images/galeri/galeri-1-soto-kudus-hangat.jpg';

  if (modal) modal.classList.add('active');
}

function closeGalleryModal() {
  const modal = document.getElementById('galleryModal');
  if (modal) modal.classList.remove('active');
}

function saveGalleryFromModal() {
  const editId = document.getElementById('galleryEditId').value.trim();
  const title = document.getElementById('galleryTitleInput').value.trim();
  const badge = document.getElementById('galleryBadgeInput').value.trim() || 'Galeri';
  const desc = document.getElementById('galleryDescInput').value.trim();
  const image = document.getElementById('galleryImageInput').value.trim();

  if (!title || !image) {
    alert('Judul dan foto galeri wajib diisi!');
    return;
  }

  if (editId) {
    const idx = siteData.gallery.findIndex(g => g.id === editId);
    if (idx !== -1) {
      siteData.gallery[idx] = {
        ...siteData.gallery[idx],
        title,
        badge,
        category: badge,
        desc,
        image
      };
    }
  } else {
    const newId = 'gal-' + Date.now();
    siteData.gallery.push({
      id: newId,
      title,
      badge,
      category: badge,
      tag: '#sotokudus #kedaitaman',
      desc,
      image
    });
  }

  saveAdminData('Foto galeri berhasil disimpan!');
  closeGalleryModal();
  renderAdminGalleryTable();
}

function deleteGallery(galId) {
  const item = siteData.gallery.find(g => g.id === galId);
  if (!item) return;

  if (confirm(`Hapus foto galeri "${item.title}"?`)) {
    siteData.gallery = siteData.gallery.filter(g => g.id !== galId);
    saveAdminData(`Foto "${item.title}" berhasil dihapus.`);
    renderAdminGalleryTable();
  }
}

// ==========================================
// 7. TAB 4: ALAMAT & LOKASI
// ==========================================
function populateLocationForm() {
  const brand = siteData.brand || {};
  document.getElementById('locBranchName').value = brand.name || '';
  document.getElementById('locAddress').value = brand.address || '';
  document.getElementById('locHourStart').value = Number(brand.openHourStart ?? 6);
  document.getElementById('locHourEnd').value = Number(brand.openHourEnd ?? 22);
  document.getElementById('locHoursText').value = brand.openHoursText || '';
  document.getElementById('locFacilities').value = brand.facilities || '';
  document.getElementById('locPayments').value = brand.paymentMethods || '';
  document.getElementById('locMapsUrl').value = brand.gmapsUrl || '';
  document.getElementById('locMapsEmbed').value = brand.gmapsEmbed || '';
}

function initLocationEvents() {
  const saveBtn = document.getElementById('btnSaveLocation');
  if (saveBtn) {
    saveBtn.addEventListener('click', () => {
      if (!siteData.brand) siteData.brand = {};

      siteData.brand.name = document.getElementById('locBranchName').value.trim();
      siteData.brand.address = document.getElementById('locAddress').value.trim();
      siteData.brand.openHourStart = Number(document.getElementById('locHourStart').value);
      siteData.brand.openHourEnd = Number(document.getElementById('locHourEnd').value);
      siteData.brand.openHoursText = document.getElementById('locHoursText').value.trim();
      siteData.brand.facilities = document.getElementById('locFacilities').value.trim();
      siteData.brand.paymentMethods = document.getElementById('locPayments').value.trim();
      siteData.brand.gmapsUrl = document.getElementById('locMapsUrl').value.trim();
      siteData.brand.gmapsEmbed = document.getElementById('locMapsEmbed').value.trim();

      saveAdminData('Data lokasi dan jam operasional berhasil diperbarui!');
    });
  }
}

// ==========================================
// 8. TAB 5: KONTAK & MEDSOS
// ==========================================
function populateContactForm() {
  const brand = siteData.brand || {};
  document.getElementById('contactAnnouncement').value = brand.announcementText || '';
  document.getElementById('contactWa').value = brand.hotlineWa || '';
  document.getElementById('contactWaDisplay').value = brand.hotlineDisplay || '';
  document.getElementById('contactPhone').value = brand.phone || '';
  document.getElementById('contactIg').value = brand.instagram || '';
  document.getElementById('contactIgUrl').value = brand.instagramUrl || '';
  document.getElementById('contactGofood').value = brand.gofoodUrl || '';
  document.getElementById('contactGrabfood').value = brand.grabfoodUrl || '';
  document.getElementById('contactShopeefood').value = brand.shopeefoodUrl || '';
}

function initContactEvents() {
  const saveBtn = document.getElementById('btnSaveContact');
  if (saveBtn) {
    saveBtn.addEventListener('click', () => {
      if (!siteData.brand) siteData.brand = {};

      siteData.brand.announcementText = document.getElementById('contactAnnouncement').value.trim();
      siteData.brand.hotlineWa = document.getElementById('contactWa').value.trim();
      siteData.brand.hotlineDisplay = document.getElementById('contactWaDisplay').value.trim();
      siteData.brand.phone = document.getElementById('contactPhone').value.trim();
      siteData.brand.instagram = document.getElementById('contactIg').value.trim();
      siteData.brand.instagramUrl = document.getElementById('contactIgUrl').value.trim();
      siteData.brand.gofoodUrl = document.getElementById('contactGofood').value.trim();
      siteData.brand.grabfoodUrl = document.getElementById('contactGrabfood').value.trim();
      siteData.brand.shopeefoodUrl = document.getElementById('contactShopeefood').value.trim();

      saveAdminData('Pengaturan kontak & media sosial berhasil diperbarui!');
    });
  }
}

// ==========================================
// 9. TAB 6: PROMO SPESIAL & VOUCHER
// ==========================================
function populatePromoForm() {
  const promo = siteData.promo || {};

  const enabledCheck = document.getElementById('promoEnabledCheck');
  const enabledText = document.getElementById('promoEnabledText');
  if (enabledCheck) {
    enabledCheck.checked = (promo.enabled !== false);
    if (enabledText) enabledText.textContent = enabledCheck.checked ? 'Aktif' : 'Nonaktif';
    enabledText.style.color = enabledCheck.checked ? 'var(--color-green-primary)' : 'var(--color-danger)';
  }

  const autoPopupCheck = document.getElementById('promoAutoPopupCheck');
  const autoPopupText = document.getElementById('promoAutoPopupText');
  if (autoPopupCheck) {
    autoPopupCheck.checked = (promo.autoPopup !== false);
    if (autoPopupText) autoPopupText.textContent = autoPopupCheck.checked ? 'Aktif' : 'Nonaktif';
    autoPopupText.style.color = autoPopupCheck.checked ? 'var(--color-green-primary)' : 'var(--color-danger)';
  }

  document.getElementById('promoCodeInput').value = promo.code || 'SODUS15';
  document.getElementById('promoBadgeInput').value = promo.badge || 'DISKON 15%';
  document.getElementById('promoPercentInput').value = promo.discountPercent || 15;
  document.getElementById('promoMaxDiscountInput').value = promo.discountMax || 20000;
  document.getElementById('promoMinOrderInput').value = promo.minOrder || 40000;
  document.getElementById('promoValidUntilInput').value = promo.validUntil || '31 Desember 2026';
  document.getElementById('promoTitleInput').value = promo.title || '';
  document.getElementById('promoDescInput').value = promo.desc || '';
  document.getElementById('promoBannerTextInput').value = promo.bannerText || '';

  const pImgIn = document.getElementById('promoImageInput');
  const pImgPrev = document.getElementById('promoImagePreview');
  if (pImgIn && promo.popupImage) pImgIn.value = promo.popupImage;
  if (pImgPrev && promo.popupImage) pImgPrev.src = promo.popupImage;
}

function initPromoEvents() {
  const enabledCheck = document.getElementById('promoEnabledCheck');
  const enabledText = document.getElementById('promoEnabledText');
  if (enabledCheck && enabledText) {
    enabledCheck.addEventListener('change', () => {
      enabledText.textContent = enabledCheck.checked ? 'Aktif' : 'Nonaktif';
      enabledText.style.color = enabledCheck.checked ? 'var(--color-green-primary)' : 'var(--color-danger)';
    });
  }

  const autoPopupCheck = document.getElementById('promoAutoPopupCheck');
  const autoPopupText = document.getElementById('promoAutoPopupText');
  if (autoPopupCheck && autoPopupText) {
    autoPopupCheck.addEventListener('change', () => {
      autoPopupText.textContent = autoPopupCheck.checked ? 'Aktif' : 'Nonaktif';
      autoPopupText.style.color = autoPopupCheck.checked ? 'var(--color-green-primary)' : 'var(--color-danger)';
    });
  }

  const pImgIn = document.getElementById('promoImageInput');
  const pImgPrev = document.getElementById('promoImagePreview');
  const pImgFile = document.getElementById('promoImageFile');

  if (pImgIn && pImgPrev) {
    pImgIn.addEventListener('input', () => { pImgPrev.src = pImgIn.value.trim(); });
  }

  if (pImgFile && pImgIn && pImgPrev) {
    pImgFile.addEventListener('change', () => {
      const file = pImgFile.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          pImgIn.value = e.target.result;
          pImgPrev.src = e.target.result;
        };
        reader.readAsDataURL(file);
      }
    });
  }

  const saveBtn = document.getElementById('btnSavePromo');
  if (saveBtn) {
    saveBtn.addEventListener('click', () => {
      if (!siteData.promo) siteData.promo = {};

      siteData.promo.enabled = document.getElementById('promoEnabledCheck').checked;
      siteData.promo.autoPopup = document.getElementById('promoAutoPopupCheck').checked;
      siteData.promo.code = document.getElementById('promoCodeInput').value.trim().toUpperCase();
      siteData.promo.badge = document.getElementById('promoBadgeInput').value.trim();
      siteData.promo.discountPercent = Number(document.getElementById('promoPercentInput').value) || 0;
      siteData.promo.discountMax = Number(document.getElementById('promoMaxDiscountInput').value) || 0;
      siteData.promo.minOrder = Number(document.getElementById('promoMinOrderInput').value) || 0;
      siteData.promo.validUntil = document.getElementById('promoValidUntilInput').value.trim();
      siteData.promo.title = document.getElementById('promoTitleInput').value.trim();
      siteData.promo.desc = document.getElementById('promoDescInput').value.trim();
      siteData.promo.bannerText = document.getElementById('promoBannerTextInput').value.trim();
      siteData.promo.popupImage = document.getElementById('promoImageInput').value.trim() || 'images/menu/soto-kudus-campur.jpg';

      saveAdminData('Pengaturan Promo & Voucher Diskon berhasil disimpan!');
    });
  }
}

// ==========================================
// 10. TAB 7: AKUN & CADANGAN (BACKUP/RESTORE)
// ==========================================
function initAccountEvents() {
  // Password Change
  const passForm = document.getElementById('passwordForm');
  if (passForm) {
    passForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const newP = document.getElementById('newPassword').value;
      const confP = document.getElementById('confirmPassword').value;

      if (newP.length < 6) {
        alert('Password baru minimal harus 6 karakter!');
        return;
      }

      if (newP !== confP) {
        alert('Password baru dan konfirmasi tidak cocok!');
        return;
      }

      if (!siteData.settings) siteData.settings = {};
      siteData.settings.adminPassword = newP;
      saveAdminData('Password akun admin berhasil diubah!');
      passForm.reset();
    });
  }

  // Export Backup JSON
  const btnExport = document.getElementById('btnExportBackup');
  if (btnExport) {
    btnExport.addEventListener('click', () => {
      const dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(siteData, null, 2));
      const downloadAnchor = document.createElement('a');
      const dateStr = new Date().toISOString().split('T')[0];
      downloadAnchor.setAttribute('href', dataStr);
      downloadAnchor.setAttribute('download', `sodus-data-backup-${dateStr}.json`);
      document.body.appendChild(downloadAnchor);
      downloadAnchor.click();
      downloadAnchor.remove();
      showToast('File cadangan JSON berhasil diunduh! 📥');
    });
  }

  // Import Backup JSON
  const importFile = document.getElementById('importBackupFile');
  if (importFile) {
    importFile.addEventListener('change', (e) => {
      const file = e.target.files[0];
      if (!file) return;

      const reader = new FileReader();
      reader.onload = (event) => {
        try {
          const parsed = JSON.parse(event.target.result);
          if (parsed && (parsed.menus || parsed.brand)) {
            siteData = parsed;
            saveAdminData('Data cadangan berhasil dipulihkan!');
            loadAdminData();
          } else {
            alert('Format file JSON tidak sesuai struktur data website!');
          }
        } catch (err) {
          alert('Gagal membaca file JSON: ' + err.message);
        }
      };
      reader.readAsText(file);
      importFile.value = '';
    });
  }

  // Factory Reset
  const btnReset = document.getElementById('btnResetFactory');
  if (btnReset) {
    btnReset.addEventListener('click', async () => {
      if (confirm('PERINGATAN: Apakah Anda yakin ingin mereset seluruh data website kembali ke setelan default pabrik? Semua perubahan kustom akan digantikan dengan data bawaan.')) {
        try {
          const res = await fetch('./data.json');
          if (res.ok) {
            siteData = await res.json();
            saveAdminData('Website berhasil di-reset ke setelan bawaan pabrik! 🌿');
            loadAdminData();
          } else {
            siteData = JSON.parse(JSON.stringify(DEFAULT_DATA));
            saveAdminData('Website berhasil di-reset ke setelan bawaan pabrik! 🌿');
            loadAdminData();
          }
        } catch (e) {
          siteData = JSON.parse(JSON.stringify(DEFAULT_DATA));
          saveAdminData('Website berhasil di-reset ke setelan bawaan pabrik! 🌿');
          loadAdminData();
        }
      }
    });
  }
}

// ==========================================
// 11. HELPERS & TOAST
// ==========================================
function formatRupiah(num) {
  return 'Rp ' + Number(num || 0).toLocaleString('id-ID');
}

function showToast(msg) {
  const toast = document.getElementById('adminToast');
  const msgEl = document.getElementById('adminToastMsg');
  if (!toast || !msgEl) return;

  msgEl.textContent = msg;
  toast.classList.add('show');

  setTimeout(() => {
    toast.classList.remove('show');
  }, 3000);
}

// Initial Boot
document.addEventListener('DOMContentLoaded', () => {
  initLoginForm();
  initTabs();
  initMenuEvents();
  initHeroEvents();
  initGalleryEvents();
  initLocationEvents();
  initContactEvents();
  initPromoEvents();
  initAccountEvents();
  checkAuth();
});
