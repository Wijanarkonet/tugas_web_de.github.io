<script>
document.querySelector("form").addEventListener("submit", function(e) {
    e.preventDefault();

    const notif = document.getElementById("notif");
    notif.classList.add("show");

    // hilang otomatis 3 detik
    setTimeout(() => {
        notif.classList.remove("show");
    }, 3000);

    this.reset();
});
</script>
