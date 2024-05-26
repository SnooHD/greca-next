import { AddressAutofill } from '@mapbox/search-js-react';
import { TextInput } from '@components/Form/TextInput.component';
import { MAPBOX_TOKEN } from '@utils/env.util';

export default function SearchAddressNoSSR(): JSX.Element {
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
                    autoComplete="street-address"
                />
            </AddressAutofill>
        </div>
    )
}

