
// index ganjil genap
const randomArray = (length, max) => 
  Array(length).fill().map(() => Math.round(Math.random() * max));

let arr = randomArray(100,100);

let even = [];
let odd = [];

for (let i = 0; i < arr.length; i++) {
if (i % 2 == 0) {
    even.push(arr[i]);
} else {
    odd.push(arr[i]);
}
}

console.log('Random Array : ', arr);

console.log("Even array is : " + even);
console.log("Odd array is : " + odd);



// function mencari nilai min
function arrayMin(arr) {
    var len = arr.length, min = Infinity;
    while (len--) {
      if (arr[len] < min) {
        min = arr[len];
      }
    }
    return min;
  };
  
//   function mencari nilai max
  function arrayMax(arr) {
    var len = arr.length, max = -Infinity;
    while (len--) {
      if (arr[len] > max) {
        max = arr[len];
      }
    }
    return max;
  };

//   funtion mencari total
function total(arr) { 
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

// function mencari rata2

function rata(arr) {
    var total = 0;
for(var i = 0; i < arr.length; i++) {
    total += arr[i];
}
var avg = total / arr.length;
return avg;
}

//   genap
  maxgenap = arrayMax(even);
  mingenap = arrayMin(even);
  console.log('angka max genap : ', maxgenap);
  console.log('angka min genap : ',mingenap);

  // angka ganjil 
  maxganjil = arrayMax(odd);
  minganjil = arrayMin(odd);
  console.log('angka max ganjil : ', maxganjil);
  console.log('angka min ganjil : ',minganjil);

//   total genap (totalA)

totalA = total(even);
console.log(' nilai total genap : ',totalA);

// total ganjil (totalB)
totalB = total(odd);
console.log(' nilai total ganjil : ',totalB);


// rata-rata genap (rataA)

rataA = rata(even);
console.log('nilai rata2 genap : ',rataA);

// rata-rata ganjil (rataB)
rataB = rata(odd);
console.log('nilai rata2 ganjil : ',rataB);


                // Perbandingan
// nilai min
console.log('===Perbandingan===');
if (mingenap > minganjil) {
    console.log('Min lebih besar array Genap');
}
else if (mingenap < minganjil) {
    console.log('Min lebih besar array Ganjil');
}
else {
    console.log('sama');
}
// nilai max
if (maxgenap < maxganjil) {
    console.log('Max lebih besar array Ganjil');
}
else if (maxgenap > maxganjil) {
    console.log('max lebih besar array Genap');
}
else {
    console.log('sama')

}
// total
if (totalA > totalB) {
    console.log('Total lebih besar array Genap');
}
else if (totalA < totalB) {
    console.log('Total lebih besar array Ganjil');
}
else {
    console.log('sama')

}

// Rata2
if (rataA > rataB) {
    console.log('Rata-rata lebih besar array Genap');
}
else if (rataA < rataB) {
    console.log('Rata=rata lebih besar array ganjil');
}
else{
    console.log('sama')
}
