import { useQuery } from "@tanstack/react-query";
import Axios from "axios";

const Home = () => {
  const { data:catData, isLoading,isError,refetch } = useQuery(["cat"], () => {
    return Axios.get("https://catfact.ninja/fact").then((res) => res.data);
  });

  if(isLoading){
    return<h1>Loading...</h1>
  }

  if(isError){
    return<h1>Something Went Wrong !</h1>
  }

  return (
    <h1>
      This is data of
      <p>  {catData?.fact}</p>
      <button onClick={refetch}>Update Data</button>
    </h1>
  );
};

export default Home;
