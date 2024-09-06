import { ReactNode } from 'react';
import type { EditFieldLayout } from '../../../hooks/useDocumentLayout';
import type { Schema } from '@strapi/types';
import type { DistributiveOmit } from 'react-redux';
type InputRendererProps = DistributiveOmit<EditFieldLayout, 'size'>;
declare const useFieldHint: (hint: ReactNode, attribute: Schema.Attribute.AnyAttribute) => string | number | boolean | import("react/jsx-runtime").JSX.Element | Iterable<ReactNode> | (string | import("react/jsx-runtime").JSX.Element | import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>> | Iterable<ReactNode> | import("react").ReactPortal)[] | null | undefined;
declare const MemoizedInputRenderer: import("react").MemoExoticComponent<({ visible, hint: providedHint, ...props }: InputRendererProps) => import("react/jsx-runtime").JSX.Element | null>;
export type { InputRendererProps };
export { MemoizedInputRenderer as InputRenderer, useFieldHint };
