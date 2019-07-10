var input = document.querySelector("input");
  input.addEventListener("change", function() {
    Array.prototype.forEach.call(input.files, function(file) {
      var reader = new FileReader();
      reader.addEventListener("load", function() {
        var doc = new DOMParser().parseFromString(reader.result, "application/xml");
        console.log(doc);
      });
      reader.readAsText(file);
    });
  });

  