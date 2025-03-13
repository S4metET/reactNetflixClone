const Recommended = ({ filteredRecommended }) => {
  return (
    <div>
      <h1 className="text-white p-4">Recommended</h1>
      <div className="grid px-4 gap-8 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
        {filteredRecommended.length === 0 ? (
          <p>No content found</p> // Eğer arama sonucu boşsa, içerik bulunamadığını göster
        ) : (
          filteredRecommended.map((item) => (
            <div className="flex flex-col text-white" key={item.title}>
              <div className="relative p-0.5">
                <img
                  src={item.image}
                  alt=""
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <div className="flex p-0.5 items-center gap-2 opacity-75 text-xs">
                <p className="text-white">{item.release_date}</p>
              </div>
              <h1 className="text-sm font-semibold">{item.title}</h1>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Recommended;