import React from 'react';
import { createPortal } from 'react-dom';
import SpaceSuitGame from '../game/SpaceSuitGame';
import StorytellingProcess from '../game/StorytellingProcess';

interface GameModalProps {
  isOpen: boolean;
  onClose: () => void;
  gameCode: string;
}

const GameModal: React.FC<GameModalProps> = ({ isOpen, onClose, gameCode }) => {
  if (!isOpen) return null;

  return createPortal(
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg p-4 w-full max-w-lg">
        <button onClick={onClose} className="absolute top-2 right-2 text-gray-500">
          X
        </button>
        {gameCode === 'SpaceSuitGame' && <SpaceSuitGame onClose={onClose} />}
        {gameCode === 'StorytellingProcess' && <StorytellingProcess onClose={onClose} />}
        {/* 다른 게임 추가 가능 */}
      </div>
    </div>,
    document.body
  );
};

export default GameModal; 