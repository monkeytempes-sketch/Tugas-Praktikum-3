let listTugas = [];
const formTodo = document.getElementById('form-todo');
const inputTugas = document.getElementById('input-tugas');
const daftarTugas = document.getElementById('daftar-tugas');
const jumlahSisa = document.getElementById('jumlah-sisa');

document.addEventListener('DOMContentLoaded', function () {

    formTodo.addEventListener('submit', function (e) {
        e.preventDefault();

        const teksTugas = inputTugas.value.trim();

        if (teksTugas !== '') {
            listTugas.push({
                id: Date.now(),
                teks: teksTugas,
                isDone: false
            });
            inputTugas.value = '';
            tampilkanData();
        }
    });

    function tampilkanData() {
        daftarTugas.innerHTML = '';

        listTugas.forEach(function (item) {
            const li = document.createElement('li');
            li.className = 'item-tugas' + (item.isDone ? ' selesai' : '');

            const divKiri = document.createElement('div');
            divKiri.className = 'bagian-kiri';

            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.checked = item.isDone;

            checkbox.addEventListener('change', function () {
                item.isDone = checkbox.checked;
                tampilkanData();
            });

            const span = document.createElement('span');
            span.textContent = item.teks;

            divKiri.appendChild(checkbox);
            divKiri.appendChild(span);

            const btnHapus = document.createElement('button');
            btnHapus.className = 'btn-hapus';
            btnHapus.textContent = 'Hapus';

            btnHapus.addEventListener('click', function () {
                listTugas = listTugas.filter(t => t.id !== item.id);
                tampilkanData();
            });

            li.appendChild(divKiri);
            li.appendChild(btnHapus);
            daftarTugas.appendChild(li);
        });

        const sisa = listTugas.filter(t => !t.isDone).length;
        jumlahSisa.textContent = sisa;
    }
});
