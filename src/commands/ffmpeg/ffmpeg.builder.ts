export class FFmpegBuilder {
    private inputPath: string;
    private options: Map<string, string> = new Map();

    constructor() {
        this.options.set('-c:v', 'libx264');
    }

    input(inputPath: string): this {
        this.inputPath = inputPath;
        return this;
    }

    output(outputPath: string): string[] {
        if (!this.inputPath) {
            throw new Error('Parameter input not set');
        }
        const args: string[] = ['-i', this.inputPath]
        this.options.forEach((item, index) => {
            args.push(index);
            args.push(item);
        });
        args.push(outputPath);
        return args;
    }

    setVideoSize(width: number, height: number): this {
        this.options.set('-s', `${width}x${height}`);
        return this;
    }
}