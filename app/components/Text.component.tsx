import { createElement } from 'react';

import type { DetailedHTMLProps, HTMLAttributes, PropsWithChildren } from 'react';

type TextProps = PropsWithChildren<
    DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement> & {
        size: TextSizes;
        type?: 'span' | 'p';
    }
>;

type TextSizes = 'l' | 'm' | 's';

/**
 * Tailwind doesn't support dynamic classnames
 * Create a helper function that returns the class as whole string
 * https://tailwindcss.com/docs/content-configuration#dynamic-class-names
 */
export const getTextSize = (size: TextSizes) => {
    switch (size) {
        case 'l':
            return 'text-regular-s sm:text-regular-l';
        case 'm':
            return 'text-regular-s sm:text-regular-m';
        case 's':
            return 'text-regular-s';
    }
};

export const Text = ({ className = '', children, size, type = 'p', ...rest }: TextProps) => {
    return createElement(
        type,
        {
            ...rest,
            className: `${getTextSize(size)} m-0 ${className}`
        },
        children
    );
};
