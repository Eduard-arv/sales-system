document.addEventListener('DOMContentLoaded', () => {
    const productForm = document.getElementById('productForm');
    const productList = document.getElementById('productList');
    const clientForm = document.getElementById('clientForm');
    const clientList = document.getElementById('clientList');

    productForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const productName = document.getElementById('productName').value;
        const productPrice = document.getElementById('productPrice').value;
        const productStock = document.getElementById('productStock').value;

        const productRow = document.createElement('tr');
        productRow.innerHTML = `
            <td>${productName}</td>
            <td>${productPrice}</td>
            <td>${productStock}</td>
            <td>
                <button class="btn btn-warning btn-sm update-stock">Actualizar Stock</button>
            </td>
        `;

        productList.appendChild(productRow);

        productRow.querySelector('.update-stock').addEventListener('click', () => {
            const newStock = prompt('Ingrese el nuevo stock:', productStock);
            if (newStock !== null) {
                productRow.cells[2].innerText = newStock;
            }
        });

        productForm.reset();
    });

    clientForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const clientName = document.getElementById('clientName').value;
        const clientEmail = document.getElementById('clientEmail').value;

        const clientRow = document.createElement('tr');
        clientRow.innerHTML = `
            <td>${clientName}</td>
            <td>${clientEmail}</td>
            <td>
                <button class="btn btn-warning btn-sm update-email">Actualizar Email</button>
            </td>
        `;

        clientList.appendChild(clientRow);

        clientRow.querySelector('.update-email').addEventListener('click', () => {
            const newEmail = prompt('Ingrese el nuevo email:', clientEmail);
            if (newEmail !== null) {
                clientRow.cells[1].innerText = newEmail;
            }
        });

        clientForm.reset();
    });
});