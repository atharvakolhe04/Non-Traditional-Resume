document.getElementById("add-to-cart").addEventListener("click", function() {
    let popup = document.getElementById("cart-popup");
    popup.style.display = "block";
});

function closePopup() {
    document.getElementById("cart-popup").style.display = "none";
}

function showPopup(popupId) {
    document.getElementById(popupId).style.display = "block";
}

function closePopup(popupId) {
    document.getElementById(popupId).style.display = "none";
}