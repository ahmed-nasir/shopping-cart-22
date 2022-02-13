function updateProductNumber(product, price, issPluss) {
    const productInput = document.getElementById(product + '-number');
    let productNumber = document.getElementById(product + '-price');
    const casePriceText = productNumber.innerText
    const caseNumberText = productInput.value;
    if (issPluss) {
        const updateCaseNum = parseInt(caseNumberText) + 1;
        productInput.value = updateCaseNum;
        let casePriceNum = price * updateCaseNum;
        productNumber.innerText = casePriceNum;


    } else if (caseNumberText > 0) {
        const updateCaseNum = parseInt(caseNumberText) - 1;
        productInput.value = updateCaseNum;

        let casePriceNum = parseInt(casePriceText) - price;
        productNumber.innerText = casePriceNum;
    }

}

// Handle phone increase decrease events

document.getElementById('phone-plus').addEventListener('click', function () {
    updateProductNumber('phone', 1219, true);
});
document.getElementById('phone-minus').addEventListener('click', function () {
    updateProductNumber('phone', 1219, false);
});


// handle case increase decrease events
document.getElementById('item-plus').addEventListener('click', function () {
    updateProductNumber('case', 59, true);
});

document.getElementById('item-minus').addEventListener('click', function () {
    updateProductNumber('case', 59, false);
});
