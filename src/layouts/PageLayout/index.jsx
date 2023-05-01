const PageLayout = ({ children }) => {
  return (
    <div className="px-4 flex-grow pt-20">
      <div className="container mx-auto mt-6 max-w-6xl">{children}</div>
    </div>
  );
};

export default PageLayout;
