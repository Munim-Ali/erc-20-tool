import axios from "axios";
import { JsonRpcProvider, isAddress, Contract } from "ethers";

const ERC20_ABI = [
  "function name() view returns (string)",
  "function symbol() view returns (string)",
  "function decimals() view returns (uint8)",
  "function totalSupply() view returns (uint256)",
];

export const fetchTokenData = async (tokenAddress: string) => {
  try {
    if (!isAddress) {
      throw new Error("Invalid Ethereum address");
    }

    const provider = new JsonRpcProvider(import.meta.env.VITE_INFURA_URL);
    const tokenContract = new Contract(tokenAddress, ERC20_ABI, provider);

    const [name, symbol, decimals, totalSupply] = await Promise.all([
      tokenContract.name(),
      tokenContract.symbol(),
      tokenContract.decimals(),
      tokenContract.totalSupply(),
    ]);

    let imageUrl = "";

    try {
      const response = await axios.get(
        `https://api.coingecko.com/api/v3/coins/ethereum/contract/${tokenAddress}`
      );
      imageUrl = response.data.image?.large || "";
    } catch (error) {
      console.error("Token image not found on CoinGecko");
    }

    return {
      name,
      symbol,
      decimals,
      totalSupply: totalSupply.toString(),
      imageUrl,
    };
  } catch (error: any) {
    console.log(error);
    throw new Error("Invalid ERC20 or contract error");
  }
};
