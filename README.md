# Project Structure
* create_db.js : Membuat database baru di mysql
* create_table.js : Membuat table baru di database mysql
* mysql_connection.js : Membuat koneksi ke database mysql
* mysql_operation.js : Seluruh operasi ke database mysql
* server.js : Memuat kode untuk membuat, mengonfigurasi, dan menjalankan server HTTP menggunakan Hapi.
* routes.js : Memuat kode konfigurasi routing server seperti menentukan path, method, dan handler yang digunakan.
* handler.js : Memuat seluruh fungsi-fungsi handler yang digunakan pada berkas routes.

# Step to init project
1. clone this repository
1. cd cinemas-praktikum-api
1. node src/create_db.js
1. node src/create_table.js
1. npm run start

# Testing
for testing this REST API, I have included my Postman file. The file name is "Cinema Praktikum.postman_collection.json