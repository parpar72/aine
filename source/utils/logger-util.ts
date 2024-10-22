// { Imports (Partial) } \\
import { terminal } from "terminal-kit";

// TODO: Make this dynamic lmao

// { Class } \\
class Logger {
  private getCurrentTime(): string {
    return new Date().toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    });
  }

  private logError(message: string, header: string): void {
    terminal.red("{ ");
    terminal.bgRed(header).black();
    terminal.red(" }");
    terminal.red(" '");
    terminal.yellow(this.getCurrentTime());
    terminal.red(`': ${message}\n`);
  }

  private logSuccess(message: string, header: string): void {
    terminal.green("{ ");
    terminal.bgGreen(header).black();
    terminal.green(" }");
    terminal.green(" '");
    terminal.yellow(this.getCurrentTime());
    terminal.green(`': ${message}\n`);
  }

  private logWarning(message: string, header: string): void {
    terminal.yellow("{ ");
    terminal.bgYellow(header).black();
    terminal.yellow(" }");
    terminal.yellow(" '");
    terminal.yellow(this.getCurrentTime());
    terminal.yellow(`': ${message}\n`);
  }

  private logInfo(message: string, header: string): void {
    terminal.cyan("{ ");
    terminal.bgCyan(header).black();
    terminal.cyan(" }");
    terminal.cyan(" '");
    terminal.yellow(this.getCurrentTime());
    terminal.cyan(`': ${message}\n`);
  }

  private logDebug(message: string, header: string): void {
    terminal.magenta("{ ");
    terminal.bgMagenta(header).black();
    terminal.magenta(" }");
    terminal.magenta(" '");
    terminal.yellow(this.getCurrentTime());
    terminal.magenta(`': ${message}\n`);
  }

  public error(message: string, header: string = "ERR"): void {
    this.logError(message, header);
  }

  public success(message: string, header: string = "SUCCESS"): void {
    this.logSuccess(message, header);
  }

  public warning(message: string, header: string = "WARN"): void {
    this.logWarning(message, header);
  }

  public info(message: string, header: string = "INFO"): void {
    this.logInfo(message, header);
  }

  public debug(message: string, header: string = "DEBUG"): void {
    this.logDebug(message, header);
  }
}

const _logger = new Logger();
export { _logger as logger };
