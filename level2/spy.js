// https://school.programmers.co.kr/learn/courses/30/lessons/42578#qna

function solution(clothes) {
  var answer = 1;
  let cate = [];
  let cloth = {};
  for (let element of clothes) {
    if (cate.indexOf(element[1]) === -1) {
      cate.push(element[1]);
      cloth[element[1]] = 0;
    }
    cloth[element[1]]++;
  }
  Object.values(cloth).forEach((e) => {
    answer *= e + 1;
  });

  return answer - 1;
}
