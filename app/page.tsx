
import Header from "@/components/header/header";
import Banner from "@/components/banner/banner";
import Summer from "@/components/summer/summer";
import Popular from "@/components/popular/popular";
import Subscribe from "@/components/subscribe/subscribe";
import Rent from "@/components/rent/rent";
import Location from "@/components/location/location";
import Question from "@/components/question/question";
import Footer from "@/components/footer/footer";

export default function Home() {
  return (
    <>
    <Banner/>
    <Summer/>
    <Popular/>
    <Subscribe/>
    <Rent/>
    <Location/>
    <Question/>
    <Footer/>
    </>
  );
}
