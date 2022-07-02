// varによる再宣言
// var nickname = 'taro'
// console.log(nickname)
// var nickname = 'ichiro'
// console.log(nickname)

// varのよる再代入
// var nickname = 'taro'
// console.log(nickname)
// nickname = 'jiro'
// console.log(nickname)

// varのスコープ
// グローバルスコープ
// var str = 'WEBCAMP'
//  function foo() {
//   console.log(str)
// 関数スコープ
  // var y = 'hello'
//  }
//  foo()
// 有効範囲外でエラーになる
//  console.log(y)

// letのスコープ
// function foo() {
//   let x = 'webcamp'
// {
//   let y = 'hello webcamp'
// }
// console.log(x)
// ブロック外から参照したためエラーになる
// console.log(y)
// }
// foo()

// for (let i = 0; i < 10; i++) {
// console.log(i)
// }
// ブロック外から参照したためエラー
// console.log(i)

// 巻き上げ(ホイスティング)
// var str = 'webcamp'
// function foo() {
//   console.log(str)
//   var str = 'dmm webcamp'
//   console.log(str)
// }
// foo()