export default function Loading() {
    return (
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="w-18 h-18 border-8 border-black border-t-8 border-t-gray-500 rounded-full animate-spin"></div>
      </div>
    );
  }
  