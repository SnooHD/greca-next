import dynamic from "next/dynamic";
import { TextInput } from "@components/Form/TextInput.component";

export const SearchAddress = dynamic(() => import('./SearchAddressNoSSR.component'), {
    ssr: false,
    loading: () => <FakeSearchAddress />
})

const FakeSearchAddress = () => {
    return (
        <TextInput 
            name="address"
            label="Address"
            autoComplete="street-address"
        />
    )
}