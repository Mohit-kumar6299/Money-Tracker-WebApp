document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("expense-form");
    const expenseTableBody = document.getElementById("expense-table-body");
    const totalAmountEl = document.getElementById("total-amount");

    let totalAmount = 0;

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        const category = document.getElementById("category-select").value;
        const amount = parseFloat(document.getElementById("amount-input").value);
        const date = document.getElementById("date-input").value;

        if (isNaN(amount) || !date) {
            alert("Please enter a valid amount and date.");
            return;
        }

        totalAmount += amount;
        updateTotalAmount();

        const newRow = document.createElement("tr");

        newRow.innerHTML = `
            <td>${category}</td>
            <td>${amount.toFixed(2)}</td>
            <td>${date}</td>
            <td><button class="delete-btn">Delete</button></td>
        `;

        expenseTableBody.appendChild(newRow);

        const deleteButton = newRow.querySelector(".delete-btn");
        deleteButton.addEventListener("click", function() {
            totalAmount -= amount;
            updateTotalAmount();
            expenseTableBody.removeChild(newRow);
        });

        form.reset();
    });

    function updateTotalAmount() {
        totalAmountEl.textContent = totalAmount.toFixed(2);
    }
});

