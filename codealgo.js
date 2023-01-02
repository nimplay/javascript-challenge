let input =["b:1","a:-1","b:-4","a:5"]
let helper = []
input.map(item => {
  helper.push(item.split(':'))
})
keys = []
helper.map(item =>
  {
    keys.push(item[0])
  })
set = new Set(keys)
result =[]
let k = 0;
for (const item of set){
  result.push([item, 0])
  for(let i =0; i<helper.length; i++){
    if (item === helper[i][0]) result[k][1] += parseInt(helper[i][1])
  }
  k++
}
result2 = []
result.map(item=> {
  result2.push(item.join(':'))
})
console.log(result2.join(','))
