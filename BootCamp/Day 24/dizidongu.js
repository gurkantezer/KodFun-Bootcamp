let dizi = ["betül", "seviye", "güneş", "ati", "nur", "gürkan", "burak"];

console.log("dizi uzunluğu" + dizi.length);
console.log("ilk eleman" + dizi[0]);
console.log("son eleman" + dizi[dizi.length - 1]);

// dizi birleştirme

let birleştirme = dizi.join("<>");
console.log(birleştirme);

console.log("--------------");

// dizi üzeride dönme yöntemleri

// 1 : for

for (let i = 0; i < dizi.length; i++) console.log(i + " " + dizi[i]);

console.log("--------------");

// 2: for.. in = index no verir

for (let i in dizi) console.log(i + "" + dizi[i]);

console.log("--------------");

// 3: for .. of = çğeyi verir.

for (const oge of dizi) console.log(oge);

console.log("--------------");

// 4: forEach metodu

dizi.forEach(function (value, index) {
  console.log(index + " : " + value);
});

console.log("--------------");

// 4: kısa yazım (arrow func.)
//      girenler     çıkanlar
dizi.forEach((v, i) => console.log(i + " > " + v));

console.log("--------------");

// 5 : while

let sayac = 0;

while (sayac < dizi.length) console.log(sayac + "|" + dizi[sayac++]);

console.log("--------------");

for (let i = dizi.length - 1; i >= 0; i--) {
  let oge = dizi[i];
  console.log(i + " * " + oge);
}
