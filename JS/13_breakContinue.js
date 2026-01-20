//break statements
for (let index = 0; index < 5; index++) {
  if(index === 3)break;  //exit the loop when index is 3
  console.log(index);  //print 0,1,2
}

//continue statements
for (let index = 0; index < 10; index++) {
  if(index === 2)continue;  //skip the iteration when index is 2
  if(index === 4)continue;  //skip the iteration when index is 4
  if (index === 6)continue;  //skip the iteration when index is 6
  if (index === 8)continue;  //skip the iteration when index is 8
  console.log(index);  //print 0,1,3,5,7,9
}

//more practical example of continue
for (let index = 0; index < 10; index++) {
  if(index % 2 === 0)continue;  //skip even numbers
  console.log(index);  //print 1,3,5,7,9
}