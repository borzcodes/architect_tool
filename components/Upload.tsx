import React, {useState} from 'react'
import {useOutletContext} from "react-router";
import {UploadIcon} from "lucide-react";

const Upload = () => {
    const [file, setFile] = useState<File | null> (null);
    const [isDragging, setIsDragging] = useState(false);
    const [progress, setProgress] = useState(0);

    const {isSignedIn} = useOutletContext<AuthContext>();

    return (
        <div className='upload'>
            {!file ? (
                <div className={`dropzone ${isDragging ? 'dragging' : ''}`}>
                    <input type='file' className='drop-input' accept='.jpg, .jpeg, .png' disabled={!isSignedIn}/>
                    <div className='drop-content'>
                        <div className='drop-icon'>
                            <UploadIcon size={20} />
                        </div>
                        <p>
                            {isSignedIn ? (
                                'Click to upload or just drag here'
                            ):(
                                'Sign in or sign up with puter to upload'
                            )}
                        </p>

                        <p className='help'>
                            Maximum file size 50MB.
                        </p>
                    </div>
                </div>
            ):(
                <div></div>
            )}
        </div>
    )
}
export default Upload
