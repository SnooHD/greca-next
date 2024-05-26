'use client';

import { useLayoutEffect, useRef, useState } from 'react';
import { FieldError, FieldErrors, Merge } from 'react-hook-form';
import { Text } from '../Text.component';

export interface ErrorProps {
    error?: string | FieldError | Merge<FieldError, FieldErrors<any>> | JSX.Element;
    className?: string;
}

export const Error = ({ error, className = '', ...rest }: ErrorProps): JSX.Element => {
    const errorRef = useRef<HTMLSpanElement | null>(null);
    const [errorHeight, setErrorHeight] = useState(0);
    const [transitionEnded, setTransitionEnded] = useState(false);
    useLayoutEffect(() => {
        const element = errorRef.current;
        if (error && element) {
            const { height } = element.getBoundingClientRect();
            setErrorHeight(height);
        }

        if (!error) {
            setErrorHeight(0);
        }
    }, [error]);

    return (
        <div
            style={{ height: transitionEnded ? 'auto' : `${errorHeight}px` }}
            onTransitionEnd={() => setTransitionEnded(true)}
            className="duration-300 transition-[height]"
        >
            {error && (
                <Text size="s" className={`text-red ${className}`}>
                    <span
                        {...rest}
                        ref={errorRef}
                        className={`duration-300 transition-opacity ${
                            errorHeight ? 'opacity-1' : 'opacity-0'
                        }`}
                    >
                        <>{error}</>
                    </span>
                </Text>
            )}
        </div>
    );
};
