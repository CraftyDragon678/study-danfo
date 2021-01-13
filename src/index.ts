import * as dfd from "danfojs-node";

const s = new dfd.Series([20, 21, 22, 23]);
s.print();

s.describe().print();

const d1 = new dfd.DataFrame([
  { 온도: 20, 요일: '월', 판매량: 40 },
  { 온도: 21, 요일: '월', 판매량: 42 },
  { 온도: 22, 요일: '월', 판매량: 44 },
  { 온도: 23, 요일: '월', 판매량: 46 },
]);

const d2 = new dfd.DataFrame({
  온도: [20, 21, 22, 23],
  요일: ['월', '월', '월', '월'],
  판매량: [40, 42, 44, 46],
});

d1.print();
d2.print();

// (async () => {
//   const data = await dfd.read_csv('https://gist.githubusercontent.com/egoing/43799f48b55b5eb2a8b37652eab72318/raw/3a207dd85d0b74968426e65ae2cee4cb1d4aef4f/lemon.csv');
//   data.print();
// })();

d1.describe().print();

d1['온도'].print();

// const s = new dfd.Series([20, 21, 22, 23]);
// series, series, dataframe
console.log(s, d1['온도'], d1);

d1.loc({ columns: ['온도', '판매량'] }).print();
d1.loc({ rows: [1, 3] }).print();
d1.loc({ columns: ['온도', '판매량'], rows: [1, 3] }).print();

d1.query({
  column: '온도', is: '>', to: 20,
}).print();

d1.query({
  column: '온도', is: '>', to: 20,
}).query({
  column: '판매량', is: '<', to: 46,
}).print();

const newRow = new dfd.DataFrame({
  온도: [24, 25], 요일: ['월', '월'], 판매량: [48, 50],
});
d1.append(newRow).print();

d1.addColumn({ column: '비', value: [1, 0, 1, 0] });
d1.print();

// 행
d1.drop({ axis: 0, index: [0] }).print();
// 열
d1.drop({ axis: 1, columns: ['온도'] }).print();


(async () => {
  console.log(await d1.to_json());
})();

console.log((d1.tensor as any).print());
