function pow(x,n)
{
  var result=x;
  for(var i=0;i<n;i++) {
    result = result * x;
  }
  return result;
}

x=prompt('укажите число x, которое необходимо возвести в степень','')
n=prompt('укажите возводимую степень - n','')

if (n<0)
{
  alert('Степень '+n+'не поддерживается, введите целую степень, большую 0');
}
else
{
  console.log('число, которое возводиться в степень');
  console.log('x = ', x);
  console.log('степень');
  console.log('n = ', n);
  console.log('____________');
  console.log('Результат = ', pow(x,n) );
}

// функция проверки целого числа
// function isInteger(num) { 
//   return (num ^ 0) === num;
// }
