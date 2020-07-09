let num =[5,8,2,9,3]

num.push(7)
console.log(num)
console.log(num.length)
num = num.sort()
for(let pos=0; pos<num.length; pos++){
    console.log(num[pos])
} 
for(let pos in num){
    console.log(num[pos])
}
console.log(num.indexOf(9))