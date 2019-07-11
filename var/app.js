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
