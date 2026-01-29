import React from 'react';
import { Play, Pause, Square, CheckCircle } from 'lucide-react';

export default function TimerControls({ 
  isRunning, 
  timeElapsed, 
  isCompleted,
  onStart, 
  onPause, 
  onStop, 
  onComplete 
}) {
  if (isCompleted) return null;

  return (
    <div className="flex gap-2">
      {!isRunning ? (
        <button
          onClick={onStart}
          className="p-2 rounded-lg bg-green-600 hover:bg-green-700 transition-all"
          title="Start"
        >
          <Play className="w-4 h-4 text-white" />
        </button>
      ) : (
        <button
          onClick={onPause}
          className="p-2 rounded-lg bg-yellow-600 hover:bg-yellow-700 transition-all"
          title="Pause"
        >
          <Pause className="w-4 h-4 text-white" />
        </button>
      )}

      {timeElapsed > 0 && (
        <>
          <button
            onClick={onStop}
            className="p-2 rounded-lg bg-red-600 hover:bg-red-700 transition-all"
            title="Stop"
          >
            <Square className="w-4 h-4 text-white" />
          </button>
          <button
            onClick={onComplete}
            className="p-2 rounded-lg bg-purple-600 hover:bg-purple-700 transition-all"
            title="Complete"
          >
            <CheckCircle className="w-4 h-4 text-white" />
          </button>
        </>
      )}
    </div>
  );
}