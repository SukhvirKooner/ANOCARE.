import React from 'react';
import { Link } from 'react-router-dom';
import TransactionList from '../TransactionList';


const Portfolio = () => {
    return (
        <>
            <div className="my-4 py-4" id='portfolio'>
                <h2 className="my-2 text-center text-3xl text-blue-900 uppercase font-bold">Transactions</h2>
                <div className='flex justify-center'>
                    <div className='w-24 border-b-4 border-blue-900 mb-8'></div>
                </div>

                <div className="px-4" data-aos="fade-down" data-aos-delay="600">
                    <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-5">                            


                        <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:scale-105 rounded-lg shadow-2xl p-3">
                            <div className="m-2 text-justify text-sm">
                                <h4 className="font-semibold my-4 text-lg md:text-2xl text-center mb-4 h-12">Greenpeace</h4>
                                <h5 className="text-sm text-center font-medium p-0 leading-5 h-auto md:h-48">
                                <TransactionList address={"0xcfbf651c8805df9b77ff564b87e28377a9fe4772eab20b851dc3b0a2fdb1e414"}/>
                                </h5>
                                
                                
                                
                            </div>
                        </div>

                       

                        <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:scale-105 rounded-lg shadow-2xl p-3">
                            <div className="m-2 text-justify text-sm">
                                <h4 className="font-semibold my-4 text-lg md:text-2xl text-center mb-4 h-12">CARE</h4>
                                <h5 className="text-sm  text-center font-medium p-0 leading-5 h-auto md:h-48">
                                    <TransactionList address={"0xe332539a55649e3640838bd48c929713c4d288395335cb1057028a3d41167ff5"} />
                                </h5>
                                
                            </div>
                        </div>                    
                    </div>
                </div>
            </div>
        </>
    )
}

export default Portfolio;