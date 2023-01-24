import { ICommandExececutor } from "../../core/executor/command.types.js";

export interface IFfmpegInput {
    width: number;
    height: number;
    path: string;
    name: string;
}

export interface ICommandExececutorFfmpeg extends ICommandExececutor {
    output: string;
}