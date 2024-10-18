
import React, { useRef, useEffect, useState } from "react";
import GenerateButtonIcon from "../../../assets/images/Vector (1).png";
import RegenerateIcon from "../../../assets/images/RegenerateIcon.svg";
import InsertIcon from "../../../assets/images/InsertIcon.svg";

interface AIAssistantModalProps {
  onClose: () => void;
  onInsert: (text: string) => void;
}

const AIAssistantModal: React.FC<AIAssistantModalProps> = ({
  onClose,
  onInsert,
}) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const [isGenerateModalOpen, setIsGenerateModalOpen] = useState(false);
  const [promptText, setPromptText] = useState("");
  const [generatedText, setGeneratedText] = useState(
    "Thank you for the opportunity! If you have any more questions or if there's anything else I can help you with, feel free to ask."
  );

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  const handleGenerateButton = () => {
    setIsGenerateModalOpen(true);
    setGeneratedText(
      "Thank you for the opportunity! If you have any more questions or if there's anything else I can help you with, feel free to ask."
    );
  };

  const handleInsert = () => {
    const chatbox = document.querySelector(
      ".msg-form__contenteditable"
    ) as HTMLElement;
    if (chatbox) {
      chatbox.innerHTML = `<p>${generatedText}</p>`;
      const event = new Event("input", { bubbles: true });
      chatbox.dispatchEvent(event);
    }
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      {!isGenerateModalOpen ? (
        <div
          ref={modalRef}
          className="bg-white p-6 rounded-lg shadow-xl max-w-2xl w-11/12 flex flex-col"
        >
          <input
            type="text"
            placeholder="Your Prompt"
            className="w-full p-3 border border-gray-300 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={promptText}
            onChange={(e) => setPromptText(e.target.value)}
          />
          <button
            type="submit"
            className="ml-auto px-4 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-200 ease-in-out flex items-center"
            onClick={handleGenerateButton}
          >
            <img
              src={GenerateButtonIcon}
              className="w-4 h-4 mr-2"
              alt="Generate"
            />
            Generate
          </button>
        </div>
      ) : (
        <div
          ref={modalRef}
          className="bg-white p-6 rounded-lg shadow-xl max-w-2xl w-11/12 flex flex-col"
        >
          <div className="bg-slate-300 p-4 rounded-lg mb-4 w-auto max-w-3/4 self-end flex flex-wrap">
            <p className="text-gray-800">{promptText}</p>
          </div>
          <div className="bg-blue-100 p-4 rounded-lg mb-4 w-3/4">
            <p className="text-gray-800">{generatedText}</p>
          </div>
          <input
            type="text"
            placeholder="Your prompt"
            className="w-full p-3 border border-gray-300 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            // value={promptText}
            onChange={(e) => setPromptText(e.target.value)}
          />
          <div className="flex justify-end space-x-2">
            <button
              className="ml-auto px-4 py-2 border border-solid border-gray-700 text-gray-700 font-semibold rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50 transition duration-200 ease-in-out flex items-center"
              onClick={handleInsert}
            >
              <img
                src={InsertIcon}
                className="w-4 h-4 mr-2"
                alt="Generate"
              />
              Insert
            </button>
            <button
              className="ml-auto px-4 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-200 ease-in-out flex items-center"
              onClick={() => {
                setIsGenerateModalOpen(false);
                setPromptText("");
              }}
            >
              <img
                src={RegenerateIcon}
                className="w-5 h-5 mr-3"
                alt="Generate"
              />
              Regenerate
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AIAssistantModal;
