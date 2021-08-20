const productName = document.getElementById('productName');
const productLink = document.getElementById('productLink');
const productPrice = document.getElementById('productPrice');
const btnForm = document.getElementById('btnForm');
btnForm.setAttribute('disabled', true);

function checkForm() {
	if (productName.value != '' && productLink.value != '' && productPrice.value != '') {
		console.log('ok');
		btnForm.removeAttribute('disabled');
		btnForm.classList.toggle('btn-form_valid');
	} 
	return;
}

checkForm();
