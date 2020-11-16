async function main() {
  
  var MySingletonObj1 = MySingleton.GetMySingletonIns(); 
  
  var MySingletonObj2 = MySingleton.GetMySingletonIns(); 
  
  if(MySingletonObj1 === MySingletonObj2) {
    console.log('Singleton works, both variables contain the same instance.');
  } 
  else {
    console.log('Singleton failed, variables contain different instances.');
  }  

}

class  MySingleton
{
  private static MySingletonIns:MySingleton = null;

  public static GetMySingletonIns():MySingleton
  {
     if (!this.MySingletonIns)
      {
        this.MySingletonIns = new MySingleton();
      }

      return this.MySingletonIns;
  }


  public CallSomethingMethod() : void
  {
      console.log("Call Something Method is called");
  }

}


main();