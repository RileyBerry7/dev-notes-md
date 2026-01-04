/********************************************************************
 * Hello World — TypeScript Syntax Tour
 ********************************************************************/

// Primitive types
const greeting: string = "Hello";
let count: number = 1;
let isActive: boolean = true;

// Arrays & tuples
const targets: string[] = ["World", "TypeScript"];
const versionInfo: [string, number] = ["TS", 5];

// Enums
enum LogLevel {
    INFO,
    WARN,
    ERROR
}

// Type alias & interface
type Message = string;

interface Printer {
    print(msg: Message): void;
}

// Function (typed params + return)
function formatMessage(greet: string, target: string): Message {
    return `${greet}, ${target}!`;
}

// Arrow function
const log = (msg: Message, level: LogLevel = LogLevel.INFO): void => {
    console.log(`[${LogLevel[level]}] ${msg}`);
};

// Class with access modifiers
class ConsolePrinter implements Printer {
    constructor(private prefix: string = "") {}

    print(msg: Message): void {
        log(this.prefix + msg);
    }
}

// Object literal
const printer: Printer = new ConsolePrinter("→ ");

// Control flow
for (const target of targets) {
    if (isActive) {
        const message = formatMessage(greeting, target);
        printer.print(message);
        count++;
    }
}

// Nullish / optional example
function maybePrint(msg?: string | null): void {
    console.log(msg ?? "Nothing to print");
}

maybePrint("Done!");
maybePrint(null);

