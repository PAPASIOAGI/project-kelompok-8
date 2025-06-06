const data = [
  {
    title: "Anjungan Jawa Barat",
    image: "img/anjungan.jpg",
    shortText: "Replika Keraton Kasepuhan Cirebon...",
    fullText: "Anjungan Jawa Barat menampilkan Keraton Kasepuhan lengkap dengan budaya khas Sunda seperti kujang dan angklung."
  },
  {
    title: "Rumah Panggung",
    image: "img/rumah-panggung.jpg",
    shortText: "Rumah tradisional khas Sunda...",
    fullText: "Rumah panggung Sunda dibangun tinggi dari tanah untuk melindungi dari banjir dan binatang, juga sebagai filosofi keselarasan."
  },
  {
    title: "Gong Perdamaian",
    image: "img/gong.jpg",
    shortText: "Simbol perdamaian dan kerukunan...",
    fullText: "Gong Perdamaian mengandung simbol agama dan suku di Indonesia, menegaskan pentingnya hidup rukun."
  },
  {
    title: "Angklung",
    image: "img/angklung.jpg",
    shortText: "Alat musik dari bambu yang digoyangkan...",
    fullText: "Angklung memerlukan kerja sama tim dalam memainkannya, mewakili kebersamaan dalam budaya Sunda."
  },
  {
    title: "Calung",
    image: "img/calung.jpg",
    shortText: "Alat musik bambu lain khas Sunda...",
    fullText: "Calung dimainkan dengan dipukul dan memiliki suara ritmis yang khas dalam pertunjukan tradisional."
  },
  {
    title: "Wayang Golek",
    image: "img/wayang-golek.jpg",
    shortText: "Seni pertunjukan boneka kayu...",
    fullText: "Wayang Golek adalah teater boneka dari kayu dengan cerita moral, sering dikaitkan dengan tokoh pewayangan."
  },
  {
    title: "Batik Cirebon",
    image: "img/batik.jpg",
    shortText: "Motif khas pesisir dengan warna cerah...",
    fullText: "Batik Cirebon seperti motif Mega Mendung mencerminkan perpaduan budaya lokal dan pengaruh Tionghoa."
  },
  {
    title: "Tarian Jaipong",
    image: "img/jaipong.jpg",
    shortText: "Tari energik khas Jawa Barat...",
    fullText: "Jaipong menggabungkan seni pencak silat, tari tradisional, dan irama dinamis yang menggugah."
  },
  {
    title: "Topeng Cirebon",
    image: "img/topeng.jpg",
    shortText: "Seni tari dengan topeng unik...",
    fullText: "Tari Topeng menceritakan kisah kehidupan dan karakter manusia melalui mimik topeng dan gerakan lincah."
  },
  {
    title: "Pencak Silat",
    image: "img/pencaksilat.jpg",
    shortText: "Seni bela diri tradisional...",
    fullText: "Pencak Silat Jawa Barat dikenal luwes dan filosofis, mencerminkan kedewasaan dan pengendalian diri."
  }
];

const cardContainer = document.getElementById('card-container');
const infoModal = new bootstrap.Modal(document.getElementById('infoModal'));

data.forEach((item, i) => {
  const col = document.createElement('div');
  col.className = 'col-md-6 col-lg-4';

  col.innerHTML = `
    <div class="card h-100 shadow-sm card-click" style="cursor:pointer;" data-index="${i}">
      <img src="${item.image}" class="card-img-top" alt="${item.title}">
      <div class="card-body">
        <h5 class="card-title">${item.title}</h5>
        <p class="card-text">${item.shortText}</p>
      </div>
    </div>
  `;
  cardContainer.appendChild(col);
});

document.addEventListener('click', function(e) {
  const card = e.target.closest('.card-click');
  if (!card) return;
  const index = parseInt(card.dataset.index);
  const { title, fullText } = data[index];
  document.getElementById('infoModalLabel').textContent = title;
  document.getElementById('infoModalBody').textContent = fullText;
  infoModal.show();
});

// Sidebar interaktif
const sidebar = document.getElementById('sidebar');
const mainContent = document.querySelector('main');
sidebar.addEventListener('mouseenter', () => {
  sidebar.classList.add('show');
  if (mainContent) mainContent.classList.add('main-content-blur');
});
sidebar.addEventListener('mouseleave', () => {
  sidebar.classList.remove('show');
  if (mainContent) mainContent.classList.remove('main-content-blur');
});
document.addEventListener('mousemove', function (e) {
  if (e.clientX < 30) {
    sidebar.classList.add('show');
    if (mainContent) mainContent.classList.add('main-content-blur');
  }
});
