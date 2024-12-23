# Event Booking Mobile App

Event Booking is a React Native mobile application that allows users to discover, view, and reserve events. Built with Expo and Redux, it provides a seamless experience for event management.

(https://github.com/user-attachments/assets/cf0259cd-dc3e-4474-b8a4-326936ec01b4)
(https://github.com/user-attachments/assets/75d11bf7-ffe8-40af-98f1-507070588d3b)
(https://github.com/user-attachments/assets/f17d5532-96bc-4af7-95b7-7cec77661cf3)
(https://github.com/user-attachments/assets/e7307a45-f0e2-45c2-bd7b-638850e42146)
(https://github.com/user-attachments/assets/b029170d-fb0b-446e-b988-e5bd954d4da4)
(https://github.com/user-attachments/assets/aa193827-725a-440b-ba7a-835f3a52cfa9)
(https://github.com/user-attachments/assets/a2924c94-e2f3-434b-85d0-6483e35ab59c)
(https://github.com/user-attachments/assets/6da46a60-827c-48df-8d1b-0a940767d6a3)


## Features

### User Authentication

- User registration with email validation
- Secure login system
- Profile management
- Persistent login state

### Event Management

- Browse available events
- View detailed event information
- Reserve events
- View reserved events in profile
- Real-time availability updates
- Dynamic event filtering

### UI/UX Features

- Modern and intuitive interface
- Dark theme design
- Smooth animations and transitions
- Responsive layout
- Loading states and error handling


## Technology Stack

- **Frontend Framework**: React Native with Expo
- **State Management**: Redux Toolkit
- **Navigation**: Expo Router
- **Icons**: Expo Vector Icons
- **API Integration**: Axios

## Installation

1. Clone the repository:

```
bash
git clone https://github.com/Marwaa703/event-booking.git

```

2. Install dependencies:

```
bash
cd EventBookingApp
npm install
```

3. Start the development server:

```
bash
npx expo start
```

4. Run on your device or emulator:

- Scan the QR code with Expo Go (Android)
- Scan the QR code with Camera app (iOS)
- Press 'a' for Android emulator
- Press 'i' for iOS simulator

## Project Structure

```
EventBookingApp/
├── app/
│   ├── (auth)/
│   │   ├── Login.js
│   │   └── SignUp.js
│   ├── (tabs)/
│   │   ├── events/
│   │   │   ├── [id].js
│   │   │   └── index.js
│   │   ├── Profile.js
│   │   └── _layout.js
│   └── _layout.js
├── components/
│   ├── EventCard.js
│   ├── EventCardSlider.js
│   └── RegisteredEvents.js
├── redux/
│   ├── slices/
│   │   ├── userSlice.js
│   │   └── reservationSlice.js
│   │   └── eventSlice.js
│   └── store.js
├── api/
│   ├── auth.js
│   ├── event.js
│   └── axiosConfig.js
└── assets/
```



## Usage

### Authentication

- Launch the app and create an account using the Sign Up screen
- Log in with your credentials
- Your session will persist until you log out

### Browsing Events

- The main screen displays featured events in a horizontal slider
- Scroll down to see all available events
- Click on any event to view details

### Reserving Events

- Open an event's details page
- Click "Reserve Event" button
- Confirm your reservation
- View your reserved events in the Profile tab

### Profile Management

- Access your profile from the tab bar
- View your reserved events
- Check your event statistics
- Log out when needed

## License

This project is licensed under the MIT License.

## Acknowledgments

- [Expo](https://expo.dev/)
- [React Native](https://reactnative.dev/)
- [Redux Toolkit](https://redux-toolkit.js.org/)

