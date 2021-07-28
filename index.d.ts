// Type definitions for vue3-tel-input and  vue 3
// Project: https://github.com/victorybiz/vue3-tel-input
declare module "vue3-tel-input" {
    type Plugin_2<Option = any> = PluginInstallFunction<Option> & {
        install?: PluginInstallFunction<Option>;
    } | {
        install: PluginInstallFunction<Option>;
    };
    export {Plugin_2 as Plugin}

    type PluginInstallFunction<Option> = (app: App, ...options: Option[]) => any;

    interface App {
        //use(plugin: Plugin_2, ...options: any[]): this; // this line overrides below (because of any)
        use<Option>(plugin: Plugin_2<Option>, ...options: Option[]): this;
    }

    export const install: PluginInstallFunction<any>;
}

