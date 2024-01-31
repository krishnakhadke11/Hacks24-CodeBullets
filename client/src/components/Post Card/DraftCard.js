import React, { useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
import AddDraft from "./AddDraft";
import { Add } from "@mui/icons-material";

const DraftCard = () => {

    const [open, setOpen] = useState(false);
    const buttonClick = (e) => {
        e.preventDefault();
        setOpen(true);
    }

    return (
        <>
            <div className="flex flex-col lg:flex-row">
                <Sidebar />
                {!open ? <div className="container mx-auto mt-8 p-8 bg-gray-200">
                    {/* The container with some margin, padding, and background color */}
                    <button onClick={(e) => buttonClick(e)} className="bg-blue-500 text-white px-6 py-3 rounded-lg">
                        {/* The button with a blue background, white text, padding, and rounded corners */}
                        Click me
                    </button>

                </div>
                    : <AddDraft />}
            </div>
        </>
    );
};

export default DraftCard;
