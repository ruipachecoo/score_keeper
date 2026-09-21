import { useCallback, useState } from 'react';
import type { GameState, Player } from '../types';

const INITIAL_WINNING_SCORE = 3;

function createInitialState(winningScore: number): GameState {
  return {
    players: [
      { id: 'p1', name: 'Player One', score: 0 },
      { id: 'p2', name: 'Player Two', score: 0 },
    ],
    winningScore,
    isGameOver: false,
    winnerId: null,
  };
}

export function useScoreKeeper() {
  const [state, setState] = useState<GameState>(() =>
    createInitialState(INITIAL_WINNING_SCORE)
  );

  const incrementScore = useCallback((playerId: Player['id']) => {
    setState((prev) => {
      if (prev.isGameOver) return prev;

      const players = prev.players.map((player) => {
        if (player.id !== playerId) return player;
        return { ...player, score: player.score + 1 };
      }) as [Player, Player];

      const scoredPlayer = players.find((p) => p.id === playerId)!;
      const hasWon = scoredPlayer.score >= prev.winningScore;

      return {
        ...prev,
        players,
        isGameOver: hasWon,
        winnerId: hasWon ? playerId : null,
      };
    });
  }, []);

  const reset = useCallback((newWinningScore?: number) => {
    setState((prev) =>
      createInitialState(newWinningScore ?? prev.winningScore)
    );
  }, []);

  const setWinningScore = useCallback((value: number) => {
    reset(value);
  }, [reset]);

  return { state, incrementScore, reset, setWinningScore };
}