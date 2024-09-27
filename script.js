// Create Array untuk menyimpan nilai-nilai
const detailMataPelajaran = [];

// Function menambahkan Mata Pelajaran dan Nilainya
const addMataPelajaran = function (namaMataPelajaran, nilaiMataPelajaran) {
  if (
    typeof namaMataPelajaran === "string" &&
    typeof nilaiMataPelajaran === "number"
  ) {
    detailMataPelajaran.push({
      name: namaMataPelajaran,
      nilai: nilaiMataPelajaran,
    });
    console.log(
      `${namaMataPelajaran} berhasil ditambahkan dengan nilai ${nilaiMataPelajaran}`
    );
  } else {
    console.log(
      `Masukan data yang valid. Gunakan string untuk nama mata pelajaran dan gunakan number untuk nilainya`
    );
  }
};

addMataPelajaran("Matematika", 80);
addMataPelajaran("Ilmu Pengetahuan Alam", 85);
addMataPelajaran("Ilmu Pengetahuan Sosial", 80);

// Function untuk menghitung rata-rata.
const calcAvarage = function () {
  // Loop untuk menghitung total nilai.
  let totalNilai = 0;
  let rataRata;
  for (let i = 0; i < detailMataPelajaran.length; i++) {
    totalNilai = totalNilai + detailMataPelajaran[i].nilai;
  }
  console.log(`Total Nilai: ${totalNilai}`);
  rataRata = totalNilai / detailMataPelajaran.length;
  console.log(`Rata-Rata Nilai : ${rataRata}`);
};

calcAvarage();
