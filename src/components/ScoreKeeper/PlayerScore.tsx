import { useEffect, useRef, useState } from 'react';
import type { Player } from '../../types';

interface PlayerScoreProps {
  player: Player;
  isGameOver: boolean;
  isWinner: boolean;
}

export function PlayerScore({ player, isGameOver, isWinner }: PlayerScoreProps) {
  const [isPopping, setIsPopping] = useState(false);
  const previousScore = useRef(player.score);

  useEffect(() => {
    if (previousScore.current !== player.score) {
      setIsPopping(true);
      previousScore.current = player.score;

      const timeout = setTimeout(() => setIsPopping(false), 300);
      return () => clearTimeout(timeout);
    }
  }, [player.score]);

  const colorClass = isWinner
    ? 'text-emerald-400'
    : isGameOver
      ? 'text-red-400'
      : 'text-white';

  return (
    <div className="flex flex-col items-center gap-1">
      <span className="text-xs sm:text-sm uppercase tracking-widest text-slate-400">
        {player.name}
      </span>
      <span
        className={`
          font-mono text-5xl sm:text-6xl font-bold tabular-nums
          transition-colors duration-500
          ${colorClass}
          ${isPopping ? 'animate-score-pop' : ''}
        `}
      >
        {player.score}
      </span>
    </div>
  );
}