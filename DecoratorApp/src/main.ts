async function main() {
  
  let logConsoleMailDecorator = new LogConsoleMailDecorator(new LogConsoleDecorator(new LoggerBase()));
  console.log(logConsoleMailDecorator.log());
}


interface ILogger
{
  log() : string;
}

class LoggerBase implements ILogger
{
  log(): string {
    return "Message: start debugging";
  }
}


abstract class LoggerDecorator implements ILogger{
  
  loggerBase : ILogger;

  constructor (_loggerBase : ILogger)
  {
    this.loggerBase = _loggerBase;
  }

  log(): string {
    return this.loggerBase.log();
  }
  
}
     
class LogConsoleDecorator extends LoggerDecorator
{
  constructor(_loggerBase : ILogger) {
    super(_loggerBase);
  }

  public log() :string
  {
    return super.log() + " in console,";
  }

}
class LogConsoleMailDecorator extends LoggerDecorator
{
  constructor(_loggerBase : ILogger) {
    super(_loggerBase);
  }

  public log() :string
  {
    return super.log() + " in Mail.";
  }
}

main();