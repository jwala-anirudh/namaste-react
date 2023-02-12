const Shimmer = () => {
  return (
    <div data-testid="shimmer" className="flex flex-wrap">
      {Array(10)
        .fill('')
        .map((e, index) => (
          <div
            key={index}
            className="w-[200px] h-[200px] bg-gray-100 m-[20px] rounded"
          ></div>
        ))}
    </div>
  );
};

export default Shimmer;
