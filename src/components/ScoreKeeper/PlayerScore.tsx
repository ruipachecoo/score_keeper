import type { Player } from '../../types';

interface PlayerScoreProps {
  player: Player;
  isGameOver: boolean;
  isWinner: boolean;
}

export function PlayerScore({ player, isGameOver, isWinner }: PlayerScoreProps) {
  const colorClass = isWinner
    ? 'text-emerald-400'
    : isGameOver
      ? 'text-red-400'
      : 'text-white';

  return (
    <div className="flex flex-col items-center gap-1">
      <span className="text-sm uppercase tracking-widest text-slate-400">
        {player.name}
      </span>
      <span className={`text-6xl font-bold tabular-nums ${colorClass}`}>
        {player.score}
      </span>
    </div>
  );
}