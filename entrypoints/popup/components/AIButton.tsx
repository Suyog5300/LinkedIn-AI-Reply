
import React, { useState, useEffect, useRef } from "react";
import AiButton from "../../../assets/images/AI-icon.svg";
import AIAssistantModal from "./AIAssistantModal";

const AIAssistantButton: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  useEffect(() => {
    const chatBox = document.querySelector('.msg-form__contenteditable') as HTMLElement;
    
    const handleFocus = () => setIsVisible(true);
    const handleBlur = (e: FocusEvent) => {
      if (!buttonRef.current?.contains(e.relatedTarget as Node) && !isModalOpen) {
        setIsVisible(false);
      }
    };

    chatBox?.addEventListener('focus', handleFocus);
    chatBox?.addEventListener('blur', handleBlur);

    return () => {
      chatBox?.removeEventListener('focus', handleFocus);
      chatBox?.removeEventListener('blur', handleBlur);
    };
  }, [isModalOpen]);

  if (!isVisible && !isModalOpen) return null;

  return (
    <>
      <button
        ref={buttonRef}
        onClick={openModal}
        className="absolute right-2.5 bottom-1.5 bg-transparent border-none cursor-pointer"
        aria-label="Open AI Assistant"
      >
        <img src={AiButton} className="w-17 h-17" alt="AiIcon" />
      </button>
      {isModalOpen && <AIAssistantModal onClose={closeModal} />}
    </>
  );
};

export default AIAssistantButton;