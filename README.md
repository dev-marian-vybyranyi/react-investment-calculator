# React Investment Calculator

A sleek and modern investment calculator built with React and Vite. This application allows users to calculate their potential investment growth over time based on initial investment, annual contributions, expected returns, and duration.

## Features

- **Real-time Calculations**: Instant updates as you modify input values.
- **Detailed Results**: Tabular breakdown of investment value, interest earned per year, and total interest.
- **Input Validation**: Ensures duration is greater than zero to provide meaningful results.
- **Responsive Design**: Clean and interactive user interface.

## Technologies Used

- **React**: Modern component-based UI library.
- **Vite**: Ultra-fast frontend build tool.
- **Vanilla CSS**: Custom styling for a premium feel.
- **Intl API**: For localized currency formatting.

## Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```bash
   cd react-investment-calculator
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

### Usage

To start the development server:

```bash
npm run dev
```

Open your browser and navigate to the link provided in the terminal (usually `http://localhost:5173`).

### Building for Production

To create a production build:

```bash
npm run build
```

## Project Structure

- `src/components`: UI components (`Header`, `UserInput`, `Results`).
- `src/util`: Helper functions for investment calculations and formatting.
- `src/assets`: Static assets like images.
- `src/index.css`: Global styles.
