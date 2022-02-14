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

    // calculate Grand total
    calculateGrandTotal()

}

// 
function getInputValue(product) {
    const productInput = document.getElementById(product + '-number');
    const productNumber = parseInt(productInput.value);
    return productNumber;
}

// calculate subtotal,tax & grand total
function calculateGrandTotal() {

    const phoneTotal = getInputValue('phone') * 1219;
    const caseTotal = getInputValue('case') * 59;
    const subtotal = phoneTotal + caseTotal;
    const tax = subtotal / 10
    const grandTotal = subtotal + tax;

    // update on the html
    document.getElementById('sub-total').innerText = subtotal;
    document.getElementById('tax').innerText = tax;
    document.getElementById('grand-total').innerText = grandTotal;



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
