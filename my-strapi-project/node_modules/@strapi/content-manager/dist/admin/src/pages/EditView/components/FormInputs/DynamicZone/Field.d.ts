import { InputProps } from '@strapi/admin/strapi-admin';
import { type EditFieldLayout } from '../../../../../hooks/useDocumentLayout';
import { DynamicZoneLabelProps } from './DynamicZoneLabel';
interface DynamicZoneContextValue {
    isInDynamicZone: boolean;
}
declare const useDynamicZone: <Selected>(consumerName: string, selector: (value: DynamicZoneContextValue) => Selected) => Selected;
interface DynamicZoneProps extends Omit<Extract<EditFieldLayout, {
    type: 'dynamiczone';
}>, 'size' | 'hint'>, Pick<InputProps, 'hint'>, Pick<DynamicZoneLabelProps, 'labelAction'> {
}
declare const DynamicZone: ({ attribute, disabled: disabledProp, hint, label, labelAction, name, required, }: DynamicZoneProps) => import("react/jsx-runtime").JSX.Element;
export { DynamicZone, useDynamicZone };
export type { DynamicZoneProps };
