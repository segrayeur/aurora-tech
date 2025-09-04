import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const GrowthChart = () => {
  const data = [
    { year: '2020', clients: 5, projets: 8, revenus: 50 },
    { year: '2021', clients: 15, projets: 25, revenus: 120 },
    { year: '2022', clients: 35, projets: 50, revenus: 280 },
    { year: '2023', clients: 65, projets: 95, revenus: 450 },
    { year: '2024', clients: 100, projets: 150, revenus: 680 },
    { year: '2025', clients: 150, projets: 220, revenus: 950 },
  ];

  return (
    <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl p-8 tech-shadow">
      <h3 className="font-poppins text-2xl font-bold gradient-text mb-6 text-center">
        Croissance d'Aurora Tech
      </h3>
      
      <div className="h-80 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
            <XAxis 
              dataKey="year" 
              stroke="hsl(var(--foreground))"
              fontSize={12}
            />
            <YAxis 
              stroke="hsl(var(--foreground))"
              fontSize={12}
            />
            <Tooltip 
              contentStyle={{
                backgroundColor: 'hsl(var(--card))',
                border: '1px solid hsl(var(--border))',
                borderRadius: '8px',
                color: 'hsl(var(--foreground))'
              }}
            />
            <Line 
              type="monotone" 
              dataKey="clients" 
              stroke="hsl(var(--primary))" 
              strokeWidth={3}
              dot={{ fill: 'hsl(var(--primary))', strokeWidth: 2, r: 5 }}
              name="Clients"
            />
            <Line 
              type="monotone" 
              dataKey="projets" 
              stroke="hsl(var(--accent))" 
              strokeWidth={3}
              dot={{ fill: 'hsl(var(--accent))', strokeWidth: 2, r: 5 }}
              name="Projets"
            />
            <Line 
              type="monotone" 
              dataKey="revenus" 
              stroke="hsl(var(--african-green))" 
              strokeWidth={3}
              dot={{ fill: 'hsl(var(--african-green))', strokeWidth: 2, r: 5 }}
              name="Revenus (K€)"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="grid grid-cols-3 gap-4 mt-6">
        <div className="text-center">
          <div className="text-2xl font-bold text-primary">100+</div>
          <div className="text-sm text-muted-foreground">Clients</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-accent">150+</div>
          <div className="text-sm text-muted-foreground">Projets</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-african-green">680K€</div>
          <div className="text-sm text-muted-foreground">Revenus 2024</div>
        </div>
      </div>
    </div>
  );
};

export default GrowthChart;