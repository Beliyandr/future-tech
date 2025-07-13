const weather = [
  { date: '2021.02.01', maxTemp: 20, decr: 'солн' },
  { date: '2021.02.02', maxTemp: 30, decr: 'солн' },
  { date: '2021.02.01', maxTemp: 20, decr: 'хол' },
  { date: '2021.02.01', maxTemp: 20, decr: 'дождь' },
  { date: '2021.02.01', maxTemp: 20, decr: 'дождь' },
]

const b = weather.reduce((acc, item) => {
  return acc[item.decr] ? acc[item.decr].push(item) : acc[item.decr] = [item], acc
}, {})

const c = (weather) => {
  return weather.reduce((acc, item) => {
    const key = item.decr;
    if (!acc[key]) {
      acc[key] = [];
    }
    acc[key].push(item)
    return acc;
  }, {})
}

const d = weather.reduce((acc, item) => {
  if (!acc[item.decr]) {
    acc[item.decr] = [];
  }
  acc[item.decr].push(item);
  return acc;
}, {})

const e = weather.reduce((acc, item) => {

  acc[item.decr] ? acc[item.decr] = [...acc[item.decr], item] : acc[item.decr] = [item];
  return acc
}, {})

console.log('b', b)
console.log('c', c(weather))
console.log('d', d)
console.log('e', e)
