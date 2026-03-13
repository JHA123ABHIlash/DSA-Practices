#include<iostream>
#include<vector>
using namespace std;

int MaxSumSubarray(int arr[],int k,int n){
    int low=0;
    int high=k;
    int sum=0;
    for(int i=0;i<k;i++){
        sum+=arr[i];
    }
    int res=sum;

    while(high<n){
        sum=sum-arr[low];
        sum=sum+arr[high];
         res=max(res,sum);
        low++;
        high++;
    }
    return res;
}

int main(){
    int Arr[]={100,200,300,400};
    int k=2;
     int n=sizeof(Arr) / sizeof(Arr[0]);
    cout<<MaxSumSubarray(Arr,k,n)<<endl;
}