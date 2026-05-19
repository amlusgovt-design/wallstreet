import { Link } from "react-router-dom";
import VideoBackground from "../sharedUi/VideoBackground";
import Button from "../Button";
import { TickerTape } from "react-ts-tradingview-widgets";

export default function Hero() {
  return (
    <>
      <div className="relative xl:min-h-[90vh]  ">
        <VideoBackground>
          <div className="min-h-[85vh] md:min-h-[50vh] xl:min-h-[85vh] flex items-center  bg-right text-white1 pt-10 ">
            <div className="px-6 xl:px-0 grid text-center lg:text-left lg:flex lg:gap-20 items-center max-w-[1240px] mx-auto">
              <div className="mb-20 lg:mb-0 xl:w-[55%]">
                <div className="mb-10">
                  <h1 className="text-4xl lg:text-[4rem] lg:leading-[120%]  mb-5">
                    Digital assets, investments and trading
                  </h1>
                  <p className="text-lg mb-4 xl:text-xl">
                    Join millions of users, from beginners to professionals, who
                    use Wallstreets Global Trading Academy to purchase crypto,
                    trade, and manage their investments in a smarter way.
                  </p>
                </div>
                <div className="lg:flex items-center gap-2">
                  <Link to="/signup">
                    <Button btnText="Create Account" className="bg-primary" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </VideoBackground>
      </div>
      <div className="relative z-50">
        <TickerTape colorTheme="light"></TickerTape>
      </div>
    </>
  );
}
