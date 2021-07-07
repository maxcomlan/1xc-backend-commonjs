"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Logger = void 0;
class Logger {
    client;
    channel;
    service;
    constructor(client, channel, service) {
        this.client = client;
        this.channel = channel;
        this.service = service;
    }
    alert(message) {
        this.publish("alert", message);
    }
    critical(message) {
        this.publish("critical", message);
    }
    debug(message) {
        this.publish("debug", message);
    }
    emergency(message) {
        this.publish("emergency", message);
    }
    error(message) {
        this.publish("error", message);
    }
    info(message) {
        this.publish("info", message);
    }
    notice(message) {
        this.publish("notice", message);
    }
    warn(message) {
        this.publish("warn", message);
    }
    publish(level, message) {
        let log = {
            service: this.service,
            timestamp: Date.now(),
            logLevel: level,
            message: message
        };
        this.client.publish(this.channel, JSON.stringify(log));
    }
}
exports.Logger = Logger;
