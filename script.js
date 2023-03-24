//your code here
// Get all the elements that store the prices of the items in the list
const priceElements = document.querySelectorAll('[data-ns-test="prices"]');

// Calculate the sum of prices
let totalPrice = 0;
for (let i = 0; i < priceElements.length; i++) {
  totalPrice += parseFloat(priceElements[i].textContent);
}

// Create a new row for the total price
const totalRow = document.createElement('tr');
const totalCell = document.createElement('td');
totalCell.setAttribute('colspan', '2');
totalCell.textContent = `Total: $${totalPrice.toFixed(2)}`;
totalCell.setAttribute('data-ns-test', 'grandTotal');
totalRow.appendChild(totalCell);

// Add the total row to the table
const table = document.querySelector('table');
table.appendChild(totalRow);
