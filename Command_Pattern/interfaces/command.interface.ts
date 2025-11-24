export interface ICommand {
    execute(): void;
    undo(): void;
    getName(): string;
}