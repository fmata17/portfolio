import AboutHeader from "../components/About/AboutHeader";
import AboutImageGrid from "../components/About/AboutImageGrid";
import AboutRuntimePanel from "../components/About/AboutRuntimePanel";

import { operatingModes, profileImages, profileRows } from "../data/aboutProfile";

export default function About() {
  return (
    <section
      id="about"
      className="h-screen max-h-screen
                overflow-hidden bg-bg-darker
                text-fg flex items-start justify-center
                pt-12 xl:pt-16
                px-4 xl:px-8
                relative
                snap-start"
    >
      <div className="w-full max-w-8xl h-full min-h-0 flex flex-col space-y-2 xl:space-y-6">
        <AboutHeader />

        <div
          className="flex-1 min-h-0 grid
                    grid-rows-[clamp(118px,22dvh,158px)_minmax(0,1fr)]
                    min-[390px]:grid-rows-[clamp(132px,24dvh,178px)_minmax(0,1fr)]
                    md:grid-rows-1 md:grid-cols-12
                    gap-2 lg:gap-4 pb-2"
        >
          <AboutImageGrid images={profileImages} />

          <AboutRuntimePanel
            modes={operatingModes}
            profileRows={profileRows}
          />
        </div>
      </div>
    </section>
  );
}
