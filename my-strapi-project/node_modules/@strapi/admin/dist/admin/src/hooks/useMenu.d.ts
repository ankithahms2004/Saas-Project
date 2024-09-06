import { StrapiAppContextValue } from '../features/StrapiApp';
export type MenuItem = Omit<StrapiAppContextValue['menu'][number], 'Component'>;
export interface Menu {
    generalSectionLinks: MenuItem[];
    pluginsSectionLinks: MenuItem[];
    isLoading: boolean;
}
declare const useMenu: (shouldUpdateStrapi: boolean) => Menu;
export { useMenu };
