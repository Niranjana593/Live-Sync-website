import React from 'react'

const Body = () => {
    return (
        <>
            <div className='text-white'>
                <h1 className='text-3xl mt-10 ml-5'>Live Sync:</h1>
                <div className='flex'>
                    <div className='w-200 flex flex-col gap-5 ml-5 mt-4'>
                        <p className=''>Live-Sync is a fast and efficient desktop application that keeps your source and destination files perfectly synchronized in real time. Every time you make a change in your source folder, Live-Sync automatically updates the destination folder instantly, ensuring both locations stay up to date without any manual effort. </p>
                        <p>
                            Designed to eliminate repetitive tasks, Live-Sync removes the need to copy and paste files manually, reducing errors and saving valuable time. Whether you are managing project folders, maintaining multiple build directories, or working across different environments, Live-Sync provides a smooth and continuous workflow.
                        </p>
                        <p>

                            With its simple setup, minimal resource usage, and reliable background syncing, Live-Sync makes file management effortless and helps you focus on what truly matters—your work.
                        </p>
                    </div>
                    <img width={400} src="sync.png" alt="" />
                </div>
                <div className='w-[100%] h-[0.5px] border-1 bg-blue-800 border-white mt-3'></div>
                <h1 className='text-3xl mt-10 ml-5 '>Usage Guide:</h1>
                <div className=' flex flex-col'>
                    <img className='m-auto mt-5 border-2 border-b-fuchsia-400 shadow-xl' width={700} src="source.jpg" alt="" />
                    <div className='flex justify-around'>
                        <section className='w-100 flex flex-col gap-3 ml-5 mt-10 mb-10 border-2 border-[#d1c8e3] p-[15px] shadow-[5px_5px_20px_3px_white]'>
                            <h2 className='underline text-xl'>Creating a Temporary File:</h2>
                            <p >
                                To create a new temporary file, click the <strong>“+”</strong> icon.
                                This will open a pop-up form where you can enter the name of your temporary file.
                                After entering the desired name, click the <strong>Create</strong> button to generate the temporary file in your workspace.
                            </p>

                        </section>
                        <section className='w-100 flex flex-col gap-3 ml-5 mt-10 mb-10 border-2 border-[#d1c8e3] p-[15px] shadow-[5px_5px_20px_3px_white]'>
                            <h2 className='text-xl underline'>Selecting a destination file:</h2>
                            <p className="">
                                To select a destination file, click on the <strong>“Browse”</strong> button.
                                which opens a file explorer window allowing you to navigate to your destination file
                            </p>

                        </section>
                    </div>
                    <div className='w-[100%] h-[0.5px] border-1 bg-blue-800 border-white mt-3'></div>
                    <section className=' ml-30 my-10 flex flex-col gap-3'>
                        <h2 className='text-xl underline'>What's Next?</h2>
                        <div className="flex justify-around gap-4 w-full ">
                            <div className="flex-1">
                                <p className='w-130'>
                                    <img className="inline mr-2 bg-white" src="right.png" alt="" />

                                    After setting up the source and destination files, click the
                                    <strong className="underline">"Start Sync"</strong> button to initiate the synchronization process.
                                    Live-Sync will now monitor the source file for any changes and automatically update the
                                    destination file in real time. <br />

                                    If everything is set up correctly, you should get a <strong>Toast</strong> notification indicating
                                    that the sync has started successfully. Now you can start working on your source file.
                                </p>
                            </div>

                            <img className="shadow-[5px_5px_20px_3px_#ed8080] mr-20 w-[500] h-30" src="/start.jpg" alt="" />
                        </div>

                        <div className="flex mt-5 justify-around gap-4 w-full ">
                            <div className="flex-1">
                                <p className='w-130'>
                                    <img className="inline mr-2 bg-white" src="right.png" alt="" />

                                    After starting the sync, you can open the source file in VS Code to edit the source file. Any Changes made to the source file will be automatically reflected in the destination file. To open the source file in VS Code, simply slick on the <strong className="underline">"Open In VS Code"</strong>button. This will redirect to VS code with the source file opened and ready to editing.
                                </p>
                            </div>
                            <img className="shadow-[5px_5px_20px_3px_#ed8080] mr-20 w-[500] h-30" src="/vscode.jpg" alt="" />
                        </div>
                        <div className="flex mt-7 justify-around gap-4 w-full ">
                            <div className="flex-1">
                                <p className='w-130'>
                                    <img className="inline mr-2 bg-white" src="right.png" alt="" />

                                    Anytime you want to stop the synchronization process, simply click on the <strong className="underline">"Stop Sync"</strong> button. Which will halt the syncronization and deletes the temporary file created earlier. You will receive a Toast notification confirming that the sync has been stoped successfully and temporary file deleted.
                                </p>
                            </div>
                            <img className="shadow-[5px_5px_20px_3px_#ed8080] mr-20 w-[500] h-30" src="/stop.jpg" alt="" />
                        </div>

                    </section>
                    <div className='w-[100%] h-[0.5px] border-1 bg-blue-800 border-white mt-3'></div>

                </div>
            </div >
        </>
    )
}

export default Body
