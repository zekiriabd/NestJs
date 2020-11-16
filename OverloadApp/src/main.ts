class MyClass{
  constructor();
  constructor(msg: string); 
  constructor(msg?: string) {    
    if(msg)
      console.log(msg);
    else
      console.log("TypeScript");
  }
  
  Addition(a:string, b:string):string; 
  Addition(a:number, b:number): number;
  Addition(a:any, b:any):any{
    return a+b;
  }

}
async function main() {
  const myClass = new MyClass("rrrrrrrrrr");
  console.log(myClass.Addition(1,2));
  console.log(myClass.Addition("dddd","ffff"));

}

main();