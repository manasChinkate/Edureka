import React from 'react';
import Page from './components/Page';
import 'react-dropdown/style.css';
import { MdDashboard, MdFeedback, MdOutlineAutoGraph, MdArrowDropDown } from "react-icons/md";
import { BiSolidContact } from "react-icons/bi";
import { FaHandshake, FaFileUpload } from "react-icons/fa";
import DropdownButton from './components/Dropdown/DropdownButton '
import { IoBarChartSharp } from "react-icons/io5";
import { RiAccountPinBoxFill } from "react-icons/ri";
import Switchbtn from './components/Switchbtn/Switchbtn';

const App = () => {
  // Define columns for the table
  const columns = [
    { Header: 'Account Name', accessor: 'accountName' },
    { Header: 'Email', accessor: 'email' },
    { Header: 'Phone No', accessor: 'PhoneNo' },
    { Header: 'Website', accessor: 'website' },
    { Header: 'Industry', accessor: 'industry' },
    { Header: 'Account Status', accessor: 'accountStatus' },
    { Header: 'Remark', accessor: 'remark' },
    { Header: 'Actions', accessor: 'Actions' },
  ];

  // Sample data for the table
  const data = [
    { id: 1, accountName: 'Liam', email: 'john@gmail.com', PhoneNo: '1234567892', website: 'http://sun.com', industry: 'Finance', accountStatus: 'true', remark: 'lorem5', Actions: ':' },
    { id: 2, accountName: 'Olivia', email: 'emma@gmail.com', PhoneNo: '2345678923', website: 'http://moon.com', industry: 'Technology', accountStatus: 'false', remark: 'lorem10', Actions: ':' },
    { id: 3, accountName: 'Noah', email: 'liam@gmail.com', PhoneNo: '3456789234', website: 'http://star.com', industry: 'Healthcare', accountStatus: 'true', remark: 'lorem15', Actions: ':' },
    { id: 4, accountName: 'Emma', email: 'olivia@gmail.com', PhoneNo: '4567892345', website: 'http://planet.com', industry: 'Education', accountStatus: 'false', remark: 'lorem20', Actions: ':' },
    { id: 5, accountName: 'Oliver', email: 'noah@gmail.com', PhoneNo: '5678923456', website: 'http://galaxy.com', industry: 'Retail', accountStatus: 'true', remark: 'lorem25', Actions: ':' },
    { id: 6, accountName: 'Ava', email: 'emma@gmail.com', PhoneNo: '6789234567', website: 'http://universe.com', industry: 'Automotive', accountStatus: 'false', remark: 'lorem30', Actions: ':' },
    { id: 7, accountName: 'Elijah', email: 'oliver@gmail.com', PhoneNo: '7892345678', website: 'http://cosmos.com', industry: 'Entertainment', accountStatus: 'true', remark: 'lorem35', Actions: ':' },
    { id: 8, accountName: 'Charlotte', email: 'ava@gmail.com', PhoneNo: '8923456789', website: 'http://milkyway.com', industry: 'Hospitality', accountStatus: 'false', remark: 'lorem40', Actions: ':' },
    { id: 9, accountName: 'William', email: 'elijah@gmail.com', PhoneNo: '9234567890', website: 'http://nebula.com', industry: 'Construction', accountStatus: 'true', remark: 'lorem45', Actions: ':' },
    { id: 10, accountName: 'Sophia', email: 'charlotte@gmail.com', PhoneNo: '9876543210', website: 'http://blackhole.com', industry: 'Real Estate', accountStatus: 'false', remark: 'lorem50', Actions: ':' },
    { id: 11, accountName: 'James', email: 'william@gmail.com', PhoneNo: '8765432109', website: 'http://asteroid.com', industry: 'Telecommunications', accountStatus: 'true', remark: 'lorem55', Actions: ':' },
    { id: 12, accountName: 'Amelia', email: 'sophia@gmail.com', PhoneNo: '7654321098', website: 'http://comet.com', industry: 'Energy', accountStatus: 'false', remark: 'lorem60', Actions: ':' },
    { id: 13, accountName: 'Benjamin', email: 'james@gmail.com', PhoneNo: '6543210987', website: 'http://meteor.com', industry: 'Agriculture', accountStatus: 'true', remark: 'lorem65', Actions: ':' },
    { id: 14, accountName: 'Harper', email: 'amelia@gmail.com', PhoneNo: '5432109876', website: 'http://satellite.com', industry: 'Food & Beverage', accountStatus: 'false', remark: 'lorem70', Actions: ':' },
    { id: 15, accountName: 'Lucas', email: 'benjamin@gmail.com', PhoneNo: '4321098765', website: 'http://moon.com', industry: 'Manufacturing', accountStatus: 'true', remark: 'lorem75', Actions: ':' },
    { id: 16, accountName: 'Mia', email: 'harper@gmail.com', PhoneNo: '3210987654', website: 'http://sun.com', industry: 'Transportation', accountStatus: 'false', remark: 'lorem80', Actions: ':' },
    { id: 17, accountName: 'Henry', email: 'lucas@gmail.com', PhoneNo: '2109876543', website: 'http://star.com', industry: 'Media', accountStatus: 'true', remark: 'lorem85', Actions: ':' },
    { id: 18, accountName: 'Evelyn', email: 'mia@gmail.com', PhoneNo: '1098765432', website: 'http://planet.com', industry: 'Fashion', accountStatus: 'false', remark: 'lorem90', Actions: ':' },
    { id: 19, accountName: 'Alexander', email: 'henry@gmail.com', PhoneNo: '0987654321', website: 'http://galaxy.com', industry: 'Pharmaceuticals', accountStatus: 'true', remark: 'lorem95', Actions: ':' },
    { id: 20, accountName: 'Abigail', email: 'evelyn@gmail.com', PhoneNo: '9876543210', website: 'http://universe.com', industry: 'Biotechnology', accountStatus: 'false', remark: 'lorem100', Actions: ':' },
    { id: 21, accountName: 'Ethan', email: 'alexander@gmail.com', PhoneNo: '8765432109', website: 'http://cosmos.com', industry: 'Chemical', accountStatus: 'true', remark: 'lorem105', Actions: ':' },
    { id: 22, accountName: 'Emily', email: 'abigail@gmail.com', PhoneNo: '7654321098', website: 'http://milkyway.com', industry: 'Electronics', accountStatus: 'false', remark: 'lorem110', Actions: ':' },
    { id: 23, accountName: 'Michael', email: 'ethan@gmail.com', PhoneNo: '6543210987', website: 'http://nebula.com', industry: 'IT', accountStatus: 'true', remark: 'lorem115', Actions: ':' },
    { id: 24, accountName: 'Elizabeth', email: 'emily@gmail.com', PhoneNo: '5432109876', website: 'http://blackhole.com', industry: 'Software', accountStatus: 'false', remark: 'lorem120', Actions: ':' },
    { id: 25, accountName: 'Daniel', email: 'michael@gmail.com', PhoneNo: '4321098765', website: 'http://asteroid.com', industry: 'Hardware', accountStatus: 'true', remark: 'lorem125', Actions: ':' },
    { id: 26, accountName: 'Sofia', email: 'elizabeth@gmail.com', PhoneNo: '3210987654', website: 'http://comet.com', industry: 'Consulting', accountStatus: 'false', remark: 'lorem130', Actions: ':' },
    { id: 27, accountName: 'Matthew', email: 'daniel@gmail.com', PhoneNo: '2109876543', website: 'http://meteor.com', industry: 'Security', accountStatus: 'true', remark: 'lorem135', Actions: ':' },
    { id: 28, accountName: 'Madison', email: 'sofia@gmail.com', PhoneNo: '1098765432', website: 'http://satellite.com', industry: 'Telecom', accountStatus: 'false', remark: 'lorem140', Actions: ':' },
    { id: 29, accountName: 'Jackson', email: 'matthew@gmail.com', PhoneNo: '0987654321', website: 'http://moon.com', industry: 'Networking', accountStatus: 'true', remark: 'lorem145', Actions: ':' },
    { id: 30, accountName: 'Avery', email: 'madison@gmail.com', PhoneNo: '9876543210', website: 'http://sun.com', industry: 'Social Media', accountStatus: 'false', remark: 'lorem150', Actions: ':' },
    { id: 31, accountName: 'Liam', email: 'liam@example.com', PhoneNo: '1234567890', website: 'http://example1.com', industry: 'Finance', accountStatus: 'true', remark: 'Lorem ipsum dolor sit amet', Actions: ':' },
    { id: 32, accountName: 'Olivia', email: 'olivia@example.com', PhoneNo: '2345678901', website: 'http://example2.com', industry: 'Technology', accountStatus: 'false', remark: 'Consectetur adipiscing elit', Actions: ':' },
    { id: 33, accountName: 'Noah', email: 'noah@example.com', PhoneNo: '3456789012', website: 'http://example3.com', industry: 'Healthcare', accountStatus: 'true', remark: 'Sed do eiusmod tempor incididunt', Actions: ':' },
    { id: 34, accountName: 'Emma', email: 'emma@example.com', PhoneNo: '4567890123', website: 'http://example4.com', industry: 'Education', accountStatus: 'false', remark: 'Ut labore et dolore magna aliqua', Actions: ':' },
    { id: 35, accountName: 'Oliver', email: 'oliver@example.com', PhoneNo: '5678901234', website: 'http://example5.com', industry: 'Retail', accountStatus: 'true', remark: 'Ut enim ad minim veniam', Actions: ':' },
    { id: 36, accountName: 'Ava', email: 'ava@example.com', PhoneNo: '6789012345', website: 'http://example6.com', industry: 'Automotive', accountStatus: false, remark: 'Quis nostrud exercitation ullamco', Actions: ':' },
    { id: 37, accountName: 'Elijah', email: 'elijah@example.com', PhoneNo: '7890123456', website: 'http://example7.com', industry: 'Entertainment', accountStatus: 'true', remark: 'Duis aute irure dolor in reprehenderit', Actions: ':' },
    { id: 38, accountName: 'Charlotte', email: 'charlotte@example.com', PhoneNo: '8901234567', website: 'http://example8.com', industry: 'Hospitality', accountStatus: 'false', remark: 'Excepteur sint occaecat cupidatat non proident', Actions: ':' },
    { id: 39, accountName: 'William', email: 'william@example.com', PhoneNo: '9012345678', website: 'http://example9.com', industry: 'Construction', accountStatus: 'true', remark: 'Sunt in culpa qui officia deserunt mollit anim id est laborum', Actions: ':' },
    { id: 40, accountName: 'Sophia', email: 'sophia@example.com', PhoneNo: '0123456789', website: 'http://example10.com', industry: 'Real Estate', accountStatus: 'false', remark: 'Lorem ipsum dolor sit amet', Actions: ':' },
    { id: 41, accountName: 'James', email: 'james@example.com', PhoneNo: '2345678901', website: 'http://example11.com', industry: 'Telecommunications', accountStatus: 'true', remark: 'Consectetur adipiscing elit', Actions: ':' },
    { id: 42, accountName: 'Amelia', email: 'amelia@example.com', PhoneNo: '3456789012', website: 'http://example12.com', industry: 'Energy', accountStatus: 'false', remark: 'Sed do eiusmod tempor incididunt', Actions: ':' },
    { id: 43, accountName: 'Benjamin', email: 'benjamin@example.com', PhoneNo: '4567890123', website: 'http://example13.com', industry: 'Agriculture', accountStatus: 'true', remark: 'Ut labore et dolore magna aliqua', Actions: ':' },
    { id: 44, accountName: 'Harper', email: 'harper@example.com', PhoneNo: '5678901234', website: 'http://example14.com', industry: 'Food & Beverage', accountStatus: 'false', remark: 'Ut enim ad minim veniam', Actions: ':' },
    { id: 45, accountName: 'Lucas', email: 'lucas@example.com', PhoneNo: '6789012345', website: 'http://example15.com', industry: 'Manufacturing', accountStatus: 'true', remark: 'Quis nostrud exercitation ullamco', Actions: ':' },
    { id: 46, accountName: 'Mia', email: 'mia@example.com', PhoneNo: '7890123456', website: 'http://example16.com', industry: 'Transportation', accountStatus: 'false', remark: 'Duis aute irure dolor in reprehenderit', Actions: ':' },


  ];
// Options for dropdown buttons
const options = [
  { text: 'Option 1', icon: <MdArrowDropDown /> },
  { text: 'Option 2', icon: <MdArrowDropDown /> },
  { text: 'Option 3', icon: <MdArrowDropDown /> },
];

// Account-specific options for dropdown button
const AccOptions = [
  { text: 'Account Report', icon: <IoBarChartSharp /> },
  { text: 'Account Upload', icon: <FaFileUpload /> }
];

return (
  <>
    {/* Sidebar */}
    <div className='flex min-h-screen bg-back sticky top-0'>
      <div className='w-56 bg-white border border-gray-200 shadow-md'>
        <div className='flex flex-col'>
          {/* Sidebar buttons */}
          <button className='px-4 py-2 flex items-center justify-start pl-4 hover:bg-headerblue'>
            <MdDashboard className='text-xl mr-2' />
            Dashboard
          </button>
          <DropdownButton icon={<RiAccountPinBoxFill className='text-xl mr-2' />} options={AccOptions} text={'Accounts'} />
          <DropdownButton icon={<BiSolidContact className='text-xl mr-2' />} options={options} text={'Contacts'} />
          <DropdownButton icon={<MdOutlineAutoGraph className='text-xl mr-2' />} options={options} text={'Lead'} />
          <DropdownButton icon={<FaHandshake className='text-xl mr-2' />} options={options} text={'Deal'} />
          <button className='px-4 py-2 flex items-center justify-start pl-4 hover:bg-headerblue'>
            <MdFeedback className='text-xl mr-2' />
            Feedback
          </button>
        </div>
      </div>

      {/* Main content */}
      <div className='flex flex-col items-center mx-3 bg-back w-full mb-3'>
        <div className='h-20 bg-back w-full flex items-end pb-4'>
          <div>
            {/* Switch button component */}
            <Switchbtn />
          </div>
        </div>

        <div className='p-4 bg-white shadow-md rounded-lg border border-gray-200 w-full'>
          {/* Table component */}
          <Page columns={columns} data={data} />
        </div>
      </div>
    </div>
  </>
);
}

export default App;