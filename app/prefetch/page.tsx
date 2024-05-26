'use server';

import { doStrapiFetch } from "@utils/doFetch.util";
import { Title } from "@components/Title.component";
import { Text } from "@components/Text.component";
import { Table } from "@components/Table.component";

interface StrapiRequest {
    data: {
        id: number,
        attributes: {
            name: string;
            slug: string;
            flying_buffet: boolean;
        }
    }[]
}

export default async function PreFetch() { 
    const allData: StrapiRequest = await doStrapiFetch('/penguinos');
    const { data: { id, attributes: { slug, name, flying_buffet } }} = await doStrapiFetch('/penguinos/penguino0')

    const mapStrapiDataToTable = (data: StrapiRequest["data"]) => 
        data.map(({id, attributes: {slug, name, flying_buffet}}) => {
            return [id.toString(), slug, name, flying_buffet ? 'Yes' : 'No']
        })

    return (
        <main className="flex flex-col items-center p-4">
            <Title size="h1">Prefetching some data</Title>
            <div className="space-y-4 w-full max-w-[480px]">
                <div className="w-full">
                    <Text size="l">Single item by slug &quot;/penguinos/penguino0&quot;</Text>
                    <Table
                        heading={['Id', 'Slug', 'Name', 'Flying buffet']}
                        items={
                            [[id, slug, name, flying_buffet ? 'Yes' : 'No']]
                        }
                    />
                </div>
                <div className="w-full">
                    <Text size="l">All data &quot;/penguinos&quot;</Text>
                    <Table
                        heading={['Id', 'Slug', 'Name', 'Flying buffet']}
                        items={
                            mapStrapiDataToTable(allData.data)
                        }
                    />
                </div>
            </div>
        </main>
    );
}
