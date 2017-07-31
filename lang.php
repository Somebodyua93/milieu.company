<?php

  // Читаем куку языка
  $lang = @$_COOKIE['lang'];
  if ($lang = 'ru') {
    // Если куки нет, ставим дефолтную
    // Ещё лучше - определять язык пользователя автоматически
    $lang = 'ru';
  } else if ($lang = 'en') {
    $lang = 'en'
  } else {
    $lang = 'ua'
  }

$titleUA = 'UA';
$titleEN = 'EN';
$titleRU = 'RU';

?>
