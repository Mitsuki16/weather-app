import "./App.css";

function App() {
  const week_data = [
    ["Sun",0],[ "Mon",1],["Tue",2],["Wed",3],["Thu",4],["Fri",1],['Sat',0]
]
  const weather_imagepath = {
    0: "sun-windy.png",
    1: "thunderstorm.png",
    2: "rain-windy.png",
    3: "windy.png",
    4: "sunny.png",
  };
  return (
    <div className=" flex justify-center items-center h-screen ">
      <div className=" shadow-2xl w-[70vw] ">
        <div className=" rounded-3xl  bg-gray-200 md:grid content-center grid-cols-3">
          <div className=" mx-5 px-10 py-5 ">
            <div className=" flex items-center">
              <input
                className=" w-[90%] border-2 text-lg bg-gray-200 rounded-lg px-4 py-2"
                placeholder="Search for places..."
              />
              <button>
                <img src="images/search.png" className="w-8" />
              </button>
            </div>
            <div>
              <img className=" w-[17pc]" src="images/sunny.png" />
            </div>
            <div className=" mt-5">
              <h2 className=" text-8xl ">
                12<sup>°c</sup>
              </h2>
            </div>
            <div className=" my-5">
              <p>
                <span className="text-2xl font-semibold">Monday, </span>
                <span className=" text-gray-600 font-semibold text-xl">
                  9:30 AM
                </span>
              </p>
            </div>
            <div className=" border-2 rounded-xl my-5"></div>
            <div>
              <div>
                <img />
                <span className=" text-xl font-semibold">Mostly Cloudy</span>
              </div>
              <div className=" my-3">
                <img />
                <span className=" text-xl font-semibold">Rain - 30%</span>
              </div>
            </div>
            <div className=" relative">
              <p className=" z-10  absolute left-[23%] top-10 text-3xl font-bold text-black">
                Chennai
              </p>
              <img
                className=" blur-sm w-[80%] h-32 rounded-xl"
                src="images/city.jpg"
              />
            </div>
          </div>
          <div className=" col-span-2 rounded-r-3xl p-10 bg-gray-100 ">
            <h2 className=" text-4xl font-semibold">Week</h2>
            <div>
              <div className=" flex gap-10 justify-between py-5">
                {week_data.map((item) => {
                  return (
                    <div key={item} className=" flex items-center justify-center flex-col bg-gray-200 rounded-2xl p-4">
                      <h2 className=" ">{item[0]}</h2>
                      <img className=" w-12" src={'images/'+weather_imagepath[item[1]]} />
                    </div>
                  );
                })}
              </div>
              <h2 className=" text-3xl font-semibold">Today's Hightlights</h2>
              <div
                className=" grid grid-cols-3 gap-10 py-10
               [&_div]:w-[16pc] [&_div]:px-4 [&_div]:h-[12pc]
               [&_div]:py-3 
               [&_div]:border-4 [&_div]:rounded-2xl 
               [&_h3]:text-2xl [&_h3]:text-gray-500"
              >
                <div>
                  <h3>UV Index</h3>
                  <h2 className="mx-16 my-10">
                    <span
                      className="
                   rounded-full 
                   border-4 border-yellow-300
                    text-center text-4xl 
                    py-3 px-6
                   "
                    >
                      5
                    </span>
                  </h2>
                </div>
                <div>
                  <h3>Wind Status</h3>
                  <section className=" ">
                    <p className=" py-5 text-5xl">
                      7.70 <span className=" text-3xl">km/h</span>
                    </p>
                    <p className=" font-bold text-xl">WSW</p>
                  </section>
                </div>
                <div>
                  <h3>Sunrise & Sunset</h3>
                  <section>
                    <p className=" py-4 text-2xl flex items-center gap-2">
                      <span>
                        <img src="images/sun.png" className="" />
                      </span>
                      6:35 AM
                    </p>
                    <p className=" text-2xl flex items-center gap-2">
                      <span>
                        <img src="images/moon.png" className="" />
                      </span>
                      5:42 PM
                    </p>
                  </section>
                </div>
                <div>
                  <h3>Humidity</h3>
                  <section>
                    <p className=" py-2 text-5xl">
                      12 <sup className=" text-3xl">%</sup>
                    </p>
                    <p className="text-xl">Normal</p>
                  </section>
                </div>
                <div>
                  <h3>Visibility</h3>
                  <section>
                    <p className=" py-5  text-5xl">
                      5.2 <span className=" text-3xl">km</span>
                    </p>
                    <p className="text-xl flex gap-2 items-center">
                      Average
                      <img className=" w-10" src="images/frowning.png" />
                    </p>
                  </section>
                </div>
                <div>
                  <h3>Air Quality</h3>
                  <section>
                    <p className=" py-5 text-5xl">105 </p>
                    <p className="text-xl flex gap-2 items-center">
                      Unhealthy <img className=" w-10" src="images/thumbs-down.png" />
                    </p>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
