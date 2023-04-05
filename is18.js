let age = prompt('Сколько тебе лет?');
function checkAge(age) {
  return (age > 18) ? true : confirm('Родители разрешили?');
}

checkAge(age)