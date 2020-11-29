// bt1
var array1_1 = new Array (1,2,3,4,5,6,-1,9,7,5,-9);
console.log(array1_1);
    for (var i = 0; i < array1_1.length; i++) {
      if (array1_1[i]%2 == 0) {
        array1_1.push(array1_1.splice(i, 1)[0]);
      }else{
      }
    }
    console.log("Mảng chẵn: ");
    console.log(array1_1);



// cách2
console.log("------------------------------");
var array1 = new Array (1,2,3,4,5,6,-1,9,7,5,-9);
console.log(array1);
var evennumber = array1.filter(functionEvenNumber);
console.log("Số chẵn: ");
console.log(evennumber);
function functionEvenNumber(value, index, array){
    return value % 2 == 0;
}

var negative = array1.filter(functionNegative);
console.log("Số âm: ");
console.log(negative);
function functionNegative(value, index, array){
    return value < 0;
}

var odd = array1.filter(functionOdd);
console.log("Số lẻ: ");
console.log(odd);
function functionOdd(value, index, array){
    return value % 2 == 1;
}

// bt2 đảo chuỗi
console.log("chuỗi: toong");
function reverse(str) {
    return str.split("").reverse().join("")  //Chuyển chuỗi thành mảng bằng "split"
                                            //reverse để đảo các pt trong mảng
                                            //join để ghép các phần tử trong mảng thành một chuỗi
  }
console.log("Đảo chuỗi:");
console.log(reverse("toong"));

// bt3 tìm số lớn thứ 2
var array3 = new Array (1,7,32,4,5);
console.log("Mảng: ");
console.log(array3);
console.log("giá trị Max thứ 2: ");
console.log(array3[1]);
function arrayMax(arr){
    var leng = arr.length;
    var max = -Infinity;
    while (leng--){
        if(arr[leng]>max){
            max = arr[leng];
        }
    }
    return max;
}