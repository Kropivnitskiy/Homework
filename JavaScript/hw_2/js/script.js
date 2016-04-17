var nameList = [];
for (var i = 0; i < 5; i++){
    nameList[i] = prompt('Введите имя в массив','');
}
var userName = prompt('Введите имя пользователя','');
  for ( var i = 0; i < 5; i++) {
      if (nameList[i] == userName) {
        break;
      }
  }
if (nameList[i] == userName) {
    alert(userName + ', Вы успешно вошли!');
} else {
    alert('Введеное имя отсутствует в массиве');
}
