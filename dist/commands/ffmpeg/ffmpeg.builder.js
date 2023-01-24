export class FFmpegBuilder {
    constructor() {
        this.options = new Map();
        this.options.set('-c:v', 'libx264');
    }
    input(inputPath) {
        this.inputPath = inputPath;
        return this;
    }
    output(outputPath) {
        if (!this.inputPath) {
            throw new Error('Parameter input not set');
        }
        const args = ['-i', this.inputPath];
        this.options.forEach((item, index) => {
            args.push(index);
            args.push(item);
        });
        args.push(outputPath);
        return args;
    }
    setVideoSize(width, height) {
        this.options.set('-s', `${width}x${height}`);
        return this;
    }
}
