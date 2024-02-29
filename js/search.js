var searchInput = document.getElementById('search-input');

searchInput.addEventListener('keyup', function(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        search();
    }
});

function search() {
    var searchValue = searchInput.value.toLowerCase();
    var products = document.querySelectorAll('.product-wrap');
    console.log(products);
    var results = [];

    products.forEach(function(product) {
        var productName = product.querySelector('.product-name').textContent.toLowerCase();

        if (productName.indexOf(searchValue) !== -1) {
            product.style.display = 'block';
            results.push(product);
        } else {
            product.style.display = 'none';
        }
    });

    if (results.length === 0) {
        console.log('No results found.');
    }
}
