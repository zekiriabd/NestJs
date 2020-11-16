import { 
  SubscribeMessage, 
  WebSocketGateway, 
  OnGatewayConnection, 
  WebSocketServer, 
  MessageBody
} from '@nestjs/websockets';

@WebSocketGateway(3001)
export class AppGateway implements OnGatewayConnection{
   
  @WebSocketServer()
   wss;
   let x : number;
  
   @SubscribeMessage("SandMessage")
   SandMessage(@MessageBody() message: string) {
    this.wss.emit("ReceiveMessage", message);
   }

   handleConnection(client: any, ...args: any[]) {}


}
