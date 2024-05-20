const SectionHeading = ({ title, text }) => {
  return (
    <div className="flex flex-col items-center justify-center mb-8">
      <p className="text-[#D99904] text-xl mb-4">---{text}---</p>
      <h2 className="py-4 text-4xl text-center border-t-4 border-b-4 max-w-80 font-inter">
        {title}
      </h2>
    </div>
  );
};

export default SectionHeading;
