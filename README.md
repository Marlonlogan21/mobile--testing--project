# Mobile App Automation Project

## Overview
This project involves automating tests on a mobile application (Google Photos) using Appium, WebdriverIO, and Android Studio Emulator.

## Test Cases

### TC001: Launch App Successfully
- **Objective**: Ensure the app launches correctly.
- **Steps**:
  1. Start the app on emulator.
  2. Wait for home screen.
- **Expected Result**: App opens without crashing.
- **Pass/Fail**: Pass if home screen appears.

### TC002: Open First Photo
- **Objective**: Verify user can open a photo.
- **Steps**:
  1. Launch app.
  2. Tap the first photo in the gallery.
- **Expected Result**: The photo opens in full screen.
- **Pass/Fail**: Pass if photo displays properly.

### TC003: Navigate to Search Tab
- **Objective**: Validate navigation to the Search tab.
- **Steps**:
  1. Launch app.
  2. Tap on "Search" tab.
- **Expected Result**: Search screen loads.
- **Pass/Fail**: Pass if search screen displays with input.

### TC004: Check App Responsiveness
- **Objective**: Test UI responsiveness.
- **Steps**:
  1. Launch app.
  2. Rotate screen.
  3. Tap multiple buttons quickly.
- **Expected Result**: App remains responsive.
- **Pass/Fail**: Pass if no lag/crash occurs.

### TC005: Access Settings
- **Objective**: Ensure user can access settings.
- **Steps**:
  1. Launch app.
  2. Tap profile icon.
  3. Select "Photos Settings."
- **Expected Result**: Settings menu loads.
- **Pass/Fail**: Pass if settings screen appears.
