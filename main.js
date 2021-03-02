function load() {
    var mydata = JSON.parse(data);
    var productlist = document.getElementById("product-list");
    var enterButton = document.getElementById("enter");
    var input = document.getElementById("userInput");

    function showProducts() {
        for (var i in mydata) {
            productlist.innerHTML +=
                `
        <div>
        <p>Name: ` +
                mydata[i].name +
                `</p>
        <p>price: ` +
                mydata[i].price +
                `</p>
        </div>
        `;
        }
    }

    function inputLength() {
        return input.value.length;
    }

    function onSearch() {
        alert(input.value);
    }

    function addListAfterClick() {
        if (inputLength() > 0) {
            //makes sure that an empty input field doesn't create a li
            onSearch();
        }
    }

    showProducts();
    enterButton.addEventListener("click", addListAfterClick);
}
