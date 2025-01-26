# Demo

[Video](https://www.loom.com/share/3fceabbbac564c628a8110df66d2e47e)

# Module Structure

## File History

### Components

- **HistorySidebar**: A sidebar component that displays a list of previously converted files. Each file is represented as a clickable button.

### Hooks

- **useFileHistory**: A custom hook that manages the file history state, including adding new files to the history and retrieving the history from local storage.

## Layout

### Components

- **Header**: A fixed header component that displays the title of the application.
- **MainContainer**: A container component that wraps the main content of the application.
- **TextArea**: A styled text area component for user input.
- **Button**: A styled button component with customizable text and click handler.

## PDF Converter

### Components

- **PDFViewerContainer**: A component that displays a PDF document using the `react-pdf` library.
- **ContentToolBar**: A toolbar component that provides options for interacting with the PDF content.

### Hooks

- **usePDFConverter**: A custom hook that handles converting text to a PDF by calling an API and updating the file history.

# Improvements

- Due to third party PDF rendering library, the app have UI issues with PDF display.

- To remove props drilling, we can use context API or state management, also can help to organize logic in more structured way (Need more time to implement).

- Need to organize tailwindcss classes in more structured way. (I am not familiar with tailwindcss, so i have no time to do this).

- For this test task we truly don't need next js, it can be a great scalable solution for future with all the features it provides. (I made this decision because i have own template with next js and all adjustments, that i don`t need to spend time on setup).

- Add pre-commit hooks and pre push hooks, for eslint, build, tests.
