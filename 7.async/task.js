class AlarmClock {
    constructor() {
        this.alarmCollection = [];
        this.intervalId = null;
    }

    addClock(time, callback) {
        if (!time || !callback) {
            throw new Error('Отсутствуют обязательные аргументы');
        }
        if (this.alarmCollection !== time) {
            console.warn('Уже присутствует звонок на это же время')
        }
        this.alarmCollection.push({
            callback: callback,
            time: time,
            canCall: true,
        })
    }

    removeClock(time) {
        this.alarmCollection = this.alarmCollection.filter((alarm) => alarm.time !== time);
    }

    getCurrentFormattedTime() {
        let time = new Date();
        return time.getHours() + ":" + time.getMinutes();
    }

    start() {
        if (this.intervalId !== null) {
            return;
        } else {
            this.intervalId = setInterval(() => {
                this.alarmCollection.forEach((alarm) => {
                    if (alarm.time === this.getCurrentFormattedTime() && alarm.canCall) {
                        alarm.canCall = false;
                        alarm.callback();
                    }
                });
            }, 1000);
        }

    }

    stop() {
        clearInterval(this.intervalId);
        this.intervalId = null;
    }

    resetAllCalls() {
        this.alarmCollection.forEach(alarm => {
            alarm.canCall = true;
        })
    }

    clearAlarms() {
        this.stop();
        this.alarmCollection = [];
    }
}