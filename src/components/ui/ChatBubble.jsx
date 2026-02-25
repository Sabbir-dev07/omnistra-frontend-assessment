import { motion } from 'framer-motion';

export const ChatBubble = () => {
  return (
    <motion.button
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-6 right-6 z-[100] w-14 h-14 bg-[#3448ff] rounded-full flex items-center justify-center shadow-[0_8px_24px_rgba(52,72,255,0.4)] cursor-pointer border-none"
      aria-label="Chat with us"
    >
      <svg width="24" height="24" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 2C8.268 2 2 8.268 2 16C2 23.732 8.268 30 16 30C23.732 30 30 23.732 30 16C30 8.268 23.732 2 16 2ZM16 28C9.373 28 4 22.627 4 16C4 9.373 9.373 4 16 4C22.627 4 28 9.373 28 16C28 22.627 22.627 28 16 28ZM10 13C10 11.895 10.895 11 12 11C13.105 11 14 11.895 14 13C14 14.105 13.105 15 12 15C10.895 15 10 14.105 10 13ZM18 13C18 11.895 18.895 11 20 11C21.105 11 22 11.895 22 13C22 14.105 21.105 15 20 15C18.895 15 18 14.105 18 13ZM16 24C12.134 24 9 20.866 9 17H11C11 19.761 13.239 22 16 22C18.761 22 21 19.761 21 17H23C23 20.866 19.866 24 16 24Z" fill="white" />
      </svg>
    </motion.button>
  );
};
