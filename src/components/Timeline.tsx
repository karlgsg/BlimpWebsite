import { CheckCircle2, Circle } from "lucide-react";

const Timeline = () => {
  const milestones = [
    {
      title: "Proposal Submission",
      date: "Q1 2025",
      description: "Detailed project proposal submitted to John M. Thompson Innovation Fund",
      completed: true,
    },
    {
      title: "Funding Approval",
      date: "Q2 2025",
      description: "Project receives funding approval and team formation begins",
      completed: true,
    },
    {
      title: "Design Phase",
      date: "Q3-Q4 2025",
      description: "CAD modeling, system design, and component selection",
      completed: true,
    },
    {
      title: "Prototyping",
      date: "Q1 2026",
      description: "Building and testing initial prototype components",
      completed: true,
    },
    {
      title: "Integration",
      date: "Q1 2026",
      description: "Assembly of full system and ground testing",
      completed: false,
    },
    {
      title: "First Flight",
      date: "2026/03/01",
      description: "Maiden flight demonstration and system validation",
      completed: false,
    },
  ];

  return (
    <section id="timeline" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-4">
            Project Timeline
          </h2>
          <div className="w-24 h-1 bg-gradient-purple-gold mx-auto mb-6" />
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Tracking our journey from concept to first flight
          </p>
        </div>

        {/* Mobile Timeline (Vertical) */}
        <div className="md:hidden space-y-6">
          {milestones.map((milestone, index) => (
            <div
              key={index}
              className="relative pl-8 pb-8 border-l-2 border-border last:border-0 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="absolute left-0 top-0 transform -translate-x-1/2">
                {milestone.completed ? (
                  <CheckCircle2 className="h-6 w-6 text-accent" />
                ) : (
                  <Circle className="h-6 w-6 text-muted-foreground" />
                )}
              </div>
              <div className="bg-primary p-6 rounded-xl shadow-card border border-primary-dark text-primary-foreground">
                <div className="text-sm font-semibold text-primary-foreground inline-block px-3 py-1 rounded-full bg-primary-light mb-2">
                  {milestone.date}
                </div>
                <h3 className="text-xl font-heading font-bold text-primary-foreground mb-2">
                  {milestone.title}
                </h3>
                <p className="text-primary-foreground/85 text-sm">
                  {milestone.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop Timeline (Horizontal) */}
        <div className="hidden md:block relative">
          {/* Timeline Line */}
          <div className="absolute top-8 left-0 right-0 h-0.5 bg-primary/25" />
          
          <div className="grid grid-cols-6 gap-4">
            {milestones.map((milestone, index) => (
              <div
                key={index}
                className="relative group animate-fade-in-up focus-within:outline-none"
                style={{ animationDelay: `${index * 0.1}s` }}
                tabIndex={0}
              >
                {/* Milestone Indicator */}
                <div className="flex justify-center mb-4">
                  <div className="relative h-12 w-12 flex items-center justify-center">
                    <div className="absolute inset-0 rounded-full bg-accent/10 blur-lg scale-0 group-hover:scale-100 group-focus-visible:scale-100 transition-smooth" />
                    {milestone.completed ? (
                      <CheckCircle2 className="h-8 w-8 text-accent relative z-10 bg-secondary rounded-full transition-smooth transform group-hover:scale-125 group-focus-visible:scale-125" />
                    ) : (
                      <Circle className="h-8 w-8 text-muted-foreground relative z-10 bg-secondary rounded-full transition-smooth transform group-hover:scale-125 group-focus-visible:scale-125" />
                    )}
                  </div>
                </div>

                {/* Milestone Card */}
                <div className={`bg-primary p-6 rounded-xl shadow-card transition-smooth transform will-change-transform group-hover:-translate-y-4 group-hover:scale-[1.15] group-hover:rotate-[-0.5deg] group-focus-visible:-translate-y-4 group-focus-visible:scale-[1.15] group-focus-visible:rotate-[-0.5deg] group-hover:shadow-[0_25px_70px_-12px_rgba(12,26,35,0.28)] group-focus-visible:shadow-[0_25px_70px_-12px_rgba(12,26,35,0.28)] text-primary-foreground ${
                  milestone.completed ? 'border-2 border-primary-dark' : 'border border-primary/30'
                }`}>
                  <div className="text-xs font-semibold text-primary-foreground mb-2 text-center transition-smooth inline-block px-3 py-1 rounded-full bg-primary-light group-hover:bg-primary-dark group-focus-visible:bg-primary-dark group-hover:scale-105 group-focus-visible:scale-105">
                    {milestone.date}
                  </div>
                  <h3 className="text-lg font-heading font-bold text-primary-foreground mb-2 text-center transition-smooth group-hover:translate-y-[-2px] group-focus-visible:translate-y-[-2px]">
                    {milestone.title}
                  </h3>
                  <p className="text-primary-foreground/85 text-sm text-center transition-smooth group-hover:translate-y-[-1px] group-focus-visible:translate-y-[-1px]">
                    {milestone.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
