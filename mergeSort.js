function CArray(numElements) {
   this.dataStore = [];
   this.toString = toString;

   this.numElements = numElements;

   this.setData = setData;                 //随机生成一组数
   this.mergeSort=mergeSort;
   this.mergeArrays=mergeArrays;
   for (var i = 0; i < numElements; ++i) {
      this.dataStore[i] = i;
   }
}
function setData() {
   for (var i = 0; i < this.numElements; ++i) {
      this.dataStore[i] = Math.floor(Math.random() * 
                          (this.numElements+1));
   }
}

function toString() {
   var retstr = "";
   for (var i = 0; i < this.dataStore.length; ++i) {
      retstr += this.dataStore[i] + " ";
      if (i > 0 && i % 10 == 0) {
         retstr += "\n";
      }
   }
   return retstr;
}
function mergeSort() {
        if (this.dataStore.length < 2) {
        return;
        } 
        var step = 1;
        var left, right;
        while (step < this.dataStore.length) {
        left = 0;
        right = step;
        while (right + step <= this.dataStore.length) {
        mergeArrays(this.dataStore, left, left+step, right, right+step);
        left = right + step;
        right = left + step;
        } 
        if (right < this.dataStore.length) {
        mergeArrays(this.dataStore, left, left+step, right, this.dataStore.length);
        } 
        step *= 2;
    }
}

function mergeArrays(arr,startLeft, stopLeft, startRight, stopRight) {
    var rightArr = new Array(stopRight - startRight + 1);
    var leftArr = new Array(stopLeft - startLeft + 1);
    k = startRight;
    for (var i = 0; i < (rightArr.length-1); ++i) {
        rightArr[i] = arr[k];
        ++k;
    } 
    k = startLeft;
    for (var i = 0; i < (leftArr.length-1); ++i) {
        leftArr[i] = arr[k];
        ++k;
    } 
    rightArr[rightArr.length-1] = Infinity; // 哨兵值
    leftArr[leftArr.length-1] = Infinity; // 哨兵值
    var m = 0;
    var n = 0;
    for (var k = startLeft; k < stopRight; ++k) {
        if (leftArr[m] <= rightArr[n]) {
        	arr[k] = leftArr[m];
        	m++;
    	} 
    	else {
        	arr[k] = rightArr[n];
        	n++;
    	}
    } 
console.log("left array - ", leftArr[m]);
console.log("right array - ", rightArr[n]);
}
var nums = new CArray(10);
nums.setData();
console.log(nums.toString());
nums.mergeSort();
console.log(nums.toString());