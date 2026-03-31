function SkeletonCard() {
  return (
    <div className="bg-white rounded-2xl shadow-md p-3 animate-pulse">
      <div className="w-full h-60 bg-gray-300 rounded"></div>

      <div className="mt-3 h-4 bg-gray-300 rounded w-3/4"></div>
      <div className="mt-2 h-3 bg-gray-300 rounded w-1/2"></div>
      <div className="mt-2 h-3 bg-gray-300 rounded w-1/3"></div>

      <div className="mt-3 h-8 bg-gray-300 rounded"></div>
    </div>
  );
}

export default SkeletonCard;
