<?php
// ================= НАСТРОЙКИ (Меняем на свои) =================
$botToken = '8727047085:AAF57jZm69QTTthyaxjt3vP3VyxxFLIUFWg';          // Токен от BotFather
$chatId   = '8086179119';           // ID из @userinfobot
$tempDir  = DIR . '/temp/';                // Папка для временных файлов
// ==============================================================

// Создаём папку, если её нет
if (!is_dir($tempDir)) mkdir($tempDir, 0777, true);

// Проверяем, отправили ли нам файл
if ($_SERVER['REQUEST_METHOD'] !== 'POST' || !isset($_FILES['voice_message'])) {
    http_response_code(400);
    die('No file');
}

$uploadedFile = $_FILES['voice_message'];

// Проверяем ошибки загрузки
if ($uploadedFile['error'] !== UPLOAD_ERR_OK) {
    http_response_code(500);
    die('Upload error: ' . $uploadedFile['error']);
}

// Временное сохранение файла
$tmpFilePath = $tempDir . uniqid('voice_', true) . '.ogg';
if (!move_uploaded_file($uploadedFile['tmp_name'], $tmpFilePath)) {
    http_response_code(500);
    die('Cannot save file');
}

// Отправляем в Telegram через CURL
$telegramUrl = "https://api.telegram.org/bot{$botToken}/sendVoice";
$postFields = [
    'chat_id' => $chatId,
    'voice'   => new CURLFile($tmpFilePath, 'audio/ogg', 'voice_message.ogg')
];

$ch = curl_init();
curl_setopt_array($ch, [
    CURLOPT_URL => $telegramUrl,
    CURLOPT_POST => true,
    CURLOPT_POSTFIELDS => $postFields,
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_SSL_VERIFYPEER => false,
    CURLOPT_TIMEOUT => 30
]);

$response = curl_exec($ch);
$httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
curl_close($ch);

// Чистим временный файл
unlink($tmpFilePath);

// Отвечаем браузеру
if ($httpCode === 200) {
    echo 'OK';
} else {
    http_response_code(500);
    echo 'Telegram API error: HTTP ' . $httpCode;
}
?>

