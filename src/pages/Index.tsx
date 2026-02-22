import Scene1Intro from "@/components/Scene1Intro";
import Scene2BestFriend from "@/components/Scene2BestFriend";
import Scene3LoveRealization from "@/components/Scene3LoveRealization";
import Scene4LoveLetter from "@/components/Scene4LoveLetter";
import Scene5Reasons from "@/components/Scene5Reasons";
import Scene6MemoryJar from "@/components/Scene6MemoryJar";
import Scene7Photos from "@/components/Scene7Photos";
import Scene8Quiz from "@/components/Scene8Quiz";
import Scene9Surprise from "@/components/Scene9Surprise";
import SceneFinal from "@/components/SceneFinal";
import MusicToggle from "@/components/MusicToggle";

const Index = () => {
  return (
    <div className="relative">
      {/* Film grain overlay */}
      <div className="film-grain" />
      {/* Vignette */}
      <div className="vignette" />
      {/* Music toggle */}
      <MusicToggle />

      <Scene1Intro />
      <Scene2BestFriend />
      <Scene3LoveRealization />
      <Scene4LoveLetter />
      <Scene5Reasons />
      <Scene6MemoryJar />
      <Scene7Photos />
      <Scene8Quiz />
      <Scene9Surprise />
      <SceneFinal />
    </div>
  );
};

export default Index;
