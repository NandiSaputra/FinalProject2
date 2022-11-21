// login
const exampleInputEmail1 = document.getElementById('exampleInputEmail1');
const exampleInputPassword1 = document.getElementById('exampleInputPassword1');
const form = document.getElementById('form');

form.addEventListener("submit", (e) => {
  if ( exampleInputEmail1.value === "" || exampleInputPassword1.value === "" ) {
    Swal.fire({
  icon: 'error',
  title: 'Oops...',
  text: 'Pastikan Semua field Terisi',
})
  }
  else {
     
    Swal.fire({
  icon: 'success',
  title: 'Berhasil',
  text: 'Selamat anda berhasil login',
}) 
$('#exampleModal').modal('hide')
 
}
  e.preventDefault();
  resetForm();
});
let resetForm = () => {
  exampleInputEmail1.value = "";
  exampleInputPassword1.value = "";
};
// Sign Up
const InputNama = document.getElementById('InputNama');
const InputEmailSignUp = document.getElementById('InputEmailSignUp');
const InputPasswordSignUp = document.getElementById('InputPasswordSignUp');
const formSignup = document.getElementById('formSignup');

formSignup.addEventListener("submit", (e) => {
  if ( InputNama.value === "" || InputEmailSignUp.value === "" || InputPasswordSignUp.value === "") {
   Swal.fire({
  icon: 'error',
  title: 'Oops...',
  text: 'Pastikan Semua field Terisi',
})
  }
  else {
     
    Swal.fire({
  icon: 'success',
  title: 'Berhasil',
  text: 'Selamat Anda Sudah Terdaftar',
}) 
$('#modalSignUp').modal('hide')
 
}
  e.preventDefault();
  resetFormSignUp();
});
let resetFormSignUp = () => {
  InputNama.value ="";
  InputEmailSignUp.value = "";
  InputPasswordSignUp.value = "";
};
// Pre Order
const InputNamaPre = document.getElementById('InputNamaPre');
const InputEmailPre = document.getElementById('InputEmailPre');
const InputPhone = document.getElementById('InputPhone');
const selectPre = document.getElementById('selectPre')
const formPre = document.getElementById('formPre');

formPre.addEventListener("submit", (e) => {
  if ( InputNamaPre.value === "" || InputEmailPre.value === "" || InputPhone.value === "" || selectPre.value === "") {
   Swal.fire({
  icon: 'error',
  title: 'Oops...',
  text: 'Pastikan Semua field Terisi',
})
  }
  else {
     
    Swal.fire({
  icon: 'success',
  title: 'Berhasil',
  text: 'Selamat Anda Sudah Pre Order',
}) 
$('#modalPreOrder').modal('hide')
 
}
  e.preventDefault();
  resetFormPre();
});
let resetFormPre = () => {
  InputNamaPre.value ="";
  InputEmailPre.value = "";
  InputPhone.value = "";
  selectPre.value = "";
};


var typed = new Typed('.typed', {
  strings: ["Futsal", "Sepeda ","Running","Sepak Bola","Voli","basket"],
  typeSpeed: 30,
  loop: true,
});







