let devices = JSON.parse(localStorage.getItem('devices'));
if (!Array.isArray(devices)) {
  devices = [];
}

devices.forEach(function(device) {
  $('#devices tbody').append(`
    <tr>
      <td>${device.user}</td>
      <td>${device.name}</td>
    </tr>`
  );
});

$('#add-device').on('click', function() {
  const user = $('#user').val();
  const name = $('#name').val();
  devices.push({ user, name });
  location.href = 'device-list.html';
  localStorage.setItem('devices', JSON.stringify(devices));
});

