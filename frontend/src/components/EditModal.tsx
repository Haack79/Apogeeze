"use client";
import { useState } from "react";

interface EditModalProps {
  selectedRow: any;
  onClose: () => void;
  onSave: (updatedRow: any) => void;
}

const EditModal: React.FC<EditModalProps> = ({ selectedRow, onClose, onSave }) => {
  const [formData, setFormData] = useState(selectedRow);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setFormData((prevData: any) => ({
      ...prevData,
      [name]: name === 'price' ? parseFloat(value) : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData); // Pass the updated data to the parent component
    onClose(); // Close the modal after saving
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-4 rounded shadow-lg" suppressHydrationWarning>
        <form onSubmit={handleSubmit}>
          <div>
            <label className="block mb-2">Name:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="p-2 border rounded w-full"
            />
          </div>
          <div>
            <label className="block mb-2">Price:</label>
            <input
              type="number"
              name="price"
              value={formData.price}
              onChange={handleInputChange}
              className="p-2 border rounded w-full"
            />
          </div>
          <div>
            <label className="block mb-2">Date:</label>
            <input
              type="date"
              name="date"
              value={new Date(formData.date).toISOString().split('T')[0]}
              onChange={handleInputChange}
              className="p-2 border rounded w-full"
            />
          </div>
          <div className="flex justify-end mt-4">
            <button type="button" onClick={onClose} className="p-2 bg-red-500 text-white rounded mr-2">
              Cancel
            </button>
            <button type="submit" className="p-2 bg-blue-500 text-white rounded">
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditModal;
