import { Route, Routes } from "react-router-dom";
import { Previews } from "./Previews/Previews";
import { Releases } from "./Releases/Releases";
import { Updates } from "./Updates/Updates";
import { OfferNew } from "./OfferNew/OfferNew";
export const Main = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Previews />} />
        <Route path="/releases" element={<Releases />} />
        <Route path="/updates" element={<Updates />} />
        <Route path="/offer-new" element={<OfferNew />} />
      </Routes>
    </div>
  );
};
