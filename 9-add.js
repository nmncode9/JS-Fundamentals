function add(a, b) {
  let result = Number(a) + Number(b)
  console.log(result);
}
add(process.argv[2],process.argv[3]);
