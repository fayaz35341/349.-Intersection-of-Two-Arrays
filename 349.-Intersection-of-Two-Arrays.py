class Solution:
    def intersection(self, arr1, arr2):
        #code here
        iA=[]
        i=j=0
        while i<len(arr1) and j<len(arr2):
            if arr1[i]<arr2[j]:
                i+=1
            elif arr1[i]>arr2[j]:
                j+=1 
            else:
                if not iA or arr1[i] != iA[-1]:
                    iA.append(arr1[i])
                i+=1
                j+=1
        return iA
