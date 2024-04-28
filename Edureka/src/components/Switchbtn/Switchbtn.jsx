import React, { useState } from 'react';
import { IoMdCreate } from "react-icons/io";

const Switchbtn = () => {
    // State to manage the checked/unchecked state of the switch
    const [isChecked, setIsChecked] = useState(false);

    // Function to handle checkbox change
    const handleCheckboxChange = () => {
        setIsChecked(!isChecked); // Toggle the checked state
    };

    return (
        <>
            {/* Switch button container */}
            <label className='themeSwitcherThree relative inline-flex cursor-pointer select-none items-center'>
                {/* Hidden checkbox input */}
                <input
                    type='checkbox'
                    checked={isChecked}
                    onChange={handleCheckboxChange}
                    className='sr-only'
                />
                {/* Switch button */}
                <div className='shadow-card flex h-[46px] w-[210px] items-center justify-evenly rounded-md bg-switch'>
                    {/* Account button */}
                    <span
                        className={`flex h-9 w-[100px] items-center justify-center rounded ${
                            !isChecked ? 'bg-white' : 'text-body-color'
                        }`}
                    >
                        Account
                    </span>
                    {/* Create button */}
                    <span
                        className={`flex h-9 w-[100px] items-center justify-center gap-1 rounded ${
                            isChecked ? 'bg-white' : 'text-body-color'
                        }`}
                    >
                        <IoMdCreate /> Create
                    </span>
                </div>
            </label>
        </>
    );
};

export default Switchbtn;
