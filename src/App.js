import harvardArt from "./data/harvardArt";
import GalleryNavigation from "./components/GalleryNavigation";
import GalleryView from "./components/GalleryView";
import {Route} from "react-router-dom";

function App() {
  return (
    <div className="page-wrapper">
      <GalleryNavigation galleries={harvardArt.records} />
      <Route path="/gallery/:galleryId" element={<GalleryView galleries={harvardArt.records} />} />
    </div>
  );
}

export default App;
