'use client';
import { useState } from "react";

const ModalShow = ({ modal }: {modal: React.ReactNode}) => {
    const [showModal, setShowModal] = useState<boolean>(true); // Set it to true to show initially

    const handleCloseModal = () => {
        setShowModal(false);
    };

    return (
        showModal && (
            <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
                <div className="bg-white p-4 rounded shadow-lg" suppressHydrationWarning>
                    {modal}
                    <button onClick={handleCloseModal} className="mt-4 p-2 bg-red-500 text-white rounded">Close Modal</button>
                </div>
            </div>
        )
    );
};

export default ModalShow;
