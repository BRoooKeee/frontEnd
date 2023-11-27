const input = document.querySelector('.numberInput');
const para = document.querySelector('p');

function squared(num) {
  return num * num;
}

function cubed(num) {
  return num * num * num;
}

function factorial(num) {
  let res = 1;
  if(num > 0) {
    while (num > 0) {
      res *= num;
      num--;
    }
    return res;
  } else if (num == 0) {
    return res;
  } else {
    return undefined;
  }
}

input.addEventListener('change', () => {
  const num = parseFloat(input.value);

  if (isNaN(num)) {
    para.textContent = 'You need to enter a number';
  } else {
    para.textContent = `${num} squared is ${squared(num)} \t.`;
    para.textContent += `${num} cubed is ${cubed(num)} \t.`;
    para.textContent += `${num} factorial is ${factorial(num)}.`;
  }
})
// html요소의 textContent 속성을 사용하는 경우
// : 텍스트만 추가 가능 (html 태그를 문자열로 취급)
// html 태그를 실제 태그로 출력하고자 하는 경우
// : innerHTML 속성을 사용