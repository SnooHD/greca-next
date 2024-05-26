import dynamic from "next/dynamic"
import Select from "react-select"
import { Controller, useFormContext } from "react-hook-form"

// Use React-Select dynamicly to resolve the following issue:
// https://github.com/JedWatson/react-select/issues/5459#issuecomment-1305491021
export const AgeGroupSelect = dynamic(() => Promise.resolve(DynamicAgeGroupSelect), {
    ssr: false,
    loading: () => <DynamicAgeGroupSelect />
})
  
const DynamicAgeGroupSelect = () => {
    const {
        control,
    } = useFormContext();

    const ageGroup = [
        { value: "adult", label: "Adult" },
        { value: "child", label: "Child" },
        { value: "infant", label: "Infant" }
    ]

    return(
        <Controller
            control={control}
            name="ageGroup"
            render={({ field }) => (
                <div>
                    <label>
                        Age group
                        <Select
                        {...field}
                        options={ageGroup} 
                        />
                    </label>
                </div>
            )}
        />
    )
}