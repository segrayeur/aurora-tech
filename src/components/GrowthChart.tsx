import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const GrowthChart = () => {
  const data = [
    { year: '2020', projets: 5, clients: 3 },
    { year: '2021', projets: 12, clients: 8 },
    { year: '2022', projets: 25, clients: 18 },
    { year: '2023', projets: 45, clients: 32 },
    { year: '2024', projets: 75, clients: 55 },
    { year: '2025', projets: 120, clients: 85 },
  ];

  return (
    <div className="bg-card p-6 rounded-xl tech-shadow">
      <h3 className="text-xl font-bold mb-4 gradient-text">Croissance Aurora Tech</h3>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--muted-foreground))" />
          <XAxis dataKey="year" stroke="hsl(var(--foreground))" />
          <YAxis stroke="hsl(var(--foreground))" />
          <Tooltip 
            contentStyle={{ 
              backgroundColor: 'hsl(var(--card))', 
              border: '1px solid hsl(var(--accent))',
              borderRadius: '8px'
            }}
          />
          <Line 
            type="monotone" 
            dataKey="projets" 
            stroke="hsl(var(--accent))" 
            strokeWidth={3}
            name="Projets réalisés"
          />
          <Line 
            type="monotone" 
            dataKey="clients" 
            stroke="hsl(var(--primary))" 
            strokeWidth={3}
            name="Clients satisfaits"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default GrowthChart;