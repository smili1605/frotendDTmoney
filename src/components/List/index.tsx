import React from "react";

export interface ListData {
    title: string;
    price: string;
    category: string;
    date: string;
    type: 'income' | 'outcome';
}

interface ListProps {
    lists: ListData[];
}

export default function List({ lists }: ListProps) {
    return (
        <div className="container mx-auto p-4">
            <table className="w-full border-separate border-spacing-y-4">
                <thead>
                <tr>
                    <th className="text-left text-list-header p-2">Título</th>
                    <th className="text-left text-list-header p-2">Preço</th>
                    <th className="text-left text-list-header p-2">Categoria</th>
                    <th className="text-left text-list-header p-2">Data</th>
                </tr>
                </thead>
                <tbody>
                {lists.map((list, index) => (
                    <tr key={index} className="bg-white shadow-md w-[1120px] h-[64px]">
                        <td className="p-4 text-title">{list.title}</td>
                        <td className={`p-4 ${list.type === 'income' ? 'text-income-value' : 'text-outcome'}`}>
                            {list.type === 'outcome' ? '- ' : ''}{list.price}
                        </td>
                        <td className="p-4 text-list-header">{list.category}</td>
                        <td className="p-4 text-list-header">{list.date}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};
