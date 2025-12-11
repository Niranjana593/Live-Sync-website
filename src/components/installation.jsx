import React from 'react'

const Installation = () => {
    return (
        <div className='text-white  mt-15 min-h-screen'>
            <h1 className='text-3xl mt-10'>Installation Guide:</h1>
            <div className="windows">
                <h1 className='text-2xl pl-4 pt-3'>How to Install Live-Sync on your system:Step-by-Step Guide</h1>
                <hr />
                <div className='step1'>
                    <h1 className='text-xl ml-4 pl-4 mt-3 bg-amber-300 flex w-20 text-center border-2  '>Step 1</h1>
                    <p className='font-bold text-lg pl-4 pt-2 flex gap-3'><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FDF3D0"><path d="m440-200 137-240H80v-80h497L440-760l440 280-440 280Z" /></svg>Download the Installer for Your Operating System</p>
                    <p className='pl-9 text-sm'>Navigate to the download section and select the installer that matches your operating system (Windows, macOS, or Linux). You will be redirected to the application’s GitHub Releases page.
                        Choose the correct version to ensure smooth installation.</p>
                    <div className='flex justify-center m-5'>
                        <img className='w-[60%] text' src="github.jpg" alt="" />
                    </div>
                </div>
                <div className="step2">
                    <h1 className='text-xl ml-4 pl-4 mt-3 bg-amber-300 flex w-20 text-center border-2  '>Step 2</h1>
                    <p className='font-bold text-lg pl-4 pt-2 flex gap-3'><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FDF3D0"><path d="m440-200 137-240H80v-80h497L440-760l440 280-440 280Z" /></svg>Download the Application File from the GitHub Release</p>
                    <p className='pl-9 text-sm'>In the Assets section of the GitHub release, click the primary file provided for your OS.
                        This will download a ZIP or executable package to your system. Always download the latest stable release for the best experience.</p>
                    <div className='flex justify-center m-5'>
                        <img className=' text' src="download.jpg" alt="" />
                    </div>
                </div>
                <div className="step2">
                    <h1 className='text-xl ml-4 pl-4 mt-3 bg-amber-300 flex w-20 text-center border-2  '>Step 3</h1>
                    <p className='font-bold text-lg pl-4 pt-2 flex gap-3'><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FDF3D0"><path d="m440-200 137-240H80v-80h497L440-760l440 280-440 280Z" /></svg>Extract the Downloaded ZIP File</p>
                    <p className='pl-9 text-sm'>Once the ZIP file is downloaded, extract all its contents to a folder on your system.
                        Ensure all files are extracted properly, as missing files may prevent the application from running.</p>
                </div>
                <div className="step4">
                    <h1 className='text-xl ml-4 pl-4 mt-3 bg-amber-300 flex w-20 text-center border-2  '>Step 4</h1>
                    <p className='font-bold text-lg pl-4 pt-2 flex gap-3'><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FDF3D0"><path d="m440-200 137-240H80v-80h497L440-760l440 280-440 280Z" /></svg>Launch the Application Based on Your OS</p>
                    <p className='pl-9 text-sm'>To start the application, open the appropriate file: .exe for Windows, .dmg for macOS, or .AppImage for Linux.
                        Double-click the file, and follow any system prompts that appear during the first launch.</p>
                    <div className='flex w-[90%] m-auto gap-3 justify-center m-5'>
                        <div className="window">
                            <p className='highlight text-center'>For Windows</p>
                        <img className='text' src="windows.jpg" alt="" />
                        </div>
                        <div className='mac'>
                            <p className='text-center'>For Mac</p>
                        <img className=' text' src="mac.jpg" alt="" />
                        </div>
                        <div className="linux">
                        <p className='text-center'>For Linux</p>
                        <img className=' text' src="linux.jpg" alt="" />
                        </div>
                    </div>
                </div>
                <div className="step2">
                    <h1 className='text-xl ml-4 pl-4 mt-3 bg-amber-300 flex w-20 text-center border-2  '>Step 5</h1>
                    <p className='font-bold text-lg pl-4 pt-2 flex gap-3'><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FDF3D0"><path d="m440-200 137-240H80v-80h497L440-760l440 280-440 280Z" /></svg>Access the Application</p>
                    <p className='pl-9 text-sm'>After launching the executable, the application will open and be ready to use.
                        You may create a shortcut or move the application to a preferred folder for easier future access.</p>
                    <div className='flex justify-center m-5'>
                        <img className='w-[60%] text' src="Full_image.jpg" alt="" />
                    </div>
                </div>
                <p></p>
            </div>
            <div className='w-[100%] h-[0.5px] border-1 bg-blue-800 border-white mt-3'></div>

        </div>
    )
}

export default Installation
