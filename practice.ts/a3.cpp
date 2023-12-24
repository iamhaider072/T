#include<iostream>
using namespace std;
int main(){
int array[5][6]={{4,5,5,5,6,0},{3,2,3,4,5,1},{3,3,7,5,8,5},{5,6,7,3,7,2},{3,8,4,8,5,2}}
for(i=0;i<5;i++){
 for(j=0;j<6;j++){
    array[i][j]
 }
 
}
cout<<endl;
int runsinover=0;
int recentover=0;
int overnum=0;
for(int overs=0;overs<5;overs++){
    for(int runs=0;runs<6;runs++){
        runsinover=runsinover+array[overs][runs]
    }
    if(runsinover>recentover){
        runsinover=recentover
    }
}
cout<<"Most runs were scored in "<<overnum;
cout<<"The runs scored were: "<<runsinover
}