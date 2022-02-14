function updateProductNumber(product, price, issPluss) {
    const productInput = document.getElementById(product + '-number');
    let caseNumberText = productInput.value;

    if (issPluss) {
        caseNumberText = parseInt(caseNumberText) + 1;

        console.log('increasing calculation is doing here', caseNumberText);
    } else if (caseNumberText > 0) {
        caseNumberText = parseInt(caseNumberText) - 1;

        console.log('decrise calculation is doing here', caseNumberText);
    }
    productInput.value = caseNumberText;

    // Product price
    const productNumber = document.getElementById(product + '-price');
    // calculate product price with product quantity & unit price
    console.log('outsite of function')

    productNumber.innerText = caseNumberText * price;

    console.log('Total calculation is done!', productNumber);

}
// calculate subtotal,tax & grand total





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
