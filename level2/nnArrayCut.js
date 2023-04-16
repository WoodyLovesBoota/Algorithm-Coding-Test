// https://school.programmers.co.kr/learn/courses/30/lessons/87390#qna

function solution(n, left, right) {
  let answer = [];
  for (let i = left; i <= right; i++) {
    let row = Math.floor(i / n);
    let column = i % n;
    answer.push(Math.max(row, column) + 1);
  }
  return answer;
}
