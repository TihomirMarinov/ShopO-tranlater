var input = document.querySelector("input");
var CFG = {
  item: 'trans-unit',
  key: 'id',
  source: 'source',
  target: 'target',
  note: 'note',
};
input.addEventListener("change", function() {

  Array.prototype.forEach.call(input.files, function(file) {
    reader.addEventListener("load", function() {
      var doc = new DOMParser().parseFromString(reader.result, "application/xml");

      console.log(doc);

      xliff2js(doc, (err, res) => {
        console.log("Result: " + res);
        console.log("Error: " + err);
      });

    });
    console.log(result);
    reader.readAsText(file);
  });
});

var t0 = performance.now()
var arrTest = [];
for(var i = 0; i<4000000; i++){
  arrTest.push(i);
}

console.log(arrTest[arrTest.length - 1]);
console.log(arrTest);
var t1 = performance.now();
console.log("create arrTest " + (t1-t0) + " ms");