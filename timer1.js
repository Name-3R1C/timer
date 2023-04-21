const timers = [];
// get timer
for (let i = 2; i < process.argv.length; i++) {
  if (process.argv[i] > 0) {
    timers.push(parseInt(process.argv[i]));
  }
}
// sort array
timers.sort(function(a,b) {
  return a - b;
});
// set timers
for (const t of timers) {
  setTimeout(() => {
    process.stdout.write('\x07');
  }, (t * 1000));
}