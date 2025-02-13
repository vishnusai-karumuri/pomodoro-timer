import * as vscode from 'vscode';

class PomodoroTimer {
    private statusBarItem: vscode.StatusBarItem;
    private timer: NodeJS.Timeout | undefined;
    private timeLeft: number = 25 * 60; // 25 minutes in seconds
    private isRunning: boolean = false;
    private isBreak: boolean = false;
    private cycleCount: number = 0;
    private readonly WORK_TIME = 25 * 60;
    private readonly SHORT_BREAK = 5 * 60;
    private readonly LONG_BREAK = 15 * 60;
    private readonly CYCLES_BEFORE_LONG_BREAK = 4;

    constructor(private context: vscode.ExtensionContext) {
        this.statusBarItem = vscode.window.createStatusBarItem(
            vscode.StatusBarAlignment.Right,
            1000
        );
        this.statusBarItem.command = 'pomodoro-timer.toggle';
        this.context.subscriptions.push(this.statusBarItem);
        this.updateStatusBar();
        this.statusBarItem.show();
    }

    public toggle() {
        if (this.isRunning) {
            this.stopTimer();
        } else {
            this.startTimer();
        }
    }

    private async startTimer() {
        if (!this.isRunning) {
            this.isRunning = true;
            if (!this.isBreak) {
                this.timeLeft = this.WORK_TIME;
            }
            this.timer = setInterval(() => {
                if (this.timeLeft > 0) {
                    this.timeLeft--;
                    this.updateStatusBar();
                } else {
                    this.handleTimerComplete();
                }
            }, 1000);
            this.updateStatusBar();
        }
    }

    private stopTimer() {
        if (this.timer) {
            clearInterval(this.timer);
            this.timer = undefined;
        }
        this.isRunning = false;
        this.updateStatusBar();
    }

    private async handleTimerComplete() {
        this.stopTimer();
        
        if (!this.isBreak) {
            // Work period completed
            this.cycleCount++;
            const shouldTakeLongBreak = this.cycleCount % this.CYCLES_BEFORE_LONG_BREAK === 0;
            const breakTime = shouldTakeLongBreak ? this.LONG_BREAK : this.SHORT_BREAK;
            
            const breakChoice = await vscode.window.showInformationMessage(
                `🎉 Pomodoro #${this.cycleCount} completed! Time for a ${shouldTakeLongBreak ? '15-minute' : '5-minute'} break?`,
                'Start Break',
                'Skip Break'
            );

            if (breakChoice === 'Start Break') {
                this.isBreak = true;
                this.timeLeft = breakTime;
                this.startTimer();
            } else {
                this.isBreak = false;
                this.timeLeft = this.WORK_TIME;
                this.updateStatusBar();
            }
        } else {
            // Break period completed
            const workChoice = await vscode.window.showInformationMessage(
                '⏰ Break time is over! Ready to start working?',
                'Start Working',
                'Later'
            );

            this.isBreak = false;
            this.timeLeft = this.WORK_TIME;
            
            if (workChoice === 'Start Working') {
                this.startTimer();
            } else {
                this.updateStatusBar();
            }
        }
    }

    private updateStatusBar() {
        const minutes = Math.floor(this.timeLeft / 60);
        const seconds = this.timeLeft % 60;
        const timeStr = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        
        if (this.isRunning) {
            const icon = this.isBreak ? '$(clock)' : '$(watch)';
            const type = this.isBreak ? 'Break' : 'Focus';
            this.statusBarItem.text = `${icon} ${type} ${timeStr}`;
            this.statusBarItem.tooltip = `Click to pause - Pomodoro #${this.cycleCount + 1}`;
        } else {
            const type = this.isBreak ? 'Break' : 'Pomodoro';
            this.statusBarItem.text = `$(play) ${type} ${timeStr}`;
            this.statusBarItem.tooltip = `Click to start - Completed: ${this.cycleCount}`;
        }

        // Change color based on state
        if (this.isBreak) {
            this.statusBarItem.backgroundColor = new vscode.ThemeColor('statusBarItem.warningBackground');
        } else {
            this.statusBarItem.backgroundColor = undefined;
        }
    }
}

export function activate(context: vscode.ExtensionContext) {
    const timer = new PomodoroTimer(context);

    let startDisposable = vscode.commands.registerCommand('pomodoro-timer.start', () => {
        timer.toggle();
    });

    let toggleDisposable = vscode.commands.registerCommand('pomodoro-timer.toggle', () => {
        timer.toggle();
    });

    context.subscriptions.push(startDisposable, toggleDisposable);
} 