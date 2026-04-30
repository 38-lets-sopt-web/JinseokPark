function solution(num_list) {
  let odd = "";
  let even = "";

  for (let i = 0; i < num_list.length; i++) {
    if (num_list[i] % 2 !== 0) {
      odd += num_list[i].toString();
    } else {
      even += num_list[i].toString();
    }
  }
  return Number(odd) + Number(even);
}
