import React, { useState } from 'react';
import { useTable, usePagination, useSortBy, useGlobalFilter } from 'react-table';
import { MdFirstPage, MdLastPage } from "react-icons/md";
import { GrFormPrevious, GrFormNext } from "react-icons/gr";
import { GiSettingsKnobs } from "react-icons/gi";
import { CSVLink } from 'react-csv';
import { FaFileExcel } from "react-icons/fa";

const Page = ({ columns, data }) => {
    const [pageIndexInput, setPageIndexInput] = useState(0); // State for input field to manually set page index
    const [searchInput, setSearchInput] = useState(''); // State for search input

    // Destructuring table instance and necessary methods and properties
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
            initialState: { pageIndex: 0 }, // Set initial page index to 0
        },
        useGlobalFilter,
        useSortBy,
        usePagination
    );

    // Handler for input change in page index input field
    const handleInputChange = (e) => {
        setPageIndexInput(e.target.value);
    };

    // Handler for navigating to a specific page
    const handleGoToPage = () => {
        const pageNumber = pageIndexInput ? Number(pageIndexInput) - 1 : 0; // Convert input value to number and subtract 1 to match zero-based indexing
        gotoPage(pageNumber); // Go to the specified page
        setPageIndexInput(''); // Clear the input field
    };

    // Handler for search input change
    const handleSearchChange = (e) => {
        const value = e.target.value || ''; // Get the value from the input or set to empty string if undefined
        setSearchInput(value); // Update the search input state
        setGlobalFilter(value); // Apply global filter to the table
    };

    // Handler for navigating to the first page
    const gotoFirstPage = () => {
        gotoPage(0); // Go to the first page
    };

    // Handler for navigating to the last page
    const gotoLastPage = () => {
        gotoPage(pageCount - 1); // Go to the last page (pageCount is 1-based index)
    };

    // Define headers for CSV export
    const headers = columns.map(column => ({
        label: column.Header,
        key: column.accessor
    }));

    // Prepare data for CSV export
    const exportData = data.map(row =>
        columns.map(column => row[column.accessor])
    );

    return (
        <>
            {/* Header section */}
            <div className='flex items-center justify-between '>
                <div>
                    <h1 className='text-[30px] font-bold'>Account Lists</h1>
                    <h2 className='text-fontgray'>Here's a list of your accounts.</h2>
                </div>

                <div className=' flex items-center justify-center gap-4'>
                    {/* CSV export button */}
                    <div>
                        <CSVLink data={exportData} headers={headers} filename={"account-list.csv"} className=' flex items-center justify-center ' ><FaFileExcel className=' text-[20px] text-orange-600' /></CSVLink>
                    </div>
                    {/* View button */}
                    <div className=''>
                        <button className='p-1 text-[14px] rounded-md flex items-center justify-center gap-2 border border-gray-300' type="button"><GiSettingsKnobs /> View</button>
                    </div>
                    {/* Search input field */}
                    <div>
                        <input
                            type="text"
                            value={searchInput}
                            onChange={handleSearchChange}
                            placeholder="Search Here..."
                            className="p-1 pl-2  border border-gray-300 rounded-md h-[32px] text-[14px]"
                        />
                    </div>
                </div>
            </div>

            {/* Table section */}
            <div className=' flex items-center justify-center'>
                <table {...getTableProps()} className=' mt-3 w-full' >
                    <thead>
                        {headerGroups.map(headerGroup => (
                            <tr {...headerGroup.getHeaderGroupProps()} >
                                {headerGroup.headers.map(column => (
                                    <th
                                        {...column.getHeaderProps(column.getSortByToggleProps())}
                                        className=' text-[14px] font-bold p-[10px] cursor-pointer text-left bg-headerblue '
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
                                    className={rowIndex % 2 !== 0 ? 'bg-row' : ''}
                                >
                                    {row.cells.map(cell => (
                                        <td
                                            {...cell.getCellProps()}
                                            className='text-[14px] p-[10px] text-left text-fontgray'
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

            {/* Pagination section */}
            <div className='flex items-center justify-end gap-2 text-center mt-2'>
                <div>
                    Page <strong>{pageIndex + 1}</strong> of <strong>{pageCount}</strong>
                </div>
                <div>
                    Go to page:{' '}
                    <input
                        className=' border border-gray-300 rounded w-10 text-center'
                        type="number"
                        value={pageIndexInput}
                        onChange={handleInputChange}
                    />
                    <button className='ml-2' onClick={handleGoToPage}> Go</button>
                </div>
                <div>
                    {/* Pagination buttons */}
                    <button className='p-1 border border-gray-300 rounded mr-2 cursor-pointer' onClick={gotoFirstPage} disabled={!canPreviousPage}>
                        <MdFirstPage />
                    </button>
                    <button className='p-1 border border-gray-300 rounded mr-2 cursor-pointer' onClick={previousPage} disabled={!canPreviousPage}>
                        <GrFormPrevious />
                    </button>
                    <button className='p-1 border border-gray-300 rounded mr-2 cursor-pointer' onClick={nextPage} disabled={!canNextPage}>
                        <GrFormNext />
                    </button>
                    <button className='p-1 border border-gray-300 rounded cursor-pointer' onClick={gotoLastPage} disabled={!canNextPage}>
                        <MdLastPage />
                    </button>
                </div>
            </div>
        </>
    );
};

export default Page;
