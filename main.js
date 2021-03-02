function load() {
    var mydata = JSON.parse(data);
    var productlist = document.getElementById("product-list");
    var enterButton = document.getElementById("enter");
    var input = document.getElementById("userInput");

    function showProducts(data) {
        for (var i in data) {
            productlist.innerHTML +=
                `
        <div>
        <p>Name: ` +
                data[i].name +
                `</p>
        <p>price: ` +
                data[i].price +
                `</p>
        </div>
        `;
        }
    }

    function inputLength() {
        return input.value.length;
    }

    function onSearch() {
        console.log(input.value);
        const new_data = mydata.filter((i) => i.name.includes(input.value));
        productlist.innerHTML = "";
        showProducts(new_data);
    }

    function addListAfterClick() {
        if (inputLength() > 0) {
            //makes sure that an empty input field doesn't create a li
            onSearch();
        }
    }

    const debounce = (func, wait, immediate) => {
        var timeout;

        return function executedFunction() {
            var context = this;
            var args = arguments;

            var later = function () {
                timeout = null;
                if (!immediate) func.apply(context, args);
            };

            var callNow = immediate && !timeout;

            clearTimeout(timeout);

            timeout = setTimeout(later, wait);

            if (callNow) func.apply(context, args);
        };
    };
    function addListAfterKeypress(event) {
        console.log("event.value", event.target.value);
        // if (inputLength() > 0 && event.which === 13) {
        //this now looks to see if you hit "enter"/"return"
        //the 13 is the enter key's keycode, this could also be display by event.keyCode === 13
        onSearch();
        // }
    }
    input.addEventListener("input", debounce(addListAfterKeypress, 1000));
    // input.addEventListener("keypress", addListAfterKeypress);

    showProducts(mydata);
    enterButton.addEventListener("click", addListAfterClick);
}
