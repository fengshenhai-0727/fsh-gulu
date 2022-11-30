import { Arguments } from 'yargs';

export const command = 'dev [project]';
export const describe = 'gulu dev []';
export const builder = (yargs: any) => {
    return yargs
        .usage(`gulu dev 启动本地开发模式`)
        .option('skipCheckPackage', {
            type: 'boolean',
            default: false,
            description: '跳过包检测'
        })
        .option('montage', {
            type: 'boolean',
            default: true,
            description: '启动montage'
        })
        .option('remindProcessed', {
            type: 'boolean',
            default: true,
            description: '进行已启动不通知'
        })
        .demandCommand(0)
        .help('h')
        .example('hulu dev audi', '启动本地开发模式')
        .showHelpOnFail(true);
};

// eslint-disable-next-line func-name-matching
export const handler = async function dev(argv: Arguments<Record<string, any>>, status: 'restart' | 'start' = 'start') {
};
