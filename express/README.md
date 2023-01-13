## Daftar Isi

- [Daftar Isi](#daftar-isi)
- [Using Technology](using-technology)
- [Rancangan Database Prototype](#rancangan)
- [Daftar API ENDPOINT](#daftar-api-endpoint)

## using technology

- Express JS
- MongoDB
- Mongoose
- Typescript

# Rancangan

- users :

  - id
  - email
  - password

- history_users :
  - id
  - userId
  - timestampLogin
  - timestampLogout
  - durationTime

## Daftar API ENDPOINT

Api ini di test / uji dengan menggunakan Aplikasi Postman Desktop

| Nama Routes           | HTTP | Deskripsi                                   | Dibuat | Hasil Test | Middleware `Auth` |
| :-------------------- | :--- | :------------------------------------------ | :----- | :--------- | :---------------- |
| `api calculator v.01` |
| `/`                   | GET  | Mendapatkan Halaman Utama dalam bentuk JSON | Sudah  | OK         | Tidak             |
| `/api/v1/auth/login`  | POST | Login dengan menggunakan email dan password | Sudah  | OK         | Tidak             |
| `/api/v1/auth/logout` | POST | Logout dari aplikasi                        | Sudah  | OK         | Ya                |
