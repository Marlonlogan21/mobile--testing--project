## 📋 Test Plan

### ✅ Scope
The purpose of this testing is to validate the core functionalities, UI/UX elements, and performance of a selected mobile application using an Android emulator.

### 🎯 Objectives
- Verify critical features work as expected (login, navigation, etc.).
- Ensure the UI is visually aligned and usable.
- Test performance and behavior under stress or extended usage.

### 🛠 Tools Used
- **Android Studio**: Emulator setup and configuration.
- **Appium**: Mobile test automation framework.
- **VS Code**: Code editor.
- **WebdriverIO**: Test runner and automation.
- **Screen Recording Tool**: macOS native screen recording (QuickTime).

### 🧪 Testing Environment
- **Device Type**: Android Emulator
- **Device Name**: emulator-5554
- **Android Version**: 11.0
- **Automation Tool**: Appium with WebdriverIO
- **Platform**: macOS

---

## ✅ Test Cases

### 🔹 Test Case 1: Functional Test – App Launch
- **Test ID**: TC001
- **Objective**: Verify the application launches successfully.
- **Steps**:
  1. Start emulator.
  2. Launch the app using Appium.
- **Expected Result**: App opens and loads the home screen.
- **Pass/Fail Criteria**: Pass if home screen loads with no errors.

---

### 🔹 Test Case 2: UI Test – Layout Alignment
- **Test ID**: TC002
- **Objective**: Ensure UI elements are properly aligned.
- **Steps**:
  1. Launch the app.
  2. Navigate through key screens.
- **Expected Result**: Text, buttons, and inputs are aligned consistently.
- **Pass/Fail Criteria**: Pass if no misalignment or UI issues are found.

---

### 🔹 Test Case 3: Performance Test – App Load Time
- **Test ID**: TC003
- **Objective**: Measure time taken to launch and respond to user actions.
- **Steps**:
  1. Launch app.
  2. Navigate through several screens.
- **Expected Result**: App responds within 3 seconds for each screen load.
- **Pass/Fail Criteria**: Pass if response time is within 3 seconds.

---

### 🔹 Test Case 4: UX Test – Navigation Usability
- **Test ID**: TC004
- **Objective**: Verify user can easily navigate through app.
- **Steps**:
  1. Launch the app.
  2. Use navigation buttons or gestures.
- **Expected Result**: App transitions between pages smoothly.
- **Pass/Fail Criteria**: Pass if all navigation paths work without confusion.

---

### 🔹 Test Case 5: Functional Test – App Close
- **Test ID**: TC005
- **Objective**: Ensure the app closes without crashing or freezing.
- **Steps**:
  1. Open the app.
  2. Press back or home button to close.
- **Expected Result**: App closes and returns to home screen.
- **Pass/Fail Criteria**: Pass if no crash or lag on close.

---

## 🎥 Demo Video

[
](https://drive.google.com/file/d/1jH66B5CBzi_l_dMrsDPispb2SYwjS3XQ/view?usp=sharing)---
