/* elementlerime ulaşıp değer ataması yapacağım */
const ekran = document.querySelector("#ekran");

const length = document.querySelector("#len");

const upper = document.querySelector("#upper");

const lower = document.querySelector("#lower");

const number = document.querySelector("#number");

const symbol = document.querySelector("#symbol");

const generate = document.querySelector("#generate");

/* büyük-küçük harf, sayı ve sembollerimi bir değere atıyorum. */
const buyukHarf = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const kucukHarf = "abcdefghijklmnopqrstuvwxyz";
const sayi = "0123456789";
const sembol = "!@#$%^&*()_+=";

/* random olarak küçük harf getiren method */
const getLowerCase = () => {
  return kucukHarf[Math.floor(Math.random() * kucukHarf.length)];
};

/* random olarak büyük harf getiren method */
const getUpperCase = () => {
  return buyukHarf[Math.floor(Math.random() * buyukHarf.length)];
};

/* random olarak sayı harf getiren method */
const getNumber = () => {
  return sayi[Math.floor(Math.random() * sayi.length)];
};

/* random olarak sembol harf getiren method */
const getSymbol = () => {
  return sembol[Math.floor(Math.random() * sembol.length)];
};

/* kullanıcının seçimlerine göre şifre üreten method */

const sifreUret = () => {
  const len = length.value;
  let password = "";

  if (upper.checked) {
    password += getUpperCase();
  }
  if (lower.checked) {
    password += getLowerCase();
  }
  if (number.checked) {
    password += getNumber();
  }
  if (symbol.checked) {
    password += getSymbol();
  }
  for (let i = password.length; i < len; i++) {
    const x = tamamla();
    password += x;
  }
  ekran.innerText = password;
};
/*kullanıcının seçimleriyle belirlediği şifre uzunluğu arasındaki boşluğu
yine kullanıcının seçimlerine göre tamamlama methodu  */
const tamamla = () => {
  const ekle = [];
  if (upper.checked) {
    ekle.push(getUppercase());
  }
  if (lower.checked) {
    ekle.push(getLowercase());
  }
  if (number.checked) {
    ekle.push(getNumber());
  }
  if (symbol.checked) {
    ekle.push(getSymbol());
  }
  if (ekle.length === 0) return "";
  return ekle[Math.floor(Math.random() * ekle.length)];
};

/* buton tıklandığında sifreUret methodum gelsin */
generate.addEventListener("click", sifreUret);
