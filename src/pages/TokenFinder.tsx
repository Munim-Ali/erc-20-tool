import { useState } from "react";
import { fetchTokenData } from "../utils/fetchTokenData";
import cryptoImg from "../assets/crypto.png";
import loader from "../assets/loader.gif";

const TokenFinder = () => {
  const [tokenAddress, setTokenAddress] = useState("");
  const [tokenData, setTokenData] = useState<any>(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchTokenDetails = async () => {
    setError("");
    setTokenData(null);
    setLoading(true);

    try {
      const fetchedtokenData = await fetchTokenData(tokenAddress);
      setTokenData(fetchedtokenData);
      setLoading(false);
    } catch (error: any) {
      setError(error.message);
    }
  };

  console.log(tokenData);
  return (
    <>
      <section className="w-full h-full bg-[#1a2231] rounded-md p-8 flex flex-col items-center justify-center">
        <div className="w-full  flex flex-row items-center justify-start ">
          <input
            type="text"
            placeholder="Enter ERC-20 Token Address"
            onChange={(e) => setTokenAddress(e.target.value)}
            className="bg-transparent text-white px-4 py-2 w-3/4  border border-white rounded-md"
          />
          <button
            className="bg-transparent text-white border border-white rounded-md px-8 py-2 ml-6 w-1/4"
            onClick={fetchTokenDetails}
          >
            {loading ? "Searching" : "Search"}
          </button>
        </div>
        {error && <p className="text-red-500 mt-2">{error}</p>}

        {loading && <img src={loader} className="w-10 h-10 mt-20" />}

        {tokenData && (
          <table className="mt-4 w-full border border-gray-300 rounded-md">
            <tbody className="rounded-md">
              <tr>
                <td className="p-2 border">Image</td>
                <td className="p-2 border">
                  <img
                    src={tokenData.imageUrl || cryptoImg}
                    alt={tokenData.name}
                    className="w-10 h-10 rounded-full"
                  />
                </td>
              </tr>
              <tr>
                <td className="p-2 border">
                  <strong>Name</strong>
                </td>
                <td className="p-2 border">{tokenData.name}</td>
              </tr>
              <tr>
                <td className="p-2 border">
                  <strong>Symbol</strong>
                </td>
                <td className="p-2 border">{tokenData.symbol}</td>
              </tr>
              <tr>
                <td className="p-2 border">
                  <strong>Decimals</strong>
                </td>
                <td className="p-2 border">{tokenData.decimals}</td>
              </tr>
              <tr>
                <td className="p-2 border">
                  <strong>Total Supply</strong>
                </td>
                <td className="p-2 border">{tokenData.totalSupply}</td>
              </tr>
            </tbody>
          </table>
        )}
      </section>
    </>
  );
};

export default TokenFinder;
