import { useLoaderData } from "react-router-dom";
import AllCourse from "../../components/AllCourse/AllCourse";
import Banner from "../../components/Header/Banner/Banner";

const Home = () => {


  const allCourse = useLoaderData()

  return (
    <div>
      <Banner></Banner>
      <AllCourse allCourse={allCourse}></AllCourse>
    </div>
  );
};

export default Home;