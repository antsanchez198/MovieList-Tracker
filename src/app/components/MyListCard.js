import React from 'react';
import styles from './listCard.module.css';

const MyListCard = (props) => {
    return (
        // <div className="rounded-xl backdrop-blur-sm bg-white/30 h-fit w-fit text-center shadow-lg font-sans hover:shadow-xl">
        <div className="flex-[0] w-[35%] min-w-[250px] h-[350px] m-[1em] bg-white/50 rounded-xl">
            {/* <img src={`https://image.tmdb.org/t/p/original${props.image}`} className="w-auto h-16 rounded-t-xl drop-shadow-xl" alt={props.title} /> */}
            <div className="h-1/2 relative">
                <img
                    src={`https://image.tmdb.org/t/p/original${props.image}`}
                    className="w-full h-full object-cover rounded-t-xl drop-shadow-xl"
                    alt={props.title}
                />
            </div>
            <div className="my-4 flex flex-col items-center gap-2">
                <h3 className="text-xl font-semibold text-gray-800">{props.title}</h3>
                <div className="flex flex-row gap-2">
                    {props?.services?.length > 0 ? (
                        props.services.map((index) => (
                            <img
                                key={index.logo_path}
                                src={`https://image.tmdb.org/t/p/original${index.logo_path}`}
                                className="w-11 h-11 rounded-3xl object-contain shadow-md"
                                alt={index.provider_name}
                            />
                        ))
                    ) : (
                        <div className="font-light text-normal">No Streaming Platforms</div>
                    )}
                </div>
                <div className="flex flex-row gap-3 items-center">
                    <button
                        className="border-green-600 border-solid border-2 bg-green-200 rounded-2xl px-3 py-1 w-fit cursor-pointer text-green-600 font-semibold shadow-md hover:text-slate-100 hover:bg-green-600 text-white-800 hover:border-white-800 hover:transition duration-300 ease-in-out hover:shadow-xl"
                        onClick={props.deleteFunction}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-thumb-up" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <path d="M7 11v8a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1v-7a1 1 0 0 1 1 -1h3a4 4 0 0 0 4 -4v-1a2 2 0 0 1 4 0v5h3a2 2 0 0 1 2 2l-1 5a2 3 0 0 1 -2 2h-7a3 3 0 0 1 -3 -3"></path>
                        </svg>
                    </button>
                    <button
                        className="border-red-600 bg-red-200 border-solid border-2 rounded-2xl px-3 py-1 w-fit cursor-pointer text-red-600 font-semibold shadow-md hover:text-slate-100 hover:bg-red-600 text-white-800 hover:transition duration-300 ease-in-out hover:shadow-xl"
                        onClick={props.deleteFunction}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-thumb-down" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <path d="M7 13v-8a1 1 0 0 0 -1 -1h-2a1 1 0 0 0 -1 1v7a1 1 0 0 0 1 1h3a4 4 0 0 1 4 4v1a2 2 0 0 0 4 0v-5h3a2 2 0 0 0 2 -2l-1 -5a2 3 0 0 0 -2 -2h-7a3 3 0 0 0 -3 3"></path>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default MyListCard;
