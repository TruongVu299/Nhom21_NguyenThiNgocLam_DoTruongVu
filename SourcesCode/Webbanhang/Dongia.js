function filterByPrice() {
    var priceFilter = document.getElementById("priceFilter");
    var selectedPrice = priceFilter.value;
    var rows = document.querySelectorAll("#productTable tbody tr");

    rows.forEach(function (row) {
        var priceCell = row.querySelector("td:nth-child(3)");
        var price = parseInt(priceCell.textContent);

        if (selectedPrice === "all" ||
            (selectedPrice === "150000" && price < 150000) ||
            (selectedPrice === "150000-300000" && price >= 150000 && price <= 300000)) {
            row.style.display = "table-row";
        } else {
            row.style.display = "none";
        }
    });
}

function validateQuantity(input) {
    var value = parseInt(input.value);
    if (isNaN(value) || value < 0) {
        input.value = 0;
    }
}

function daott(checkbox) {
    var row = checkbox.parentElement.parentElement;
    var quantityInput = row.querySelector(".quantity");
    var priceInput = row.querySelector("td:nth-child(3)");
    var totalPriceCell = row.querySelector("td:nth-child(5)");

    if (checkbox.checked) {
        quantityInput.disabled = false;
        priceInput.removeAttribute("readonly");
        updateTotal(quantityInput);
    } else {
        quantityInput.disabled = true;
        quantityInput.value = 1;
        totalPriceCell.textContent = "";
        priceInput.setAttribute("readonly", "true");
        updateGrandTotal();
    }
}

function updateTotal(input) {
    validateQuantity(input); // Ensure quantity is not negative
    var row = input.parentElement.parentElement;
    var price = parseInt(row.querySelector("td:nth-child(3)").textContent);
    var quantity = parseInt(input.value);
    var totalPriceCell = row.querySelector("td:nth-child(5)");
    var total = price * quantity;
    totalPriceCell.textContent = total.toLocaleString();
    updateGrandTotal();
}

function updateGrandTotal() {
    var rows = document.querySelectorAll(".chon:checked");
    var grandTotal = 0;

    rows.forEach(function (row) {
        var totalCell = row.parentElement.parentElement.querySelector("td:nth-child(5)");
        var total = parseInt(totalCell.textContent.replace(/,/g, '')); // Remove commas
        grandTotal += total;
    });

    document.getElementById("grandTotal").textContent = grandTotal.toLocaleString();
}

filterByPrice();
