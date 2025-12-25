class Solution {
    intersection(arr1, arr2) {
        // code here
        let iA=[]
        let i=0
        let j=0
        while( i<arr1.length && j<arr2.length){
            if (arr1[i]<arr2[j]){
                i++
            }
            else if (arr1[i]>arr2[j]){
                j++
            }
            else{
                if (iA.length===0 || arr1[i] !== iA[iA.length-1]){
                    iA.push(arr1[i])
                }
                i++
                j++
            }
        }
        return iA
    }
}
