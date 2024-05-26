'use client';
import { AddressAutofill } from '@mapbox/search-js-react';
import { TextInput } from '@/app/components/Form/TextInput.component';
import { MAPBOX_TOKEN } from '@/app/utils/env.util';

export const SearchAddress = (): JSX.Element => {
    return (
        <div>
            <AddressAutofill
                accessToken={MAPBOX_TOKEN}
                options={{
                    language: 'en',
                    streets: true
                }}
            >
                <TextInput 
                    name="address"
                    label="Address"
                />
            </AddressAutofill>
        </div>
    )
}