
async function main() {
  // const arr:number[] = [3,6,9] ;  console.log(IsAverage(arr));
  // console.log(IsBidirectional("ABCCBA")); console.log(IsBidirectional("ABXCBA"));
  // console.log(isDoublicat("ABCDEFGH")); // False  console.log(isDoublicat("ABCDDDDEFGH")); // TRUE 
  //const array2:number[] = [ 0,1,2,3, ]; console.log(NearToMax(array2));
  //console.log(NearToChar('P',"QYUMEPQBTRMBFQX"));
  //const arra:any[] = [ "",1.5,2,3]; console.log(BestType(arra));
  //console.log(Fibonacci(15));
  console.log(FizzBuzzCase("AbcDxxxxxxA"));
}

function FizzBuzzCase(str:string) : string {
return str.split('').map(x => x === x.toUpperCase() ? "Fizz" : "Buzz").join('');
}

function Fibonacci(n:number) : number
{
    if (n < 1 || n > 100) { return -1; }

    const fib = [];
    fib[0] = 0;
    fib[1] = 1;
    for (var i = 2; i <= n; i++)
    {
      fib[i] = fib[i - 2] + fib[i - 1];
    }
    return fib[n];
}

function NearToChar(c : string, str : string) : string
{
  const asChar: number   = c.toUpperCase().charCodeAt(0);
  const asList: number[] = str.toUpperCase().split('').filter((v, i, a) => a.indexOf(v) === i).map(x=> x.charCodeAt(0));
  asList.sort();  
  const next = asList.filter(x=> x > asChar).shift(); //[0]
  const pre  = asList.filter(x=> x < asChar).slice(-1)[0]; //[length - 1]
  const poNext = next - asChar;
  const poPre = Math.abs(pre - asChar);
  return (poNext == poPre ||pre == 0 || poNext < poPre) ? String.fromCharCode(next) : String.fromCharCode(pre) ;  
}

function NearToMax(array : number[]) : number
{
  return Math.max(...array.filter(x => x != Math.max(...array)));
}


function isDoublicat(str:string): boolean {
  //return str.length > str.split('').filter((v, i, a) => a.indexOf(v) === i).length;
  return str.length > [...new Set((str.split('')))].length;
}

function IsBidirectional(str : string): boolean {
  return  str === str.split("").reverse().join("");
}

function IsAverage(arr: number[]): boolean {
  const avg = (arr.reduce((a, b) => a + b, 0) / arr.length) || 0;
  return Math.max(...arr) - Math.min(...arr) === avg;
}

function BestType(arra:any[]) : String
{
    var s = arra.filter(x => typeof x == "string");
    var d = arra.filter(x => typeof x == "number" && !Number.isInteger(x));
    var i = arra.filter(x => Number.isInteger(x) );
    
    const max = Math.max(i.length,Math.max(s.length, d.length));

    if (s.length== max) return "String";
    if (d.length == max) return "Double";
    if (i.length == max) return "Int32";

    return "";
}



main();