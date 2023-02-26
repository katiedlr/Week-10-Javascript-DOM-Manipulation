// Select the table and the button elements
let table = document.getElementById('list');
let button = document.getElementById('add');

// Add an event listener to the button
button.addEventListener('click', function() {
  // Get the input values
  let firstName = document.getElementById('first-name').value;
  let lastName = document.getElementById('last-name').value;
  let address = document.getElementById('address').value;
  let city = document.getElementById('city').value;
  let state = document.getElementById('state').value;
  let zip = document.getElementById('zip').value;
  let phone = document.getElementById('phone').value;

  // Create new row in the table
  let row = table.insertRow();
  let cell1 = row.insertCell();
  let cell2 = row.insertCell();
  let cell3 = row.insertCell();
  let cell4 = row.insertCell();
  let cell5 = row.insertCell();
  let cell6 = row.insertCell();
  let cell7 = row.insertCell();
  cell1.textContent = firstName;
  cell2.textContent = lastName;
  cell3.textContent = address;
  cell4.textContent = city;
  cell5.textContent = state;
  cell6.textContent = zip;
  cell7.textContent = phone;

  // Create a delete button for the row
  let removeButton = document.createElement('button');
  removeButton.textContent = 'Remove';
  removeButton.addEventListener('click', function() {
    row.remove();
  });
  cell7.appendChild(removeButton);

  // Clear input values
  document.getElementById('first-name').value = '';
  document.getElementById('last-name').value = '';
  document.getElementById('address').value = '';
  document.getElementById('city').value = '';
  document.getElementById('state').value = '';
  document.getElementById('zip').value = '';
  document.getElementById('phone').value = '';
});
