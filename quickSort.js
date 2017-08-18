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
     	array[low]=flag;
     	return low;
    },
    quickSortN = function(low, high){
    	var st = [];
    	if(low<high){
    		var mid=partition(low,high);
         	if(low<mid-1){
             	st.push(low);
             	st.push(mid-1);
         	}
         	if(mid+1<high){
             	st.push(mid+1);
             	st.push(high);
         	}
         	while(st.length !== 0){
             	var q=st[st.length - 1];
	            st.pop();
             	var p=st[st.length - 1];
             	st.pop();
             	mid=partition(p,q);
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
