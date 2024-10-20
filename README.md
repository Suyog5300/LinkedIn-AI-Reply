# LinkedIn AI Assistant

A browser extension that adds an AI-powered assistant to LinkedIn chat boxes.

## Features

- Adds an AI assistant button to LinkedIn message compose boxes
- Seamlessly integrates with LinkedIn's existing chat interface

## Demo

https://github.com/user-attachments/assets/7cc45fc8-cc1e-46f0-af99-cd2e79b43ce5

## Installation

1. Clone this repository:
   ```bash
   git clone https://github.com/Suyog5300/linkedin-ai-assistant.git
   cd linkedin-ai-assistant
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Build the extension:
   ```bash
   npm run build
   ```
4. Load the extension in your browser:
   - **Chrome**: Go to `chrome://extensions/`, enable "Developer mode", click "Load unpacked", and select the `dist` folder.
   - **Firefox**: Go to `about:debugging`, click "This Firefox", click "Load Temporary Add-on", and select any file in the `dist` folder.

## Usage

1. Navigate to LinkedIn and open a conversation.
2. Click on the message input field.
3. An AI icon will appear in the bottom-right corner of the input field.
4. Click the icon to open the AI assistant.
5. Enter your prompt and click "Generate" to get an AI-generated response.
6. Click "Insert" to add the generated text to your message.

## Development

- Run `npm run dev` to start the development server with hot reloading.
- Run `npm run build` to create a production build.

## Technologies Used

- React
- TypeScript
- WXT (Web Extension Toolkit)
- Tailwind CSS

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
