let map = new Map();

map.set("a", 1);
map.set("b", 2);
map.set("c", 3);
map.set("d", 4);

map.set("[1,2,3,4]", 5);

console.log(map);

let set = new Set([
  1, 2, 3, 4, 5, 6, 1, 2, 3, 2, 3, 2, 2, 2,
]);

console.log(set);
