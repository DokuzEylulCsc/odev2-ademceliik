const arapSayiGirisi = document.getElementById("arapSayiGirisi");
const romanSayiGirisi = document.getElementById("romanSayiGirisi");

arapSayiGirisi.addEventListener("input",(e)=>{
  romanSayiGirisi.value = araptanRomana(e.target.value);
});
romanSayiGirisi.addEventListener("input",(e)=>{
  arapSayiGirisi.value = romandanArapa(e.target.value);

});

function araptanRomana(sayi){
  let roman = "";
  const romanSayiListesi = {M:1000,CM:900, D:500,CD:400, C:100, XC:90,L:50, XV: 40, X:10, IX:9, V:5, IV:4, I:1};
  let a;
  if(sayi <= 3999 && sayi >= 1)
  {
    for(let key in romanSayiListesi){
      a = Math.floor(sayi / romanSayiListesi[key]);
      if(a >= 0){
          for(let i = 0; i < a; i++){
            roman += key;
          }
        }
      sayi = sayi % romanSayiListesi[key];
    }
  }
  else{
    return "Lütfen 1 ile 3999 arasında bir sayı giriniz.";
  }

  return roman;
}
function romandanArapa(romanSayisi){
  romanSayisi = romanSayisi.toUpperCase();
  const romanSayiListesi = ["CM","M","CD","D","XC","C","XL","L","IX","X","IV","V","I"];
  const corresp = [900,1000,400,500,90,100,40,50,9,10,4,5,1];
  let index =  0, num = 0;
  for(let rn in romanSayiListesi){
    index = romanSayisi.indexOf(romanSayiListesi[rn]);
    while(index != -1){
      num += parseInt(corresp[rn]);
      romanSayisi = romanSayisi.replace(romanSayiListesi[rn],"-");
      index = romanSayisi.indexOf(romanSayiListesi[rn]);
    }
  }
  if(num <= 3999 && num >= 1){
    return num;
  }
  else{
    return "Lütfen Roman rakamı giriniz.";
  } 
}
