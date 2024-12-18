document.getElementById('sendSmsButton').addEventListener('click', function() {
    var phoneNumber = '+5355639119'; // Formato: +1234567890
    var message = 'Agrégame a WhatsApp;

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
