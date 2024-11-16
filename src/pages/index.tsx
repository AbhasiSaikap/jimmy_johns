import CleanupBar from "@/components/cleaup_bar";
import SpillLine from "@/components/spill_line";
import PieChart from "@/components/pi_chart";
import DefaultLayout from "@/layouts/default";
import { Spacer } from "@nextui-org/spacer";

export default function IndexPage() {
    return (
        <DefaultLayout>
            <div className="mx-auto max-w-4x">
                <section className="border-l-8 border-gray-500 flex flex-col items-center justify-center bg-slate-100 rounded-r-3xl shadow-xl">
                    <h2 className="font-bold pb-2 text-lg">About the spills in Indiana</h2>
                    <p className="px-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean blandit ante sed fringilla dignissim. Nulla nisi purus, pretium et fringilla quis, tempus ut sapien. Nulla eu arcu fringilla, sagittis justo eu, aliquam arcu. Nulla nec dictum velit. Cras sit amet est malesuada, efficitur dolor ac, vehicula urna. Proin et pulvinar turpis. Sed lorem sem, gravida rutrum risus vel, sodales rhoncus risus. Sed tempus maximus tempus. Nam finibus purus non finibus egestas. Proin imperdiet lectus mi, in elementum ipsum convallis a. Mauris cursus, justo sit amet fringilla accumsan, justo ipsum fringilla nisl, eget efficitur eros ex nec ante. Aenean ut condimentum urna. Vivamus varius eu nisl sit amet consectetur. Vivamus vitae bibendum orci, quis efficitur metus. Sed malesuada tellus ut magna rutrum, sed malesuada ipsum vulputate. Aenean consectetur, sem nec porta sodales, dolor tellus placerat lorem, quis molestie quam odio sed massa.</p>
                    <Spacer y={3} />
                    <h2>Spill per Year in Indiana</h2>
                    <div className="h-80 w-full">
                        <SpillLine />
                    </div>
                </section>

                <Spacer y={20} />

                <section className="border-l-8 border-gray-500 flex flex-col items-center justify-center bg-slate-100 rounded-r-3xl shadow-xl">
                    <h2 className="font-bold pb-2 text-lg">Toxins over the Years</h2>
                    <p className="px-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean blandit ante sed fringilla dignissim. Nulla nisi purus, pretium et fringilla quis, tempus ut sapien. Nulla eu arcu fringilla, sagittis justo eu, aliquam arcu. Nulla nec dictum velit. Cras sit amet est malesuada, efficitur dolor ac, vehicula urna. Proin et pulvinar turpis. Sed lorem sem, gravida rutrum risus vel, sodales rhoncus risus. Sed tempus maximus tempus. Nam finibus purus non finibus egestas. Proin imperdiet lectus mi, in elementum ipsum convallis a. Mauris cursus, justo sit amet fringilla accumsan, justo ipsum fringilla nisl, eget efficitur eros ex nec ante. Aenean ut condimentum urna. Vivamus varius eu nisl sit amet consectetur. Vivamus vitae bibendum orci, quis efficitur metus. Sed malesuada tellus ut magna rutrum, sed malesuada ipsum vulputate. Aenean consectetur, sem nec porta sodales, dolor tellus placerat lorem, quis molestie quam odio sed massa.</p>

                    <Spacer y={3} />

                    <h2>Cumulative Toxins from 2010 - 2024</h2>
                    <div className="h-[54rem] w-full">
                        <CleanupBar />
                    </div>
                    <Spacer y={3} />
                </section>

                <Spacer y={20} />

                <section className="flex flex-col items-center justify-center">
                    <h2 className="font-bold pb-2 text-lg">Pie Chart</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean blandit ante sed fringilla dignissim. Nulla nisi purus, pretium et fringilla quis, tempus ut sapien. Nulla eu arcu fringilla, sagittis justo eu, aliquam arcu. Nulla nec dictum velit. Cras sit amet est malesuada, efficitur dolor ac, vehicula urna. Proin et pulvinar turpis. Sed lorem sem, gravida rutrum risus vel, sodales rhoncus risus. Sed tempus maximus tempus. Nam finibus purus non finibus egestas. Proin imperdiet lectus mi, in elementum ipsum convallis a. Mauris cursus, justo sit amet fringilla accumsan, justo ipsum fringilla nisl, eget efficitur eros ex nec ante. Aenean ut condimentum urna. Vivamus varius eu nisl sit amet consectetur. Vivamus vitae bibendum orci, quis efficitur metus. Sed malesuada tellus ut magna rutrum, sed malesuada ipsum vulputate. Aenean consectetur, sem nec porta sodales, dolor tellus placerat lorem, quis molestie quam odio sed massa.</p>

                    <h2>Pie Chart</h2>
                    <div className="h-80 w-full border-2 border-red-400">
                        <PieChart />
                    </div>
                </section>

            </div>

        </DefaultLayout>
    );
}
