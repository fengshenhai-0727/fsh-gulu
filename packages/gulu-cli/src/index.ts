import yargs from 'yargs';
export const run = (cliRunLocal: boolean) => {
    // ['SIGINT', 'SIGTERM'].forEach((sig) => {
    //     process.on(sig, function () {
    //         process.exit(0);
    //     });
    // });

    // $evt.on(CLI.EXIT, () => {
    //     process.exit(0);
    // });

    console.log(cliRunLocal);
    return (
        // .showHelpOnFail(true)
        // .recommendCommands()
        yargs
            .commandDir('./commands', {
                // commandDir默认只会加载目录下第一级的文件，不会递归加载, default false
                recurse: false,

                // 开发环境使用 ts，需指定
                extensions: cliRunLocal ? ['ts', 'js'] : ['js']
            })
            .showHelpOnFail(true)
            .demandCommand().argv
    );
};
