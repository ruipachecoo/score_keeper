export interface Player {
  id: 'p1' | 'p2';
  name: string;
  score: number;
}

export interface GameState {
  players: [Player, Player];
  winningScore: number;
  isGameOver: boolean;
  winnerId: Player['id'] | null;
}