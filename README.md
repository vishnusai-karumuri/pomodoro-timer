# VSCode Pomodoro Timer

[![Version](https://img.shields.io/visual-studio-marketplace/v/Monarch.monarch-pomodoro-timer)](https://marketplace.visualstudio.com/items?itemName=Monarch.monarch-pomodoro-timer)
[![Installs](https://img.shields.io/visual-studio-marketplace/i/Monarch.monarch-pomodoro-timer)](https://marketplace.visualstudio.com/items?itemName=Monarch.monarch-pomodoro-timer)
[![Rating](https://img.shields.io/visual-studio-marketplace/r/Monarch.monarch-pomodoro-timer)](https://marketplace.visualstudio.com/items?itemName=Monarch.monarch-pomodoro-timer)
[![GitHub](https://img.shields.io/github/license/vishnusai-karumuri/pomodoro-timer)](https://github.com/vishnusai-karumuri/pomodoro-timer/blob/main/LICENSE)

A minimal and elegant Pomodoro Timer that lives in your VSCode status bar. Stay focused and productive with timed work sessions and breaks.

[GitHub Repository](https://github.com/vishnusai-karumuri/pomodoro-timer) | [Report Issues](https://github.com/vishnusai-karumuri/pomodoro-timer/issues)

## Features

- 🎯 **Minimal Interface**: Lives in your status bar - no intrusive windows or popups
- ⏱️ **Standard Pomodoro Technique**:
  - 25-minute focused work sessions
  - 5-minute short breaks
  - 15-minute long breaks after 4 work sessions
- 🔄 **Smart Break System**:
  - Automatically suggests breaks after each session
  - Long breaks after 4 completed Pomodoros
  - Skip break option for flexibility
- 👀 **Visual Feedback**:
  - Different icons for work and break periods
  - Color-coded status bar for different states
  - Progress tracking in tooltips
- 📊 **Session Tracking**:
  - Counts completed Pomodoros
  - Shows current session progress
  - Maintains cycle count for long breaks

## Installation

1. Open VSCode
2. Press `Ctrl+P` / `Cmd+P`
3. Type `ext install Monarch.monarch-pomodoro-timer`
4. Press Enter

## Usage

### Starting a Session
1. Click the timer in the status bar, or
2. Open command palette (`Ctrl+Shift+P` / `Cmd+Shift+P`)
3. Type "Pomodoro: Start Timer"

### During a Session
- Timer shows in status bar with remaining time
- Click to pause/resume
- Notifications appear when sessions end
- Choose to take or skip breaks

### Status Bar Indicators
- `⌚ Focus 25:00` - Work session in progress
- `🕐 Break 05:00` - Break session in progress
- `▶️ Pomodoro 25:00` - Ready to start
- Different background colors for work and break periods

### Break System
- 5-minute breaks after regular sessions
- 15-minute breaks after completing 4 Pomodoros
- Option to skip breaks if needed
- Option to delay new work sessions

## Commands

| Command | Description |
|---------|-------------|
| `Pomodoro: Start Timer` | Start/Resume the timer |
| `Pomodoro: Toggle Timer` | Toggle between pause/resume |

## Settings

Currently using default Pomodoro timings:
- Work Session: 25 minutes
- Short Break: 5 minutes
- Long Break: 15 minutes
- Long Break Interval: Every 4 sessions

## Contributing

1. Fork the repository: [Fork](https://github.com/vishnusai-karumuri/pomodoro-timer/fork)
2. Create your feature branch: `git checkout -b feature/my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin feature/my-new-feature`
5. Submit a pull request

Found a bug or have a feature request? Please [open an issue](https://github.com/vishnusai-karumuri/pomodoro-timer/issues).

## Credits

- Extension icon: [Tomato icon](https://www.iconfinder.com/search?q=tomato&price=free) licensed under [Creative Commons (Attribution 3.0 Unported)](http://creativecommons.org/licenses/by/3.0/)

## License

This extension is licensed under the [MIT License](https://github.com/vishnusai-karumuri/pomodoro-timer/blob/main/LICENSE).

## Release Notes

### 0.0.2
- Added icon credits and attribution
- Fixed package size optimization
- Removed circular dependencies

### 0.0.1
- Initial release
- Basic Pomodoro functionality
- Status bar integration
- Break management system
- Session tracking 