import React from "react";

const TabelPusatInfo = () => {
    return (
        <div class="overflow-x-auto mt-4">
            <table class="min-w-full divide-y divide-gray-200 ">
                <thead>
                    <tr>
                        <th class="px-6 py-3 bg-gray-50 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                            No
                        </th>
                        <th class="px-6 py-3 bg-gray-50 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Nama Pendaftar
                        </th>
                        <th class="px-6 py-3 bg-gray-50 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Status
                        </th>
                        <th class="px-6 py-3 bg-gray-50 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Penerimaan
                        </th>
                    </tr>
                </thead>
                <tbody class="bg-white divide-y divide-gray-200">
                    <tr>
                        <td class="py-2 text-center">1</td>
                        <td class="py-2 text-center">Pendaftar 1</td>
                        <td class="py-2 text-center">Diterima</td>
                        <td class="py-2 text-center">
                            <input type="checkbox" name="penerimaan" />
                        </td>
                    </tr>
                    <tr>
                        <td class="py-2 text-center">2</td>
                        <td class="py-2 text-center">Pendaftar 2</td>
                        <td class="py-2 text-center">Diterima</td>
                        <td class="py-2 text-center">
                            <input type="checkbox" name="penerimaan" />
                        </td>
                    </tr>
                    <tr>
                        <td class="py-2 text-center">3</td>
                        <td class="py-2 text-center">Pendaftar 3</td>
                        <td class="py-2 text-center">Diterima</td>
                        <td class="py-2 text-center">
                            <input type="checkbox" name="penerimaan" />
                        </td>
                    </tr>
                    <tr>
                        <td class="py-2 text-center">4</td>
                        <td class="py-2 text-center">Pendaftar 4</td>
                        <td class="py-2 text-center">Diterima</td>
                        <td class="py-2 text-center">
                            <input type="checkbox" name="penerimaan" />
                        </td>
                    </tr>
                    <tr>
                        <td class="py-2 text-center">5</td>
                        <td class="py-2 text-center">Pendaftar 5</td>
                        <td class="py-2 text-center">Diterima</td>
                        <td class="py-2 text-center">
                            <input type="checkbox" name="penerimaan" />
                        </td>
                    </tr>
                    <tr>
                        <td class="py-2 text-center">6</td>
                        <td class="py-2 text-center">Pendaftar 6</td>
                        <td class="py-2 text-center">Diterima</td>
                        <td class="py-2 text-center">
                            <input type="checkbox" name="penerimaan" />
                        </td>
                    </tr>
                    <tr>
                        <td class="py-2 text-center">7</td>
                        <td class="py-2 text-center">Pendaftar 7</td>
                        <td class="py-2 text-center">Ditolak</td>
                        <td class="py-2 text-center">
                            <input type="checkbox" name="penerimaan" />
                        </td>
                    </tr>
                    <tr>
                        <td class="py-2 text-center">8</td>
                        <td class="py-2 text-center">Pendaftar 8</td>
                        <td class="py-2 text-center">Ditolak</td>
                        <td class="py-2 text-center">
                            <input type="checkbox" name="penerimaan" />
                        </td>
                    </tr>
                    <tr>
                        <td class="py-2 text-center">9</td>
                        <td class="py-2 text-center">Pendaftar 9</td>
                        <td class="py-2 text-center">Ditolak</td>
                        <td class="py-2 text-center">
                            <input type="checkbox" name="penerimaan" />
                        </td>
                    </tr>
                    <tr>
                        <td class="py-2 text-center">10</td>
                        <td class="py-2 text-center">Pendaftar 10</td>
                        <td class="py-2 text-center">Ditolak</td>
                        <td class="py-2 text-center">
                            <input type="checkbox" name="penerimaan" />
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default TabelPusatInfo;
