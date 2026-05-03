<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_FILES['voice_message'])) {
    $file = $_FILES['voice_message'];
    $uploadDir = 'voice_feedback/';
    if (!is_dir($uploadDir)) mkdir($uploadDir, 0777, true);
    
    $newName = $uploadDir . 'voice_' . time() . '.webm';
    move_uploaded_file($file['tmp_name'], $newName);
    
    // (Опционально) отправить файл на почту, в Telegram и т.д.
    mail('vasha_pochta@example.com', 'Новое голосовое сообщение', 'Файл: ' . $newName);
    echo 'OK';
} else {
    http_response_code(400);
    echo 'No file';
}
?>
