interface LiveLeetCodeStatsProps {
  username: string;
}

const LiveLeetCodeStats = ({ username }: LiveLeetCodeStatsProps) => {
  return (
    <section className="py-12 bg-black text-white">
      <div className="container-section space-y-6">
        <h3 className="text-2xl font-bold flex items-center gap-2">
          <span className="text-3xl">📊</span>
          LeetCode Stats
        </h3>

        <div className="w-full">
          <img 
            src={`https://leetcard.jacoblin.cool/${username}?theme=dark&font=baloo&ext=heatmap,activity`}
            alt="LeetCode Stats"
            className="w-full h-auto rounded-lg shadow-lg max-w-2xl mx-auto"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default LiveLeetCodeStats;
