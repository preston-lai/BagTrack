"use client";

type LoginPromptModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function LoginPromptModal({ isOpen, onClose }: LoginPromptModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-background p-6 rounded-lg shadow-lg w-full max-w-md border border-white">
        <div className="flex justify-between items-start mb-4">
          <h2 className="text-2xl font-bold">Welcome to BagTrack!</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 transition"
          >
            ✕
          </button>
        </div>
        <p className="text-muted-foreground mb-6">
          Looks like you don't have an account with us. Log in to your account or create one in order to save your trades.
        </p>
        <div className="flex justify-end gap-4">
          <button
            onClick={onClose}
            className="px-4 py-2 border rounded hover:bg-gray-100 transition font-bold"
          >
            Try it Out (Trades will not be Saved)
          </button>
          <a
            href="/login"
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition font-bold"
          >
            Log in / Sign up
          </a>
        </div>
      </div>
    </div>
  );
} 