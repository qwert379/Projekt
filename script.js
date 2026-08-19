console.log("Strona działa poprawnie!");

document.querySelectorAll("tr").forEach(function(row) {
    row.addEventListener("click", function() {
        row.classList.toggle("selected");
    });
});
