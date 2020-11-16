import { NotImplementedException } from "@nestjs/common";


enum TRANSPORT_TYPE
{
    Bike,
    Car
}

async function main() {

    let car = TransportFactory.CreateIns(TRANSPORT_TYPE.Car);
    car.giveRide();

    let bike = TransportFactory.CreateIns(TRANSPORT_TYPE.Bike);
    bike.giveRide();

    
}

interface ITransport
{
    giveRide(): void;
}

class Car implements ITransport {
    public giveRide(): void {
        console.log("Give Ride By Car");
    }
  }
  
  class Bike implements ITransport {
    public giveRide():void {
      console.log("Give Ride By Bike");
    }
  }
  
class  TransportFactory
{
           
    public static CreateIns(type: TRANSPORT_TYPE) : ITransport
    {
          switch (type)
          {
              case TRANSPORT_TYPE.Bike:
                  return new Bike();
              case TRANSPORT_TYPE.Car:
                  return new Car();
              default:
                  throw new NotImplementedException();
          }
    }
  
  }

main();