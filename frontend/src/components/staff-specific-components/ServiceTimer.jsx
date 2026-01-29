import React, { useState, useEffect } from 'react';
import { CheckCircle } from 'lucide-react';
import TimerControls from './TimerControls';

export default function ServiceTimer({ service, onComplete, onStatusChange }) {
    const [isRunning, setIsRunning] = useState(false);
    const [timeElapsed, setTimeElapsed] = useState(0);

    useEffect(() => {
        let interval;
        if (isRunning) {
            interval = setInterval(() => setTimeElapsed(prev => prev + 1), 1000);
        }
        return () => clearInterval(interval);
    }, [isRunning]);

    const formatTime = (seconds) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    };

    const handleStart = () => {
        setIsRunning(true);
        onStatusChange('in-progress');
    };

    const handlePause = () => setIsRunning(false);

    const handleStop = () => {
        setIsRunning(false);
        setTimeElapsed(0);
        onStatusChange('pending');
    };

    const handleComplete = () => {
        setIsRunning(false);
        onComplete();
    };

    const getStatusColor = () => {
        if (service.completed) return 'border-green-500/50 bg-green-900/20';
        if (service.status === 'in-progress') return 'border-purple-500/50 bg-purple-900/20';
        return 'border-gray-600/50 bg-gray-800/50';
    };

    return (
        <div className={`border-2 rounded-lg p-4 transition-all ${getStatusColor()}`}>
            <div className="flex items-center justify-between mb-3">
                <div>
                    <h4 className="text-white font-semibold">{service.name}</h4>
                    <p className="text-purple-300 text-sm">Est. {service.duration} mins</p>
                </div>
                {service.completed && <CheckCircle className="w-6 h-6 text-green-400" />}
            </div>

            <div className="flex items-center justify-between">
                <div className="text-2xl font-mono text-purple-300 font-bold">
                    {formatTime(timeElapsed)}
                </div>
                <TimerControls
                    isRunning={isRunning}
                    timeElapsed={timeElapsed}
                    isCompleted={service.completed}
                    onStart={handleStart}
                    onPause={handlePause}
                    onStop={handleStop}
                    onComplete={handleComplete}
                />
            </div>
        </div>
    );
}