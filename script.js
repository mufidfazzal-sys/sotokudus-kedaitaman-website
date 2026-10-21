/**
 * SOTO KUDUS KEDAI TAMAN - INTERACTIVE ENGINE
 * Cabang Gayungsari Timur No. 7, Surabaya
 * Hotline WA: 085158515332 | Telp: (031) 8298832
 * Instagram: @sotokudus_kedaitaman
 */

// Default Fallback Data (sesuai data.json)
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
]
};

// Global App State
let siteData = JSON.parse(JSON.stringify(DEFAULT_DATA));
let cart = [];
let appliedVoucher = null;
let currentCategory = 'all';
let currentSearch = '';

// ==========================================
// 1. DATA INITIALIZATION & SYNC
// ==========================================
async function initWebsiteData() {
  // Check localStorage cache first
  const cached = localStorage.getItem('sodus_website_data');
  if (cached) {
    try {
      const parsed = JSON.parse(cached);
      if (parsed.menus && parsed.menus.length < DEFAULT_DATA.menus.length) {
        parsed.menus = DEFAULT_DATA.menus;
      }
      if (parsed.gallery && parsed.gallery.length < DEFAULT_DATA.gallery.length) {
        parsed.gallery = DEFAULT_DATA.gallery;
      }
      siteData = { ...siteData, ...parsed };
    } catch (e) {
      console.warn('Error reading localStorage cache:', e);
    }
  }

  // Fetch from server / data.json
  try {
    const res = await fetch('/api/data');
    if (res.ok) {
      const serverData = await res.json();
      if (serverData && (serverData.menus || serverData.brand)) {
        siteData = { ...siteData, ...serverData };
        localStorage.setItem('sodus_website_data', JSON.stringify(siteData));
      }
    }
  } catch (err) {
    // If /api/data fails, try fetching static data.json
    try {
      const fallbackRes = await fetch('./data.json');
      if (fallbackRes.ok) {
        const fallbackData = await fallbackRes.json();
        siteData = { ...siteData, ...fallbackData };
        localStorage.setItem('sodus_website_data', JSON.stringify(siteData));
      }
    } catch (fallbackErr) {
      console.warn('Using default internal data:', fallbackErr);
    }
  }

  // Apply data to DOM
  applyAllDataToDOM();
}

function applyAllDataToDOM() {
  renderBrandAndHero();
  updateCategoryTabBadges();
  renderMenus();
  renderGallery();
  renderLocationAndContacts();
  renderPromoFeatures();
  renderReservationSection();
  checkOpenStatus();
}

// ==========================================
// 2. HERO & BRAND RENDERING
// ==========================================
function renderBrandAndHero() {
  const brand = siteData.brand || DEFAULT_DATA.brand;
  const hero = siteData.hero || DEFAULT_DATA.hero;

  // Navbar brand
  const brandTitleEl = document.getElementById('brandTitle');
  if (brandTitleEl) brandTitleEl.textContent = 'SOTO KUDUS';
  const brandSubEl = document.getElementById('brandSub');
  if (brandSubEl) brandSubEl.textContent = 'Kedai Taman';
  const brandLogoImg = document.getElementById('brandLogoImg');
  if (brandLogoImg && brand.logo) brandLogoImg.src = brand.logo;

  // Announcement bar
  const annEl = document.getElementById('announcementText');
  if (annEl && brand.announcementText) annEl.textContent = brand.announcementText;

  // Hero elements
  const b1 = document.getElementById('heroBadge1');
  if (b1 && hero.badge1) b1.textContent = hero.badge1;
  const b2 = document.getElementById('heroBadge2');
  if (b2 && hero.badge2) b2.textContent = hero.badge2;

  const scriptTag = document.getElementById('heroScriptTag');
  if (scriptTag && hero.scriptTag) scriptTag.textContent = hero.scriptTag;

  const heroTitle = document.getElementById('heroTitle');
  if (heroTitle && hero.headline) {
    // preserve line breaks if present
    heroTitle.innerHTML = hero.headline.includes('<br>') ? hero.headline : hero.headline.replace(' di Tengah ', '<br>di Tengah <span>') + '</span>';
  }

  const heroDesc = document.getElementById('heroDesc');
  if (heroDesc && hero.desc) heroDesc.innerHTML = hero.desc;

  // Highlights (3 cards)
  const highlightsWrap = document.getElementById('heroHighlights');
  if (highlightsWrap && hero.highlights && hero.highlights.length) {
    highlightsWrap.innerHTML = hero.highlights.map(hl => `
      <div class="hero-highlight-card">
        <span class="highlight-icon">${hl.icon || '🥣'}</span>
        <span class="highlight-title">${hl.title}</span>
        <span class="highlight-desc">${hl.desc}</span>
      </div>
    `).join('');
  }

  // Floating pills
  if (hero.floatingPills) {
    const pill1 = document.getElementById('heroPill1');
    if (pill1 && hero.floatingPills[0]) pill1.innerHTML = `<span>🌿</span> ${hero.floatingPills[0]}`;
    const pill2 = document.getElementById('heroPill2');
    if (pill2 && hero.floatingPills[1]) pill2.innerHTML = `<span>🍢</span> ${hero.floatingPills[1]}`;
  }

  const heroLogo = document.getElementById('heroLogoImg');
  if (heroLogo && brand.logo) heroLogo.src = brand.logo;
}

// ==========================================
// 3. MENU RENDERING & INTERACTIONS
// ==========================================
function updateCategoryTabBadges() {
  const menus = siteData.menus || DEFAULT_DATA.menus;
  const counts = {
    all: menus.length,
    soto: menus.filter(m => m.category === 'soto').length,
    lauk: menus.filter(m => m.category === 'lauk').length,
    nusantara: menus.filter(m => m.category === 'nusantara').length,
    minuman: menus.filter(m => m.category === 'minuman').length,
    katering: menus.filter(m => m.category === 'katering').length
  };

  const titles = {
    all: '⭐ Semua Menu',
    soto: '🥣 Soto Kudus (SODUS)',
    lauk: '🍢 Sate & Lauk Pendamping',
    nusantara: '🍛 Masakan Nusantara',
    minuman: '🥤 Minuman & Jamu',
    katering: '🍱 Paket Katering'
  };

  document.querySelectorAll('.category-tab-btn').forEach(btn => {
    const cat = btn.getAttribute('data-category');
    if (cat && counts[cat] !== undefined) {
      btn.innerHTML = `${titles[cat]} <span class="tab-count-badge">${counts[cat]}</span>`;
    }
  });
}

function renderMenus() {
  const container = document.getElementById('menuGrid');
  if (!container) return;

  const menus = siteData.menus || DEFAULT_DATA.menus;
  const query = currentSearch.toLowerCase().trim();

  const filtered = menus.filter(item => {
    const matchCat = (currentCategory === 'all' || item.category === currentCategory);
    const matchSearch = (!query || 
      item.name.toLowerCase().includes(query) || 
      (item.desc && item.desc.toLowerCase().includes(query)) ||
      (item.tag && item.tag.toLowerCase().includes(query))
    );
    return matchCat && matchSearch;
  });

  if (filtered.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 48px 16px;">
        <div style="font-size: 3rem; margin-bottom: 12px;">🔍</div>
        <h4 style="font-family: var(--font-serif); font-size: 1.3rem; color: var(--color-green-dark);">Menu Tidak Ditemukan</h4>
        <p style="color: var(--color-text-muted); font-size: 0.95rem; margin-top: 6px;">
          Tidak ada menu yang sesuai dengan kata kunci "${currentSearch}". Coba kata kunci lain atau pilih kategori Semua Menu.
        </p>
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map(item => {
    const isAvailable = (item.isAvailable !== false);
    const unavailableClass = isAvailable ? '' : 'is-unavailable';
    const tagHtml = item.tag ? `<span class="menu-tag ${item.tagClass || 'tag-favorit'}">${item.tag}</span>` : '';

    return `
      <div class="menu-card ${unavailableClass}" data-id="${item.id}">
        <div class="menu-img-wrap">
          <img src="${item.image || 'images/menu/soto-kudus-campur.jpg'}" alt="${item.name}" loading="lazy" onerror="this.onerror=null; this.src='images/menu/soto-kudus-campur.jpg';" />
          ${tagHtml}
        </div>
        <div class="menu-content">
          <div class="menu-header-row">
            <h3 class="menu-item-title">${item.name}</h3>
            <span class="menu-item-price">${formatRupiah(item.price)}</span>
          </div>
          <p class="menu-item-desc">${item.desc || ''}</p>
          <div class="menu-actions">
            ${isAvailable ? `
              <button class="add-to-cart-btn" onclick="addToCart('${item.id}')" aria-label="Tambah ${item.name} ke pesanan">
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
                <span>+ Tambah Pesanan</span>
              </button>
            ` : `
              <button class="add-to-cart-btn btn-disabled" disabled>
                <span>Stok Habis</span>
              </button>
            `}
          </div>
        </div>
      </div>
    `;
  }).join('');
}

function initMenuFilters() {
  const tabs = document.querySelectorAll('.category-tab-btn');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      currentCategory = tab.getAttribute('data-category') || 'all';
      renderMenus();
    });
  });

  const searchInput = document.getElementById('menuSearchInput');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      currentSearch = e.target.value;
      renderMenus();
    });
  }
}

// ==========================================
// 4. GALLERY RENDERING & LIGHTBOX
// ==========================================
function renderGallery() {
  const container = document.getElementById('galleryGrid');
  if (!container) return;

  const gallery = siteData.gallery || DEFAULT_DATA.gallery;
  container.innerHTML = gallery.map(item => `
    <div class="gallery-card" data-title="${item.title}" data-desc="${item.desc || ''}">
      <span class="gallery-badge">${item.badge || item.category || 'Galeri'}</span>
      <img src="${item.image}" alt="${item.title}" loading="lazy" />
      <div class="gallery-overlay">
        <h4>${item.title}</h4>
        <p>${item.desc || ''}</p>
      </div>
    </div>
  `).join('');

  // Re-bind click events for lightbox
  bindGalleryLightbox();
}

function bindGalleryLightbox() {
  const cards = document.querySelectorAll('.gallery-card');
  const modal = document.getElementById('galleryModal');
  const modalImg = document.getElementById('galleryModalImg');
  const modalTitle = document.getElementById('galleryModalTitle');
  const modalDesc = document.getElementById('galleryModalDesc');

  cards.forEach(card => {
    card.addEventListener('click', () => {
      const img = card.querySelector('img');
      const title = card.getAttribute('data-title') || '';
      const desc = card.getAttribute('data-desc') || '';

      if (modalImg && img) modalImg.src = img.src;
      if (modalTitle) modalTitle.textContent = title;
      if (modalDesc) modalDesc.textContent = desc;

      if (modal) modal.classList.add('active');
    });
  });
}

// ==========================================
// 5. LOCATION, HOURS & CONTACT RENDERING
// ==========================================
function renderLocationAndContacts() {
  const brand = siteData.brand || DEFAULT_DATA.brand;

  const branchEl = document.getElementById('locationBranchName');
  if (branchEl && brand.name) branchEl.textContent = brand.name;

  const addrEl = document.getElementById('locationAddressText');
  if (addrEl && brand.address) addrEl.textContent = brand.address;

  const hoursEl = document.getElementById('locationHoursText');
  if (hoursEl && brand.openHoursText) {
    hoursEl.innerHTML = `Buka <strong>Setiap Hari</strong>: Pukul <strong>${brand.openHoursText.replace('Setiap Hari: ', '')}</strong>`;
  }

  const contactEl = document.getElementById('locationContactText');
  if (contactEl) {
    contactEl.innerHTML = `Telepon: <strong>${brand.phone || '(031) 8298832'}</strong><br>WhatsApp / Seluler: <strong>${brand.hotlineDisplay || '0851-5851-5332'}</strong>`;
  }

  const facEl = document.getElementById('locationFacilitiesText');
  if (facEl && brand.facilities) facEl.textContent = brand.facilities;

  const gmapsBtn = document.getElementById('locationGmapsBtn');
  if (gmapsBtn && brand.gmapsUrl) gmapsBtn.href = brand.gmapsUrl;

  const waBtn = document.getElementById('locationWaBtn');
  if (waBtn && brand.hotlineWa) {
    waBtn.href = `https://wa.me/${brand.hotlineWa}?text=Halo%20Soto%20Kudus%20Kedai%20Taman,%20saya%20mau%20tanya%20arah%20lokasi`;
  }

  const mapIframe = document.getElementById('locationMapIframe');
  if (mapIframe && brand.gmapsEmbed) {
    mapIframe.src = brand.gmapsEmbed;
  }

  const floatingWa = document.getElementById('floatingWaBtn');
  if (floatingWa && brand.hotlineWa) {
    floatingWa.href = `https://wa.me/${brand.hotlineWa}?text=Halo%20Soto%20Kudus%20Kedai%20Taman,%20saya%20mau%20order`;
  }
}

// 06:00 - 22:00 WIB dynamic open check
function checkOpenStatus() {
  const badge = document.getElementById('liveStatusBadge');
  if (!badge) return;

  const brand = siteData.brand || DEFAULT_DATA.brand;
  const startHour = Number(brand.openHourStart ?? 6);
  const endHour = Number(brand.openHourEnd ?? 22);

  const now = new Date();
  const utcHours = now.getUTCHours();
  const wibHours = (utcHours + 7) % 24;

  const isOpen = (wibHours >= startHour && wibHours < endHour);

  if (isOpen) {
    badge.className = 'location-badge-status status-open';
    badge.innerHTML = `<span class="status-indicator-dot"></span> BUKA SEKARANG • ${formatHour(startHour)} - ${formatHour(endHour)} WIB`;
  } else {
    badge.className = 'location-badge-status';
    badge.style.backgroundColor = '#fef2f2';
    badge.style.color = '#991b1b';
    badge.style.border = '1px solid #fecaca';
    badge.innerHTML = `<span class="status-indicator-dot" style="background:#ef4444"></span> TUTUP SEMENTARA • Buka Pagi ${formatHour(startHour)} WIB`;
  }
}

function formatHour(h) {
  return (h < 10 ? '0' + h : h) + '.00';
}

// ==========================================
// 6. PROMO SPESIAL & VOUCHER ENGINE
// ==========================================
function renderPromoFeatures() {
  const promo = siteData.promo || DEFAULT_DATA.promo;
  const strip = document.getElementById('promoStripBanner');
  const stripText = document.getElementById('promoStripText');
  const stripBtn = document.getElementById('promoStripBtn');
  const floatingBtn = document.getElementById('floatingPromoBtn');
  const promoModal = document.getElementById('promoModal');

  if (!promo || !promo.enabled) {
    if (strip) strip.style.display = 'none';
    if (floatingBtn) floatingBtn.style.display = 'none';
    return;
  }

  // Strip banner
  if (strip) {
    strip.style.display = 'flex';
    if (stripText) stripText.textContent = promo.bannerText || `🎁 Promo Spesial Diskon dengan Kode: ${promo.code}`;
    if (stripBtn) {
      stripBtn.textContent = promo.bannerBtnText || 'Klaim Diskon';
      stripBtn.onclick = () => openPromoModal();
    }
  }

  // Floating promo button
  if (floatingBtn) {
    floatingBtn.style.display = 'flex';
    floatingBtn.innerHTML = `<span>🎁 ${promo.badge || 'Promo 15%'}</span>`;
    floatingBtn.onclick = () => openPromoModal();
  }

  // Populate Promo Modal Content
  const pImg = document.getElementById('promoModalImg');
  if (pImg && promo.popupImage) pImg.src = promo.popupImage;

  const pBadge = document.getElementById('promoModalBadge');
  if (pBadge && promo.badge) pBadge.textContent = promo.badge;

  const pTitle = document.getElementById('promoModalTitle');
  if (pTitle && promo.title) pTitle.textContent = promo.title;

  const pDesc = document.getElementById('promoModalDesc');
  if (pDesc && promo.desc) pDesc.textContent = promo.desc;

  const pCode = document.getElementById('promoModalCode');
  if (pCode && promo.code) pCode.textContent = promo.code;

  const pValid = document.getElementById('promoModalValidity');
  if (pValid && promo.validUntil) pValid.textContent = `Berlaku hingga ${promo.validUntil}`;

  // Copy code button
  const copyBtn = document.getElementById('promoCopyBtn');
  if (copyBtn) {
    copyBtn.onclick = () => {
      navigator.clipboard.writeText(promo.code).then(() => {
        showToast(`Kode "${promo.code}" berhasil disalin!`);
        copyBtn.textContent = 'Tersalin! ✓';
        setTimeout(() => { copyBtn.textContent = 'Salin Kode'; }, 2000);

        // Pre-fill cart voucher input if exists
        const voucherInput = document.getElementById('cartVoucherInput');
        if (voucherInput) voucherInput.value = promo.code;
      }).catch(() => {
        showToast(`Kode voucher: ${promo.code}`);
      });
    };
  }

  // Auto popup on first visit if configured
  if (promo.autoPopup && !sessionStorage.getItem('sodus_promo_shown')) {
    setTimeout(() => {
      openPromoModal();
      sessionStorage.setItem('sodus_promo_shown', 'true');
    }, 1200);
  }
}

function openPromoModal() {
  const modal = document.getElementById('promoModal');
  if (modal) modal.classList.add('active');
}

// ==========================================
// 6B. RESERVATION SECTION TOGGLE & RENDER
// ==========================================
function renderReservationSection() {
  const section = document.getElementById('reservationSection');
  if (!section) return;

  const resData = siteData.reservation || DEFAULT_DATA.reservation || { enabled: true };
  const isEnabled = (resData.enabled !== false);

  if (!isEnabled) {
    section.style.display = 'none';
    return;
  }

  section.style.display = 'block';

  const titleEl = document.getElementById('reservationTitle');
  if (titleEl && resData.title) titleEl.textContent = resData.title;

  const subEl = document.getElementById('reservationSubtitle');
  if (subEl && resData.subtitle) subEl.textContent = resData.subtitle;

  const noticeBox = document.getElementById('reservationNoticeBox');
  const noticeText = document.getElementById('reservationNoticeText');
  if (noticeBox && noticeText) {
    if (resData.notice && resData.notice.trim() !== '') {
      noticeText.textContent = resData.notice.trim();
      noticeBox.style.display = 'block';
    } else {
      noticeBox.style.display = 'none';
    }
  }

  const btnEl = document.getElementById('reservationSubmitBtn');
  if (btnEl && resData.buttonText) btnEl.textContent = resData.buttonText;
}

// ==========================================
// 7. CART & ORDER SYSTEM WITH VOUCHERS
// ==========================================
function initCart() {
  // Toggle cart modal
  document.querySelectorAll('.cart-toggle-trigger').forEach(btn => {
    btn.addEventListener('click', () => {
      const modal = document.getElementById('cartModal');
      if (modal) modal.classList.add('active');
      updateCartDisplay();
    });
  });

  // Voucher apply button
  const applyVoucherBtn = document.getElementById('cartApplyVoucherBtn');
  if (applyVoucherBtn) {
    applyVoucherBtn.addEventListener('click', applyVoucher);
  }

  // WhatsApp order button
  const sendWaBtn = document.getElementById('sendWhatsAppBtn');
  if (sendWaBtn) {
    sendWaBtn.addEventListener('click', handleWhatsAppOrder);
  }
}

function addToCart(menuId) {
  const menus = siteData.menus || DEFAULT_DATA.menus;
  const item = menus.find(m => m.id === menuId);
  if (!item) return;

  if (item.isAvailable === false) {
    showToast(`Maaf, menu ${item.name} sedang habis.`);
    return;
  }

  const existing = cart.find(c => c.id === menuId);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({
      id: item.id,
      name: item.name,
      price: item.price,
      qty: 1,
      image: item.image
    });
  }

  updateCartBadge();
  updateCartDisplay();
  showToast(`${item.name} ditambahkan ke pesanan! 🥣`);
}

function changeCartQty(menuId, delta) {
  const idx = cart.findIndex(c => c.id === menuId);
  if (idx === -1) return;

  cart[idx].qty += delta;
  if (cart[idx].qty <= 0) {
    cart.splice(idx, 1);
  }

  updateCartBadge();
  updateCartDisplay();
}

function updateCartBadge() {
  const totalCount = cart.reduce((sum, item) => sum + item.qty, 0);
  document.querySelectorAll('.cart-badge-count').forEach(el => {
    el.textContent = totalCount;
  });
}

function calculateCartTotals() {
  let subtotal = 0;
  cart.forEach(item => {
    subtotal += item.price * item.qty;
  });

  let discount = 0;
  const promo = siteData.promo;
  if (appliedVoucher && promo && promo.enabled) {
    if (subtotal >= (promo.minOrder || 0)) {
      if (promo.discountPercent) {
        discount = Math.round((subtotal * promo.discountPercent) / 100);
        if (promo.discountMax && discount > promo.discountMax) {
          discount = promo.discountMax;
        }
      }
    } else {
      appliedVoucher = null; // Minimum order no longer met
    }
  }

  const total = Math.max(0, subtotal - discount);
  return { subtotal, discount, total };
}

function applyVoucher() {
  const input = document.getElementById('cartVoucherInput');
  const msgEl = document.getElementById('cartVoucherMsg');
  if (!input || !msgEl) return;

  const code = input.value.trim().toUpperCase();
  const promo = siteData.promo || DEFAULT_DATA.promo;

  if (!code) {
    msgEl.className = 'cart-voucher-msg error';
    msgEl.textContent = 'Silakan masukkan kode voucher.';
    return;
  }

  if (!promo || !promo.enabled) {
    msgEl.className = 'cart-voucher-msg error';
    msgEl.textContent = 'Saat ini tidak ada promo voucher yang aktif.';
    return;
  }

  if (code !== (promo.code || '').toUpperCase()) {
    msgEl.className = 'cart-voucher-msg error';
    msgEl.textContent = 'Kode voucher tidak valid.';
    return;
  }

  let subtotal = 0;
  cart.forEach(item => { subtotal += item.price * item.qty; });

  if (subtotal < (promo.minOrder || 0)) {
    msgEl.className = 'cart-voucher-msg error';
    msgEl.textContent = `Minimal belanja untuk kode ini adalah ${formatRupiah(promo.minOrder)}. Belanja Anda baru ${formatRupiah(subtotal)}.`;
    return;
  }

  appliedVoucher = promo.code;
  msgEl.className = 'cart-voucher-msg success';
  msgEl.textContent = `Voucher "${promo.code}" berhasil diterapkan! Diskon ${promo.discountPercent}% telah dihitung.`;
  showToast(`Voucher ${promo.code} aktif! 🎉`);

  updateCartDisplay();
}

function updateCartDisplay() {
  const emptyState = document.getElementById('cartEmptyState');
  const itemsList = document.getElementById('cartItemsList');
  const orderForm = document.getElementById('cartOrderFormWrap');

  if (!emptyState || !itemsList || !orderForm) return;

  if (cart.length === 0) {
    emptyState.style.display = 'block';
    itemsList.style.display = 'none';
    orderForm.style.display = 'none';
    appliedVoucher = null;
    return;
  }

  emptyState.style.display = 'none';
  itemsList.style.display = 'block';
  orderForm.style.display = 'block';

  itemsList.innerHTML = cart.map(item => {
    const itemSub = item.price * item.qty;
    return `
      <div class="cart-item-row">
        <div class="cart-item-info">
          <h5>${item.name}</h5>
          <p>${formatRupiah(item.price)} × ${item.qty} = <strong>${formatRupiah(itemSub)}</strong></p>
        </div>
        <div class="cart-item-qty-controls">
          <button class="qty-btn" onclick="changeCartQty('${item.id}', -1)">-</button>
          <span style="font-weight: 700; min-width: 22px; text-align: center;">${item.qty}</span>
          <button class="qty-btn" onclick="changeCartQty('${item.id}', 1)">+</button>
        </div>
      </div>
    `;
  }).join('');

  const { subtotal, discount, total } = calculateCartTotals();

  const subDisplay = document.getElementById('cartSubtotalDisplay');
  if (subDisplay) subDisplay.textContent = formatRupiah(subtotal);

  const discRow = document.getElementById('cartDiscountRow');
  const discDisplay = document.getElementById('cartDiscountDisplay');
  if (discRow && discDisplay) {
    if (discount > 0) {
      discRow.style.display = 'flex';
      discDisplay.textContent = `-${formatRupiah(discount)} (${appliedVoucher})`;
    } else {
      discRow.style.display = 'none';
    }
  }

  const totalDisplay = document.getElementById('cartTotalDisplay');
  if (totalDisplay) totalDisplay.textContent = formatRupiah(total);
}

function handleWhatsAppOrder() {
  if (cart.length === 0) {
    alert('Keranjang pesanan masih kosong. Silakan pilih menu terlebih dahulu!');
    return;
  }

  const brand = siteData.brand || DEFAULT_DATA.brand;
  const nameInput = document.getElementById('orderCustomerName');
  const typeSelect = document.getElementById('orderTypeSelect');
  const notesInput = document.getElementById('orderCustomerNotes');

  const customerName = nameInput ? nameInput.value.trim() || 'Pelanggan' : 'Pelanggan';
  const orderType = typeSelect ? typeSelect.value : 'Makan di Tempat (Dine-in)';
  const customerNotes = notesInput ? notesInput.value.trim() : '-';

  const { subtotal, discount, total } = calculateCartTotals();

  let menuListText = '';
  cart.forEach((item, idx) => {
    const sub = item.price * item.qty;
    menuListText += `${idx + 1}. *${item.name}* (x${item.qty}) = ${formatRupiah(sub)}\n`;
  });

  let voucherInfo = '';
  if (appliedVoucher && discount > 0) {
    voucherInfo = `🎟️ *Voucher Digunakan:* ${appliedVoucher} (Hemat ${formatRupiah(discount)})\n`;
  }

  const waMsg = `Halo Soto Kudus Kedai Taman Surabaya! 👋\n` +
    `Saya ingin memesan menu via Website Resmi:\n\n` +
    `👤 *Nama:* ${customerName}\n` +
    `🍽️ *Layanan:* ${orderType}\n` +
    `📝 *Catatan Khusus:* ${customerNotes}\n\n` +
    `📋 *Daftar Pesanan:*\n` +
    `${menuListText}\n` +
    `💰 *Subtotal:* ${formatRupiah(subtotal)}\n` +
    voucherInfo +
    `💵 *ESTIMASI TOTAL AKHIR:* *${formatRupiah(total)}*\n\n` +
    `Mohon konfirmasi pesanan dan ketersediaannya. Terima kasih! 🙏🌿`;

  const waNumber = brand.hotlineWa || '6285158515332';
  const waUrl = `https://wa.me/${waNumber}?text=${encodeURIComponent(waMsg)}`;
  window.open(waUrl, '_blank');
}

// ==========================================
// 8. HELPERS & MODALS INITIALIZATION
// ==========================================
function formatRupiah(num) {
  return 'Rp ' + Number(num || 0).toLocaleString('id-ID');
}

function showToast(msg) {
  let toast = document.getElementById('toastNotice');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toastNotice';
    toast.className = 'toast-notice';
    document.body.appendChild(toast);
  }

  toast.innerHTML = `<span>🍲</span> <span>${msg}</span>`;
  toast.classList.add('show');

  setTimeout(() => {
    toast.classList.remove('show');
  }, 2500);
}

function initModals() {
  // Close modal on close button or overlay click
  document.querySelectorAll('.modal-overlay').forEach(modal => {
    const closeBtn = modal.querySelector('.modal-close-btn');
    if (closeBtn) {
      closeBtn.addEventListener('click', () => {
        modal.classList.remove('active');
      });
    }

    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.classList.remove('active');
      }
    });
  });

  // Mobile navbar toggle
  const hamburger = document.getElementById('hamburgerBtn');
  const navMenu = document.getElementById('navMenu');
  if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
      navMenu.classList.toggle('active');
      hamburger.classList.toggle('active');
    });

    navMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
      });
    });
  }

  // Reservation Form Submit Handler
  const feedbackForm = document.getElementById('feedbackForm');
  if (feedbackForm) {
    feedbackForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = feedbackForm.querySelector('[name="name"]')?.value.trim() || 'Pelanggan';
      const phone = feedbackForm.querySelector('[name="phone"]')?.value.trim() || '-';
      const type = feedbackForm.querySelector('[name="type"]')?.value || 'Reservasi Meja Makan';
      const message = feedbackForm.querySelector('[name="message"]')?.value.trim() || '-';

      const resData = siteData.reservation || DEFAULT_DATA.reservation || {};
      const targetWa = (resData.waTarget || siteData.brand?.hotlineWa || '6285158515332').replace(/\D/g, '');

      const text = `Halo Soto Kudus Kedai Taman, saya ingin mengajukan:\n\n` +
        `👤 *Nama:* ${name}\n` +
        `📱 *No WhatsApp:* ${phone}\n` +
        `📋 *Keperluan:* ${type}\n` +
        `📝 *Rincian / Tanggal:* ${message}\n\n` +
        `Mohon konfirmasi ketersediaan tempat / pesanan. Terima kasih! 🌿`;

      const waUrl = `https://wa.me/${targetWa}?text=${encodeURIComponent(text)}`;
      
      showToast(`Terima kasih ${name}, permohonan reservasi diteruskan ke WhatsApp! 🌿`);
      feedbackForm.reset();
      setTimeout(() => {
        window.open(waUrl, '_blank');
      }, 700);
    });
  }
}

// Entrypoint
document.addEventListener('DOMContentLoaded', () => {
  initModals();
  initMenuFilters();
  initCart();
  initWebsiteData();
});
