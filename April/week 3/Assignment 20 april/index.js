let x=0
function mulBy2(any){
    var y = any / 2
    return y
}
const arr1 = [11,21,31,41,51]
// console.log(arr1);
const arr2 = []
for(let i=0;i<arr1.length;i++){
    var z = mulBy2(arr1[i])
    arr2.push(z)

}
console.log(arr2)

const arr3 = [1,2,3,4,5]
const arr4 = []

for(let i=0;i<arr3.length;i++){
    var z2 = mulBy2(arr3[i])
    arr4.push(z2)

}
console.log(arr4)

const arr5 = [8,7,6,5,3]
const arr6 = []

for(let i=0;i<arr5.length;i++){
    var z3 = mulBy2(arr5[i])
    arr6.push(z3)

}
console.log(arr6)

const a = document.createElement('div')
a.innerText = "["+arr2+"]"
document.body.appendChild(a)

const b = document.createElement('div')
b.innerText = "["+arr4+"]"
document.body.appendChild(b)

const c = document.createElement('div')
c.innerText = "["+arr6+"]"
document.body.appendChild(c)