const Header = () => {
  return (
    <>
      <section className="w-full flex flex-row items-center justify-between mb-8">
        <div className="">
          <h1 className="font-ubuntu text-[20px] font-bold">ERC20 Tools </h1>
        </div>
        <div className="">Token info</div>
        <div className="">
          <button className="bg-transparent text-white border border-white rounded-md px-8 py-2">
            Connect Wallet
          </button>
        </div>
      </section>
    </>
  );
};

export default Header;
