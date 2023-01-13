import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SignIn from './SignIn/SignIn';
import SignUp from './SignUp/SignUp';
import logo from '../../../src/asset/logo.png';

const Authentication = () => {
    const [openTab, setOpenTab] = useState(1);
    return (
        <div className='w-96 mx-auto flex flex-col justify-center items-center py-10'>
            <div className='flex flex-col items-center justify-center'>
                <img className='w-44' src={logo} alt="" />
                <p className='px-5'>A login page is one of the most important pages of a website/app that allows authorized users to access an entire site or a part of a website.</p>
            </div>
            <div className='py-10'>
                <ul className='flex justify-between items-center list-none' role="tablist">
                    <li className='pr-10'>
                        <Link className={
                            "text-xl font-bold " +
                            (openTab === 1 ? "text-black border-b-2 border-b-pink-600 px-10"
                                :
                                "text-black ")
                        }
                            onClick={(e) => {
                                e.preventDefault();
                                setOpenTab(1);
                            }}
                            data-toggle="tab"
                            href="#tab1"
                            role="tablist"
                        >Login</Link>
                    </li>
                    <li className='pl-10'>
                        <Link className={
                            "text-xl font-bold" +
                            (openTab === 2 ? "text-black border-b-2 border-b-pink-600 px-10"
                                :
                                "text-blue ")
                        }
                            onClick={(e) => {
                                e.preventDefault();
                                setOpenTab(2);
                            }}
                            data-toggle="tab"
                            href="#tab2"
                            role="tablist"
                        >Sign Up</Link>
                    </li>
                </ul>
            </div>
            <div>
                <div className={openTab === 1 ? "block" : "hidden"} id="tab1">
                    <SignIn></SignIn>
                </div>
                <div className={openTab === 2 ? "block" : "hidden"} id="tab2">
                    <SignUp></SignUp>
                </div>
            </div>
        </div>
    );
};

export default Authentication;