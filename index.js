// Список курсов
let courses = [
  { name: "Courses in England", prices: [0, 100] }, 
  { name: "Courses in Germany", prices: [500, 650] }, 
  { name: "Courses in Italy", prices: [100, 200] }, 
  { name: "Courses in Russia", prices: [0, 400] },
  { name: "Courses in China", prices: [50, 250] },
  { name: "Courses in USA", prices: [200, 400] },
  { name: "Courses in Kazakhstan", prices: [56, 324] },
  { name: "Courses in France", prices: [0, 630] },
];


function filter(arr,prop,value1,value2) {
  let result = []
  copy = [...arr]
  for (const item of copy) {
    if (((item[prop])[0] >= value1 && (item[prop])[0] < (item[prop][1])) && (item[prop])[1] <= value2) 
    result.push(item)
  }
  return result
}

console.log(filter(courses, 'prices', 0, 500));

function render(arr) {
  const list = document.querySelector('.courses-list')
  list.innerHTML = ''

  const inpValue1 = document.getElementById('inp-value1').value,
  inpValue2 = document.getElementById('inp-value2').value

  let newArr = [...arr]
  if(inpValue1 && inpValue2) newArr = filter(newArr, 'prices', inpValue1,inpValue2)
  

  for (const course of newArr) {
    const li = document.createElement("li")
    li.textContent = course.name + ', стоимость: от ' + course.prices[0] +' до ' + course.prices[1]
    list.append(li)
  }
}

document.getElementById('filter-form').addEventListener('submit', function(event) {
  event.preventDefault()
  render(courses)
})

render(courses)
// Варианты цен (фильтры), которые ищет пользователь
// let requiredRange1 = [null, 200];
// let requiredRange2 = [100, 350];
// let requiredRange3 = [200, null];










