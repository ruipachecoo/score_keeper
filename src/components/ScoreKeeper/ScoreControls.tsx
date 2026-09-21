import type { Player } from '../../types';

interface ScoreControlsProps {
  players: [Player, Player];
  winningScore: number;
  isGameOver: boolean;
  onIncrement: (playerId: Player['id']) => void;
  onReset: () => void;
  onWinningScoreChange: (value: number) => void;
}

const WINNING_SCORE_OPTIONS = [3, 4, 5, 6, 7, 8, 9, 10, 11];

export function ScoreControls({
  players,
  winningScore,
  isGameOver,
  onIncrement,
  onReset,
  onWinningScoreChange,
}: ScoreControlsProps) {
  return (
    <div className="flex flex-col items-center gap-6 w-full">
      <div className="flex items-center gap-3">
        <label htmlFor="playto" className="text-slate-300">
          Playing to
        </label>
        <select
          id="playto"
          value={winningScore}
          onChange={(e) => onWinningScoreChange(Number(e.target.value))}
          className="bg-slate-800 text-white px-3 py-2 rounded-lg border border-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          {WINNING_SCORE_OPTIONS.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>

      <div className="grid grid-cols-2 gap-3 w-full">
        {players.map((player) => (
          <button
            key={player.id}
            onClick={() => onIncrement(player.id)}
            disabled={isGameOver}
            className="px-4 py-3 bg-blue-500 hover:bg-blue-600 disabled:bg-slate-700 disabled:cursor-not-allowed disabled:opacity-50 text-white font-semibold rounded-lg transition-colors"
          >
            +1 {player.name}
          </button>
        ))}
      </div>

      <button
        onClick={onReset}
        className="px-4 py-3 w-full bg-red-500 hover:bg-red-600 text-white font-semibold rounded-lg transition-colors"
      >
        Reset
      </button>
    </div>
  );
}