# Employee Dashboard

A modern employee dashboard with glassmorphism design, replicating the UI shown in the reference image.

## Features

- **Glassmorphism Design**: Modern frosted glass effect with backdrop blur
- **Responsive Layout**: Adapts to different screen sizes
- **Interactive Components**: 
  - Attendance tracking with work mode toggle
  - Time filters (Today, This month, Date)
  - Approval management system
  - Leave summary with progress bars
  - Expense and income tracking
- **Bottom Navigation**: Fixed navigation bar with Dashboard, Expense, Timesheet, and Settings
- **Real-time Data**: Simulated real-time updates for work hours and statistics

## Components

### Dashboard Widgets
1. **Mark Attendance** - Clock in/out functionality with work mode selection
2. **Income** - Monthly income display with trend indicators
3. **Messages** - Unread message counter
4. **Leaves Summary 2024** - Annual leave tracking with progress bars
5. **Expenses** - Monthly expenses with trend indicators
6. **Attendance Summary** - Monthly attendance statistics
7. **HR Letters** - HR document status
8. **Waiting For Approval** - Pending approval requests
9. **Forms** - Form selection and submission

## Getting Started

### Prerequisites
- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:3000`

### Build for Production

```bash
npm run build
```

## Technologies Used

- **React 18** - Frontend framework
- **Vite** - Build tool and development server
- **Lucide React** - Icon library
- **CSS3** - Styling with glassmorphism effects
- **Backdrop Filter** - For the frosted glass effect

## Design Features

- **Color Scheme**: Dark theme with purple gradient background
- **Typography**: System fonts with proper hierarchy
- **Glassmorphism**: Semi-transparent cards with backdrop blur
- **Responsive Grid**: CSS Grid layout that adapts to screen size
- **Interactive Elements**: Hover effects and smooth transitions
- **Accessibility**: Proper contrast ratios and keyboard navigation

## Browser Support

- Chrome (recommended for best backdrop-filter support)
- Firefox
- Safari
- Edge

## Customization

The dashboard is highly customizable through CSS variables and component props. You can easily modify:

- Color scheme in `src/index.css`
- Widget layouts in `src/App.jsx`
- Data sources and API integration
- Additional widgets and features

## License

MIT License - feel free to use this project for your own applications.
