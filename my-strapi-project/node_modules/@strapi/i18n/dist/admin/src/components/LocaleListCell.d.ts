interface LocaleListCellProps {
    documentId: string;
    collectionType: string;
    locale: string;
    model: string;
}
declare const LocaleListCell: ({ documentId, locale: currentLocale, collectionType, model, }: LocaleListCellProps) => import("react/jsx-runtime").JSX.Element | null;
export { LocaleListCell };
export type { LocaleListCellProps };
