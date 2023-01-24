import { ChildProcessWithoutNullStreams } from "child_process";
import { IStreamLogger } from "../handlers/stream-logger.interface.js";
import { ICommandExececutor } from "./command.types.js";

export abstract class CommandExecutor<Input> {
    constructor(private logger: IStreamLogger) {}

    public async execute() {
        const input = await this.prompt();
        const command = this.build(input);
        const stream = this.spawn(command);
        this.proccessStream(stream, this.logger);
    }

    protected abstract prompt(): Promise<Input> ;
    protected abstract build(input: Input): ICommandExececutor;
    protected abstract spawn(command: ICommandExececutor): ChildProcessWithoutNullStreams;
    protected abstract proccessStream(stream: ChildProcessWithoutNullStreams, logger: IStreamLogger): void;
}

