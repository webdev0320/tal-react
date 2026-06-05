const StatsCounter = () => {
  const stats = [
    { value: "1544+", label: "Project Completed" },
    { value: "1822+", label: "Client Satisfied" },
    { value: "10+", label: "Business Consultants" },
    { value: "15+", label: "Awards Won" },
  ];

  return (
    <section className="position-relative" style={{ zIndex: 5 }}>
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-10">
                    <div className="stats-counter-board bg-white p-4 rounded shadow-sm">
                        <div className="row g-4 justify-content-center">
                            {stats.map((stat, index) => (
                                <div key={index} className="col-6 col-md-3">
                                    <div className={`stat-item ${index < stats.length - 1 ? 'border-md-end border-light' : ''}`}>
                                        <div className="stat-value display-6 fw-bold text-brand-orange">{stat.value}</div>
                                        <div className="stat-label text-brand-dark small fw-semibold">{stat.label}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
};

export default StatsCounter;
