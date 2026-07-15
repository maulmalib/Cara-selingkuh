# Cara Selingkuh (Jangan.)

Website "jebakan": judul & tampilan awal clickbait ala "cara selingkuh",
tapi begitu tombol "Pelajari Sekarang" dipencet, isinya berubah total jadi
pesan anti-perselingkuhan — data dampak psikologis, cerita korban, cerita
pribadi pembuat, afirmasi untuk korban, dan kontak bantuan profesional.

## Struktur file
- `index.html` — struktur halaman (bait + reveal)
- `style.css` — dua identitas visual berbeda (bait = norak/clickbait, reveal = serius/editorial)
- `script.js` — logika transisi & reset
- `netlify.toml` — konfigurasi deploy

## Cara deploy ke Netlify

**Opsi 1 — Drag & drop (paling cepat)**
1. Buka https://app.netlify.com/drop
2. Seret folder ini (atau hasil ekstrak zip-nya) ke halaman tersebut
3. Netlify otomatis memberi URL publik (bisa diganti nama di Site settings)

**Opsi 2 — Via Netlify CLI**
```bash
npm install -g netlify-cli
cd cara-selingkuh
netlify deploy --prod
```

**Opsi 3 — Hubungkan ke Git**
1. Push folder ini ke repo GitHub/GitLab
2. Di Netlify: "Add new site" → "Import an existing project"
3. Build command: kosongkan. Publish directory: `.`

## Catatan
- Ganti link Instagram di `index.html` (`ibraditya`) kalau username berubah.
- Bagian "Referensi data" di footer bisa diperluas kalau mau menambah sumber.
- Nomor hotline yang dipakai: 119 ext. 8 (SEJIWA / Healing119) — cek ulang
  keaktifannya secara berkala karena layanan pemerintah bisa berubah.
