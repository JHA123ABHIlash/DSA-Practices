#include<iostream>
#include<vector>
#include<climits>   
using namespace std;

// Minimum Size Subarray Sum
int SubarraySum(vector<int>arr,int target){
    int n= arr.size();
    int high=0;
    int low=0;
    int sum=0;
    int res = INT_MAX ;

    while (high<n)
    {
        sum+=arr[high];
        while (sum>=target){
            int len=high-low+1;
            res=min(res,len);
            sum-=arr[low];
            low++;
        }
        high++;
    }
    return res==INT_MAX ? 0: res;
    
}

int main(){

    vector<int> arr={1,2,4,4};
    int target=4;
    cout<<SubarraySum(arr,target)<<endl;
}