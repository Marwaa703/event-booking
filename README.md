# Event Booking Mobile App

Event Booking is a React Native mobile application that allows users to discover, view, and reserve events. Built with Expo and Redux, it provides a seamless experience for event management.


**Screenshots in the end of README.md**

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



## Screenshots
![7](https://github.com/user-attachments/assets/a52ef3d8-721f-49a6-a47c-fa45ae4b8afe)
![4](https://github.com/user-attachments/assets/038086f0-ded5-4992-8b17-2a818a50e4df)
![5](https://github.com/user-attachments/assets/b5beacb0-f7b0-4cc2-81a8-150ca2f17604)
![2](https://github.com/user-attachments/assets/6d258fb1-90c3-4d42-8c5b-dd1a7214fc75)
![1](https://github.com/user-attachments/assets/e74bf291-7bd7-4595-89ef-0c45360b2236)

