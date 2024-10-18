import { defineContentScript } from 'wxt/sandbox';
import React from 'react';
import ReactDOM from 'react-dom/client';
import AIAssistantButton from './popup/components/AIButton';
import './popup/styles/index.css';

export default defineContentScript({
  matches: ['*://www.linkedin.com/*'],
  main() {
    const createButtonContainer = () => {
      const container = document.createElement('div');
      container.style.position = 'relative';
      return container;
    };

    const addButtonToChat = () => {
      const chatBoxes = document.querySelectorAll('.msg-form__contenteditable');
      chatBoxes.forEach((chatBox) => {
        if (chatBox.parentElement && !chatBox.parentElement.querySelector('.ai-assistant-button-container')) {
          const buttonContainer = createButtonContainer();
          buttonContainer.classList.add('ai-assistant-button-container');
          chatBox.parentElement.appendChild(buttonContainer);

          const root = ReactDOM.createRoot(buttonContainer);
          root.render(React.createElement(AIAssistantButton));

          chatBox.addEventListener('focus', () => {
            buttonContainer.style.display = 'block';
          });
        }
      });
    };

    const observeDOM = () => {
      const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
          if (mutation.type === 'childList') {
            addButtonToChat();
          }
        });
      });

      observer.observe(document.body, {
        childList: true,
        subtree: true,
      });
    };

    addButtonToChat();
    observeDOM();
  },
});