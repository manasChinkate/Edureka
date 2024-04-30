import React, { useState } from 'react';
import { useTable, usePagination, useSortBy, useGlobalFilter } from 'react-table';
import { MdFirstPage, MdLastPage } from "react-icons/md";
import { GrFormPrevious, GrFormNext } from "react-icons/gr";
import { GiSettingsKnobs } from "react-icons/gi";
import { CSVLink } from 'react-csv';
import { FaFileExcel } from "react-icons/fa";

const Page = ({ columns, data }) => {
    const [pageIndexInput, setPageIndexInput] = useState(0);
    const [searchInput, setSearchInput] = useState('');

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        page,
        prepareRow,
        state: { pageIndex },
        previousPage,
        nextPage,
        canPreviousPage,
        canNextPage,
        gotoPage,
        setGlobalFilter,
        pageCount
    } = useTable(
        {
            columns,
            data,
            initialState: { pageIndex: 0 },
        },
        useGlobalFilter,
        useSortBy,
        usePagination
    );

    const handleInputChange = (e) => {
        setPageIndexInput(e.target.value);
    };

    const handleGoToPage = () => {
        const pageNumber = pageIndexInput ? Number(pageIndexInput) - 1 : 0;
        gotoPage(pageNumber);
        setPageIndexInput('');
    };

    const handleSearchChange = (e) => {
        const value = e.target.value || '';
        setSearchInput(value);
        setGlobalFilter(value);
    };

    const gotoFirstPage = () => {
        gotoPage(0);
    };

    const gotoLastPage = () => {
        gotoPage(pageCount - 1);
    };

    const headers = columns.map(column => ({
        label: column.Header,
        key: column.accessor
    }));

    const exportData = data.map(row =>
        columns.map(column => row[column.accessor])
    );

    return (
        <>
            <div className='flex flex-col lg:flex-row items-center justify-between w-full'>
                <div className='lg:w-2/3'>
                    <h1 className='text-3xl font-bold'>Account Lists</h1>
                    <h2 className='text-gray-600'>Here's a list of your accounts.</h2>
                </div>

                <div className='flex items-center justify-center gap-4 lg:w-1/3 mt-4 lg:mt-0'>
                    <div>
                        <CSVLink data={exportData} headers={headers} filename={"account-list.csv"} className='flex items-center justify-center'><FaFileExcel className='text-xl text-orange-600' /></CSVLink>
                    </div>
                    <div className=''>
                        <button className='px-3 py-1 text-sm rounded-md flex items-center justify-center gap-1 border border-gray-300' type="button"><GiSettingsKnobs /> View</button>
                    </div>
                    <div>
                        <input
                            type="text"
                            value={searchInput}
                            onChange={handleSearchChange}
                            placeholder="Search Here..."
                            className="px-2 py-1 border border-gray-300 rounded-md h-10 text-sm"
                        />
                    </div>
                </div>
            </div>

            <div className=' flex items-center justify-center mt-4 sm:overflow-x-scroll max-[390px]:overflow-x-scroll max-[640px]:overflow-x-scroll w-full '>
                <table {...getTableProps()}  >
                    <thead>
                        {headerGroups.map(headerGroup => (
                            <tr {...headerGroup.getHeaderGroupProps()} >
                                {headerGroup.headers.map(column => (
                                    <th
                                        {...column.getHeaderProps(column.getSortByToggleProps())}
                                        className='px-4 py-2 cursor-pointer text-left bg-blue-500 text-white'
                                    >
                                        {column.render('Header')}
                                        <span>
                                            {column.isSorted ? (column.isSortedDesc ? ' 🔽' : ' 🔼') : ''}
                                        </span>
                                    </th>
                                ))}
                            </tr>
                        ))}
                    </thead>
                    <tbody {...getTableBodyProps()}>
                        {page.map((row, rowIndex) => {
                            prepareRow(row);
                            return (
                                <tr
                                    {...row.getRowProps()}
                                    className={rowIndex % 2 !== 0 ? 'bg-gray-100' : ''}
                                >
                                    {row.cells.map(cell => (
                                        <td
                                            {...cell.getCellProps()}
                                            className='px-4 py-2 text-sm text-gray-700'
                                        >
                                            {cell.render('Cell')}
                                        </td>
                                    ))}
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>

            <div className='flex items-center justify-end gap-2 text-center mt-4  max-[390px]:flex-wrap max-[390px]:flex-col max-[390px]:gap-4 '>
                <div>
                    Page <strong>{pageIndex + 1}</strong> of <strong>{pageCount}</strong>
                </div>
                <div>
                    Go to page:{' '}
                    <input
                        className='px-2 py-1 border border-gray-300 rounded w-10 text-center max-[390px]:py-0'
                        type="number"
                        value={pageIndexInput}
                        onChange={handleInputChange}
                    />
                    <button className='ml-2' onClick={handleGoToPage}> Go</button>
                </div>
                <div >
                    <button className='px-3 py-1 border border-gray-300 rounded cursor-pointer' onClick={gotoFirstPage} disabled={!canPreviousPage}>
                        <MdFirstPage />
                    </button>
                    <button className='px-3 py-1 border border-gray-300 rounded cursor-pointer' onClick={previousPage} disabled={!canPreviousPage}>
                        <GrFormPrevious />
                    </button>
                    <button className='px-3 py-1 border border-gray-300 rounded cursor-pointer' onClick={nextPage} disabled={!canNextPage}>
                        <GrFormNext />
                    </button>
                    <button className='px-3 py-1 border border-gray-300 rounded cursor-pointer' onClick={gotoLastPage} disabled={!canNextPage}>
                        <MdLastPage />
                    </button>
                </div>
            </div>
        </>
    );
};

export default Page;
