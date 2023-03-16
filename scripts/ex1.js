let customerType;
let invoiceTotal;
let discountPercent;
let discountAmount;
let newInvoiceTotal;

window.document.write('<h1>Welcome to the Invoice Program</h1>');


customerType = window.prompt('Enter Customer Type (r/w)');

invoiceTotal = parseFloat(window.prompt('Enter Inovice Total'));

if (customerType === 'r') {
    if (invoiceTotal > 0 && invoiceTotal < 100) {
        discountPercent = 0;
    } else if (invoiceTotal >= 100 && invoiceTotal < 250) {
        discountPercent = .1;
    } else if (invoiceTotal >= 250 && invoiceTotal < 500) {
        discountPercent = .2;
    } else if (invoiceTotal >= 500) {
        discountPercent = .3;
    }
} else if (customerType === 'w') {
    if (invoiceTotal > 0 && invoiceTotal < 500) {
        discountPercent = .4;
    } else if (invoiceTotal >= 500) {
        discountPercent = .5;
    }
} else {
    discountPercent = 0;
    alert('You Must Type r or w');
    customerType = window.prompt('Enter type (r/w)');
}

discountAmount = invoiceTotal * discountPercent;

newInvoiceTotal = invoiceTotal - discountAmount;

window.document.write('Invoice Total: ' + String(invoiceTotal) + '<br>');
window.document.write('Discount Percent: ' + String(discountPercent) + '<br>');
window.document.write('Discount Amount: ' + String(discountAmount) + '<br>');

window.document.write('<strong>New Invoice Total: ' + String(newInvoiceTotal) + '<strong>');
