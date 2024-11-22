import React from "react";

const TabelTabPenerima = () => {
    return (
        <div>
            <table class="min-w-full divide-y divide-gray-200 ">
                <thead>
                    <tr>
                        <th class="px-6 py-3 bg-gray-50 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                            No
                        </th>
                        <th class="px-6 py-3 bg-gray-50 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                            NIM
                        </th>
                        <th class="px-6 py-3 bg-gray-50 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Nama
                        </th>
                        <th class="px-6 py-3 bg-gray-50 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Program Studi
                        </th>
                        <th class="px-6 py-3 bg-gray-50 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Angkatan
                        </th>
                        <th class="px-6 py-3 bg-gray-50 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Email
                        </th>
                        <th class="px-6 py-3 bg-gray-50 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Nomor Telepon/WA
                        </th>
                        <th class="px-6 py-3 bg-gray-50 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                            KHS
                        </th>
                        <th class="px-6 py-3 bg-gray-50 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                            CV
                        </th>
                        <th class="px-6 py-3 bg-gray-50 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Portofolio
                        </th>
                        <th class="px-6 py-3 bg-gray-50 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Foto 3x4
                        </th>
                    </tr>
                </thead>
                <tbody class="bg-white divide-y divide-gray-200">
                    <tr>
                        <td class="px-6 py-4 whitespace-nowrap text-center">
                            1
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap text-center">
                            1234567890
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap text-center">
                            John Doe
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap text-center">
                            {" "}
                            S1 Teknik Informatika
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap text-center">
                            2020
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap text-center">
                            2110512055@mahasiswa.upnvj.ac.id
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap text-center">
                            081906426113
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap text-center">
                            KHS.pdf
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap text-center">
                            CV.pdf
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap text-center">
                            Portofolio.pdf
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap text-center">
                            Foto.png
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default TabelTabPenerima;
