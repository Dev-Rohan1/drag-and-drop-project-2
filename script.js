let card = document.querySelector(".card");
let boxcontant = document.getElementsByClassName("contant");

for (boxcontants of boxcontant) {
    boxcontants.addEventListener("dragstart", function(event) {
        let selected = event.target;
        card.addEventListener("dragover", function(event) {
            event.preventDefault();
        });
        card.addEventListener("drop", function() {
            card.appendChild(selected);
            selected = null;
        });
    });
}
