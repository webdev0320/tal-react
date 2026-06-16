const StatsCounter = () => {
  const stats = [
    { value: "1544+", label: "Project Completed" },
    { value: "1822+", label: "Client Satisfied" },
    { value: "10+", label: "Business Consultants" },
    { value: "15+", label: "Awards Won" },
  ];

  return (
    <section className="relative z-10 -mt-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-slate-100">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className={`text-center transition-all duration-300 hover:-translate-y-1 ${index < stats.length - 1 ? 'md:border-r border-slate-100' : ''}`}
              >
                <div className="text-3xl md:text-4xl font-extrabold text-[#d2601a] mb-2">{stat.value}</div>
                <div className="text-sm md:text-base font-semibold text-[#1D3C45] uppercase tracking-wide">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsCounter;
