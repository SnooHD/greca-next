import { createElement } from 'react';

import type { DetailedHTMLProps, HTMLAttributes, PropsWithChildren } from 'react';

type TextProps = PropsWithChildren<
    DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement> & {
        size: TitleSizes;
        type?: 'h1' | 'h2';
    }
>;

type TitleSizes = 'h1' | 'h2';

/**
 * Tailwind doesn't support dynamic classnames
 * Create a helper function that returns the class as whole string
 * https://tailwindcss.com/docs/content-configuration#dynamic-class-names
 */
export const getTitleSize = (size: TitleSizes) => {
    switch (size) {
        case 'h1':
            return 'text-heading-xl sm:text-heading-l py-xs';
        case 'h2':
            return 'text-heading-l sm:text-heading-m py-xxs';
    }
};

export const Title = ({ className = '', children, size, type = 'h1', ...rest }: TextProps) => {
    return createElement(
        type,
        {
            ...rest,
            className: `${getTitleSize(size)} m-0 ${className}`
        },
        children
    );
};
