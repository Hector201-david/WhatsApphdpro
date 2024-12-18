document.getElementById('sendSmsButton').addEventListener('click', function() {
    var phoneNumber = 'NUMERO_DE_DESTINO'; // Formato: +1234567890
    var message = 'Este es un mensaje de prueba enviado automáticamente.';

    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'send_sms.php', true);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            alert('SMS enviado: ' + xhr.responseText);
        }
    };
    xhr.send('to=' + encodeURIComponent(phoneNumber) + '&message=' + encodeURIComponent(message));
});
