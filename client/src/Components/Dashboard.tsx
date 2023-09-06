import React, { useState, useEffect } from "react";
import axios from "axios";
import LottiePlayer from "./LottiePlayer";
import skullAnimation from "../assets/skull.json";
import CovidVirus from "../assets/coronavirus.json";
import Heartbeat from "../assets/HeartBeatRed.json";
import ActiveCases from "../assets/ActiveCase.json";
import CriticalCase from "../assets/lung.json";
import TestsConducted from "../assets/TestsConducted.json";
import CountryAffected from "../assets/CountryAffected.json";
import GlobalPopulation from "../assets/Globe.json";
import TestsPerMillion from "../assets/TestsPerMillion.json";
import CasesPerMillion from "../assets/CasesPerMillion.json";


import ChartsAndMaps from "./ChartsAndMaps";
import "./styles.css";

// Interface defining the structure of COVID-19 data
interface CovidData {
  testsPerOneMillion: number;
  cases: number;
  casesPerOneMillion: number;
  deaths: number;
  todayDeaths: number;
  recovered: number;
  todayRecovered: number;
  active: number;
  critical: number;
  tests: number;
  population: number;
  affectedCountries: number;
}

// DashboardPage component definition
const DashboardPage: React.FC = () => {
  // State to store COVID-19 data
  const [data, setData] = useState<CovidData | null>(null);

  // Fetch COVID-19 data from an API on component mount
  useEffect(() => {
    axios
      .get<CovidData>("https://disease.sh/v3/covid-19/all")
      .then((response) => setData(response.data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  // Render loading message if data is not yet available
  if (!data) {
    return <p>Loading...</p>;
  }


  // JSX rendering
  return (
    <div className="p-4">
      <h1 className="text-4xl font-extrabold tracking-tight mb-4 text-center font-custom"><span className="text-red-400">COVID-19</span> Dashboard</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full sm:p-8">

        {/* Display total cases */}
        <div className="bg-white p-12 rounded-lg shadow-md flex flex-col items-center card-container transition-colors duration-300 ease-in-out hover:bg-gray-600 group">
          <LottiePlayer
            animationData={CovidVirus}
            width={100}
            height={100}
            loop={true}
            autoplay={true}
            speed={1}
          />
          <p className="text-center text-2xl pt-8 font-extrabold tracking-tight font-custom">Total Cases</p>
          <p className="text-center text-2xl font-extrabold tracking-tight font-custom mt-3 text-gray-600 group-hover:text-white">
            {data.cases.toLocaleString("en-IN")}
          </p>
        </div>

        {/* Display total deaths */}
        <div className="bg-white p-12 rounded-lg shadow-md flex flex-col items-center card-container transition-colors duration-300 ease-in-out hover:bg-red-500 text-hover:bg-white group">
          <LottiePlayer
            animationData={skullAnimation}
            width={100}
            height={100}
            loop={true}
            autoplay={true}
            speed={1}
          />
          <p className="text-center text-2xl pt-8 font-extrabold tracking-tight font-custom">Total Deaths</p>
          <p className="text-red-600 text-center text-2xl font-extrabold tracking-tight font-custom mt-3 group-hover:text-white">{data.deaths.toLocaleString("en-IN")}</p>
        </div>

        {/* Display total recovered */}
        <div className="bg-white p-12 rounded-lg shadow-md flex flex-col items-center card-container transition-colors duration-300 ease-in-out hover:bg-green-500 text-hover:bg-white group">
        <LottiePlayer
        animationData={Heartbeat}
        width={100}
        height={100}
        loop={true}
        autoplay={true}
        speed={1}
      />
          <p className="text-center text-2xl pt-8 font-extrabold tracking-tight font-custom">Total Recovered</p>
          <p className="text-green-500 text-center text-2xl font-extrabold tracking-tight font-custom mt-3 group-hover:text-white">{data.recovered.toLocaleString("en-IN")}</p>
        </div>

        {/* Display active cases */}
        <div className="bg-white p-12 rounded-lg shadow-md flex flex-col items-center card-container transition-colors duration-300 ease-in-out hover:bg-yellow-600 text-hover:bg-white group">
        <LottiePlayer
        animationData={ActiveCases}
        width={100}
        height={100}
        loop={true}
        autoplay={true}
        speed={1}
      />
          <p className="text-center text-2xl pt-8 font-extrabold tracking-tight font-custom">Active Cases</p>
          <p className="text-yellow-600 text-center text-2xl font-extrabold tracking-tight font-custom mt-3 group-hover:text-white">{data.active.toLocaleString("en-IN")}</p>
        </div>

        {/* Display critical cases */}
        <div className="bg-white p-12 rounded-lg shadow-md flex flex-col items-center card-container transition-colors duration-300 ease-in-out hover:bg-pink-700 text-hover:bg-white group">
          <LottiePlayer
        animationData={CriticalCase}
        width={100}
        height={100}
        loop={true}
        autoplay={true}
        speed={1}
      />
          <p className="text-center text-2xl pt-8 font-extrabold tracking-tight font-custom">Critical Cases</p>
          <p className="text-pink-700 text-center text-2xl font-extrabold tracking-tight font-custom mt-3 group-hover:text-white">{data.critical.toLocaleString("en-IN")}</p>
        </div>

        {/* Display tests conducted */}
        <div className="bg-white p-12 rounded-lg shadow-md flex flex-col items-center card-container transition-colors duration-300 ease-in-out hover:bg-blue-700 text-hover:bg-white group">
        <LottiePlayer
        animationData={TestsConducted}
        width={100}
        height={100}
        loop={true}
        autoplay={true}
        speed={1}
      />
          <p className="text-center text-2xl pt-8 font-extrabold tracking-tight font-custom">Tests Conducted</p>
          <p className="text-blue-700 text-center text-2xl font-extrabold tracking-tight font-custom mt-3 group-hover:text-white">{data.tests.toLocaleString("en-IN")}</p>
        </div>

        {/* Display affected countries */}
        <div className="bg-white p-12 rounded-lg shadow-md flex flex-col items-center card-container transition-colors duration-300 ease-in-out hover:bg-red-500 text-hover:bg-white group">
        <LottiePlayer
        animationData={CountryAffected}
        width={100}
        height={100}
        loop={true}
        autoplay={true}
        speed={1}
      />
          <p className="text-center text-2xl pt-8 font-extrabold tracking-tight font-custom">Affected Countries</p>
          <p className="text-red-500 text-center text-2xl font-extrabold tracking-tight font-custom mt-3 group-hover:text-white">{data.affectedCountries.toLocaleString("en-IN")}</p>
        </div>

        {/* Display tests per million */}
        <div className="bg-white p-12 rounded-lg shadow-md flex flex-col items-center card-container transition-colors duration-300 ease-in-out hover:bg-blue-400 text-hover:bg-white group">
        <LottiePlayer
        animationData={TestsPerMillion}
        width={100}
        height={100}
        loop={true}
        autoplay={true}
        speed={1}
      />
          <p className="text-center text-2xl pt-8 font-extrabold tracking-tight font-custom">Tests per Million</p>
          <p className="text-blue-400 text-center text-2xl font-extrabold tracking-tight font-custom mt-3 group-hover:text-white">{data.testsPerOneMillion.toLocaleString("en-IN")}</p>
        </div>

        {/* Display cases per million */}
        <div className="bg-white p-12 rounded-lg shadow-md flex flex-col items-center card-container transition-colors duration-300 ease-in-out hover:bg-pink-500 text-hover:bg-white group">
        <LottiePlayer
        animationData={CasesPerMillion}
        width={100}
        height={100}
        loop={true}
        autoplay={true}
        speed={1}
      />
          <p className="text-center text-2xl pt-8 font-extrabold tracking-tight font-custom">Cases per Million</p>
          <p className="text-pink-500 text-center text-2xl font-extrabold tracking-tight font-custom mt-3 group-hover:text-white">{data.casesPerOneMillion.toLocaleString("en-IN")}</p>
        </div>

        {/* Display global population */}
        <div className="bg-white p-12 rounded-lg shadow-md flex flex-col items-center card-container transition-colors duration-300 ease-in-out hover:bg-green-800 text-hover:bg-white group">
        <LottiePlayer
        animationData={GlobalPopulation}
        width={100}
        height={100}
        loop={true}
        autoplay={true}
        speed={1}
      />
          <p className="text-center text-2xl pt-8 font-extrabold tracking-tight font-custom">Global Population</p>
          <p className="text-green-800 text-center text-2xl font-extrabold tracking-tight font-custom mt-3 group-hover:text-white">{data.population.toLocaleString("en-IN")}</p>
        </div>
      </div>

      {/* Display Charts and Maps section */}
        <div className="charts-maps-section mt-8 sm:p-8">
          <ChartsAndMaps />
        </div>

    </div>
  );
};

export default DashboardPage;
