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
  reservation: {
    enabled: true,
    title: "Reservasi Meja / Pesan Katering",
    subtitle: "Silakan kirimkan permohonan reservasi tempat atau pertanyaan seputar katering acara Anda:",
    waTarget: "6285158515332",
    buttonText: "Kirimkan Permohonan Sekarang 🌿",
    notice: "Untuk reservasi rombongan atau paket syukuran keluarga di atas 10 orang disarankan konfirmasi H-1."
  },
  menus: [
    {
        "id": "soto-kudus-campur",
        "name": "Soto Kudus Ayam Campur (Nasi Campur)",
        "category": "soto",
        "price": 18000,
        "isAvailable": true,
        "tag": "Bintang Utama ⭐",
        "tagClass": "tag-star",
        "desc": "Soto Kudus otentik dalam mangkuk porselen khas. Kuah kaldu ayam kampung bening gurih, suwiran ayam empuk, tauge segar renyah, seledri, dan taburan bawang putih goreng renyah langsung dicampur nasi.",
        "image": "images/menu/soto-kudus-campur.jpg"
    },
    {
        "id": "soto-kudus-pisah",
        "name": "Soto Kudus Ayam Pisah (Nasi Terpisah)",
        "category": "soto",
        "price": 22000,
        "isAvailable": true,
        "tag": "Paling Populer 🍲",
        "tagClass": "tag-favorit",
        "desc": "Porsi kuah dan suwiran ayam kampung lebih melimpah disajikan terpisah dari sepiring nasi putih hangat bertabur bawang goreng wangi.",
        "image": "images/menu/soto-kudus-pisah.jpg"
    },
    {
        "id": "soto-kudus-daging-campur",
        "name": "Soto Kudus Daging Sapi Campur",
        "category": "soto",
        "price": 24000,
        "isAvailable": true,
        "tag": "Daging Sapi Pilihan 🥩",
        "tagClass": "tag-star",
        "desc": "Cita rasa otentik Kudus dengan potongan daging sapi empuk gurih meresap, tauge renyah, kuah kaldu rempah harum, disajikan hangat langsung bersama nasi.",
        "image": "images/menu/soto-kudus-daging-campur.jpg"
    },
    {
        "id": "soto-kudus-daging-pisah",
        "name": "Soto Kudus Daging Sapi Pisah",
        "category": "soto",
        "price": 28000,
        "isAvailable": true,
        "tag": "Favorit Gurih 🥩",
        "tagClass": "tag-favorit",
        "desc": "Semangkuk penuh kuah kaldu sapi kaya rempah dengan irisan daging sapi empuk lembut melimpah, disajikan terpisah dari nasi putih hangat.",
        "image": "images/menu/soto-kudus-daging-pisah.jpg"
    },
    {
        "id": "soto-kudus-spesial-komplit",
        "name": "Soto Kudus Spesial Komplit Kedai Taman",
        "category": "soto",
        "price": 30000,
        "isAvailable": true,
        "tag": "Porsi Istimewa ⭐",
        "tagClass": "tag-star",
        "desc": "Porsi komplit istimewa: suwiran ayam kampung melimpah, telur bacem utuh, perkedel kentang lembut, dan taburan bawang putih goreng ekstra garing di kuah kaldu emas.",
        "image": "images/menu/soto-kudus-spesial-komplit.jpg"
    },
    {
        "id": "sate-telur-puyuh",
        "name": "Sate Telur Puyuh Kecap Bacem",
        "category": "lauk",
        "price": 5000,
        "isAvailable": true,
        "tag": "Wajib Coba 🍢",
        "tagClass": "tag-favorit",
        "desc": "Telur puyuh pilihan dimasak bumbu bacem manis gurih meresap sampai ke kuning telur, jodoh sempurna kuah soto panas.",
        "image": "images/menu/sate-telur-puyuh.jpg"
    },
    {
        "id": "sate-ati-ampela",
        "name": "Sate Ati Ampela Ungkep",
        "category": "lauk",
        "price": 5000,
        "isAvailable": true,
        "tag": "Gurih Legit 🍢",
        "tagClass": "tag-favorit",
        "desc": "Ati ampela ayam segar yang diungkep bumbu rempah gurih sedap, tanpa bau amis, empuk dan nikmat.",
        "image": "images/menu/sate-ati-ampela.jpg"
    },
    {
        "id": "sate-usus",
        "name": "Sate Usus Bumbu Kuning",
        "category": "lauk",
        "price": 4000,
        "isAvailable": true,
        "tag": "Favorit Pelanggan 🍢",
        "tagClass": "tag-favorit",
        "desc": "Usus ayam bersih dimasak bumbu kuning tradisional dengan rasa gurih manis yang pas.",
        "image": "images/menu/sate-usus.jpg"
    },
    {
        "id": "sate-kerang",
        "name": "Sate Kerang Bumbu Manis Gurih",
        "category": "lauk",
        "price": 5000,
        "isAvailable": true,
        "tag": "Khas Pesisir 🦪",
        "tagClass": "tag-favorit",
        "desc": "Kerang dara segar dimasak bumbu kecap rempah manis gurih khas pesisir Jawa Timur, bertekstur kenyal legit dan harum.",
        "image": "images/menu/sate-kerang.jpg"
    },
    {
        "id": "perkedel-kentang",
        "name": "Perkedel Kentang Spesial",
        "category": "lauk",
        "price": 4000,
        "isAvailable": true,
        "tag": "Renyah Lembut 🥔",
        "tagClass": "tag-favorit",
        "desc": "Olahan kentang tumbuk lembut dengan bumbu rempah daun bawang dan balutan telur renyah.",
        "image": "images/menu/perkedel-kentang.jpg"
    },
    {
        "id": "tempe-tahu-bacem",
        "name": "Tempe & Tahu Bacem Tradisional",
        "category": "lauk",
        "price": 4000,
        "isAvailable": true,
        "tag": "Manis Gurih 🥢",
        "tagClass": "tag-favorit",
        "desc": "Tempe dan tahu kedelai yang direbus perlahan dengan gula merah dan ketumbar wangi meresap.",
        "image": "images/menu/tempe-tahu-bacem.jpg"
    },
    {
        "id": "tempe-mendoan",
        "name": "Tempe Mendoan Panas (Isi 3)",
        "category": "lauk",
        "price": 12000,
        "isAvailable": true,
        "tag": "Gorengan Hangat 🥢",
        "tagClass": "tag-favorit",
        "desc": "Tempe lebar berbalut adonan tepung daun bawang kucai yang digoreng hangat lembut gurih, disajikan lengkap dengan sambal kecap rawit pedas.",
        "image": "images/menu/tempe-mendoan.jpg"
    },
    {
        "id": "peyek-kacang",
        "name": "Peyek Kacang Daun Jeruk Renyah",
        "category": "lauk",
        "price": 5000,
        "isAvailable": true,
        "tag": "Kriuk Gurih 🥜",
        "tagClass": "tag-favorit",
        "desc": "Rempeyek kacang tanah bertabur irisan daun jeruk purut wangi, super renyah dan gurih sebagai pelengkap santapan berkuah.",
        "image": "images/menu/peyek-kacang.jpg"
    },
    {
        "id": "kerupuk-kaleng",
        "name": "Kerupuk Putih Kaleng Biru",
        "category": "lauk",
        "price": 2000,
        "isAvailable": true,
        "tag": "Klasik Kedai 🌾",
        "tagClass": "tag-favorit",
        "desc": "Kerupuk uyel putih bundar klasik khas warung soto, renyah gurih menggoda saat dicelup ke kuah soto hangat.",
        "image": "images/menu/kerupuk-kaleng.jpg"
    },
    {
        "id": "nasi-putih",
        "name": "Nasi Putih Hangat Pulen",
        "category": "lauk",
        "price": 5000,
        "isAvailable": true,
        "tag": "Pulen Wangi 🍚",
        "tagClass": "tag-favorit",
        "desc": "Sepiring nasi putih beras pilihan yang pulen dan hangat, ditaburi bawang merah goreng harum.",
        "image": "images/menu/nasi-putih.jpg"
    },
    {
        "id": "nasi-sambal-ibu",
        "name": "Nasi Sambal Ibu (Ayam Goreng)",
        "category": "nusantara",
        "price": 25000,
        "isAvailable": true,
        "tag": "Menu Andalan 🌶️",
        "tagClass": "tag-nusantara",
        "desc": "Menu viral khas Kedai Taman! Nasi putih dengan sambal ulek segar pedas nampol, ayam goreng gurih rempah, tahu, tempe, dan lalapan segar.",
        "image": "images/menu/nasi-sambal-ibu.jpg"
    },
    {
        "id": "tahu-gimbal",
        "name": "Tahu Gimbal Khas Semarang",
        "category": "nusantara",
        "price": 22000,
        "isAvailable": true,
        "tag": "Khas Pesisir 🦐",
        "tagClass": "tag-nusantara",
        "desc": "Potongan tahu goreng panas, gimbal udang renyah kriuk, tauge segar, kol rajang disiram bumbu kacang petis legit yang sedap mantap.",
        "image": "images/menu/tahu-gimbal.jpg"
    },
    {
        "id": "mie-jogja",
        "name": "Mie Jogja (Bakmi Jawa Godhog/Goreng)",
        "category": "nusantara",
        "price": 22000,
        "isAvailable": true,
        "tag": "Aroma Gurih 🍜",
        "tagClass": "tag-nusantara",
        "desc": "Bakmi kuning khas tradisional Yogyakarta dimasak dengan telur bebek, suwiran ayam, kubis, dan kaldu gurih beraroma arang.",
        "image": "images/menu/mie-jogja.jpg"
    },
    {
        "id": "iga-penyet",
        "name": "Iga Sapi Penyet Sambal Bawang",
        "category": "nusantara",
        "price": 35000,
        "isAvailable": true,
        "tag": "Menu Sultan 🥩",
        "tagClass": "tag-nusantara",
        "desc": "Potongan iga sapi tebal empuk yang digoreng garing lalu dipenyet di atas cobek sambal bawang pedas semerbak.",
        "image": "images/menu/iga-penyet.jpg"
    },
    {
        "id": "ayam-kremes",
        "name": "Ayam Goreng Kremes Kedai Taman",
        "category": "nusantara",
        "price": 24000,
        "isAvailable": true,
        "tag": "Kriuk Gurih 🍗",
        "tagClass": "tag-nusantara",
        "desc": "Ayam ungkep rempah disajikan dengan taburan kremesan sarang burung yang renyah gurih tahan lama.",
        "image": "images/menu/ayam-kremes.jpg"
    },
    {
        "id": "rawon-surabaya",
        "name": "Rawon Daging Sapi Khas Surabaya",
        "category": "nusantara",
        "price": 28000,
        "isAvailable": true,
        "tag": "Khas Jatim 🍲",
        "tagClass": "tag-nusantara",
        "desc": "Kuah rawon hitam pekat kaya rempah kluwek pilihan, potongan daging sapi empuk, tauge pendek renyah, dan sambal terasi gurih.",
        "image": "images/menu/rawon-surabaya.jpg"
    },
    {
        "id": "nasi-goreng-jawa",
        "name": "Nasi Goreng Jawa Tradisional",
        "category": "nusantara",
        "price": 23000,
        "isAvailable": true,
        "tag": "Resep Klasik 🍳",
        "tagClass": "tag-nusantara",
        "desc": "Nasi goreng racikan bumbu khas Jawa beraroma smokey gurih, dilengkapi telur orak-arik, suwiran ayam kampung, kerupuk, dan acar segar.",
        "image": "images/menu/nasi-goreng-jawa.jpg"
    },
    {
        "id": "es-teh-manis",
        "name": "Es Teh Manis Melati",
        "category": "minuman",
        "price": 5000,
        "isAvailable": true,
        "tag": "Pelepas Dahaga 🥤",
        "tagClass": "tag-drink",
        "desc": "Teh melati wangi khas Jawa diseduh tradisional dengan es batu dingin menyegarkan.",
        "image": "images/menu/es-teh-manis.jpg"
    },
    {
        "id": "es-jeruk",
        "name": "Es Jeruk Peras Segar",
        "category": "minuman",
        "price": 8000,
        "isAvailable": true,
        "tag": "Jeruk Murni 🍊",
        "tagClass": "tag-drink",
        "desc": "Perasan air jeruk manis alami segar dengan gula pasir murni dan es batu dingin.",
        "image": "images/menu/es-jeruk.jpg"
    },
    {
        "id": "wedang-uwuh",
        "name": "Wedang Uwuh Rempah Imogiri",
        "category": "minuman",
        "price": 10000,
        "isAvailable": true,
        "tag": "Hangat Sehat 🌿",
        "tagClass": "tag-drink",
        "desc": "Minuman rempah herbal berkhasiat dengan kayu secang, jahe bakar, cengkeh, kayu manis, dan gula batu.",
        "image": "images/menu/wedang-uwuh.jpg"
    },
    {
        "id": "beras-kencur",
        "name": "Jamu Beras Kencur Tradisional",
        "category": "minuman",
        "price": 10000,
        "isAvailable": true,
        "tag": "Jamu Alami 🌾",
        "tagClass": "tag-drink",
        "desc": "Ramuan tradisional beras kencur segar penghangat tubuh dan penambah nafsu makan.",
        "image": "images/menu/beras-kencur.jpg"
    },
    {
        "id": "kopi-susu-kedai-taman",
        "name": "Es Kopi Susu Gula Aren Kedai Taman",
        "category": "minuman",
        "price": 15000,
        "isAvailable": true,
        "tag": "Racikan Kopi ☕",
        "tagClass": "tag-drink",
        "desc": "Espresso blend pilihan dipadu susu creamy dan manis legit gula aren murni.",
        "image": "images/menu/kopi-susu-kedai-taman.jpg"
    },
    {
        "id": "es-sinom",
        "name": "Es Sinom Khas Surabaya Segar",
        "category": "minuman",
        "price": 8000,
        "isAvailable": true,
        "tag": "Segar Alami 🍃",
        "tagClass": "tag-drink",
        "desc": "Minuman herbal segar daun asam muda (sinom) dan kunyit asam asli Jawa Timur dengan gula aren alami, sangat sejuk di tenggorokan.",
        "image": "images/menu/es-sinom.jpg"
    },
    {
        "id": "es-degan-jeruk",
        "name": "Es Degan Kelapa Muda Jeruk",
        "category": "minuman",
        "price": 12000,
        "isAvailable": true,
        "tag": "Favorit Siang 🥥",
        "tagClass": "tag-drink",
        "desc": "Air kelapa muda murni segar dengan serutan daging kelapa lembut dipadu kesegaran perasan jeruk nipis alami.",
        "image": "images/menu/es-degan-jeruk.jpg"
    },
    {
        "id": "wedang-jahe-sereh",
        "name": "Wedang Jahe Sereh Hangat Gula Batu",
        "category": "minuman",
        "price": 9000,
        "isAvailable": true,
        "tag": "Penghangat Tubuh 🫖",
        "tagClass": "tag-drink",
        "desc": "Geprekan jahe merah bakar dan batang sereh wangi diseduh air panas dengan pemanis gula batu alami.",
        "image": "images/menu/wedang-jahe-sereh.jpg"
    },
    {
        "id": "tumpeng-nasi-kotak",
        "name": "Paket Nasi Kotak & Tumpeng Acara",
        "category": "katering",
        "price": 25000,
        "isAvailable": true,
        "tag": "Catering & Event 🍱",
        "tagClass": "tag-star",
        "desc": "Menerima pesanan nasi kotak syukuran, tumpeng mini maupun tumpeng besar untuk acara kantor, arisan, pengajian dan syukuran keluarga.",
        "image": "images/menu/tumpeng-nasi-kotak.jpg"
    },
    {
        "id": "paket-sarapan-box",
        "name": "Paket Sarapan Box Soto Kudus (Min. 5 Box)",
        "category": "katering",
        "price": 22000,
        "isAvailable": true,
        "tag": "Sarapan Kantor 🍱",
        "tagClass": "tag-favorit",
        "desc": "Box sarapan praktis berisi mangkuk ramah lingkungan Soto Kudus Ayam, nasi putih terpisah, sate telur puyuh, perkedel kentang, dan kerupuk.",
        "image": "images/menu/paket-sarapan-box.jpg"
    },
    {
        "id": "paket-prasmanan",
        "name": "Paket Prasmanan Soto Kudus (Min. 30 Pax)",
        "category": "katering",
        "price": 45000,
        "isAvailable": true,
        "tag": "Jamuan Lengkap 🍽️",
        "tagClass": "tag-star",
        "desc": "Layanan prasmanan live-cooking lengkap dengan stall Soto Kudus panas, aneka sate bacem komplit, lauk nusantara, es teh/es jeruk, dan waiter profesional.",
        "image": "images/menu/paket-prasmanan.jpg"
    }
],
  gallery: [
    {
        "id": "galeri-1",
        "title": "Soto Kudus Mangkuk Tradisional",
        "category": "Makanan",
        "badge": "Menu Khas",
        "tag": "#sotokudus #ayamkampung",
        "desc": "Kuah kaldu ayam kampung bening gurih kekuningan dengan taburan bawang putih goreng renyah dan perasan jeruk limau segar.",
        "image": "images/galeri/galeri-1-soto-kudus-hangat.jpg"
    },
    {
        "id": "galeri-2",
        "title": "Deretan Sate Bacem & Lauk Pendamping",
        "category": "Lauk",
        "badge": "Lauk Pendamping",
        "tag": "#satepuyuh #baceman",
        "desc": "Sate telur puyuh kecap, sate ati ampela, sate usus, dan perkedel kentang yang selalu siap menemani semangkuk soto Anda.",
        "image": "images/galeri/galeri-2-sate-puyuh-lauk.jpg"
    },
    {
        "id": "galeri-3",
        "title": "Suasana Rindang Kedai Taman",
        "category": "Suasana",
        "badge": "Suasana Taman",
        "tag": "#kedaitaman #surabayaasri",
        "desc": "Tempat makan yang asri dengan pepohonan hijau, udara sejuk, dan suasana ramah keluarga di Gayungsari Surabaya.",
        "image": "images/galeri/galeri-3-suasana-kedai-taman.jpg"
    },
    {
        "id": "galeri-4",
        "title": "Tahu Gimbal Khas Semarang",
        "category": "Makanan",
        "badge": "Kuliner Pesisir",
        "tag": "#tahugimbal #semarang",
        "desc": "Tahu goreng hangat dengan gimbal udang renyah, kubis segar, tauge, dan siraman bumbu kacang petis yang medok sedap.",
        "image": "images/galeri/galeri-4-tahu-gimbal-semarang.jpg"
    },
    {
        "id": "galeri-5",
        "title": "Penyajian Hangat & Higienis",
        "category": "Suasana",
        "badge": "Higienis & Otentik",
        "tag": "#resepwarisan #kudus",
        "desc": "Setiap hidangan disajikan dengan standar kebersihan tinggi dan bumbu rempah racikan khas nusantara.",
        "image": "images/galeri/galeri-5-penyajian-khas.jpg"
    },
    {
        "id": "galeri-6",
        "title": "Minuman Tradisional & Kopi Susu",
        "category": "Minuman",
        "badge": "Segar & Berkhasiat",
        "tag": "#wedanguwuh #kopisusu",
        "desc": "Pilihan wedang uwuh hangat, jamu beras kencur, es jeruk peras alami, hingga es kopi susu gula aren.",
        "image": "images/galeri/galeri-6-minuman-tradisional.jpg"
    },
    {
        "id": "galeri-7",
        "title": "Soto Kudus Daging Sapi Kuah Rempah",
        "category": "Makanan",
        "badge": "Menu Istimewa",
        "tag": "#sotodagingsapi #rempah",
        "desc": "Potongan daging sapi empuk dengan kuah kaldu rempah harum yang disajikan terpisah bersama nasi hangat.",
        "image": "images/galeri/galeri-7-soto-daging-rempah.jpg"
    },
    {
        "id": "galeri-8",
        "title": "Tempe Mendoan Panas & Sambal Kecap",
        "category": "Lauk",
        "badge": "Gorengan Panas",
        "tag": "#mendoan #kucai",
        "desc": "Tempe mendoan lembut berbalut tepung daun bawang wangi disajikan segar mendidih dari wajan bersama kecap rawit pedas.",
        "image": "images/galeri/galeri-8-mendoan-panas.jpg"
    },
    {
        "id": "galeri-9",
        "title": "Iga Sapi Penyet Cobek Sambal Bawang",
        "category": "Makanan",
        "badge": "Menu Sultan",
        "tag": "#igapenyet #pedasnampol",
        "desc": "Iga sapi bakar penyet empuk gurih dengan limpahan sambal bawang segar yang menggugah selera santap siang.",
        "image": "images/galeri/galeri-9-iga-penyet-sambal.jpg"
    },
    {
        "id": "galeri-10",
        "title": "Wedang Rempah Uwuh & Jamu Herbal",
        "category": "Minuman",
        "badge": "Hangat Sehat",
        "tag": "#wedanguwuh #jamuherbal",
        "desc": "Racikan dedaunan dan rempah kayu secang, jahe bakar geprek, cengkeh wangi dengan manis batu murni.",
        "image": "images/galeri/galeri-10-wedang-rempah.jpg"
    },
    {
        "id": "galeri-11",
        "title": "Paket Tumpeng & Nasi Kotak Syukuran",
        "category": "Katering",
        "badge": "Pesanan Acara",
        "tag": "#tumpengsurabaya #nasikotak",
        "desc": "Penyajian tumpeng kuning komplit dan nasi kotak higienis untuk berbagai acara keluarga, syukuran kantor, dan arisan.",
        "image": "images/galeri/galeri-11-tumpeng-syukuran.jpg"
    },
    {
        "id": "galeri-12",
        "title": "Area Santap Keluarga Semi-Outdoor Rindang",
        "category": "Suasana",
        "badge": "Ramah Keluarga",
        "tag": "#tamanrindang #gayungan",
        "desc": "Suasana santap nyaman semi-outdoor di bawah keteduhan pepohonan hijau, fasilitas musholla dan parkir luas.",
        "image": "images/galeri/galeri-12-area-santap-taman.jpg"
    }
],
  settings: {
    adminPassword: "sodus123"
  }
};

let siteData = JSON.parse(JSON.stringify(DEFAULT_DATA));
let currentMenuFilter = '';
let currentAdminCategory = 'all';
let currentGalleryFilter = '';
let currentGalleryCat = 'all';

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
      const parsed = JSON.parse(cached);
      if (parsed) {
        if (!parsed.menus || parsed.menus.length < DEFAULT_DATA.menus.length) {
          parsed.menus = DEFAULT_DATA.menus;
        }
        if (!parsed.gallery || parsed.gallery.length < DEFAULT_DATA.gallery.length) {
          parsed.gallery = DEFAULT_DATA.gallery;
        }
        if (!parsed.reservation) {
          parsed.reservation = DEFAULT_DATA.reservation;
        }
        siteData = { ...siteData, ...parsed };
      }
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
  populateReservationForm();

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

function updateAdminCategoryCounts() {
  const menus = siteData.menus || DEFAULT_DATA.menus || [];
  const counts = {
    all: menus.length,
    soto: menus.filter(m => m.category === 'soto').length,
    lauk: menus.filter(m => m.category === 'lauk').length,
    nusantara: menus.filter(m => m.category === 'nusantara').length,
    minuman: menus.filter(m => m.category === 'minuman').length,
    katering: menus.filter(m => m.category === 'katering').length
  };

  for (const [cat, count] of Object.entries(counts)) {
    const el = document.getElementById(`adminCatCount_${cat}`);
    if (el) el.textContent = count;
  }
}

function updateAdminGalleryCounts() {
  const gallery = siteData.gallery || DEFAULT_DATA.gallery || [];
  const counts = {
    all: gallery.length,
    Makanan: gallery.filter(g => g.category === 'Makanan').length,
    Lauk: gallery.filter(g => g.category === 'Lauk').length,
    Suasana: gallery.filter(g => g.category === 'Suasana').length,
    Minuman: gallery.filter(g => g.category === 'Minuman').length,
    Katering: gallery.filter(g => g.category === 'Katering').length
  };

  for (const [cat, count] of Object.entries(counts)) {
    const el = document.getElementById(`adminGalCount_${cat}`);
    if (el) el.textContent = count;
  }
}

function updateDashboardStats() {
  const menus = siteData.menus || DEFAULT_DATA.menus || [];
  const gallery = siteData.gallery || [];
  const promo = siteData.promo || {};
  const resv = siteData.reservation || DEFAULT_DATA.reservation || { enabled: true };

  const totalMenuEl = document.getElementById('statTotalMenu');
  if (totalMenuEl) totalMenuEl.textContent = menus.length;

  const availMenuEl = document.getElementById('statAvailableMenu');
  if (availMenuEl) {
    const availCount = menus.filter(m => m.isAvailable !== false).length;
    availMenuEl.textContent = `${availCount} / ${menus.length}`;
  }

  updateAdminCategoryCounts();

  const totalGalEl = document.getElementById('statTotalGallery');
  if (totalGalEl) totalGalEl.textContent = gallery.length;

  updateAdminGalleryCounts();

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

  const resvStatusEl = document.getElementById('statReservationStatus');
  if (resvStatusEl) {
    if (resv.enabled !== false) {
      resvStatusEl.textContent = 'AKTIF';
      resvStatusEl.style.color = '#15803d';
    } else {
      resvStatusEl.textContent = 'NONAKTIF';
      resvStatusEl.style.color = '#dc2626';
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

  const menus = siteData.menus || DEFAULT_DATA.menus || [];
  const query = currentMenuFilter.toLowerCase().trim();

  const filtered = menus.filter(m => {
    const matchCat = (currentAdminCategory === 'all' || m.category === currentAdminCategory);
    const matchSearch = (!query || 
      m.name.toLowerCase().includes(query) || 
      (m.category && m.category.toLowerCase().includes(query)) ||
      (m.tag && m.tag.toLowerCase().includes(query)) ||
      (m.desc && m.desc.toLowerCase().includes(query))
    );
    return matchCat && matchSearch;
  });

  if (filtered.length === 0) {
    tbody.innerHTML = `
      <tr>
        <td colspan="7" style="text-align: center; padding: 36px; color: var(--color-text-muted);">
          Tidak ada menu yang ditemukan${currentAdminCategory !== 'all' ? ` di kategori "${currentAdminCategory}"` : ''}.
        </td>
      </tr>
    `;
    return;
  }

  const categoryBadges = {
    soto: '<span class="badge-cat badge-cat-soto">🥣 Soto Kudus</span>',
    lauk: '<span class="badge-cat badge-cat-lauk">🍢 Sate & Lauk</span>',
    nusantara: '<span class="badge-cat badge-cat-nusantara">🍛 Nusantara</span>',
    minuman: '<span class="badge-cat badge-cat-minuman">🥤 Minuman</span>',
    katering: '<span class="badge-cat badge-cat-katering">🍱 Katering</span>'
  };

  tbody.innerHTML = filtered.map(item => {
    const isAvail = (item.isAvailable !== false);
    const catBadge = categoryBadges[item.category] || `<span class="badge-cat">${item.category}</span>`;
    return `
      <tr>
        <td>
          <img src="${item.image || 'images/menu/soto-kudus-campur.jpg'}" alt="${item.name}" class="table-thumb" onerror="this.onerror=null; this.src='images/menu/soto-kudus-campur.jpg';" />
        </td>
        <td>
          <div style="font-weight: 700; color: var(--color-green-dark);">${item.name}</div>
          <div style="font-size: 0.8rem; color: var(--color-text-muted); max-width: 320px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">
            ${item.desc || '-'}
          </div>
        </td>
        <td>
          ${catBadge}
        </td>
        <td style="font-weight: 700; color: #15803d; font-family: var(--font-serif); font-size: 1.05rem;">
          ${formatRupiah(item.price)}
        </td>
        <td>
          ${item.tag ? `<span class="badge-status" style="background:#fef3c7; color:#b45309; font-weight:700;">${item.tag}</span>` : '-'}
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

  // Category filter pills in Admin
  const catPills = document.querySelectorAll('.admin-cat-pill');
  catPills.forEach(pill => {
    pill.addEventListener('click', () => {
      catPills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      currentAdminCategory = pill.getAttribute('data-cat') || 'all';
      renderAdminMenuTable();
    });
  });

  // Sync with default 33 menus button
  const syncBtn = document.getElementById('btnSyncDefaultMenus');
  if (syncBtn) {
    syncBtn.addEventListener('click', () => {
      if (confirm('Sinkronkan seluruh menu admin dengan 33 daftar menu standar terbaru?')) {
        syncDefaultMenus();
      }
    });
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

async function syncDefaultMenus() {
  siteData.menus = JSON.parse(JSON.stringify(DEFAULT_DATA.menus));
  await saveAdminData('Seluruh 33 menu berhasil disinkronkan ke daftar standar!');
  renderAdminMenuTable();
  updateDashboardStats();
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

  const gallery = siteData.gallery || DEFAULT_DATA.gallery || [];
  const query = currentGalleryFilter.toLowerCase().trim();

  const filtered = gallery.filter(item => {
    const matchCat = (currentGalleryCat === 'all' || item.category === currentGalleryCat);
    const matchSearch = (!query || 
      item.title.toLowerCase().includes(query) || 
      (item.category && item.category.toLowerCase().includes(query)) ||
      (item.badge && item.badge.toLowerCase().includes(query)) ||
      (item.tag && item.tag.toLowerCase().includes(query)) ||
      (item.desc && item.desc.toLowerCase().includes(query))
    );
    return matchCat && matchSearch;
  });

  if (filtered.length === 0) {
    tbody.innerHTML = `
      <tr>
        <td colspan="6" style="text-align: center; padding: 36px; color: var(--color-text-muted);">
          Tidak ada foto galeri yang ditemukan${currentGalleryCat !== 'all' ? ` di kategori "${currentGalleryCat}"` : ''}.
        </td>
      </tr>
    `;
    return;
  }

  const catBadges = {
    'Makanan': '<span class="badge-cat badge-cat-soto">🍲 Makanan</span>',
    'Lauk': '<span class="badge-cat badge-cat-lauk">🍢 Lauk</span>',
    'Suasana': '<span class="badge-cat badge-cat-suasana">🌿 Suasana</span>',
    'Minuman': '<span class="badge-cat badge-cat-minuman">🥤 Minuman</span>',
    'Katering': '<span class="badge-cat badge-cat-katering">🍱 Katering</span>'
  };

  tbody.innerHTML = filtered.map(item => {
    const catBadge = catBadges[item.category] || `<span class="badge-cat">${item.category || 'Galeri'}</span>`;
    return `
      <tr>
        <td>
          <img src="${item.image}" alt="${item.title}" class="table-thumb" style="width: 76px; height: 54px; object-fit: cover; border-radius: 8px; box-shadow: var(--shadow-sm);" onerror="this.onerror=null; this.src='images/galeri/galeri-1-soto-kudus-hangat.jpg';" />
        </td>
        <td>
          <div style="font-weight: 700; color: var(--color-green-dark); font-size: 0.95rem;">${item.title}</div>
          <div style="font-size: 0.78rem; color: var(--color-text-muted); margin-top: 2px;">${item.tag || ''}</div>
        </td>
        <td>
          ${catBadge}
        </td>
        <td>
          ${item.badge ? `<span class="badge-status" style="background:#fef3c7; color:#b45309; font-weight:700;">${item.badge}</span>` : '-'}
        </td>
        <td style="font-size: 0.82rem; color: var(--color-text-muted); max-width: 280px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">
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
    `;
  }).join('');
}

function initGalleryEvents() {
  const search = document.getElementById('adminGallerySearch');
  if (search) {
    search.addEventListener('input', (e) => {
      currentGalleryFilter = e.target.value;
      renderAdminGalleryTable();
    });
  }

  const addBtn = document.getElementById('btnOpenAddGallery');
  if (addBtn) {
    addBtn.addEventListener('click', () => openAddGalleryModal());
  }

  // Category filter pills in Gallery
  const galPills = document.querySelectorAll('.admin-gal-pill');
  galPills.forEach(pill => {
    pill.addEventListener('click', () => {
      galPills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      currentGalleryCat = pill.getAttribute('data-gal-cat') || 'all';
      renderAdminGalleryTable();
    });
  });

  const syncGalBtn = document.getElementById('btnSyncDefaultGallery');
  if (syncGalBtn) {
    syncGalBtn.addEventListener('click', () => {
      if (confirm('Sinkronkan seluruh galeri admin dengan 12 foto galeri standar terbaru?')) {
        syncDefaultGallery();
      }
    });
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

async function syncDefaultGallery() {
  siteData.gallery = JSON.parse(JSON.stringify(DEFAULT_DATA.gallery));
  await saveAdminData('Seluruh 12 foto galeri standar berhasil disinkronkan!');
  renderAdminGalleryTable();
  updateDashboardStats();
}

function openAddGalleryModal() {
  const modal = document.getElementById('galleryModal');
  const title = document.getElementById('galleryModalTitle');
  const editId = document.getElementById('galleryEditId');

  if (title) title.textContent = 'Tambah Foto Galeri Baru';
  if (editId) editId.value = '';

  document.getElementById('galleryTitleInput').value = '';
  const catSel = document.getElementById('galleryCategorySelect');
  if (catSel) catSel.value = 'Makanan';
  document.getElementById('galleryBadgeInput').value = 'Menu Khas';
  const tagInput = document.getElementById('galleryTagInput');
  if (tagInput) tagInput.value = '#sotokudus #kedaitaman';
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
  const catSel = document.getElementById('galleryCategorySelect');
  if (catSel) catSel.value = item.category || 'Makanan';
  document.getElementById('galleryBadgeInput').value = item.badge || '';
  const tagInput = document.getElementById('galleryTagInput');
  if (tagInput) tagInput.value = item.tag || '';
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
  const catSel = document.getElementById('galleryCategorySelect');
  const category = catSel ? catSel.value : 'Makanan';
  const badge = document.getElementById('galleryBadgeInput').value.trim() || 'Menu Khas';
  const tagInput = document.getElementById('galleryTagInput');
  const tag = tagInput ? tagInput.value.trim() : '#sotokudus #kedaitaman';
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
        category,
        badge,
        tag,
        desc,
        image
      };
    }
  } else {
    const newId = 'gal-' + Date.now();
    siteData.gallery.push({
      id: newId,
      title,
      category,
      badge,
      tag,
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
// 9B. TAB: PENGATURAN KOLOM RESERVASI
// ==========================================
function populateReservationForm() {
  const resv = siteData.reservation || DEFAULT_DATA.reservation || { enabled: true };

  const check = document.getElementById('reservationEnabledCheck');
  const badge = document.getElementById('reservationStatusBadge');
  const isEnabled = (resv.enabled !== false);

  if (check) check.checked = isEnabled;
  if (badge) {
    badge.textContent = isEnabled ? 'MENYALA (ON)' : 'DIMATIKAN (OFF)';
    badge.style.color = isEnabled ? '#15803d' : '#dc2626';
  }

  const titleIn = document.getElementById('resTitleInput');
  if (titleIn) titleIn.value = resv.title || 'Reservasi Meja / Pesan Katering';

  const subIn = document.getElementById('resSubtitleInput');
  if (subIn) subIn.value = resv.subtitle || 'Silakan kirimkan permohonan reservasi tempat atau pertanyaan seputar katering acara Anda:';

  const waIn = document.getElementById('resWaInput');
  if (waIn) waIn.value = resv.waTarget || '6285158515332';

  const btnTextIn = document.getElementById('resButtonTextInput');
  if (btnTextIn) btnTextIn.value = resv.buttonText || 'Kirimkan Permohonan Sekarang 🌿';

  const noticeIn = document.getElementById('resNoticeInput');
  if (noticeIn) noticeIn.value = resv.notice || 'Untuk reservasi rombongan atau paket syukuran keluarga di atas 10 orang disarankan konfirmasi H-1.';

  updateReservationPreview();
}

function updateReservationPreview() {
  const check = document.getElementById('reservationEnabledCheck');
  const isEnabled = check ? check.checked : true;
  const titleVal = document.getElementById('resTitleInput')?.value || 'Reservasi Meja / Pesan Katering';
  const subVal = document.getElementById('resSubtitleInput')?.value || '';
  const noticeVal = document.getElementById('resNoticeInput')?.value || '';

  const prevTitle = document.getElementById('previewResTitle');
  if (prevTitle) prevTitle.textContent = titleVal;

  const prevSub = document.getElementById('previewResSub');
  if (prevSub) prevSub.textContent = subVal;

  const prevNotice = document.getElementById('previewResNotice');
  if (prevNotice) {
    if (noticeVal.trim()) {
      prevNotice.textContent = 'Catatan: ' + noticeVal.trim();
      prevNotice.style.display = 'block';
    } else {
      prevNotice.style.display = 'none';
    }
  }

  const prevStatus = document.getElementById('previewResStatus');
  const card = document.getElementById('reservationPreviewCard');
  if (prevStatus) {
    if (isEnabled) {
      prevStatus.innerHTML = '🟢 Status: Kolom Reservasi <strong>Aktif & Muncul di Website</strong>';
      prevStatus.style.color = '#15803d';
      if (card) {
        card.style.opacity = '1';
        card.style.borderColor = 'var(--color-green-primary)';
      }
    } else {
      prevStatus.innerHTML = '🔴 Status: Kolom Reservasi <strong>Dimatikan (Sembunyi dari Website)</strong>';
      prevStatus.style.color = '#dc2626';
      if (card) {
        card.style.opacity = '0.65';
        card.style.borderColor = '#dc2626';
      }
    }
  }
}

function initReservationEvents() {
  const check = document.getElementById('reservationEnabledCheck');
  const badge = document.getElementById('reservationStatusBadge');

  if (check) {
    check.addEventListener('change', () => {
      const isEnabled = check.checked;
      if (badge) {
        badge.textContent = isEnabled ? 'MENYALA (ON)' : 'DIMATIKAN (OFF)';
        badge.style.color = isEnabled ? '#15803d' : '#dc2626';
      }
      updateReservationPreview();
    });
  }

  // Live preview updates on typing
  ['resTitleInput', 'resSubtitleInput', 'resNoticeInput'].forEach(id => {
    const el = document.getElementById(id);
    if (el) {
      el.addEventListener('input', updateReservationPreview);
    }
  });

  const saveBtn = document.getElementById('btnSaveReservation');
  if (saveBtn) {
    saveBtn.addEventListener('click', (e) => {
      e.preventDefault();
      if (!siteData.reservation) siteData.reservation = {};

      siteData.reservation.enabled = document.getElementById('reservationEnabledCheck')?.checked ?? true;
      siteData.reservation.title = document.getElementById('resTitleInput')?.value.trim() || 'Reservasi Meja / Pesan Katering';
      siteData.reservation.subtitle = document.getElementById('resSubtitleInput')?.value.trim() || '';
      siteData.reservation.waTarget = document.getElementById('resWaInput')?.value.trim().replace(/\D/g, '') || '6285158515332';
      siteData.reservation.buttonText = document.getElementById('resButtonTextInput')?.value.trim() || 'Kirimkan Permohonan Sekarang 🌿';
      siteData.reservation.notice = document.getElementById('resNoticeInput')?.value.trim() || '';

      saveAdminData('Pengaturan Kolom Reservasi berhasil disimpan!');
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
  initReservationEvents();
  initAccountEvents();
  checkAuth();
});
