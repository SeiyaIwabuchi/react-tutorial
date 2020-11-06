/*
object型のネスト
*/

interface TypeObj1{
    number1:number;
    obj2:TypeObj2[]; //オブジェクト型の配列
}

interface TypeObj2{
    number2:number,
    str:string
}

let obj1:TypeObj1 = {
    number1:1,
    obj2:[{
        number2:1,
        str:'aaa',
    }],
};