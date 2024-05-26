import { useId } from "react"

interface TableProps {
    heading: string[];
    items: string[][];
}

export const Table = ({
    heading,
    items
}: TableProps) => {
    const id = useId();
    return (
        <table className="w-full text-center">
            <thead className="bg-black/60 text-white">
                <tr>
                    {
                        heading.map((item, index) => (
                            <td 
                                key={`data-head-${id}-${index}`}
                                className="border border-white p-1"
                            >
                                {item}
                            </td>
                        ))
                    }
                </tr>
            </thead>
            <tbody>
                {items.map((item, index) => (
                    <tr 
                        key={`data-row-${id}-${index}`} 
                        className="odd:bg-blue/20 even:bg-gray/30"
                    >
                        {
                            item.map((item, index) => (
                                <td 
                                    key={`data-item-${item}-${index}`}
                                    className="border border-white p-1"
                                >
                                    {item}
                                </td>
                            ))
                        }
                    </tr>
                ))}
            </tbody>
        </table>
    )
}