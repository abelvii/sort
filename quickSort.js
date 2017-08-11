//非递归实现想法主要是通过用栈的属性，但是js没有栈这个数据结构，所以用数组的push和pop去实现栈的结构
var array,
	quickSort = function(arr){
		array = arr;
		quickSortN(0,array.length - 1);
	},
    partition = function(low,high){
    	var flag = array[low];
    	while(low<high){
         	while(low<high && array[high]>=flag)
                high--;
            array[low]=array[high];
            while(low<high && array[low]<=flag)
            	low++;
            array[high]=array[low];
        }
     	//此时low==high
     	array[low]=flag;
     	return low;
    },
    quickSortIs = function(low, high){
    	if(low < high){
    		var mid = partition(low,high);
    		quickSortIs(low,mid-1);
    		quickSortIs(mid+1,high);
    	}
    },
    quickSortN = function(low, high){
    	var st = [];
    	if(low<high){
    		var mid=partition(low,high);//一次划分之后，把四个元素入站
         	if(low<mid-1){
             	st.push(low);
             	st.push(mid-1);
         	}
         	if(mid+1<high){
             	st.push(mid+1);
             	st.push(high);
         	}
         	//其实就是用栈保存每一个待排序子串的首尾元素下标，下一次while循环时取出这个范围，对这段子序列进行partition操作
         	while(st.length !== 0){
             	var q=st[st.length - 1];
	            st.pop();
             	var p=st[st.length - 1];
             	st.pop();
             	mid=partition(p,q);
			//当划分到最大的len-1和len-2个元素时，下面的判断就不执行了，然后把栈顶这两个元素弹出，然后栈不为空，继续弹出，执行下面的判断。最后站元素全部弹出。。
             	if(p<mid-1){
                 	st.push(p);
                 	st.push(mid-1);
             	}
             	if(mid+1<q){
                 	st.push(mid+1);
                 	st.push(q);      
        		}
    		}
    	}
    };
exports.quickSort = quickSort;
