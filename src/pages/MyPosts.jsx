import React from 'react';

function MyPosts() {
    return (
        <div className='w-full min-h-full flex-col justify-start'>
            <div className='w-full h-12 bg-white flex justify-center items-center border-b-2'><h3 className='w-full h-full flex justify-center items-center font-normal text-2xl'>My Posts</h3></div>
            <div className='w-full min-h-full p-3 flex flex-wrap gap-8 justify-start items-start'>
                <div className='w-64 h-64 bg-white rounded-2xl overflow-hidden flex-col justify-center gap-1 items-start border shadow-md'>
                    <div className='w-64 h-48 bg-slate-950'>
                        Image
                    </div>
                    <div className='w-full pl-1 mt-1'>
                        <h1 className='w-full h-full font-mono text-md'>Title</h1>
                        <div className='w-full flex pr-1'>
                        <h3 className='w-1/2 h-full font-mono text-md text-left'>Author</h3>
                        <p className='w-1/2 h-full font-mono text-md text-right'>12/04/2023</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MyPosts;