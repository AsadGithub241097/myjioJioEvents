import React from "react";
import "./App.css";
import JioEventMobile from "./Header/header.js";
import CarouselSlider from "./CarouselUI/Carousel.js";
import StoryBubble1 from "./StoryBubble/StoryBubble.js";
import ShortVideos from "./ShortVideos/ShortVideos.js";
import ProductPramotion from "./ProductPramotionPage/ProductPramotion.js";
import EventsHighlights from "./EventsTalkingAbout/EventsHighlights.js";
import EventsComingUpCompo from "./Events _Coming_Up/EventsComingUp.js";
import BrowseThroughChannels from "./Browsethroughchannels/BrowseThroughChannels.js";
import EventsYouMightHaveMissed from "./EventsYouMightHaveMissed/EventsYouMightHaveMissed.js";
import EminentSpeakers from "./EminentSpeakers/EminentSpeakers.js";
import CTA from "./components/Cta/Cta.js";
import NavigationBar from "./NavigationBar/NavigationBar.js";

function App() {
  return (
    <div className="App">
      <JioEventMobile />
      {/* <CarouselSlider /> */}
      <StoryBubble1 />
      <ShortVideos />
      <ProductPramotion />
      <EventsHighlights />
      <EventsComingUpCompo />
      <BrowseThroughChannels />
      <EventsYouMightHaveMissed />
      <EminentSpeakers />
      <CTA />
      <NavigationBar />
    </div>
  );
}

export default App;
