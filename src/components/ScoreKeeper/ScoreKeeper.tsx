import { useScoreKeeper } from '../../hooks/useScoreKeeper';
import { PlayerScore } from './PlayerScore';
import { ScoreControls } from './ScoreControls';

export function ScoreKeeper() {
  const { state, incrementScore, reset, setWinningScore } = useScoreKeeper();

  const [playerOne, playerTwo] = state.players;

  return (
    <div className="min-h-dvh bg-slate-900 flex items-center justify-center p-4 font-sans">
      <div
        className="
          bg-slate-800 rounded-2xl shadow-2xl
          p-6 sm:p-8
          w-full max-w-md
          flex flex-col gap-6 sm:gap-8
          animate-card-in
        "
      >
        <h1 className="text-xl sm:text-2xl font-bold text-white text-center">
          Score Keeper
        </h1>

        <div className="flex items-center justify-center gap-4 sm:gap-8">
          <PlayerScore
            player={playerOne}
            isGameOver={state.isGameOver}
            isWinner={state.winnerId === playerOne.id}
          />
          <span className="text-2xl sm:text-4xl text-slate-500 font-light">
            to
          </span>
          <PlayerScore
            player={playerTwo}
            isGameOver={state.isGameOver}
            isWinner={state.winnerId === playerTwo.id}
          />
        </div>

        <ScoreControls
          players={state.players}
          winningScore={state.winningScore}
          isGameOver={state.isGameOver}
          onIncrement={incrementScore}
          onReset={() => reset()}
          onWinningScoreChange={setWinningScore}
        />
      </div>
    </div>
  );
}