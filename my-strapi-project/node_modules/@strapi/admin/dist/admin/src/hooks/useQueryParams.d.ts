declare const useQueryParams: <TQuery extends object>(initialParams?: TQuery | undefined) => readonly [{
    readonly query: TQuery;
    readonly rawQuery: string;
}, (nextParams: TQuery, method?: 'push' | 'remove', replace?: boolean) => void];
export { useQueryParams };
