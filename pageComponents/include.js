function includeHTML(id, file) {
  fetch(file)
    .then(res => {
      if (!res.ok) throw new Error("File not found: " + file);
      return res.text();
    })
    .then(data => {
      document.getElementById(id).innerHTML = data;
    })
    .catch(err => console.error(err));
}